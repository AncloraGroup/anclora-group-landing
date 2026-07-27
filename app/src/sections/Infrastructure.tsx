import { useLocale } from '../i18n/LocaleContext'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import { tier2Products } from '../data/products'

export default function Infrastructure() {
  const { t } = useLocale()

  return (
    <section className="section section--tight">
      <div className="container">
        <SectionHeader title={t.infrastructure.title} text={t.infrastructure.text} />
        <div className="infrastructure-list">
          {tier2Products.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
