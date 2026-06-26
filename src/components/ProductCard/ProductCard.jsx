import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import SmartImage from '../Common/SmartImage'
import { categoryMap } from '../../data/products'
import { packshotIds } from '../../data/images'
import styles from './ProductCard.module.css'

/**
 * Reusable product card with image, category badge, name, tagline and
 * description. Lifts and reveals a CTA on hover. Used on both the Products
 * grid and the About-page preview.
 *
 * Real packshots (white-background box photos) render "contained" on a clean
 * panel; lifestyle/illustrative images render "covered".
 */
export default function ProductCard({ product }) {
  const cat = categoryMap[product.category] || {}
  const accent = cat.accent || 'var(--primary)'
  const isPackshot = packshotIds.has(product.id)

  return (
    <motion.article
      className={`${styles.card} ${isPackshot ? styles.packshot : ''}`}
      style={{ '--accent': accent }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      <div className={styles.media}>
        <SmartImage
          src={product.image}
          alt={product.name}
          ratio="5 / 4"
          fit={isPackshot ? 'contain' : 'cover'}
          className={styles.image}
        />
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
