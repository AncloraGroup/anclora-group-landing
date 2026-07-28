import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { NavigationContext } from './navigationContext'

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
