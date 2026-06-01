import { MapPin } from 'lucide-react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { useLang } from '../i18n.jsx'

function Badge({ children, tone = 'accent' }) {
  const styles =
    tone === 'accent'
      ? 'bg-accent/15 text-accent border-accent/30'
      : 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30'
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${styles}`}>
      {children}
    </span>
  )
}

export default function Education() {
  const { t } = useLang()
  const e = t.education

  return (
    <section id="education" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            {e.lead} <span className="text-accent">{e.accent}</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-5">
          {/* Card 1 — University of Rome Tor Vergata (uploaded logo) */}
          <Reveal>
            <TiltCard
              max={5}
              className="ring-gradient grid items-center gap-6 overflow-hidden rounded-3xl glass p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-glow sm:p-8 md:grid-cols-[208px_1fr]"
            >
              {/* logo plate — background matches the logo's own field so it sits seamlessly */}
              <div
                className="relative flex h-28 w-52 items-center justify-center justify-self-center overflow-hidden rounded-2xl p-4 ring-1 ring-black/10 md:justify-self-start"
                style={{ backgroundColor: '#d9d9d9', transform: 'translateZ(45px)', boxShadow: '0 18px 40px -18px rgba(0,0,0,0.6)' }}
              >
                <img
                  src="/tor-vergata-logo.png"
                  alt="University of Rome Tor Vergata logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div style={{ transform: 'translateZ(22px)' }}>
                <h3 className="font-display text-xl font-semibold">{e.uniTitle}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{e.uniSchool}</p>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted">
                  <MapPin size={13} /> {e.uniLocation}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{e.uniDesc}</p>
                <div className="mt-4">
                  <Badge>{e.uniBadge}</Badge>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Card 2 — Diploma / Aviation (uploaded jet engine image) */}
          <Reveal delay={0.12}>
            <TiltCard
              max={5}
              className="ring-gradient grid items-center gap-8 overflow-hidden rounded-3xl glass p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-glow sm:p-8 md:grid-cols-[230px_1fr]"
            >
              {/* engine — black field feathered into the card, with a purple glow */}
              <div className="relative w-full max-w-[230px] justify-self-center md:justify-self-start" style={{ transform: 'translateZ(50px)' }}>
                <div className="pointer-events-none absolute inset-2 -z-10 rounded-full bg-accent/25 blur-3xl" aria-hidden />
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl"
                  style={{
                    maskImage: 'radial-gradient(120% 118% at 50% 50%, #000 64%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(120% 118% at 50% 50%, #000 64%, transparent 100%)',
                  }}
                >
                  <img
                    src="/jet-engine.webp"
                    alt="Conceptual jet engine turbofan"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div style={{ transform: 'translateZ(22px)' }}>
                <h3 className="font-display text-xl font-semibold">{e.dipTitle}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                  <MapPin size={13} /> {e.dipLocation}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{e.dipDesc}</p>
                <div className="mt-4">
                  <Badge tone="green">{e.dipBadge}</Badge>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
