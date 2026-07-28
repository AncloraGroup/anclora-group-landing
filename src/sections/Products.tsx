import { useLocale } from '../i18n/LocaleContext'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import { tier1Products, tier2Products } from '../data/products'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

/**
 * Un solo sistema: las cinco insignias y los cuatro módulos de infraestructura
 * viven en el mismo chasis — la idea de "un mismo estándar" expresada como
 * carrocería única, no como dos bloques con titulares separados.
 */
export default function Products() {
  const { t } = useLocale()
  const flagshipRevealRef = useRevealOnScroll<HTMLDivElement>()
  const modulesRevealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="products" className="section section--surface">
      <div className="container">
        <SectionHeader title={t.products.title} text={t.infrastructure.text} />
        <div className="products-chassis">
          <div ref={flagshipRevealRef} className="products-chassis__flagship is-reveal-group is-reveal-group--stagger">
            {tier1Products.map((product) => (
              <ProductCard key={product.id} product={product} ctaLabel={t.products.ctaView} variant="cell" />
            ))}
          </div>
          <div ref={modulesRevealRef} className="products-chassis__modules is-reveal-group is-reveal-group--stagger">
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
