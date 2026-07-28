import { useEffect, useRef, type RefObject } from 'react'

interface SonarFieldProps {
  /** Puntero normalizado (-1..1) compartido con el hero; el centro del sonar
      deriva unos píxeles con él (paralaje sutil, nunca agresivo). */
  pointerRef: RefObject<{ x: number; y: number }>
  className?: string
}

interface Pulse {
  born: number
  duration: number
}

interface Particle {
  x: number
  y: number
  r: number
  speed: number
  drift: number
  alpha: number
  blue: boolean
}

const PULSE_INTERVAL = 2800
const PULSE_DURATION = 4600
const MAX_PULSES = 3
const PARTICLE_COUNT = 26

/**
 * Capa atmosférica del hero: pulsos de sonar que nacen del centro del anillo y
 * partículas de profundidad a la deriva. Es atmósfera, no efecto — opacidades
 * bajas, tiempos largos, un solo bucle de rAF que se pausa fuera de pantalla o
 * con la pestaña oculta. Con prefers-reduced-motion pinta tres anillos
 * estáticos y no anima nada.
 */
export default function SonarField({ pointerRef, className }: SonarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let raf = 0
    let running = false
    let inView = true
    const pulses: Pulse[] = []
    const particles: Particle[] = []
    let lastPulse = 0

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const seedParticles = () => {
      particles.length = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random(),
          y: Math.random(),
          r: 0.8 + Math.random() * 1.4,
          speed: 0.006 + Math.random() * 0.014,
          drift: (Math.random() - 0.5) * 0.008,
          alpha: 0.1 + Math.random() * 0.28,
          blue: Math.random() < 0.3,
        })
      }
    }

    const center = () => {
      const p = pointerRef.current ?? { x: 0, y: 0 }
      return {
        x: width / 2 + p.x * 10,
        y: height / 2 + p.y * 10,
      }
    }

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height)
      const c = center()
      const maxR = Math.hypot(width, height) * 0.55

      // Pulsos de sonar: anillo que se expande y se apaga
      for (let i = pulses.length - 1; i >= 0; i--) {
        const t = (now - pulses[i].born) / pulses[i].duration
        if (t >= 1) {
          pulses.splice(i, 1)
          continue
        }
        const eased = 1 - Math.pow(1 - t, 3)
        const alpha = 0.22 * (1 - eased)
        ctx.beginPath()
        ctx.arc(c.x, c.y, eased * maxR, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(95, 168, 255, ${alpha.toFixed(3)})`
        ctx.lineWidth = 1.25
        ctx.stroke()
      }

      // Partículas de profundidad: deriva lenta, parpadeo casi imperceptible
      for (const p of particles) {
        p.y -= p.speed / 100
        p.x += p.drift / 100
        if (p.y < -0.02) p.y = 1.02
        if (p.x < -0.02) p.x = 1.02
        if (p.x > 1.02) p.x = -0.02
        const twinkle = 0.75 + 0.25 * Math.sin(now / 1400 + p.x * 40)
        ctx.beginPath()
        ctx.arc(p.x * width, p.y * height, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.blue
          ? `rgba(95, 168, 255, ${(p.alpha * twinkle).toFixed(3)})`
          : `rgba(229, 231, 235, ${(p.alpha * 0.7 * twinkle).toFixed(3)})`
        ctx.fill()
      }
    }

    const tick = (now: number) => {
      if (!running) return
      if (now - lastPulse > PULSE_INTERVAL && pulses.length < MAX_PULSES) {
        pulses.push({ born: now, duration: PULSE_DURATION })
        lastPulse = now
      }
      draw(now)
      raf = requestAnimationFrame(tick)
    }

    const start = () => {
      if (running || !inView || document.hidden) return
      running = true
      lastPulse = performance.now() - PULSE_INTERVAL // primer pulso inmediato
      raf = requestAnimationFrame(tick)
    }

    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    resize()
    seedParticles()

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      // Estado asentado: tres anillos concéntricos tenues, sin movimiento
      const c = { x: width / 2, y: height / 2 }
      const maxR = Math.hypot(width, height) * 0.55
      for (const f of [0.35, 0.6, 0.85]) {
        ctx.beginPath()
        ctx.arc(c.x, c.y, f * maxR, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(95, 168, 255, 0.07)'
        ctx.lineWidth = 1
        ctx.stroke()
      }
      return
    }

    const resizeObserver = new ResizeObserver(() => {
      resize()
      seedParticles()
    })
    resizeObserver.observe(canvas)

    const viewObserver = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? true
        if (inView) start()
        else stop()
      },
      { threshold: 0 },
    )
    viewObserver.observe(canvas)

    const onVisibility = () => {
      if (document.hidden) stop()
      else start()
    }
    document.addEventListener('visibilitychange', onVisibility)

    start()

    return () => {
      stop()
      resizeObserver.disconnect()
      viewObserver.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [pointerRef])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
