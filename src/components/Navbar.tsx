import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: '📍 關於我', path: '/' },
    { name: '💻 技能', path: '/skills' },
    { name: '🤝 參與活動', path: '/experience' },
    { name: '📂 專案', path: '/projects' },
    { name: '✉️ 聯絡', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-slate-950/95 shadow-2xl shadow-black/10 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.35em] text-cyan-300">tang yu</span>
            <span className="text-sm text-slate-100">Blog</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-slate-300 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-cyan-300 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-slate-100 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-slate-100 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-slate-100 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-2 text-slate-100 hover:bg-slate-900 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
