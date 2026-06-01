import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Education from './components/Education'
import Learning from './components/Learning'
import Contact from './components/Contact'
import { useLang } from './i18n.jsx'

export default function App() {
  const { t } = useLang()
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const toggleTheme = () => setTheme((th) => (th === 'dark' ? 'light' : 'dark'))

  return (
    <div className="relative min-h-screen overflow-hidden bg-canvas text-ink">
      {/* layered background atmosphere */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.45]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% -5%, rgba(139,92,246,0.12), transparent 45%), radial-gradient(circle at 85% 25%, rgba(168,85,247,0.10), transparent 42%), radial-gradient(circle at 50% 110%, rgba(124,58,237,0.10), transparent 45%)',
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(rgba(168,85,247,0.35) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, #000 35%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, #000 35%, transparent 75%)',
        }}
      />

      <CursorGlow />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Work />
        <Education />
        <Learning />
        <Contact />
      </motion.main>

      <footer className="relative z-10 border-t border-line py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted sm:flex-row">
          <p>
            <span className="font-display font-bold gradient-text">Yalda</span> · {t.footer.tagline}
          </p>
          <p>© {new Date().getFullYear()} — {t.footer.built}</p>
        </div>
      </footer>
    </div>
  )
}
