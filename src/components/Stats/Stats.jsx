import { Package, Globe2, CalendarClock, HeartHandshake } from 'lucide-react'

import AnimatedCounter from '../Common/AnimatedCounter'
import { StaggerGroup, StaggerItem } from '../Common/StaggerGroup'
import styles from './Stats.module.css'

const STATS = [
  { icon: Package, value: 250, suffix: '+', label: 'Products' },
  { icon: Globe2, value: 40, suffix: '+', label: 'Countries Served' },
  { icon: CalendarClock, value: 18, suffix: '+', label: 'Years of Experience' },
  { icon: HeartHandshake, value: 12000, suffix: '+', label: 'Happy Clients' },
]

export default function Stats() {
  return (
    <section className={styles.wrap}>
      <span className={`blob ${styles.blob}`} />
      <div className="container container--wide">
        <StaggerGroup className={styles.grid}>
          {STATS.map((s) => (
            <StaggerItem key={s.label} className={styles.item}>
              <span className={styles.icon}>
                <s.icon size={26} />
              </span>
              <div className={styles.number}>
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className={styles.label}>{s.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
