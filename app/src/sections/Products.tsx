import { useLocale } from '../i18n/LocaleContext'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import { tier1Products } from '../data/products'

export default function Products() {
  const { t } = useLocale()

  return (
    <section id="products" className="section section--surface">
      <div className="container">
        <SectionHeader title={t.products.title} />
        <div className="products-grid">
          {tier1Products.map((product) => (
            <ProductCard key={product.id} product={product} ctaLabel={t.products.ctaView} />
          ))}
        </div>
      </div>
    </section>
  )
}
