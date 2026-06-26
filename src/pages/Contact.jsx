import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MapPinned,
  Navigation,
  Building2,
  FileBadge,
  ReceiptText,
  CalendarCheck,
} from 'lucide-react'

import PageTransition from '../components/Common/PageTransition'
import PageHero from '../components/Common/PageHero'
import Reveal from '../components/Common/Reveal'
import { StaggerGroup, StaggerItem } from '../components/Common/StaggerGroup'
import ContactForm from '../components/ContactForm/ContactForm'

import { company, businessHours } from '../data/site'
import styles from './Contact.module.css'

const CONTACT_CARDS = [
  {
    icon: MapPin,
    title: 'Registered Office',
    lines: [company.address.line1, company.address.line2],
  },
  {
    icon: Building2,
    title: 'Marketing Office',
    lines: [company.marketingOffice.line1, company.marketingOffice.line2],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: [company.phone, 'Mon – Sat, 9am – 6:30pm'],
    href: `tel:${company.phoneHref}`,
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [company.email, 'We reply within 1 business day'],
    href: `mailto:${company.email}`,
  },
]

const COMPANY_FACTS = [
  { icon: FileBadge, label: 'CIN', value: company.cin },
  { icon: ReceiptText, label: 'GST No.', value: company.gst },
  { icon: CalendarCheck, label: 'Registered', value: company.registeredOn },
]

export default function Contact() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Get in Touch"
        title="We’d love to"
        highlight="hear from you"
        crumb="Contact Us"
        subtitle="Questions about our products, partnerships or manufacturing? Reach out — our team is here to help."
      />

      {/* ---- Contact info cards ---- */}
      <section className="section section--tight">
        <div className="container container--wide">
          <StaggerGroup className={styles.cards}>
            {CONTACT_CARDS.map((c) => {
              const Inner = (
                <>
                  <span className={styles.cardIcon}>
                    <c.icon size={24} />
                  </span>
                  <h3>{c.title}</h3>
                  {c.lines.map((line, i) => (
                    <p key={i} className={i === 0 ? styles.cardPrimary : ''}>
                      {line}
                    </p>
                  ))}
                </>
              )
              return (
                <StaggerItem key={c.title}>
                  {c.href ? (
                    <a href={c.href} className={styles.card}>
                      {Inner}
                    </a>
                  ) : (
                    <div className={styles.card}>{Inner}</div>
                  )}
                </StaggerItem>
              )
            })}
          </StaggerGroup>

          {/* Statutory company facts */}
          <Reveal direction="up" className={styles.facts}>
            {COMPANY_FACTS.map((f) => (
              <div key={f.label} className={styles.fact}>
                <span className={styles.factIcon}>
                  <f.icon size={18} />
                </span>
                <div>
                  <small>{f.label}</small>
                  <strong>{f.value}</strong>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---- Form + hours ---- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container container--wide">
          <div className={styles.layout}>
            <Reveal direction="right" className={styles.formCol}>
              <ContactForm />
            </Reveal>

            <div className={styles.sideCol}>
              {/* Business hours */}
              <Reveal direction="left" className={styles.hoursCard}>
                <div className={styles.hoursHead}>
                  <span className={styles.hoursIcon}>
                    <Clock size={22} />
                  </span>
                  <div>
                    <h3>Business Hours</h3>
                    <p>Our team is available during these times.</p>
                  </div>
                </div>
                <ul className={styles.hoursList}>
                  {businessHours.map((h) => {
                    const closed = h.time.toLowerCase() === 'closed'
                    return (
                      <li key={h.day}>
                        <span>{h.day}</span>
                        <span
                          className={`${styles.hoursTime} ${
                            closed ? styles.closed : ''
                          }`}
                        >
                          {h.time}
                        </span>
                      </li>
                    )
                  })}
                </ul>
                <div className={styles.openNow}>
                  <span className={styles.dot} />
                  Typically replies within a few hours
                </div>
              </Reveal>

              {/* Quick contact reminder */}
              <Reveal direction="left" delay={0.1} className={styles.miniCta}>
                <h4>Prefer to call?</h4>
                <p>Speak directly with our customer care team.</p>
                <a href={`tel:${company.phoneHref}`} className="btn btn--block">
                  <Phone size={17} />
                  {company.phone}
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Map placeholder ---- */}
      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container container--wide">
          <Reveal direction="up">
            <div className={styles.map}>
              <div className={styles.mapInner}>
                <span className={styles.mapPin}>
                  <MapPinned size={34} />
                </span>
                <h3>Find us on the map</h3>
                <p>
                  {company.address.line1}, {company.address.line2}
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn--light btn--sm"
                >
                  <Navigation size={16} />
                  Open in Google Maps
                </a>
                <span className={styles.mapNote}>
                  Interactive map embed reserved for this space
                </span>
              </div>

              {/* Decorative faux-map grid */}
              <div className={styles.mapGrid} aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
