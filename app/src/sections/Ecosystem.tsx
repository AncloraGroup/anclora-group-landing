import { useLocale } from '../i18n/LocaleContext'
import SectionHeader from '../components/SectionHeader'
import EcosystemCard from '../components/EcosystemCard'
import { ecosystemLines } from '../data/ecosystem'

export default function Ecosystem() {
  const { t } = useLocale()

  return (
    <section id="ecosystem" className="section">
      <div className="container">
        <SectionHeader title={t.ecosystem.title} text={t.ecosystem.text} />
        <div className="ecosystem-grid">
          {ecosystemLines.map((line) => (
            <EcosystemCard key={line.id} line={line} />
          ))}
        </div>
      </div>
    </section>
  )
}
