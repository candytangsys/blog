import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  const navItems = [
    { name: '📍 關於我', path: '/', extraActive: ['/about'] },
    { name: '💻 技能', path: '/skills' },
    { name: '📂 專案', path: '/projects' },
    { name: '🤝 參與活動', path: '/activities' },
    { name: '🎪 活動心得', path: '/blog' },
    { name: '📝 筆記整理', path: '/notes' },
    { name: '✉️ 聯絡', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0e1a]/80 backdrop-blur-md border-b border-[0.5px] border-[#3878ff26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.35em] text-accent font-mono">tang yu</span>
            <span className="text-sm text-[#e2e8f0]">Blog</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[#7a8ba8] text-sm font-medium">
            {navItems.map((item) => {
              const active = pathname === item.path || item.extraActive?.includes(pathname)
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative pb-1 transition-colors duration-200 hover:text-primary ${
                    active ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-primary"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#e2e8f0] transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#e2e8f0] transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#e2e8f0] transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => {
              const active = pathname === item.path || item.extraActive?.includes(pathname)
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-2 rounded transition-colors ${
                    active ? 'text-primary bg-[#0f1629]' : 'text-[#e2e8f0] hover:bg-[#0f1629]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
