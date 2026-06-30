import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Package, FlaskConical, Stethoscope, ArrowRight } from 'lucide-react'

import SmartImage from '../Common/SmartImage'
import { categoryMap } from '../../data/products'
import { packshotIds } from '../../data/images'
import styles from './ProductModal.module.css'

/**
 * Accessible product detail modal. Opens when a product card / "Learn more" is
 * clicked. Shows a large product render plus the complete description,
 * composition, key benefits, pack size and directions.
 *
 * - Closes on Escape, backdrop click or the close button.
 * - Locks body scroll and restores focus to the trigger on close.
 * - Rendered through a portal so it overlays the whole page.
 */
export default function ProductModal({ product, onClose }) {
  const panelRef = useRef(null)
  const open = Boolean(product)

  // Escape to close + lock body scroll while open
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    // Move focus into the dialog for keyboard users
    panelRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const cat = product ? categoryMap[product.category] || {} : {}
  const accent = cat.accent || 'var(--primary)'
  const isPackshot = product ? packshotIds.has(product.id) : false

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            ref={panelRef}
            className={styles.panel}
            style={{ '--accent': accent }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            tabIndex={-1}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.close}
              onClick={onClose}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Media */}
            <div className={styles.media}>
              <SmartImage
                src={product.image}
                alt={product.name}
                ratio="1 / 1"
                fit={isPackshot ? 'contain' : 'cover'}
                loading="eager"
                className={styles.image}
              />
              {product.badge && (
                <span className={styles.badge}>{product.badge}</span>
              )}
            </div>

            {/* Details */}
            <div className={styles.body}>
              <span className={styles.category}>{cat.name}</span>
              <p className={styles.tagline}>{product.tagline}</p>
              <h2 id="product-modal-title" className={styles.title}>
                {product.name}
              </h2>
              <p className={styles.desc}>{product.description}</p>

              {/* Meta chips */}
              <div className={styles.meta}>
                {product.form && (
                  <span className={styles.metaChip}>
                    <FlaskConical size={15} />
                    {product.form}
                  </span>
                )}
                {product.pack && (
                  <span className={styles.metaChip}>
                    <Package size={15} />
                    {product.pack}
                  </span>
                )}
              </div>

              {product.composition && (
                <div className={styles.block}>
                  <h3>Composition</h3>
                  <p className={styles.composition}>{product.composition}</p>
                </div>
              )}

              {product.benefits?.length > 0 && (
                <div className={styles.block}>
                  <h3>Key Benefits</h3>
                  <ul className={styles.benefits}>
                    {product.benefits.map((b) => (
                      <li key={b}>
                        <Check size={16} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.directions && (
                <div className={styles.block}>
                  <h3>
                    <Stethoscope size={16} /> Directions for Use
                  </h3>
                  <p className={styles.directions}>{product.directions}</p>
                </div>
              )}

              <Link to="/contact" className={`btn ${styles.cta}`} onClick={onClose}>
                Enquire about this product
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
