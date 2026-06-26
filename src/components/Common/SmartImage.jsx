import { useState } from 'react'
import styles from './SmartImage.module.css'

/**
 * Image wrapper that:
 *  - reserves space via an aspect-ratio box (no layout shift),
 *  - shows a shimmering gradient skeleton until the image decodes,
 *  - falls back to a branded gradient panel if the source fails to load.
 *
 * Designed so placeholder URLs can be swapped for real assets later without
 * touching any layout — see `src/data/images.js`.
 */
export default function SmartImage({
  src,
  alt = '',
  ratio = '4 / 3',
  className = '',
  imgClassName = '',
  loading = 'lazy',
  fit = 'cover',
}) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`${styles.frame} ${fit === 'contain' ? styles.contain : ''} ${className}`}
      style={{ aspectRatio: ratio }}
      data-loaded={loaded}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className={`${styles.img} smartimg ${imgClassName}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
      {(!loaded || failed) && (
        <span className={styles.skeleton} aria-hidden="true">
          <span className={styles.shine} />
        </span>
      )}
    </div>
  )
}
