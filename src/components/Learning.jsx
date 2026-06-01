import { Sparkles, Puzzle, Settings, Briefcase } from 'lucide-react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { useLang } from '../i18n.jsx'

// Map each card to its icon by title (EN + IT), order-independent.
const ICON_BY_TITLE = {
  'AI Tools': Sparkles,
  'Strumenti AI': Sparkles,
  'Problem Solving': Puzzle,
  'CRM System': Briefcase,
  'Sistemi CRM': Briefcase,
  'Engineering Studies': Settings,
  'Studi di Ingegneria': Settings,
}

export default function Learning() {
  const { t } = useLang()
  const l = t.learning

  return (
    <section id="learning" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            {l.lead} <span className="text-accent">{l.accent}</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {l.items.map(({ title, text }, i) => {
            const Icon = ICON_BY_TITLE[title] || Sparkles
            return (
              <Reveal key={title} delay={(i % 3) * 0.09}>
                <TiltCard className="group h-full rounded-xl glass p-4 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-glow-sm">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent transition-transform duration-300 group-hover:rotate-6"
                    style={{ transform: 'translateZ(32px)' }}
                  >
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-3.5 font-display text-base font-semibold" style={{ transform: 'translateZ(22px)' }}>
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted" style={{ transform: 'translateZ(14px)' }}>
                    {text}
                  </p>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
