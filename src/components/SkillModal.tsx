import { motion, AnimatePresence } from 'framer-motion'
import type { Skill } from '../data/skills'
import { projects } from '../data/projects'

export default function SkillModal({ skill, onClose }: { skill: Skill | null; onClose: () => void }) {
  const related = skill ? projects.filter((p) => skill.relatedProjects.includes(p.id)) : []

  return (
    <AnimatePresence>
      {skill && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                       w-[90vw] max-w-md z-50
                       bg-[#0f1629] border border-[#3878ff44]
                       rounded-2xl p-6"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{
              opacity: 1, scale: 1, y: 0,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{
              opacity: 0, scale: 0.9, y: 8,
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#1e2d4a]/40 rounded-lg p-1.5">
                <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
              </div>
              <div>
                <div className="text-[#c8d8f0] font-medium">{skill.name}</div>
                <div className="font-mono text-[10px] text-primary">
                  // {skill.category}
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="關閉"
                className="ml-auto text-[#4a5c78] hover:text-[#c8d8f0] text-xl leading-none"
              >
                ✕
              </button>
            </div>

            <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-3">
              // 相關專案
            </div>

            {related.length === 0 ? (
              <p className="text-[#4a5c78] text-sm font-mono">
                尚無相關專案，敬請期待
              </p>
            ) : (
              <div className="flex flex-col gap-2">
                {related.map((p) => (
                  <a
                    key={p.id}
                    href={p.links[0]?.url ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3
                               bg-[#0a0e1a] border border-[#1e2d4a]
                               rounded-lg hover:border-primary
                               transition-colors group"
                  >
                    <span className="text-[#c8d8f0] text-sm group-hover:text-white transition-colors">
                      {p.title}
                    </span>
                    <span className="ml-auto text-primary text-xs">→</span>
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
