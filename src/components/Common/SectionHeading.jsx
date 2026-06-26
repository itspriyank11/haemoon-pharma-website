import Reveal from './Reveal'

/**
 * Consistent section header: optional eyebrow chip, title (with an optional
 * gradient-highlighted fragment) and a supporting subtitle.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = false,
  icon: Icon,
}) {
  return (
    <Reveal
      className={`section-head ${center ? 'section-head--center' : ''}`}
      direction="up"
    >
      {eyebrow && (
        <span className="eyebrow">
          {Icon && <Icon size={14} strokeWidth={2.4} />}
          {eyebrow}
        </span>
      )}
      <h2 className="section-head__title">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-head__sub">{subtitle}</p>}
    </Reveal>
  )
}
