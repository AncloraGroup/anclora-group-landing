import { useLocale } from '../i18n/useLocale'
import { LOCALES, LOCALE_LABELS, type Locale } from '../i18n'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="language-switcher">
      <label htmlFor="language-switcher-select" className="visually-hidden">
        Idioma
      </label>
      <select
        id="language-switcher-select"
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
      >
        {LOCALES.map((code) => (
          <option key={code} value={code}>
            {LOCALE_LABELS[code]}
          </option>
        ))}
      </select>
    </div>
  )
}
