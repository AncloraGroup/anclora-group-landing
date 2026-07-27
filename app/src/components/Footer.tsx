import { useLocale } from '../i18n/LocaleContext'
import LanguageSwitcher from './LanguageSwitcher'
import monocromoClaro from '../assets/logo/anclora-group-monocromo-claro.png'

export default function Footer() {
  const { t } = useLocale()

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

        <div className="site-footer__meta">
          <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
          <span>{t.footer.copyright}</span>
        </div>

        <p className="site-footer__trust mono">Founder-led · Built from Mallorca</p>
      </div>
    </footer>
  )
}
