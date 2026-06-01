import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Github, Linkedin, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'
import { useLang } from '../i18n.jsx'

const EMAIL = 'yaldajowkar2004@gmail.com'
const SOCIALS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { icon: Mail, label: 'Email', href: `mailto:${EMAIL}` },
]
const EMPTY = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((err) => ({ ...err, [key]: undefined }))
    setSent(false)
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = c.errName
    if (!form.email.trim()) next.email = c.errEmail
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = c.errEmailValid
    if (!form.subject.trim()) next.subject = c.errSubject
    if (!form.message.trim()) next.message = c.errMessage
    return next
  }

  const handleSubmit = () => {
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSent(true)
      setForm(EMPTY)
    }
  }

  const fields = [
    { key: 'name', label: c.nameLabel, type: 'text' },
    { key: 'email', label: c.emailFieldLabel, type: 'email' },
    { key: 'subject', label: c.subjectLabel, type: 'text' },
  ]

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 lg:gap-14">
        {/* Left — info */}
        <Reveal>
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              {c.lead}
              {c.glue ? '' : ' '}
              <span className="text-accent">{c.accent}</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">{c.intro}</p>

            <motion.a
              href={`mailto:${EMAIL}`}
              whileHover={{ y: -4 }}
              className="mt-8 flex items-center gap-4 rounded-2xl glass p-5 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-glow-sm"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                <Mail size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted">{c.emailLabel}</p>
                <p className="break-all text-sm font-medium">{EMAIL}</p>
              </div>
            </motion.a>

            <p className="mt-8 text-sm font-medium text-muted">{c.connect}</p>
            <div className="mt-3 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.92 }}
                  className="social-btn"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right — form */}
        <Reveal delay={0.12}>
          <div className="ring-gradient overflow-hidden rounded-3xl glass p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold">{c.formTitle}</h3>

            <div className="mt-6 space-y-4">
              {fields.map(({ key, label, type }) => (
                <div key={key} className="sm:grid sm:grid-cols-[120px_1fr] sm:items-center sm:gap-4">
                  <label htmlFor={key} className="mb-1 block text-sm text-muted sm:mb-0">
                    {label}
                  </label>
                  <div>
                    <input
                      id={key}
                      type={type}
                      value={form[key]}
                      onChange={update(key)}
                      placeholder={label}
                      className="field"
                      aria-invalid={!!errors[key]}
                    />
                    {errors[key] && <p className="mt-1 text-xs text-red-400">{errors[key]}</p>}
                  </div>
                </div>
              ))}

              <div className="sm:grid sm:grid-cols-[120px_1fr] sm:gap-4">
                <label htmlFor="message" className="mb-1 block text-sm text-muted sm:mb-0 sm:pt-3">
                  {c.messageLabel}
                </label>
                <div>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder={c.messageLabel}
                    className="field resize-none"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>
              </div>

              <motion.button onClick={handleSubmit} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="btn btn-primary w-full">
                {c.send} <Send size={16} />
              </motion.button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-sm text-emerald-300"
                >
                  <CheckCircle2 size={16} /> {c.success}
                </motion.p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
