import { useLocale } from '../i18n/LocaleContext'
import LanguageSwitcher from './LanguageSwitcher'
import InternalLink from './InternalLink'
import { useCookieConsent } from './CookieConsentProvider'
import monocromoClaro from '../assets/logo/anclora-group-monocromo-claro-48.webp'

export default function Footer() {
  const { t } = useLocale()
  const { openPreferences } = useCookieConsent()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__logo">
            <img src={monocromoClaro} alt="Anclora Group" />
          </div>
          <p className="site-footer__claim">{t.footer.claim}</p>
          <LanguageSwitcher />
        </div>

        <nav className="site-footer__legal" aria-label="Legal">
          <InternalLink to="/privacy">{t.footer.legalLinks.privacy}</InternalLink>
          <InternalLink to="/terms">{t.footer.legalLinks.terms}</InternalLink>
          <InternalLink to="/legal">{t.footer.legalLinks.legal}</InternalLink>
          <button type="button" onClick={openPreferences}>
            {t.footer.legalLinks.cookies}
          </button>
        </nav>

        <div className="site-footer__meta">
          <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
          <span>{t.footer.copyright}</span>
        </div>

        <p className="site-footer__trust mono">Founder-led · Built from Mallorca</p>
      </div>
    </footer>
  )
}
