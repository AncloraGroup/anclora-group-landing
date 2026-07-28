import type { EcosystemLine } from '../data/ecosystem'

interface EcosystemCardProps {
  line: EcosystemLine
  index?: number
}

export default function EcosystemCard({ line, index = 0 }: EcosystemCardProps) {
  return (
    <article className="ecosystem-rail">
      <span className="ecosystem-rail__index mono">{String(index + 1).padStart(2, '0')}</span>
      <div className="ecosystem-rail__body">
        <h3>{line.name}</h3>
        <p>{line.description}</p>
      </div>
      <div className="ecosystem-rail__products">
        {line.products.map((product) => (
          <span key={product}>{product}</span>
        ))}
      </div>
    </article>
  )
}
