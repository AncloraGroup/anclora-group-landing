export interface EcosystemLine {
  id: string
  name: string
  description: string
  products: string[]
}

// Líneas estratégicas — sección 10 del brand book. Contenido brand-locked, no traducir ni reescribir.
export const ecosystemLines: EcosystemLine[] = [
  {
    id: 'fiscal-compliance',
    name: 'Fiscal & Compliance',
    description: 'Fiscalidad, facturación, cumplimiento',
    products: ['Anclora Fiscal'],
  },
  {
    id: 'operational-automation',
    name: 'Operational Automation',
    description: 'Automatización documental y operativa',
    products: ['Anclora SyncXML', 'Anclora Nexus', 'Anclora Command Center'],
  },
  {
    id: 'energy-efficiency',
    name: 'Energy & Efficiency',
    description: 'Eficiencia energética y análisis',
    products: ['Anclora EnergyScan'],
  },
  {
    id: 'real-estate-intelligence',
    name: 'Real Estate Intelligence',
    description: 'Inteligencia inmobiliaria y activos premium',
    products: ['Anclora Private Estates', 'Anclora Synergi', 'Anclora Data LAB'],
  },
  {
    id: 'publishing-digital-knowledge',
    name: 'Publishing & Digital Knowledge',
    description: 'Contenido, conocimiento, editorial',
    products: ['Anclora Insights'],
  },
]
