import { useLocale } from '../i18n/LocaleContext'
import medalla from '../assets/logo/anclora-group-medalla-1024-192.webp'

export default function Hero() {
  const { t } = useLocale()

  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero__medallion">
          <img src={medalla} alt="Medalla Anclora Group" width={96} height={96} />
        </div>
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
    </section>
  )
}
