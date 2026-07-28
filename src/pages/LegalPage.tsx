import { useLocale } from '../i18n/useLocale'
import InternalLink from '../components/InternalLink'

export type LegalPageKey = 'privacy' | 'terms' | 'legal' | 'cookiesPage'

interface LegalPageProps {
  pageKey: LegalPageKey
}

export default function LegalPage({ pageKey }: LegalPageProps) {
  const { t } = useLocale()
  const page = t.legal[pageKey]

  return (
    <section className="section legal-page">
      <div className="container">
        <InternalLink to="/" className="legal-page__back">
          ← {t.legal.backHome}
        </InternalLink>
        <h1>{page.title}</h1>
        <p>{page.body}</p>
        <p className="legal-page__pending mono">{t.legal.pendingNotice}</p>
      </div>
    </section>
  )
}
