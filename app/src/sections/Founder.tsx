import { useLocale } from '../i18n/LocaleContext'
import SectionHeader from '../components/SectionHeader'

export default function Founder() {
  const { t } = useLocale()

  return (
    <section id="founder" className="section">
      <div className="container">
        <SectionHeader title={t.founder.title} />
        <div className="founder">
          <p>{t.founder.body}</p>
        </div>
      </div>
    </section>
  )
}
