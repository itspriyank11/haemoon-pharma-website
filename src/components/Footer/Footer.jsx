import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowUp, Send } from 'lucide-react'

import Logo from '../Common/Logo'
import {
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from '../Common/BrandIcons'
import {
  company,
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

export default function Footer() {
  const scrollTop = () => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      {/* Newsletter strip */}
      <div className="container container--wide">
        <div className={styles.newsletter}>
          <div>
            <h3 className={styles.nlTitle}>Stay informed with Haemoon</h3>
            <p className={styles.nlText}>
              Get product updates, research highlights and wellness insights —
              straight to your inbox.
            </p>
          </div>
          <form
            className={styles.nlForm}
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter sign-up"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />
            <button type="submit" className="btn">
              Subscribe
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

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
            <a href="#privacy">Privacy Policy</a>
            <span aria-hidden="true">•</span>
            <a href="#terms">Terms of Service</a>
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
