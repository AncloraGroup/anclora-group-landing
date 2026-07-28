import { useLocale } from '../i18n/useLocale'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Contact() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()
  const mailto = `mailto:${t.contact.email}?subject=${encodeURIComponent(t.contact.subject)}`

  return (
    <section id="contact" className="section">
      <div ref={revealRef} className="container contact is-reveal-group">
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
