import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Microscope,
  Globe2,
  Star,
} from 'lucide-react'

import SmartImage from '../Common/SmartImage'
import { images } from '../../data/images'
import { company } from '../../data/site'
import styles from './Hero.module.css'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const trustChips = [
  { icon: ShieldCheck, label: 'WHO-GMP Certified' },
  { icon: Microscope, label: 'Research Driven' },
  { icon: Globe2, label: 'Pan-India Reach' },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <span className={`blob ${styles.blobA}`} />
      <span className={`blob ${styles.blobB}`} />
      <div className={styles.grid}></div>

      <div className={`container container--wide ${styles.inner}`}>
        <motion.div
          className={styles.copy}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.span className="eyebrow" variants={item}>
            <Star size={14} strokeWidth={2.4} />
            {company.tagline}
          </motion.span>

          <motion.h1 className={styles.title} variants={item}>
            Quality healthcare,{' '}
            <span className="gradient-text">made accessible</span>
          </motion.h1>

          <motion.p className={styles.sub} variants={item}>
            {company.name} brings research-driven pharmaceutical and
            nutraceutical products to market — developed with care, produced at
            WHO-GMP certified facilities, and trusted by families, clinicians
            and partners worldwide.
          </motion.p>

          <motion.div className={styles.actions} variants={item}>
            <Link to="/products" className="btn">
              Explore Products
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              <PlayCircle size={18} />
              Partner with us
            </Link>
          </motion.div>

          <motion.ul className={styles.trust} variants={item}>
            {trustChips.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={17} />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className={styles.imageWrap}>
            <SmartImage
              src={images.hero}
              alt="Quality pharmaceutical medicines and supplements"
              ratio="4 / 5"
              loading="eager"
              className={styles.heroImage}
            />
          </div>

          {/* Floating stat card */}
          <motion.div
            className={`glass ${styles.floatCard}`}
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className={styles.floatIcon}>
              <ShieldCheck size={22} />
            </span>
            <div>
              <strong>99.8%</strong>
              <small>Quality pass rate</small>
            </div>
          </motion.div>

          {/* Floating rating card */}
          <motion.div
            className={`glass ${styles.floatCard} ${styles.floatCardTop}`}
            initial={{ opacity: 0, x: -30, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <span className={`${styles.floatIcon} ${styles.floatIconTeal}`}>
              <Microscope size={22} />
            </span>
            <div>
              <strong>250+</strong>
              <small>Formulations</small>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
