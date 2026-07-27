import { useLocale } from '../i18n/LocaleContext'
import SectionHeader from '../components/SectionHeader'

export default function Principles() {
  const { t } = useLocale()

  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHeader title={t.principles.title} />
        <div className="principles-list">
          {t.principles.items.map((item) => (
            <div key={item.title} className="principle">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
