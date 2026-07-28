import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocale } from '../i18n/LocaleContext'

const STORAGE_KEY = 'anclora-cookie-notice-ack'
const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

interface CookieConsentContextValue {
  openPreferences: () => void
}

const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(undefined)

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return ctx
}

// El sitio solo usa cookies técnicas (sesión, seguridad, idioma) — no hay categorías
// de analítica ni marketing que activar, así que no hay nada que "aceptar/rechazar".
// El banner es informativo y el modal permite revisar esa información en cualquier
// momento (COOKIES_CONSENT_CONTRACT de la Bóveda, principio 6).
export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const { t } = useLocale()
  const [bannerVisible, setBannerVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!window.localStorage.getItem(STORAGE_KEY)) {
      setBannerVisible(true)
    }
  }, [])

  useEffect(() => {
    if (!modalOpen) return

    const focusables = modalRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    focusables?.[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModalOpen(false)
        return
      }
      if (event.key !== 'Tab') return

      const nodes = modalRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      if (!nodes || nodes.length === 0) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      triggerRef.current?.focus()
    }
  }, [modalOpen])

  const dismissBanner = () => {
    window.localStorage.setItem(STORAGE_KEY, '1')
    setBannerVisible(false)
  }

  const openPreferences = () => {
    triggerRef.current = document.activeElement as HTMLElement | null
    setModalOpen(true)
  }

  return (
    <CookieConsentContext.Provider value={{ openPreferences }}>
      {children}

      {bannerVisible && (
        <div className="cookie-banner" role="region" aria-label={t.footer.legalLinks.cookies}>
          <div className="container cookie-banner__inner">
            <p className="cookie-banner__text">{t.cookies.bannerText}</p>
            <div className="cookie-banner__actions">
              <button type="button" className="cookie-banner__more" onClick={openPreferences}>
                {t.cookies.moreInfo}
              </button>
              <button type="button" className="btn btn-primary" onClick={dismissBanner}>
                {t.cookies.understood}
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && (
        <div className="cookie-modal-overlay" onClick={() => setModalOpen(false)}>
          <div
            ref={modalRef}
            className="cookie-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cookie-modal__header">
              <h2 id="cookie-modal-title">{t.cookies.modalTitle}</h2>
              <button
                type="button"
                className="cookie-modal__close"
                onClick={() => setModalOpen(false)}
                aria-label={t.cookies.closeLabel}
              >
                <span aria-hidden="true">✕</span>
              </button>
            </div>
            <div className="cookie-modal__body">
              <p>{t.cookies.modalIntro}</p>
              <div className="cookie-modal__category">
                <div className="cookie-modal__category-head">
                  <h3>{t.cookies.necessaryTitle}</h3>
                  <span className="cookie-modal__badge mono">{t.cookies.necessaryAlwaysOn}</span>
                </div>
                <p>{t.cookies.necessaryDescription}</p>
              </div>
            </div>
            <div className="cookie-modal__footer">
              <button type="button" className="btn btn-primary" onClick={() => setModalOpen(false)}>
                {t.cookies.closeLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </CookieConsentContext.Provider>
  )
}
