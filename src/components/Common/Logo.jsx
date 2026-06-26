import { Link } from 'react-router-dom'
import { company } from '../../data/site'
import styles from './Logo.module.css'

/**
 * Brand lockup for Haemoon Pharma: a gold medical-cross + heart mark wrapped in
 * an orbit swoosh, alongside the wordmark.
 *
 * The mark is rendered as inline SVG (rather than the supplied white-background
 * JPEG) so it stays crisp at any size and reads cleanly on both light surfaces
 * (navbar) and the dark footer via `variant="light"`.
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
        <svg viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient
              id="goldGrad"
              x1="8"
              y1="6"
              x2="56"
              y2="58"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f6e27a" />
              <stop offset="0.5" stopColor="#e0b73e" />
              <stop offset="1" stopColor="#bf922b" />
            </linearGradient>
          </defs>

          {/* Orbit swoosh */}
          <path
            d="M52 14c6 7 7 17 2 25-6 9-18 13-29 10"
            stroke="url(#goldGrad)"
            strokeWidth="4.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
          <path
            d="M12 50c-6-7-7-17-2-25C16 16 28 12 39 15"
            stroke="url(#goldGrad)"
            strokeWidth="4.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />

          {/* Medical cross */}
          <path
            d="M27 9h10a2 2 0 0 1 2 2v8h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8v8a2 2 0 0 1-2 2H27a2 2 0 0 1-2-2v-8h-8a2 2 0 0 1-2-2V21a2 2 0 0 1 2-2h8v-8a2 2 0 0 1 2-2Z"
            fill="url(#goldGrad)"
          />

          {/* Heart cutout */}
          <path
            d="M32 39.5c-4.4-3.2-7.2-5.7-7.2-8.7a3.6 3.6 0 0 1 6.5-2.1l.7.9.7-.9a3.6 3.6 0 0 1 6.5 2.1c0 3-2.8 5.5-7.2 8.7Z"
            fill="#fffbe9"
          />
        </svg>
      </span>
      <span className={styles.word}>
        <strong>Haemoon</strong>
        <em>Pharma Pvt. Ltd.</em>
      </span>
    </Link>
  )
}
