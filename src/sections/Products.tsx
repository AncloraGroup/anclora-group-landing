import { useLocale } from '../i18n/LocaleContext'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import { tier1Products, tier2Products } from '../data/products'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Products() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()
  const infraRevealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="products" className="section section--surface">
      <div className="container">
        <SectionHeader title={t.products.title} text={t.infrastructure.text} />
        <div ref={revealRef} className="products-grid is-reveal-group is-reveal-group--stagger">
          {tier1Products.map((product) => (
            <ProductCard key={product.id} product={product} ctaLabel={t.products.ctaView} />
          ))}
        </div>

        <div ref={infraRevealRef} className="infra-backbone is-reveal-group is-reveal-group--stagger">
          <p className="infra-backbone__label mono">{t.infrastructure.title}</p>
          <div className="infra-backbone__modules">
            {tier2Products.map((product) => {
              const copy = t.products.items[product.id]
              return (
                <div key={product.id} className="infra-module">
                  <p className="infra-module__status mono">
                    <span className="infra-module__dot" aria-hidden="true" />
                    {copy?.status ?? product.status}
                  </p>
                  <h4>{product.name}</h4>
                  <p className="infra-module__description">{copy?.description ?? product.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

