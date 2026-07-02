import { useMemo, useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  SlidersHorizontal,
  PackageSearch,
  ArrowRight,
  HeartPulse,
  Droplets,
  Pill,
  Brain,
  Activity,
  Atom,
  Baby,
  Syringe,
  Sparkles,
  FlaskConical,
  ShieldCheck,
  Microscope,
  BadgeCheck,
} from 'lucide-react'

import PageTransition from '../components/Common/PageTransition'
import PageHero from '../components/Common/PageHero'
import Seo from '../components/Common/Seo'
import SectionHeading from '../components/Common/SectionHeading'
import Reveal from '../components/Common/Reveal'
import { StaggerGroup, StaggerItem } from '../components/Common/StaggerGroup'
import ProductCard from '../components/ProductCard/ProductCard'
import ProductModal from '../components/ProductCard/ProductModal'
import CTA from '../components/CTA/CTA'

import { products, categories, therapeuticDivisions } from '../data/products'
import { images } from '../data/images'
import { company } from '../data/site'
import styles from './Products.module.css'

/** ItemList structured data for the full product catalogue. */
const productsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${company.name} — Product Range`,
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: p.name,
      description: p.description,
      category: p.composition,
      brand: { '@type': 'Brand', name: company.shortName },
    },
  })),
}

// Map data icon keys to lucide components
const divisionIcons = {
  heartPulse: HeartPulse,
  droplets: Droplets,
  pill: Pill,
  brain: Brain,
  activity: Activity,
  atom: Atom,
  baby: Baby,
  syringe: Syringe,
}

/** Valid category ids (excluding the "all" pseudo-category). */
const categoryIds = new Set(categories.map((c) => c.id).filter((id) => id !== 'all'))

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState(null)
  // Ids of products to pulse-highlight after a deep-link (a category link
  // highlights every product in that category; a product link highlights one).
  const [highlighted, setHighlighted] = useState([])
  const toolbarRef = useRef(null)

  // Apply ?category= / ?product= deep-links from the footer (and elsewhere).
  // Runs on every searchParams change — not just mount — so clicking a footer
  // link while already on this page still filters/highlights correctly.
  useEffect(() => {
    const cat = searchParams.get('category')
    const prod = searchParams.get('product')
    if (!cat && !prod) return

    // Clear any current glow first so re-clicking the same link replays it.
    setHighlighted([])

    if (cat && categoryIds.has(cat)) {
      setActive(cat)
      setQuery('')
      const ids = products.filter((p) => p.category === cat).map((p) => p.id)
      requestAnimationFrame(() => setHighlighted(ids))
    }

    if (prod) {
      const match = products.find((p) => p.id === prod)
      if (match) {
        // Narrow the grid to just this product (via the search box) so it's the
        // only card shown — reliably visible and unmistakable — then pulse it.
        setActive('all')
        setQuery(match.name)
        requestAnimationFrame(() => setHighlighted([prod]))
      }
    }

    // Consume the params so refresh/back doesn't re-trigger the effect.
    setSearchParams({}, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  // Bring the results grid up to the top of the viewport and clear the glow
  // after a moment. Runs whenever a fresh set of products is highlighted.
  useEffect(() => {
    if (highlighted.length === 0) return

    const timers = []
    const scrollToGrid = () => {
      const el = toolbarRef.current
      if (!el) return
      const target = el.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top: Math.max(0, target), behavior: 'smooth' })
    }

    timers.push(setTimeout(scrollToGrid, 250))
    timers.push(setTimeout(scrollToGrid, 650))
    timers.push(setTimeout(() => setHighlighted([]), 3200))

    return () => timers.forEach(clearTimeout)
  }, [highlighted])

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
      <Seo
        title="Our Products"
        description="Explore Haemoon Pharma's range of pharmaceutical & nutraceutical products — calcium, iron & antacid formulations, antibiotics, liver support, multivitamins, syrups, tablets & capsules."
        jsonLd={productsJsonLd}
      />

      <PageHero
        eyebrow="Our Portfolio"
        title="Products engineered for"
        highlight="better health"
        subtitle="Explore our growing range of pharmaceutical and nutraceutical products — crafted to global quality standards and trusted worldwide."
        features={[
          {
            icon: FlaskConical,
            title: 'Broad range',
            text: 'Tonics, vitamins, liver, digestive & women’s care',
          },
          {
            icon: ShieldCheck,
            title: 'WHO-GMP certified',
            text: 'Manufactured at certified, audited facilities',
          },
          {
            icon: Microscope,
            title: 'Research-backed',
            text: 'Formulated with proven, science-led ingredients',
          },
          {
            icon: BadgeCheck,
            title: 'Quality assured',
            text: 'Tested at every stage you can feel & trust',
          },
        ]}
        image={images.productsHero}
        imageAlt="Haemoon Pharma medicines, capsules and natural extracts"
        stats={[
          { value: '10+', label: 'Products' },
          { value: '4+', label: 'Categories' },
        ]}
      />

      {/* ---- Toolbar ---- */}
      <section className="section section--tight" ref={toolbarRef}>
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
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.id}
                    layout
                    className={
                      highlighted.includes(p.id)
                        ? styles.cardHighlight
                        : undefined
                    }
                    initial={{ opacity: 0, scale: 0.92, y: 28 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{
                      duration: 0.5,
                      delay: (i % 4) * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <ProductCard product={p} onSelect={setSelected} />
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

      {/* ---- Therapeutic Divisions (roadmap / coming soon) ---- */}
      <section className="section section--soft" id="divisions">
        <div className="container container--wide">
          <SectionHeading
            center
            eyebrow="Expanding Soon"
            title="Our upcoming"
            highlight="therapeutic divisions"
            subtitle="We’re growing fast. These specialised divisions are on our roadmap — bringing quality, research-backed care to many more segments."
          />

          <StaggerGroup className={styles.divisions}>
            {therapeuticDivisions.map((d) => {
              const Icon = divisionIcons[d.icon] || Pill
              return (
                <StaggerItem key={d.name} className={styles.division}>
                  <div className={styles.divisionTop}>
                    <span className={styles.divisionIcon}>
                      <Icon size={26} />
                    </span>
                    <span className={styles.divisionBadge}>
                      <Sparkles size={12} />
                      Coming soon
                    </span>
                  </div>
                  <h3>{d.name}</h3>
                  <p>{d.desc}</p>
                </StaggerItem>
              )
            })}
          </StaggerGroup>

          <Reveal direction="up" className={styles.divisionsCta}>
            <p>Interested in partnering or distributing these ranges?</p>
            <Link to="/contact" className="btn">
              Talk to our team
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTA />

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </PageTransition>
  )
}
