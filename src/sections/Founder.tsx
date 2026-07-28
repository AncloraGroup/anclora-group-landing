import { useLocale } from '../i18n/LocaleContext'
import SectionHeader from '../components/SectionHeader'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Founder() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()
  const signals = t.hero.microcopy.split('·').map((line) => line.trim())

  return (
    <section id="founder" className="section">
      <div className="container">
        <SectionHeader title={t.founder.title} />
        <div ref={revealRef} className="founder-grid is-reveal-group">
          <div className="founder">
            <p>{t.founder.body}</p>
          </div>
          <ul className="founder-signals mono" aria-hidden="true">
            {signals.map((line, index) => (
              <li key={line}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
