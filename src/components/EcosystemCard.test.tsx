import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import EcosystemCard from './EcosystemCard'
import type { EcosystemLine } from '../data/ecosystem'
import { LocaleProvider } from '../i18n/LocaleContext'

const line: EcosystemLine = {
  id: 'test-line',
  name: 'Test Line',
  description: 'Descripción de la línea de prueba.',
  products: ['Anclora Test', 'Anclora Test Two'],
}

describe('EcosystemCard', () => {
  it('renders the line name and description', () => {
    render(<LocaleProvider><EcosystemCard line={line} /></LocaleProvider>)

    expect(screen.getByRole('heading', { name: 'Test Line' })).toBeInTheDocument()
    expect(screen.getByText('Descripción de la línea de prueba.')).toBeInTheDocument()
  })

  it('renders each associated product name', () => {
    render(<LocaleProvider><EcosystemCard line={line} /></LocaleProvider>)

    expect(screen.getByText('Anclora Test')).toBeInTheDocument()
    expect(screen.getByText('Anclora Test Two')).toBeInTheDocument()
  })
})
