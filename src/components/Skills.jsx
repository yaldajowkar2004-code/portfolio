import { Code2, Wrench, Globe, Database, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { useLang } from '../i18n.jsx'

export default function Skills() {
  const { t } = useLang()
  const s = t.skills

  // Four categories consolidated into two compact grouped cards.
  const COLUMNS = [
    [
      { icon: Code2, title: s.programming, items: ['Python', 'JavaScript', 'Java', 'C'] },
      { icon: Globe, title: s.web, items: ['HTML', 'CSS', 'Responsive Design', 'JavaScript'] },
    ],
    [
      { icon: Wrench, title: s.tools, items: ['Git', 'GitHub', 'VS Code', 'Linux'] },
      { icon: Database, title: s.database, items: ['SQL', 'MySQL'] },
    ],
  ]

  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            {s.lead} <span className="text-accent">{s.accent}</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {COLUMNS.map((groups, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <TiltCard className="h-full space-y-4 rounded-xl glass p-5 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-glow-sm">
                {groups.map(({ icon: Icon, title, items }) => (
                  <div key={title} style={{ transform: 'translateZ(20px)' }}>
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 text-accent">
                        <Icon size={15} />
                      </span>
                      <h3 className="font-display text-sm font-semibold">{title}</h3>
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {items.map((it) => (
                        <span
                          key={it}
                          className="rounded-md border border-line bg-canvas-2/50 px-2.5 py-1 text-xs text-muted"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Exploring — standalone */}
        <Reveal delay={0.12}>
          <div className="ring-gradient mt-3 overflow-hidden rounded-xl glass p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2.5 sm:shrink-0">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
                  <Sparkles size={16} />
                </span>
                <h3 className="font-display text-base font-semibold">{s.exploring}</h3>
              </div>
              <div className="flex flex-wrap gap-x-7 gap-y-3 sm:pl-4">
                {s.exploringItems.map((it) => (
                  <span key={it} className="flex items-center gap-2.5 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
