import { motion } from 'framer-motion'

/**
 * Container that staggers the entrance of its <StaggerItem> children when it
 * scrolls into view. Use together:
 *
 *   <StaggerGroup>
 *     <StaggerItem>...</StaggerItem>
 *     <StaggerItem>...</StaggerItem>
 *   </StaggerGroup>
 */
export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0.05,
  amount = 0.2,
  once = false,
  ...rest
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, distance = 28, ...rest }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
