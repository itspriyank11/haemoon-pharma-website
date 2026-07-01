import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
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
import SectionHeading from '../components/Common/SectionHeading'
import Reveal from '../components/Common/Reveal'
import { StaggerGroup, StaggerItem } from '../components/Common/StaggerGroup'
import ProductCard from '../components/ProductCard/ProductCard'
import ProductModal from '../components/ProductCard/ProductModal'
import CTA from '../components/CTA/CTA'

import { products, categories, therapeuticDivisions } from '../data/products'
import { images } from '../data/images'
import styles from './Products.module.css'

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

export default function Products() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState(null)

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
          { value: '8+', label: 'Products' },
          { value: '4', label: 'Categories' },
        ]}
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
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.id}
                    layout
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
