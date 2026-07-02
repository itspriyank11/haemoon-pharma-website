import { Navigation } from 'lucide-react'

import addressIcon from '../assets/icons/loc-address.svg'
import phoneIcon from '../assets/icons/loc-phone.svg'
import emailIcon from '../assets/icons/loc-email.svg'
import timingIcon from '../assets/icons/loc-timing.svg'

import PageTransition from '../components/Common/PageTransition'
import PageHero from '../components/Common/PageHero'
import Seo from '../components/Common/Seo'
import Reveal from '../components/Common/Reveal'
import { StaggerGroup, StaggerItem } from '../components/Common/StaggerGroup'
import ContactForm from '../components/ContactForm/ContactForm'

import { company } from '../data/site'
import { images } from '../data/images'
import styles from './Contact.module.css'

const CONTACT_CARDS = [
  {
    img: addressIcon,
    title: 'Address',
    lines: [company.address.line1, company.address.line2],
  },
  {
    img: phoneIcon,
    title: 'Phone Number',
    lines: [company.phone],
    href: `tel:${company.phoneHref}`,
  },
  {
    img: timingIcon,
    title: 'Timing',
    lines: [company.timing],
  },
  {
    img: emailIcon,
    title: 'Email ID',
    lines: [company.email],
    href: `mailto:${company.email}`,
  },
]


export default function Contact() {
  return (
    <PageTransition>
      <Seo
        title="Contact Us"
        description="Get in touch with Haemoon Pharma Pvt. Ltd. — reach out about our products, partnerships or manufacturing. Registered office in Rairangpur, Mayurbhanj, Odisha, India."
      />

      <PageHero
        eyebrow="Get in Touch"
        title="We’d love to"
        highlight="hear from you"
        subtitle="We are always working to deliver the best for you. Reach out about our products, partnerships or manufacturing."
      />

      {/* ---- Connect: angled globe panel + form ---- */}
      <section className="section section--tight" id="connect">
        <div className="container container--wide">
          <div className={styles.connect}>
            {/* Left: image panel */}
            <Reveal direction="right" className={styles.globePanel}>
              <img
                src={images.connect}
                alt="A Haemoon Pharma customer-care representative ready to help"
                className={styles.connectImg}
                loading="lazy"
              />
            </Reveal>

            {/* Right: form */}
            <Reveal direction="left" className={styles.formCol}>
              <ContactForm withHeader />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Where you can find us ---- */}
      <section className="section section--soft" id="find-us">
        <div className="container container--wide">
          <div className={styles.findLayout}>
            {/* Left: heading + contact details */}
            <div className={styles.findCol}>
              <Reveal direction="up">
                <h2 className={styles.findTitle}>
                  Where you can <span className="gradient-text">find us</span>
                </h2>
              </Reveal>

              <StaggerGroup className={styles.findList}>
                {CONTACT_CARDS.map((c) => {
                const Inner = (
                  <>
                    <span className={styles.findIcon}>
                      <img src={c.img} alt="" />
                    </span>
                    <div>
                      <h3>{c.title}</h3>
                      {c.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </>
                )
                return (
                  <StaggerItem key={c.title}>
                    {c.href ? (
                      <a href={c.href} className={styles.findItem}>
                        {Inner}
                      </a>
                    ) : (
                      <div className={styles.findItem}>{Inner}</div>
                    )}
                  </StaggerItem>
                )
              })}
              </StaggerGroup>
            </div>

            {/* Right: Google Map */}
            <Reveal direction="left" className={styles.mapWrap}>
              <iframe
                title="Haemoon Pharma location map"
                src={company.mapEmbed}
                className={styles.mapFrame}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={company.mapLink}
                target="_blank"
                rel="noreferrer noopener"
                className={`btn btn--light btn--sm ${styles.mapBtn}`}
              >
                <Navigation size={16} />
                Open in Google Maps
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
