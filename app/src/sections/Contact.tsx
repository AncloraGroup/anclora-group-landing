import { useLocale } from '../i18n/LocaleContext'

export default function Contact() {
  const { t } = useLocale()
  const mailto = `mailto:${t.contact.email}?subject=${encodeURIComponent(t.contact.subject)}`

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.body}</p>
        <p className="contact__email mono">{t.contact.email}</p>
        <div className="contact__cta">
          <a href={mailto} className="btn btn-primary">
            {t.contact.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
