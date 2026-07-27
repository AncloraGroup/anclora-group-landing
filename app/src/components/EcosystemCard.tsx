import type { EcosystemLine } from '../data/ecosystem'

interface EcosystemCardProps {
  line: EcosystemLine
}

export default function EcosystemCard({ line }: EcosystemCardProps) {
  return (
    <article className="ecosystem-card">
      <h3>{line.name}</h3>
      <p>{line.description}</p>
      <div className="ecosystem-card__products">
        {line.products.map((product) => (
          <span key={product}>{product}</span>
        ))}
      </div>
    </article>
  )
}
