import { useEffect, useRef } from 'react'

/**
 * Aplica una única secuencia de revelado (fade + translateY) la primera vez que
 * el elemento entra en el viewport. Un solo observer por sección, nunca por
 * tarjeta individual, para evitar el efecto de "animación dispersa" (ver
 * frontend-design skill: un momento orquestado, no efectos repartidos).
 *
 * Respeta `prefers-reduced-motion` marcando el elemento como visible de
 * inmediato, sin observar. La clase `.is-revealed` se combina con las reglas
 * de transición ya definidas en tokens/globals (--dur-base, --ease-out).
 */
export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      node.classList.add('is-revealed')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
