import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion'

/**
 * Wraps content in a subtle 3D tilt that follows the cursor, with a moving
 * specular glare. Falls back to a static element when reduced motion is on.
 * `className` styles the visible card (glass, padding, radius…).
 */
export default function TiltCard({ children, className = '', max = 9, glare = true, lift = -6 }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 150, damping: 16, mass: 0.3 })
  const sy = useSpring(my, { stiffness: 150, damping: 16, mass: 0.3 })

  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max])
  const gx = useTransform(sx, [-0.5, 0.5], ['0%', '100%'])
  const gy = useTransform(sy, [-0.5, 0.5], ['0%', '100%'])
  const glareBg = useMotionTemplate`radial-gradient(180px circle at ${gx} ${gy}, rgba(196,160,255,0.18), transparent 60%)`

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        whileHover={{ y: lift, scale: 1.012 }}
        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={`relative ${className}`}
      >
        {children}
        {glare && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{ background: glareBg }}
          />
        )}
      </motion.div>
    </div>
  )
}
