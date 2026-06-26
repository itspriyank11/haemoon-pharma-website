import { motion } from 'framer-motion'

/**
 * Scroll-triggered reveal wrapper.
 *
 * Fades + translates its children into place the first time it enters the
 * viewport. Direction and delay are configurable so it can express slide-up,
 * slide-left, slide-right, fade and scale entrances from one component.
 *
 * @param {'up'|'down'|'left'|'right'|'fade'|'scale'} direction
 * @param {number} delay   seconds before the animation starts
 * @param {number} y/x     custom offset overrides
 * @param {string} as      element/component to render (default 'div')
 */
const offsetFor = (direction, distance) => {
  switch (direction) {
    case 'up':
      return { y: distance }
    case 'down':
      return { y: -distance }
    case 'left':
      return { x: distance }
    case 'right':
      return { x: -distance }
    case 'scale':
      return { scale: 0.92 }
    default:
      return {}
  }
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  distance = 36,
  duration = 0.7,
  once = true,
  amount = 0.25,
  className,
  as = 'div',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div

  const hidden = { opacity: 0, ...offsetFor(direction, distance) }
  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }

  return (
    <MotionTag
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
