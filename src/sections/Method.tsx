import { useLocale } from '../i18n/LocaleContext'
import SectionHeader from '../components/SectionHeader'

export default function Method() {
  const { t } = useLocale()

  return (
    <section id="method" className="section section--surface">
      <div className="container">
        <SectionHeader title={t.method.title} />
        <div className="method-sequence">
          {t.method.steps.map((step, index) => (
            <div key={step.title} className="method-step">
              <span className="method-step__index mono">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
