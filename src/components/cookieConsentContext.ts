import { createContext, useContext } from 'react'

export interface CookieConsentContextValue {
  openPreferences: () => void
}

export const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(undefined)

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return ctx
}
