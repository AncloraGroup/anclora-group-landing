import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

interface NavigationContextValue {
  path: string
  navigate: (path: string) => void
}

const NavigationContext = createContext<NavigationContextValue | undefined>(undefined)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = useCallback((next: string) => {
    if (next !== window.location.pathname) {
      window.history.pushState({}, '', next)
      setPath(next)
    }
    window.scrollTo(0, 0)
  }, [])

  return <NavigationContext.Provider value={{ path, navigate }}>{children}</NavigationContext.Provider>
}

export function useNavigation(): NavigationContextValue {
  const ctx = useContext(NavigationContext)
  if (!ctx) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return ctx
}
