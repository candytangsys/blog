import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CategoryFilter from '../components/CategoryFilter'
import { blog } from '../data/blog'

export default function Activities() {
  const [filter, setFilter] = useState('全部')
  const filteredPosts = blog.filter((p) => filter === '全部' || p.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
            <h1 className="text-4xl font-bold mb-4">活動心得 🎪</h1>
            <p className="text-lg text-[#7a8ba8]">參加各種活動後留下來的感想與紀錄</p>
          </motion.div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-[#0a0e1a] grid-texture">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter selected={filter} onChange={setFilter} />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-10"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants} className="card">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-[#c8d8f0]">{post.title}</h2>
                  <span className="text-sm text-accent font-semibold bg-[#0f1629] px-3 py-1 rounded-full shadow-sm">
                    ⏰ {post.date}{post.location ? ` · ${post.location}` : ''}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent text-white text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[#5a7090] leading-relaxed mb-4">{post.summary}</p>

                <Link
                  to={`/blog/${post.id}`}
                  className="font-mono text-[11px] text-primary hover:underline flex items-center gap-1"
                >
                  查看詳情 →
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-[#5a7090]"
            >
              <p className="text-5xl mb-4">🌱</p>
              <p>還沒有這個分類的活動心得，敬請期待！</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
