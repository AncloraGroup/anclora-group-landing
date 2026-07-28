import { useEffect, useRef, useState } from 'react'

interface SystemRingProps {
  /** Tamaño en px del lienzo cuadrado. */
  size?: number
  /** Etiquetas de graduación en sentido horario, empezando arriba (12h). */
  labels?: string[]
  /** Índice de la etiqueta activa (resalta ese sector del anillo). */
  activeIndex?: number
  className?: string
}

const TAU = Math.PI * 2

/**
 * Instrumento de a bordo construido a partir de la medalla de Anclora Group:
 * anillo metálico graduado + tres ondas plateadas convertidas en un indicador
 * vivo. Es el único elemento de la landing con licencia para llamar la
 * atención (ver frontend-design skill: gastar la osadía en un solo sitio).
 *
 * La secuencia de barrido corre una vez al montar y se detiene en el sector
 * activo — nunca gira en bucle. Con prefers-reduced-motion, aparece ya
 * asentada en su estado final.
 */
export default function SystemRing({
  size = 360,
  labels = [],
  activeIndex = 0,
  className,
}: SystemRingProps) {
  const [sweepProgress, setSweepProgress] = useState(0)
  const rafRef = useRef<number | undefined>(undefined)

  const targetAngle = labels.length > 0 ? (activeIndex / labels.length) * TAU : TAU * 0.62

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setSweepProgress(1)
      return
    }

    const durationMs = 1100
    const start = performance.now()

    const step = (now: number) => {
      const elapsed = now - start
      const linear = Math.min(elapsed / durationMs, 1)
      // ease-out cúbico, coherente con --ease-out del sistema de tokens
      const eased = 1 - Math.pow(1 - linear, 3)
      setSweepProgress(eased)
      if (linear < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const center = size / 2
  const outerR = size * 0.46
  const tickR = size * 0.4
  const waveBandTop = size * 0.44
  const waveBandGap = size * 0.06

  const currentAngle = -Math.PI / 2 + targetAngle * sweepProgress
  const arcEnd = {
    x: center + outerR * Math.cos(currentAngle),
    y: center + outerR * Math.sin(currentAngle),
  }
  const largeArc = targetAngle * sweepProgress > Math.PI ? 1 : 0

  const tickCount = Math.max(labels.length, 24)
  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const isLabelTick = labels.length > 0 && i < labels.length
    const angle = -Math.PI / 2 + (i / tickCount) * TAU
    const inner = isLabelTick ? tickR - 10 : tickR - 5
    const x1 = center + inner * Math.cos(angle)
    const y1 = center + inner * Math.sin(angle)
    const x2 = center + tickR * Math.cos(angle)
    const y2 = center + tickR * Math.sin(angle)
    const isActive = isLabelTick && i === activeIndex
    return { x1, y1, x2, y2, isLabelTick, isActive, key: `tick-${i}` }
  })

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="Instrumento del ecosistema Anclora Group"
    >
      <defs>
        <radialGradient id="systemring-field" cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor="#152A4D" />
          <stop offset="100%" stopColor="#0A1F3D" />
        </radialGradient>
      </defs>

      <circle cx={center} cy={center} r={outerR + size * 0.02} fill="url(#systemring-field)" />

      <circle
        cx={center}
        cy={center}
        r={outerR}
        fill="none"
        stroke="rgba(229, 231, 235, 0.16)"
        strokeWidth={1.5}
      />

      {ticks.map((tick) => (
        <line
          key={tick.key}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          stroke={tick.isActive ? '#5FA8FF' : 'rgba(229, 231, 235, 0.32)'}
          strokeWidth={tick.isLabelTick ? 1.75 : 1}
        />
      ))}

      {/* Barrido: sector operativo activo, en signal-blue */}
      <path
        d={`M ${center} ${center - outerR} A ${outerR} ${outerR} 0 ${largeArc} 1 ${arcEnd.x} ${arcEnd.y}`}
        fill="none"
        stroke="#5FA8FF"
        strokeWidth={2.5}
        strokeLinecap="round"
        opacity={0.85}
      />

      {/* Las tres ondas de la medalla, reinterpretadas como líneas de estado */}
      {[0, 1, 2].map((i) => (
        <line
          key={`wave-${i}`}
          x1={center - size * 0.16}
          x2={center + size * 0.16}
          y1={waveBandTop + i * waveBandGap}
          y2={waveBandTop + i * waveBandGap}
          stroke="rgba(229, 231, 235, 0.55)"
          strokeWidth={2}
          strokeLinecap="round"
        />
      ))}

      {labels.map((label, i) => {
        const angle = -Math.PI / 2 + (i / labels.length) * TAU
        const labelR = tickR - 26
        const x = center + labelR * Math.cos(angle)
        const y = center + labelR * Math.sin(angle)
        return (
          <text
            key={label}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="'JetBrains Mono', monospace"
            fontSize={size * 0.026}
            fill={i === activeIndex ? '#5FA8FF' : 'rgba(203, 213, 225, 0.7)'}
          >
            {String(i + 1).padStart(2, '0')}
          </text>
        )
      })}
    </svg>
  )
}
