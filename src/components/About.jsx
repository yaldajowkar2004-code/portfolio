import { Cake, BookOpen, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { useLang } from '../i18n.jsx'

export default function About() {
  const { t } = useLang()
  const a = t.about
  const INFO = [
    { icon: Cake, label: a.birthdayLabel, value: a.birthdayValue },
    { icon: BookOpen, label: a.studyLabel, value: a.studyValue },
    { icon: MapPin, label: a.locationLabel, value: a.locationValue },
  ]

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            {a.lead} <span className="text-accent">{a.accent}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="ring-gradient mt-10 overflow-hidden rounded-3xl glass p-7 sm:p-10">
            <p className="text-sm leading-relaxed text-muted sm:text-base">{a.p1}</p>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">{a.p2}</p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {INFO.map(({ icon: Icon, label, value }, i) => (
            <Reveal key={label} delay={0.12 + i * 0.08}>
              <TiltCard className="flex h-full items-center gap-3 rounded-xl glass p-3.5 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-glow-sm">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent" style={{ transform: 'translateZ(24px)' }}>
                  <Icon size={16} />
                </span>
                <div className="min-w-0" style={{ transform: 'translateZ(16px)' }}>
                  <p className="text-[11px] text-muted">{label}</p>
                  <p className="text-sm font-semibold leading-tight">{value}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
