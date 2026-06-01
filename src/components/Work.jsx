import { GraduationCap, Code2, Rocket } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { useLang } from '../i18n.jsx'

const ICONS = [GraduationCap, Code2, Rocket]

function Status({ state, label }) {
  const reduce = useReducedMotion()
  const live = state === 'live'
  const tone = live
    ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
    : 'border-accent/30 bg-accent/10 text-accent'
  const dot = live ? 'bg-emerald-400' : 'bg-accent'
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${tone}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dot} ${reduce ? '' : 'animate-pulse'}`} />
      {label}
    </span>
  )
}

export default function Work() {
  const { t } = useLang()
  const w = t.work

  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            {w.lead} <span className="text-accent">{w.accent}</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {w.cards.map((card, i) => {
            const Icon = ICONS[i] || Rocket
            return (
              <Reveal key={card.title} delay={i * 0.1}>
                <TiltCard className="ring-gradient flex h-full flex-col overflow-hidden rounded-2xl glass p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-glow">
                  <div className="flex items-start justify-between" style={{ transform: 'translateZ(32px)' }}>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent">
                      <Icon size={22} />
                    </span>
                    <Status state={card.state} label={card.status} />
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold" style={{ transform: 'translateZ(22px)' }}>
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted" style={{ transform: 'translateZ(14px)' }}>
                    {card.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2" style={{ transform: 'translateZ(20px)' }}>
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-line bg-canvas-2/50 px-2.5 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
