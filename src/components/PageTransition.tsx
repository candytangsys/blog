import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'

const variants = {
  initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: 'blur(4px)',
    transition: { duration: 0.25 },
  },
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
