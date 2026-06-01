import { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

/**
 * Tracks the pointer position normalized to [-0.5, 0.5] on each axis.
 * Returns raw motion values so consumers can apply their own springs.
 */
export default function usePointer() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const onMove = (e) => {
      x.set(e.clientX / window.innerWidth - 0.5)
      y.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  return { x, y }
}
