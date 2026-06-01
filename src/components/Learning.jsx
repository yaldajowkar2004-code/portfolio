import { Globe, Code2, PenTool, Sparkles, Puzzle, Settings } from 'lucide-react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { useLang } from '../i18n.jsx'

const ICONS = [Globe, Code2, PenTool, Sparkles, Puzzle, Settings]

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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {l.items.map(({ title, text }, i) => {
            const Icon = ICONS[i] || Sparkles
            return (
              <Reveal key={title} delay={(i % 3) * 0.09}>
                <TiltCard className="group h-full rounded-2xl glass p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-glow-sm">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent transition-transform duration-300 group-hover:rotate-6"
                    style={{ transform: 'translateZ(35px)' }}
                  >
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold" style={{ transform: 'translateZ(22px)' }}>
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted" style={{ transform: 'translateZ(14px)' }}>
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
