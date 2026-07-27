import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'
import type { Product } from '../data/products'

const product: Product = {
  id: 'test-product',
  name: 'Anclora Test',
  lineId: 'fiscal-compliance',
  description: 'Descripción de prueba del producto.',
  tier: 1,
  status: 'en piloto',
}

describe('ProductCard', () => {
  it('renders the product name, description and status', () => {
    render(<ProductCard product={product} />)

    expect(screen.getByRole('heading', { name: 'Anclora Test' })).toBeInTheDocument()
    expect(screen.getByText('Descripción de prueba del producto.')).toBeInTheDocument()
    expect(screen.getByText('en piloto')).toBeInTheDocument()
  })

  it('renders a CTA link when ctaLabel is provided and not compact', () => {
    render(<ProductCard product={product} ctaLabel="Ver producto" />)

    expect(screen.getByRole('link', { name: 'Ver producto' })).toBeInTheDocument()
  })

  it('hides the description and CTA in compact mode', () => {
    render(<ProductCard product={product} ctaLabel="Ver producto" compact />)

    expect(screen.queryByText('Descripción de prueba del producto.')).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Ver producto' })).not.toBeInTheDocument()
  })

  it('does not render a status when the product has none', () => {
    render(<ProductCard product={{ ...product, status: undefined }} />)

    expect(screen.queryByText('en piloto')).not.toBeInTheDocument()
  })
})
