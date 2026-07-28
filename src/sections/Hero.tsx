import { useLocale } from '../i18n/LocaleContext'
import { ecosystemLines } from '../data/ecosystem'
import SystemRing from '../components/SystemRing'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Hero() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()
  const lineLabels = ecosystemLines.map((line) => t.ecosystem.lines[line.id]?.name ?? line.name)

  return (
    <section id="top" className="hero">
      <div className="hero__field" aria-hidden="true" />
      <div className="container hero__grid">
        <div ref={revealRef} className="hero__copy is-reveal-group">
          <p className="hero__eyebrow mono">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero__tagline">{t.hero.tagline}</p>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <div className="hero__actions">
            <a href="#ecosystem" className="btn btn-primary">
              {t.hero.ctaPrimary}
            </a>
            <a href="#contact" className="btn btn-secondary">
              {t.hero.ctaSecondary}
            </a>
          </div>
          <p className="hero__microcopy mono">{t.hero.microcopy}</p>
        </div>

        <div className="hero__instrument" role="presentation">
          <SystemRing size={400} labels={lineLabels} activeIndex={0} ariaLabel={t.hero.instrumentCaption} />
          <ul className="hero__instrument-legend">
            {ecosystemLines.map((line, index) => (
              <li key={line.id} className={index === 0 ? 'is-active' : undefined}>
                <span className="mono">{String(index + 1).padStart(2, '0')}</span>
                {t.ecosystem.lines[line.id]?.name ?? line.name}
              </li>
            ))}
          </ul>
          <p className="hero__instrument-caption">{t.hero.instrumentCaption}</p>
        </div>
      </div>
    </section>
  )
}
