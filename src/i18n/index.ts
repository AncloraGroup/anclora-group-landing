import type { Dictionary } from './types'
import es from './es'
import ca from './ca'
import en from './en'
import de from './de'
import fr from './fr'
import it from './it'

export type Locale = 'es' | 'ca' | 'en' | 'de' | 'fr' | 'it'

export const DEFAULT_LOCALE: Locale = 'es'

export const LOCALES: Locale[] = ['es', 'ca', 'en', 'de', 'fr', 'it']

export const LOCALE_LABELS: Record<Locale, string> = {
  es: 'ES',
  ca: 'CAT',
  en: 'EN',
  de: 'DE',
  fr: 'FR',
  it: 'IT',
}

export const dictionaries: Record<Locale, Dictionary> = { es, ca, en, de, fr, it }

export type { Dictionary }
