import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import SmartImage from '../Common/SmartImage'
import { categoryMap } from '../../data/products'
import { packshotIds } from '../../data/images'
import styles from './ProductCard.module.css'

/**
 * Reusable product card with image, category badge, name, tagline and
 * description.
 *
 * On pointer devices the whole card tilts in 3D toward the cursor and the
 * product render lifts forward for a premium, tactile feel. Honors
 * `prefers-reduced-motion` (falls back to a simple lift).
 *
 * Clicking the card (or pressing Enter/Space) calls `onSelect(product)` so the
 * parent can open a detail modal.
 */
export default function ProductCard({ product, onSelect }) {
  const cat = categoryMap[product.category] || {}
  const accent = cat.accent || 'var(--primary)'
  const isPackshot = packshotIds.has(product.id)
  const reduceMotion = useReducedMotion()

  const handleSelect = () => onSelect?.(product)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleSelect()
    }
  }

  const ref = useRef(null)

  // Normalised pointer position within the card (-0.5 … 0.5)
  const px = useMotionValue(0)
  const py = useMotionValue(0)

  // Smooth the values so the tilt eases rather than snaps
  const sx = useSpring(px, { stiffness: 220, damping: 18 })
  const sy = useSpring(py, { stiffness: 220, damping: 18 })

  const rotateX = useTransform(sy, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(sx, [-0.5, 0.5], ['-9deg', '9deg'])

  // Parallax: the product image drifts slightly opposite the tilt for depth
  const imgX = useTransform(sx, [-0.5, 0.5], ['-12px', '12px'])
  const imgY = useTransform(sy, [-0.5, 0.5], ['-12px', '12px'])

  const handlePointerMove = (e) => {
    if (reduceMotion) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width - 0.5)
    py.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handlePointerLeave = () => {
    px.set(0)
    py.set(0)
  }

  return (
    <motion.article
      ref={ref}
      className={`${styles.card} ${isPackshot ? styles.packshot : ''}`}
      style={{
        '--accent': accent,
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 1000,
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${product.name}`}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={reduceMotion ? { y: -6 } : { y: -10 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      <div className={styles.media}>
        <motion.div
          className={styles.tiltLayer}
          style={reduceMotion ? undefined : { x: imgX, y: imgY }}
        >
          <SmartImage
            src={product.image}
            alt={product.name}
            ratio="5 / 4"
            fit={isPackshot ? 'contain' : 'cover'}
            className={styles.image}
          />
        </motion.div>
        <span className={styles.category}>{cat.name}</span>
        {product.badge && <span className={styles.badge}>{product.badge}</span>}
      </div>

      <div className={styles.body}>
        <p className={styles.tagline}>{product.tagline}</p>
        <h3 className={styles.name}>{product.name}</h3>
        {product.composition && (
          <p className={styles.composition}>{product.composition}</p>
        )}
        <p className={styles.desc}>{product.description}</p>

        <span className={styles.link}>
          Learn more
          <ArrowUpRight size={17} />
        </span>
      </div>
    </motion.article>
  )
}
