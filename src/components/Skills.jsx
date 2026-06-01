import { Code2, Wrench, Globe, Database, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { useLang } from '../i18n.jsx'

export default function Skills() {
  const { t } = useLang()
  const s = t.skills

  const GROUPS = [
    { icon: Code2, title: s.programming, items: ['Python', 'JavaScript', 'Java', 'C'] },
    { icon: Wrench, title: s.tools, items: ['Git', 'GitHub', 'VS Code', 'Linux'] },
    { icon: Globe, title: s.web, items: ['HTML', 'CSS', 'Responsive Design', 'JavaScript'] },
    { icon: Database, title: s.database, items: ['SQL', 'MySQL'] },
  ]

  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            {s.lead} <span className="text-accent">{s.accent}</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map(({ icon: Icon, title, items }, i) => (
            <Reveal key={title} delay={i * 0.09}>
              <TiltCard className="h-full rounded-2xl glass p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-glow-sm">
                <div className="flex items-center gap-3" style={{ transform: 'translateZ(28px)' }}>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{title}</h3>
                </div>
                <ul className="mt-5 space-y-2.5" style={{ transform: 'translateZ(16px)' }}>
                  {items.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-sm text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="ring-gradient mt-4 overflow-hidden rounded-2xl glass p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 sm:shrink-0">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Sparkles size={18} />
                </span>
                <h3 className="font-display text-lg font-semibold">{s.exploring}</h3>
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
