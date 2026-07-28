import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LocaleProvider } from '../i18n/LocaleContext'
import { useLocale } from '../i18n/useLocale'
import LanguageSwitcher from './LanguageSwitcher'

function LocaleProbe() {
  const { t } = useLocale()
  return <p>{t.nav.contactCta}</p>
}

function renderSwitcher() {
  return render(
    <LocaleProvider>
      <LanguageSwitcher />
      <LocaleProbe />
    </LocaleProvider>,
  )
}

describe('LanguageSwitcher', () => {
  it('defaults to the Spanish locale', () => {
    renderSwitcher()

    expect(screen.getByRole('combobox', { name: /idioma/i })).toHaveValue('es')
    expect(screen.getByText('Contactar')).toBeInTheDocument()
  })

  it('changes the active locale and downstream copy when a new option is selected', async () => {
    const user = userEvent.setup()
    renderSwitcher()

    await user.selectOptions(screen.getByRole('combobox', { name: /idioma/i }), 'en')

    expect(screen.getByRole('combobox', { name: /idioma/i })).toHaveValue('en')
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
})
