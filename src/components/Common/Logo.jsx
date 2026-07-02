import { Link } from 'react-router-dom'
import { company } from '../../data/site'
import logoMark from '../../assets/icons/haemoon-logo.png'
import styles from './Logo.module.css'

/**
 * Brand lockup for Haemoon Pharma: the gold medical-cross + heart mark wrapped
 * in an orbit swoosh, alongside the wordmark.
 *
 * The mark is the real logo art (transparent PNG) so it reads cleanly on both
 * light surfaces (navbar) and the dark footer via `variant="light"`.
 */
export default function Logo({ variant = 'dark', onClick }) {
  return (
    <Link
      to="/"
      className={`${styles.logo} ${variant === 'light' ? styles.light : ''}`}
      onClick={onClick}
      aria-label={`${company.name} — home`}
    >
      <span className={styles.mark} aria-hidden="true">
        <img src={logoMark} alt="" />
      </span>
      <span className={styles.word}>
        <strong>Haemoon</strong>
        <em>Pharma Pvt. Ltd.</em>
      </span>
    </Link>
  )
}
