import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocale } from '../i18n/LocaleContext'
import LanguageSwitcher from './LanguageSwitcher'
import lockupHorizontalDark from '../assets/logo/anclora-group-lockup-horizontal-sobre-oscuro.png'

const NAV_ITEMS = [
  { href: '#ecosystem', key: 'ecosystem' as const },
  { href: '#products', key: 'products' as const },
  { href: '#method', key: 'method' as const },
  { href: '#founder', key: 'founder' as const },
  { href: '#contact', key: 'contact' as const },
]

export default function Header() {
  const { t } = useLocale()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    menuToggleRef.current?.focus()
  }, [])

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu()
    } else {
      setIsMenuOpen(true)
    }
  }

  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen, closeMenu])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="site-header__logo">
          <img src={lockupHorizontalDark} alt="Anclora Group" />
        </a>

        <nav className="site-header__nav" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <a key={item.key} href={item.href}>
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher />
          <a href="#contact" className="btn btn-primary">
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
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="mobile-nav" className="site-header__mobile-nav container" aria-label="Navegación móvil">
          {NAV_ITEMS.map((item) => (
            <a key={item.key} href={item.href} onClick={closeMenu}>
              {t.nav[item.key]}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
