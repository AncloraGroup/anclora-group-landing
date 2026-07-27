import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LocaleProvider } from '../i18n/LocaleContext'
import Footer from './Footer'

function renderFooter() {
  return render(
    <LocaleProvider>
      <Footer />
    </LocaleProvider>,
  )
}

describe('Footer', () => {
  it('renders a mailto link with the contact email', () => {
    renderFooter()

    const emailLink = screen.getByRole('link', { name: 'antonio@anclora.com' })
    expect(emailLink).toHaveAttribute('href', 'mailto:antonio@anclora.com')
  })

  it('renders the current year in the copyright notice', () => {
    renderFooter()

    const currentYear = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument()
  })
})
