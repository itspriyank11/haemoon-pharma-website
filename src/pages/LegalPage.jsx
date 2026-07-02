import { CalendarClock } from 'lucide-react'

import PageTransition from '../components/Common/PageTransition'
import PageHero from '../components/Common/PageHero'
import Seo from '../components/Common/Seo'
import Reveal from '../components/Common/Reveal'
import { company } from '../data/site'
import styles from './Legal.module.css'

/**
 * Shared layout for long-form legal pages (Privacy Policy, Terms of Service).
 *
 * Renders the standard PageHero followed by a centered prose column. Content is
 * passed as `sections` — an array of `{ heading, body }`, where `body` is an
 * array of paragraph strings and/or `{ list: [...] }` bullet blocks.
 */
export default function LegalPage({
  eyebrow,
  title,
  highlight,
  subtitle,
  updated,
  intro,
  sections = [],
  seoTitle,
  seoDescription,
  children,
}) {
  return (
    <PageTransition>
      <Seo title={seoTitle} description={seoDescription} />

      <PageHero
        eyebrow={eyebrow}
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      <section className="section section--tight">
        <div className="container container--wide">
          <div className={styles.wrap}>
            <Reveal direction="up">
              <span className={styles.updated}>
                <CalendarClock size={15} />
                Last updated: {updated}
              </span>
            </Reveal>

            {intro && (
              <Reveal direction="up">
                <p className={styles.intro}>{intro}</p>
              </Reveal>
            )}

            {sections.map((s, i) => (
              <Reveal key={s.heading} direction="up" className={styles.section}>
                <h2>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  {s.heading}
                </h2>
                {s.body.map((block, j) =>
                  typeof block === 'string' ? (
                    <p key={j}>{block}</p>
                  ) : (
                    <ul key={j}>
                      {block.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ),
                )}
              </Reveal>
            ))}

            <Reveal direction="up">
              <div className={styles.contactCard}>
                <h3>Questions about this policy?</h3>
                <p>
                  Contact <strong>{company.legalName}</strong> at{' '}
                  <a href={`mailto:${company.email}`}>{company.email}</a> or{' '}
                  <a href={`tel:${company.phoneHref}`}>{company.phone}</a>.
                  <br />
                  {company.address.line1}, {company.address.line2}
                </p>
              </div>
            </Reveal>

            {children}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
