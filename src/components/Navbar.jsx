import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useLang } from '../i18n.jsx'

const IDS = ['home', 'about', 'skills', 'work', 'education', 'learning', 'contact']

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-1" aria-label="Yalda — home">
      <motion.span
        whileHover={{ scale: 1.08, rotate: -3 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className="grid h-9 w-9 place-items-center rounded-xl glass"
        style={{ boxShadow: '0 8px 24px -10px rgba(139,92,246,0.6)' }}
      >
        <span className="font-display text-xl font-extrabold leading-none gradient-text">Y</span>
      </motion.span>
    </a>
  )
}

export default function Navbar({ theme, toggleTheme }) {
  const { t, lang, toggleLang } = useLang()
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = IDS.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const RoundBtn = ({ children, ...props }) => (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors duration-300 hover:text-accent"
      {...props}
    >
      {children}
    </motion.button>
  )

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? 'glass' : 'border border-transparent'
        }`}
      >
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {IDS.map((id) => {
            const isActive = active === id
            return (
              <li key={id} className="relative">
                <button
                  onClick={() => handleNav(id)}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-accent' : 'text-muted hover:text-ink'
                  }`}
                >
                  {t.nav[id]}
                </button>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute -bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-accent"
                    style={{ boxShadow: '0 0 12px 1px rgba(168,85,247,0.8)' }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* language switch */}
          <RoundBtn onClick={toggleLang} aria-label={t.a11y.lang}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={lang}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xs font-bold tracking-wide"
              >
                {lang.toUpperCase()}
              </motion.span>
            </AnimatePresence>
          </RoundBtn>

          {/* theme toggle */}
          <RoundBtn onClick={toggleTheme} aria-label={t.a11y.theme}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </RoundBtn>

          {/* mobile menu */}
          <motion.button
            onClick={() => setOpen((o) => !o)}
            whileTap={{ scale: 0.9 }}
            aria-label={t.a11y.menu}
            className="grid h-10 w-10 place-items-center rounded-full glass text-ink md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-6xl overflow-hidden px-4 md:hidden"
          >
            <ul className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3">
              {IDS.map((id) => {
                const isActive = active === id
                return (
                  <li key={id}>
                    <button
                      onClick={() => handleNav(id)}
                      className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                        isActive ? 'bg-accent/15 text-accent' : 'text-muted hover:bg-canvas-2/60 hover:text-ink'
                      }`}
                    >
                      {t.nav[id]}
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
