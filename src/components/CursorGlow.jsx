import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

/**
 * A large, soft purple glow that gently follows the cursor to add atmosphere.
 * Disabled on touch devices and when reduced motion is requested.
 */
export default function CursorGlow() {
  const reduce = useReducedMotion()
  const x = useMotionValue(-300)
  const y = useMotionValue(-300)
  const sx = useSpring(x, { stiffness: 220, damping: 30, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 220, damping: 30, mass: 0.6 })

  useEffect(() => {
    if (reduce || window.matchMedia('(pointer: coarse)').matches) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [reduce, x, y])

  if (reduce) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[460px] w-[460px] rounded-full mix-blend-screen md:block"
      style={{
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
        background:
          'radial-gradient(circle, rgba(168,85,247,0.14), rgba(139,92,246,0.06) 40%, transparent 70%)',
      }}
    />
  )
}
