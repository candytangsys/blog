import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills, categories, type Skill } from '../data/skills'
import SkillModal from '../components/SkillModal'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [selected, setSelected] = useState<Skill | null>(null)

  const filtered = skills.filter((s) => activeCategory === '全部' || s.category === activeCategory)

  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <section className="bg-[#0a0e1a] text-[#e2e8f0] py-16 grid-texture relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">The Tools I Play With 🎮</h1>
            <p className="text-lg text-[#7a8ba8]">點擊 Logo 看看用過哪些專案</p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-[#0a0e1a] border-b border-[#1e2d4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs px-3 py-1.5 rounded-md border transition-colors ${
                activeCategory === cat
                  ? 'bg-[#1a2744] text-primary border-[#3878ff44]'
                  : 'bg-transparent text-[#5a7090] border-[#1e2d4a] hover:border-[#3878ff44]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Logo Grid */}
      <section className="py-12 bg-[#0a0e1a] grid-texture">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4"
          >
            {filtered.map((skill) => (
              <motion.button
                key={skill.id}
                layout
                onClick={() => setSelected(skill)}
                className="card flex flex-col items-center gap-2"
              >
                <div className="bg-[#1e2d4a]/40 rounded-lg p-1">
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                </div>
                <span className="font-mono text-[10px] text-[#5a7090]">{skill.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <SkillModal skill={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
