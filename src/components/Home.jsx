import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Linkedin, Github } from 'lucide-react'
import usePointer from '../hooks/usePointer'
import Particles from './Particles'
import { useLang } from '../i18n.jsx'

const SOCIALS = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Mail, label: 'Email', href: 'mailto:yaldajowkar2004@gmail.com' },
]

const EMAIL = 'yaldajowkar2004@gmail.com'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Home() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const { x, y } = usePointer()
  const photoRef = useRef(null)
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  // Ambient parallax (global pointer) for aura + bokeh
  const soft = { stiffness: 55, damping: 20 }
  const auraX = useSpring(useTransform(x, [-0.5, 0.5], [22, -22]), soft)
  const auraY = useSpring(useTransform(y, [-0.5, 0.5], [22, -22]), soft)
  const dotAX = useSpring(useTransform(x, [-0.5, 0.5], [-30, 30]), soft)
  const dotAY = useSpring(useTransform(y, [-0.5, 0.5], [-20, 20]), soft)
  const dotBX = useSpring(useTransform(x, [-0.5, 0.5], [36, -36]), soft)

  // Elegant local tilt (cursor over the photo)
  const lmx = useMotionValue(0)
  const lmy = useMotionValue(0)
  const tiltX = useSpring(useTransform(lmy, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 14 })
  const tiltY = useSpring(useTransform(lmx, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 14 })

  const onPhotoMove = (e) => {
    if (reduce) return
    const r = photoRef.current.getBoundingClientRect()
    lmx.set((e.clientX - r.left) / r.width - 0.5)
    lmy.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onPhotoLeave = () => {
    lmx.set(0)
    lmy.set(0)
  }

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <Particles count={42} />

      <motion.div
        animate={reduce ? {} : { opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-[120px]"
      />
      <div className="pointer-events-none absolute top-40 right-0 h-96 w-96 rounded-full bg-accent-2/15 blur-[130px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 lg:gap-16">
        {/* Left — copy */}
        <motion.div
          variants={container}
          initial={reduce ? false : 'hidden'}
          animate={reduce ? false : 'show'}
          className="order-2 md:order-1"
        >
          <motion.p variants={item} className="text-base font-medium text-muted">
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            variants={item}
            className="relative mt-1 font-display text-6xl font-extrabold leading-none tracking-tight sm:text-7xl"
          >
            <span className="relative inline-block">
              {/* large ambient purple glow behind the word */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[135%] -translate-x-1/2 -translate-y-1/2 select-none rounded-full bg-accent/30 blur-[55px]"
              />
              {/* blurred purple twin hugging the letters */}
              <span aria-hidden className="pointer-events-none absolute inset-0 select-none text-accent opacity-80 blur-[14px]">
                Yalda
              </span>
              <span
                className="relative text-ink"
                style={{
                  textShadow:
                    '0 0 18px rgba(196,160,255,0.65), 0 0 44px rgba(168,85,247,0.55), 0 0 90px rgba(139,92,246,0.35)',
                }}
              >
                Yalda
              </span>
            </span>
          </motion.h1>

          <motion.h2 variants={item} className="mt-4 text-lg font-semibold sm:text-xl">
            {t.hero.role}
            <br className="hidden sm:block" />
            <span className="text-ink">{t.hero.roleConnector}</span>
            <span className="text-accent">{t.hero.roleAccent}</span>
          </motion.h2>

          <motion.p variants={item} className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            {t.hero.description}
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
            <motion.button onClick={() => scrollTo('about')} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="btn btn-primary">
              {t.hero.aboutBtn} <ArrowRight size={16} />
            </motion.button>
            <motion.button onClick={() => scrollTo('contact')} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="btn btn-ghost">
              {t.hero.contactBtn} <Mail size={16} />
            </motion.button>
          </motion.div>

          {/* Contact info card — full, untruncated email */}
          <motion.div variants={item} className="mt-8 max-w-md rounded-2xl glass p-5">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="text-xs text-muted">{t.hero.locationLabel}</p>
                  <p className="text-sm font-medium">{t.hero.locationValue}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                  <Mail size={16} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-muted">{t.hero.emailLabel}</p>
                  <a href={`mailto:${EMAIL}`} className="block break-all text-sm font-medium transition-colors hover:text-accent">
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-3 border-t border-line pt-5">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.92 }}
                  className="social-btn"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — portrait that fades into the scene + gentle 3D tilt on hover */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end" style={{ perspective: 1100 }}>
          <motion.div
            ref={photoRef}
            onMouseMove={onPhotoMove}
            onMouseLeave={onPhotoLeave}
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={reduce ? false : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: 'preserve-3d' }}
            className="relative aspect-[4/5] w-full max-w-sm"
          >
            {/* aura behind (purple + white) — not masked, gives the faded edges something to melt into */}
            <motion.div
              style={{ x: auraX, y: auraY }}
              animate={reduce ? {} : { scale: [1, 1.06, 1], opacity: [0.6, 0.85, 0.6] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-12 -z-10 rounded-full blur-3xl"
              aria-hidden
            >
              <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.5),rgba(168,85,247,0.5)_38%,rgba(124,58,237,0.22)_60%,transparent_75%)]" />
            </motion.div>

            {/* frame — the mask on this container feathers ALL edges (and the overlays inside it) */}
            <div
              className="relative h-full w-full overflow-hidden rounded-[2rem]"
              style={{
                transform: 'translateZ(45px)',
                maskImage: 'radial-gradient(100% 100% at 50% 42%, #000 45%, rgba(0,0,0,0.45) 70%, transparent 90%)',
                WebkitMaskImage: 'radial-gradient(100% 100% at 50% 42%, #000 45%, rgba(0,0,0,0.45) 70%, transparent 90%)',
              }}
            >
              <img src="/photo.jpg" alt="Yalda" loading="eager" className="h-full w-full object-cover object-top" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent-2/25 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_28%,transparent_52%,rgba(5,5,11,0.6))]" />
              <div className="pointer-events-none absolute -inset-x-10 -top-12 h-32 -rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-2xl" />
            </div>

            {/* floating bokeh in front for depth */}
            <motion.span style={{ x: dotAX, y: dotAY, transform: 'translateZ(80px)' }} className="absolute -left-5 top-14 h-3 w-3 rounded-full bg-accent/80 blur-[1px]" aria-hidden />
            <motion.span style={{ x: dotBX, transform: 'translateZ(70px)' }} className="absolute -right-3 bottom-24 h-2 w-2 rounded-full bg-white/70 blur-[1px]" aria-hidden />
            <motion.span animate={reduce ? {} : { y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-10 top-6 h-1.5 w-1.5 rounded-full bg-accent-2" aria-hidden />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
