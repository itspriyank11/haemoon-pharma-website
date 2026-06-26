import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Counts from 0 up to `value` once it scrolls into view, with an eased ramp.
 * Renders optional prefix/suffix (e.g. "+", "k", "%").
 */
export default function AnimatedCounter({
  value = 0,
  duration = 1800,
  prefix = '',
  suffix = '',
  className,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) {
      setDisplay(value)
      return
    }

    let frame
    let start

    const tick = (now) => {
      if (start === undefined) start = now
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}
