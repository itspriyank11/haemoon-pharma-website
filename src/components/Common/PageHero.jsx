import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ChevronRight } from 'lucide-react'

import styles from './PageHero.module.css'

/**
 * Inner-page hero banner with breadcrumb, used by the Products and Contact
 * pages for a consistent, premium top section.
 */
export default function PageHero({ eyebrow, title, highlight, subtitle, crumb }) {
  return (
    <section className={styles.hero}>
      <span className={`blob ${styles.blobA}`} />
      <span className={`blob ${styles.blobB}`} />
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container container--wide ${styles.inner}`}>
        <motion.nav
          className={styles.crumb}
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <Home size={15} />
            Home
          </Link>
          <ChevronRight size={15} />
          <span>{crumb || title}</span>
        </motion.nav>

        {eyebrow && (
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            {eyebrow}
          </motion.span>
        )}

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14 }}
        >
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </motion.h1>

        {subtitle && (
          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
