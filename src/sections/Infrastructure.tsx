import { useLocale } from '../i18n/LocaleContext'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import { tier2Products } from '../data/products'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Infrastructure() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <section className="section section--tight">
      <div className="container">
        <SectionHeader title={t.infrastructure.title} text={t.infrastructure.text} />
        <div ref={revealRef} className="infrastructure-list is-reveal-group">
          {tier2Products.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
