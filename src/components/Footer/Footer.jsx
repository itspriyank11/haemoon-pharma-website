import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowUp, BadgeCheck, Factory } from 'lucide-react'

import Logo from '../Common/Logo'
import {
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from '../Common/BrandIcons'
import {
  company,
  manufacturer,
  navLinks,
  productLinks,
  socials,
} from '../../data/site'
import styles from './Footer.module.css'

const socialIcon = {
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
}

/** Real brand colours per platform (Instagram uses its signature gradient). */
const socialBrand = {
  linkedin: '#0A66C2',
  twitter: '#101010',
  facebook: '#1877F2',
  instagram:
    'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
}

export default function Footer() {
  const scrollTop = () => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      {/* Main footer */}
      <div className={`container container--wide ${styles.main}`}>
        <div className={styles.brandCol}>
          <Logo variant="light" />
          <p className={styles.about}>
            {company.name} is a research-driven pharmaceutical and nutraceutical
            company committed to delivering world-class, quality-assured health
            products that improve lives across the globe.
          </p>
          <ul className={styles.socials}>
            {socials.map((s) => {
              const Icon = socialIcon[s.icon]
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    style={{ '--brand': socialBrand[s.icon] }}
                  >
                    <Icon size={18} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h4>Products</h4>
          <ul>
            {productLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contactCol}>
          <h4>Get in Touch</h4>
          <ul>
            <li>
              <MapPin size={18} />
              <span>
                {company.address.line1}
                <br />
                {company.address.line2}
              </span>
            </li>
            <li>
              <Phone size={18} />
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </li>
            <li>
              <Mail size={18} />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Marketed by / Manufactured by — boxed strip */}
      <div className="container container--wide">
        <div className={styles.mfgBox}>
          <div className={styles.mfgCol}>
            <span className={styles.mfgLabel}>
              <BadgeCheck size={14} />
              Marketed By
            </span>
            <strong>{company.legalName}</strong>
            <small>
              {company.address.line1}, {company.address.line2}
            </small>
          </div>

          <span className={styles.mfgSep} aria-hidden="true" />

          <div className={styles.mfgCol}>
            <span className={styles.mfgLabel}>
              <Factory size={14} />
              Manufactured By
            </span>
            <strong>{manufacturer.name}</strong>
            <small>
              {manufacturer.office.line1}, {manufacturer.office.line2}
            </small>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={`container container--wide ${styles.bottomInner}`}>
          <div className={styles.bottomLeft}>
            <p>
              © {new Date().getFullYear()} {company.legalName}. All rights
              reserved.
            </p>
            <p className={styles.reg}>
              <span>
                CIN: <strong>{company.cin}</strong>
              </span>
              <span aria-hidden="true">•</span>
              <span>
                GST: <strong>{company.gst}</strong>
              </span>
            </p>
          </div>
          <div className={styles.legal}>
            <Link to="/privacy">Privacy Policy</Link>
            <span aria-hidden="true">•</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={styles.backToTop}
        onClick={scrollTop}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}
