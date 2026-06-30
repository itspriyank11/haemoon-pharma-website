import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall } from 'lucide-react'

import Reveal from '../Common/Reveal'
import { images } from '../../data/images'
import { company } from '../../data/site'
import styles from './CTA.module.css'

/**
 * Full-width call-to-action banner encouraging visitors to get in touch.
 */
export default function CTA() {
  return (
    <section className="section section--tight">
      <div className="container container--wide">
        <Reveal direction="up">
          <div className={styles.banner}>
            <span className={`blob ${styles.blob}`} />

            {/* Right-side image */}
            <div className={styles.media} aria-hidden="true">
              <img src={images.ctaPills} alt="" loading="lazy" />
            </div>

            <div className={styles.content}>
              <span className="eyebrow">Let’s build something healthier</span>
              <h2 className={styles.title}>
                Ready to partner with a pharma company you can trust?
              </h2>
              <p className={styles.text}>
                Whether you’re a distributor, healthcare provider or looking for
                contract manufacturing, our team is ready to help you bring
                quality healthcare to more people.
              </p>

              <div className={styles.actions}>
                <Link to="/contact" className="btn btn--light">
                  Contact Our Team
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="btn btn--outline-light"
                >
                  <PhoneCall size={18} />
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
