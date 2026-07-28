import { useLocale } from '../i18n/LocaleContext'
import SectionHeader from '../components/SectionHeader'
import { tier2Products } from '../data/products'
import { ecosystemLines } from '../data/ecosystem'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Infrastructure() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  const groups = ecosystemLines
    .map((line) => ({
      line,
      products: tier2Products.filter((product) => product.lineId === line.id),
    }))
    .filter((group) => group.products.length > 0)

  return (
    <section className="section section--tight">
      <div className="container">
        <SectionHeader title={t.infrastructure.title} text={t.infrastructure.text} />
        <div ref={revealRef} className="infrastructure-list is-reveal-group">
          {groups.map(({ line, products }) => (
            <div key={line.id} className="infrastructure-group">
              <p className="infrastructure-group__category mono">
                {t.ecosystem.lines[line.id]?.name ?? line.name}
              </p>
              <div className="infrastructure-group__rows">
                {products.map((product) => (
                  <div key={product.id} className="infrastructure-row">
                    <h3>{product.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
