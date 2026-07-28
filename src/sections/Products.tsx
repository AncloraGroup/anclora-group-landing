import { useLocale } from '../i18n/LocaleContext'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import { tier1Products, tier2Products } from '../data/products'
import { ecosystemLines } from '../data/ecosystem'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Products() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()
  const infraRevealRef = useRevealOnScroll<HTMLDivElement>()

  const groups = ecosystemLines
    .map((line) => ({
      line,
      products: tier2Products.filter((product) => product.lineId === line.id),
    }))
    .filter((group) => group.products.length > 0)

  return (
    <section id="products" className="section section--surface">
      <div className="container">
        <SectionHeader title={t.products.title} />
        <div ref={revealRef} className="products-grid is-reveal-group is-reveal-group--stagger">
          {tier1Products.map((product) => (
            <ProductCard key={product.id} product={product} ctaLabel={t.products.ctaView} />
          ))}
        </div>

        <div className="products-infra">
          <div className="products-infra__header">
            <h3>{t.infrastructure.title}</h3>
            <p>{t.infrastructure.text}</p>
          </div>
          <div ref={infraRevealRef} className="infrastructure-list is-reveal-group is-reveal-group--stagger">
            {groups.map(({ line, products }) => (
              <div key={line.id} className="infrastructure-group">
                <p className="infrastructure-group__category mono">
                  {t.ecosystem.lines[line.id]?.name ?? line.name}
                </p>
                <div className="infrastructure-group__rows">
                  {products.map((product) => (
                    <div key={product.id} className="infrastructure-row">
                      <h4>{product.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
