import { useState } from 'react'
import { motion } from 'framer-motion'
import CategoryFilter from '../components/CategoryFilter'
import { activities } from '../data/activities'

export default function Experience() {
  const [filter, setFilter] = useState('全部')
  const filteredExperiences = activities.filter(
    (exp) => filter === '全部' || exp.category === filter
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

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
            <h1 className="text-4xl font-bold mb-4">The Stuff I've Done 📖</h1>
            <p className="text-lg text-[#7a8ba8]">一些帶過團隊、面對挑戰的經驗</p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-[#0a0e1a] grid-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter selected={filter} onChange={setFilter} />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="relative"
          >
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-transparent"></div>

            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`mb-12 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'}`}
              >
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute -left-20 top-2 w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg"></div>

                  {/* Card */}
                  <motion.div className="card">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-[#c8d8f0] mb-1">{exp.title}</h3>
                        <p className="text-sm text-accent font-semibold">⏰ {exp.date} · {exp.location}</p>
                      </div>
                    </div>

                    {exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#1a2744] border border-[#3878ff44] text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {exp.summary && <p className="text-[#5a7090] mb-4">{exp.summary}</p>}

                    {exp.responsibilities.length > 0 && (
                      <div>
                        <p className="font-semibold text-primary mb-3">主要職責：</p>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-center text-[#5a7090]">
                              <span className="inline-block w-2 h-2 bg-accent rounded-full mr-3"></span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#1e2d4a]">
                        {exp.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[11px] text-accent hover:underline flex items-center gap-1"
                          >
                            ↗ {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  )
}
