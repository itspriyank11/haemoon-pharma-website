import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, PackageSearch, ArrowRight } from 'lucide-react'

import PageTransition from '../components/Common/PageTransition'
import PageHero from '../components/Common/PageHero'
import ProductCard from '../components/ProductCard/ProductCard'
import CTA from '../components/CTA/CTA'

import { products, categories } from '../data/products'
import styles from './Products.module.css'

export default function Products() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      const matchCat = active === 'all' || p.category === active
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      return matchCat && matchQuery
    })
  }, [query, active])

  return (
    <PageTransition>
      <PageHero
        eyebrow="Our Portfolio"
        title="Products engineered for"
        highlight="better health"
        crumb="Products"
        subtitle="Explore our growing range of pharmaceutical and nutraceutical products — crafted to global quality standards and trusted worldwide."
      />

      {/* ---- Toolbar ---- */}
      <section className="section section--tight">
        <div className="container container--wide">
          <div className={styles.toolbar}>
            <div className={styles.searchWrap}>
              <Search size={19} className={styles.searchIcon} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products by name or keyword…"
                aria-label="Search products"
              />
            </div>

            <div className={styles.filterMeta}>
              <SlidersHorizontal size={17} />
              <span>
                {filtered.length}{' '}
                {filtered.length === 1 ? 'product' : 'products'}
              </span>
            </div>
          </div>

          {/* ---- Category filter ---- */}
          <div
            className={styles.chips}
            role="tablist"
            aria-label="Filter by category"
          >
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active === c.id}
                className={`${styles.chip} ${
                  active === c.id ? styles.chipActive : ''
                }`}
                style={c.accent ? { '--chip': c.accent } : undefined}
                onClick={() => setActive(c.id)}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* ---- Grid ---- */}
          {filtered.length > 0 ? (
            <motion.div layout className={styles.grid}>
              <AnimatePresence mode="popLayout">
                {filtered.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ProductCard product={p} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>
                <PackageSearch size={40} />
              </span>
              <h3>No products found</h3>
              <p>
                Try a different search term or clear the filters to see our full
                range.
              </p>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => {
                  setQuery('')
                  setActive('all')
                }}
              >
                Reset filters
              </button>
            </div>
          )}

          {/* ---- Helper note ---- */}
          <div className={styles.note}>
            <p>
              Looking for something specific or want product specifications?
            </p>
            <Link to="/contact" className="btn btn--sm">
              Request product details
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </PageTransition>
  )
}
