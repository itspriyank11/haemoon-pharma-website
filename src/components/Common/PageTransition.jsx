import { motion } from 'framer-motion'

/**
 * Wraps each page so route changes cross-fade gracefully via <AnimatePresence>
 * in App.jsx. A pure opacity fade (no vertical movement) keeps the transition
 * subtle while letting each page open instantly at the top.
 */
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
