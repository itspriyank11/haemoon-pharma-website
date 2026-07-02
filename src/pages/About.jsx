import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  FlaskConical,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Factory,
  Target,
  Eye,
  Gem,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

import PageTransition from '../components/Common/PageTransition'
import Seo from '../components/Common/Seo'
import Reveal from '../components/Common/Reveal'
import SectionHeading from '../components/Common/SectionHeading'
import { StaggerGroup, StaggerItem } from '../components/Common/StaggerGroup'
import SmartImage from '../components/Common/SmartImage'

import Hero from '../components/Hero/Hero'
import CTA from '../components/CTA/CTA'
import ProductCard from '../components/ProductCard/ProductCard'
import ProductModal from '../components/ProductCard/ProductModal'

import { images } from '../data/images'
import { products } from '../data/products'
import styles from './About.module.css'

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    text: 'Every batch passes rigorous multi-stage testing under WHO-GMP certified processes for guaranteed safety.',
  },
  {
    icon: FlaskConical,
    title: 'Research Driven',
    text: 'A dedicated R&D team continually develops evidence-based formulations backed by clinical insight.',
  },
  {
    icon: Globe2,
    title: 'Global Standards',
    text: 'Our facilities and products comply with international regulatory and quality benchmarks.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Focus',
    text: 'We design every product around real patient and partner needs, with care at the centre.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'We invest in advanced delivery systems and high-bioavailability ingredients that work better.',
  },
  {
    icon: Factory,
    title: 'Trusted Manufacturing',
    text: 'State-of-the-art, audited manufacturing ensures consistency, scale and reliability at every step.',
  },
]

const PILLARS = [
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be a globally trusted name in healthcare, making quality, science-backed wellness accessible to every family.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To research, manufacture and deliver effective, affordable and safe healthcare products that genuinely improve lives.',
  },
  {
    icon: Gem,
    title: 'Our Values',
    text: 'Integrity, scientific rigour, compassion and an uncompromising commitment to quality guide everything we do.',
  },
]

const ABOUT_POINTS = [
  'Produced at WHO-GMP certified facilities',
  'Research-backed, quality-tested formulations',
  'Growing pan-India distribution network',
  'Trusted by clinicians, families & partners',
]

export default function About() {
  // The 4 real Haemoon products (first in the catalogue) feed the strip
  const previewProducts = products.slice(0, 4)
  const [selected, setSelected] = useState(null)

  return (
    <PageTransition>
      <Seo
        title="Haemoon Pharma Pvt. Ltd. — Advancing Health Through Science"
        description="Haemoon Pharma is a research-driven pharmaceutical & nutraceutical company delivering WHO-GMP quality-assured medicines — tablets, capsules, syrups & healthcare products across India."
      />

      {/* ---- HERO ---- */}
      <Hero />

      {/* ---- ABOUT COMPANY ---- */}
      <section className="section" id="about-company">
        <div className="container container--wide">
          <div className={styles.aboutGrid}>
            <Reveal direction="right" className={styles.aboutVisual}>
              <div className={styles.aboutImageStack}>
                <SmartImage
                  src={images.about}
                  alt="Pharmaceutical scientists collaborating in a laboratory"
                  ratio="4 / 5"
                  className={styles.aboutImage}
                />
                <div className={`glass ${styles.expBadge}`}>
                  <strong>18+</strong>
                  <span>Years advancing healthcare</span>
                </div>
              </div>
            </Reveal>

            <div className={styles.aboutCopy}>
              <SectionHeading
                eyebrow="About Haemoon"
                title="A science-led pharma company built on"
                highlight="trust & care"
                subtitle="Founded with a simple belief — that everyone deserves access to safe, effective and affordable healthcare — Haemoon Pharma blends rigorous science with genuine compassion."
              />

              <Reveal direction="up" delay={0.1}>
                <p className={styles.aboutText}>
                  From everyday wellness to advanced nutraceuticals, our
                  products are developed by experts, produced to global quality
                  standards, and trusted by healthcare professionals and
                  families across the country.
                </p>

                <ul className={styles.points}>
                  {ABOUT_POINTS.map((p) => (
                    <li key={p}>
                      <CheckCircle2 size={19} />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className={styles.aboutActions}>
                  <Link to="/products" className="btn">
                    Discover our products
                    <ArrowRight size={18} />
                  </Link>
                  <Link to="/contact" className="btn btn--ghost">
                    Talk to our team
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Vision / Mission / Values */}
          <StaggerGroup className={styles.pillars}>
            {PILLARS.map((p) => (
              <StaggerItem key={p.title} className={styles.pillar}>
                <span className={styles.pillarIcon}>
                  <p.icon size={24} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ---- WHY CHOOSE US ---- */}
      <section className="section section--soft" id="why-us">
        <div className="container container--wide">
          <SectionHeading
            center
            eyebrow="Why Choose Us"
            title="Excellence in every"
            highlight="formulation"
            subtitle="Six reasons partners and patients across the globe place their trust in Haemoon Pharma."
          />

          <StaggerGroup className={styles.featureGrid}>
            {FEATURES.map((f) => (
              <StaggerItem key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon}>
                  <f.icon size={26} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <span className={styles.featureGlow} aria-hidden="true" />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ---- FEATURED PRODUCTS ---- */}
      <section className="section" id="featured-products">
        <div className="container container--wide">
          <div className={styles.previewHead}>
            <SectionHeading
              eyebrow="Our Range"
              title="Featured"
              highlight="products"
              subtitle="Our flagship formulations, trusted by clinicians and families across the moments that matter most for health and wellbeing."
            />
            <Reveal direction="left" className={styles.previewHeadCta}>
              <Link to="/products" className="btn btn--ghost">
                View All Products
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <StaggerGroup className={styles.productStrip}>
            {previewProducts.map((p) => (
              <StaggerItem key={p.id}>
                <ProductCard product={p} onSelect={setSelected} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <CTA />

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </PageTransition>
  )
}
