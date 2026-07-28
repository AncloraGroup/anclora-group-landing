import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react'
import { useLocale } from '../i18n/useLocale'
import { useNavigation } from '../context/useNavigation'
import LanguageSwitcher from './LanguageSwitcher'
import lockupHorizontalDark from '../assets/logo/anclora-group-lockup-horizontal-sobre-oscuro-64.webp'

const NAV_ITEMS = [
  { href: '#ecosystem', key: 'ecosystem' as const },
  { href: '#products', key: 'products' as const },
  { href: '#method', key: 'method' as const },
  { href: '#founder', key: 'founder' as const },
  { href: '#contact', key: 'contact' as const },
]

export default function Header() {
  const { t } = useLocale()
  const { path, navigate } = useNavigation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  // En una página legal (/privacy, etc.) las anclas #ecosystem, #contact... no
  // apuntan a nada: primero hay que volver a "/" y luego desplazarse al ancla.
  const scrollToHash = useCallback((hash: string) => {
    requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
    })
  }, [])

  const closeMenu = useCallback((restoreFocus = true) => {
    setIsMenuOpen(false)
    if (restoreFocus) {
      menuToggleRef.current?.focus()
    }
  }, [])

  // Controlamos todas las anclas: el menú móvil bloquea el scroll del body y la
  // navegación nativa puede dispararse antes de liberar ese bloqueo.
  const handleAnchorClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, hash: string) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      event.preventDefault()
      closeMenu(false)

      if (path !== '/') {
        navigate('/')
      }

      window.history.pushState({}, '', hash)
      scrollToHash(hash)
    },
    [closeMenu, navigate, path, scrollToHash],
  )

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu()
    } else {
      setIsMenuOpen(true)
    }
  }

  useEffect(() => {
    if (!isMenuOpen) return
    document.body.classList.add('is-mobile-nav-open')
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('is-mobile-nav-open')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isMenuOpen, closeMenu])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="site-header__logo" onClick={(event) => handleAnchorClick(event, '#top')}>
          <img src={lockupHorizontalDark} alt="Anclora Group" />
        </a>

        <nav className="site-header__nav" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <a key={item.key} href={item.href} onClick={(event) => handleAnchorClick(event, item.href)}>
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="btn btn-primary site-header__cta"
            onClick={(event) => handleAnchorClick(event, '#contact')}
          >
            {t.nav.contactCta}
          </a>
          <button
            ref={menuToggleRef}
            type="button"
            className="site-header__menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={toggleMenu}
          >
            <span aria-hidden="true">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="mobile-nav" className="site-header__mobile-nav container" aria-label="Navegación móvil">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(event) => {
                handleAnchorClick(event, item.href)
                closeMenu()
              }}
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
