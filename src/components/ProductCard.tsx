import type { Product } from '../data/products'
import { ecosystemLines } from '../data/ecosystem'

interface ProductCardProps {
  product: Product
  ctaLabel?: string
  compact?: boolean
}

export default function ProductCard({ product, ctaLabel, compact = false }: ProductCardProps) {
  const line = ecosystemLines.find((candidate) => candidate.id === product.lineId)

  return (
    <article className={compact ? 'product-card product-card--compact' : 'product-card'}>
      <div className="product-card__head">
        {line && <p className="product-card__category mono">{line.name}</p>}
        {product.status && (
          <p className="product-card__status mono">
            <span className="product-card__status-dot" aria-hidden="true" />
            {product.status}
          </p>
        )}
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        {!compact && <p>{product.description}</p>}
      </div>
      {ctaLabel && !compact && (
        <a className="product-card__cta" href="#contact">
          {ctaLabel}
        </a>
      )}
    </article>
  )
}
