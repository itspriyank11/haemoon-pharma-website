import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

import SmartImage from './SmartImage'
import styles from './PageHero.module.css'

/**
 * Inner-page hero banner.
 *
 * - Without `image`: a centered banner (used by Contact).
 * - With `image`: a two-column layout (content left, image right with floating
 *   accent cards) mirroring the landing-page hero (used by Products).
 *
 * Animations use `whileInView` (never `once`) so the hero replays its intro
 * each time it scrolls back into view — matching the rest of the site.
 *
 * @param {string} image          optional hero image src
 * @param {string} imageAlt       alt text for the image
 * @param {Array}  stats          optional floating cards [{value, label}]
 */

// Reveal-on-view config shared by every animated element below.
const view = { once: false, amount: 0.2 }

// A vertical fade-in, parameterised by start offset and delay.
const rise = (delay = 0, y = 18) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: view,
  transition: { duration: 0.6, delay },
})

export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  description,
  points = [],
  features = [],
  image,
  imageAlt = '',
  stats = [],
}) {
  const withImage = Boolean(image)

  const content = (
    <>
      {eyebrow && (
        <motion.span className="eyebrow" {...rise(0.08, 14)}>
          {eyebrow}
        </motion.span>
      )}

      <motion.h1 className={styles.title} {...rise(0.14)}>
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h1>

      {subtitle && (
        <motion.p className={styles.sub} {...rise(0.22)}>
          {subtitle}
        </motion.p>
      )}

      {description && (
        <motion.p className={styles.desc} {...rise(0.3)}>
          {description}
        </motion.p>
      )}

      {features.length > 0 && (
        <motion.ul
          className={styles.features}
          initial="hidden"
          whileInView="visible"
          viewport={view}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
          }}
        >
          {features.map(({ icon: Icon, title: t, text }) => (
            <motion.li
              key={t}
              className={styles.feature}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -4 }}
            >
              <span className={styles.featureIcon}>
                <Icon size={20} strokeWidth={2.2} />
              </span>
              <div className={styles.featureBody}>
                <strong>{t}</strong>
                <span>{text}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      )}

      {points.length > 0 && (
        <motion.ul className={styles.points} {...rise(0.38)}>
          {points.map((point) => (
            <li key={point} className={styles.point}>
              <span className={styles.pointIcon}>
                <Check size={14} strokeWidth={3} />
              </span>
              {point}
            </li>
          ))}
        </motion.ul>
      )}
    </>
  )

  return (
    <section className={`${styles.hero} ${withImage ? styles.heroSplit : ''}`}>
      <span className={`blob ${styles.blobA}`} />
      <span className={`blob ${styles.blobB}`} />
      <div className={styles.grid} aria-hidden="true" />

      {withImage ? (
        <div className={`container container--wide ${styles.split}`}>
          <div className={styles.copy}>{content}</div>

          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={view}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className={styles.imageWrap}>
              <SmartImage
                src={image}
                alt={imageAlt}
                ratio="4 / 5"
                loading="eager"
                className={styles.heroImage}
              />
            </div>

            {stats[0] && (
              <motion.div
                className={`glass ${styles.floatCard} ${styles.floatTop}`}
                initial={{ opacity: 0, x: -24, y: -16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={view}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <strong>{stats[0].value}</strong>
                <small>{stats[0].label}</small>
              </motion.div>
            )}
            {stats[1] && (
              <motion.div
                className={`glass ${styles.floatCard} ${styles.floatBottom}`}
                initial={{ opacity: 0, x: 24, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={view}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <strong>{stats[1].value}</strong>
                <small>{stats[1].label}</small>
              </motion.div>
            )}
          </motion.div>
        </div>
      ) : (
        <div className={`container container--wide ${styles.inner}`}>{content}</div>
      )}
    </section>
  )
}
