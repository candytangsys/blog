import { motion } from 'framer-motion'
import { noteCategories } from '../data/notes'

export default function Notes() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
            <h1 className="text-4xl font-bold mb-4">筆記整理 📝</h1>
            <p className="text-lg text-[#7a8ba8]">學習路上的零碎紀錄，整理成可以再查的樣子</p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-[#0a0e1a] grid-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {noteCategories.map((cat) => (
              <motion.a
                key={cat.id}
                variants={itemVariants}
                href={cat.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card block group"
              >
                <div className="text-4xl mb-4">{cat.emoji}</div>
                <h3 className="text-2xl font-bold text-[#c8d8f0] mb-3 group-hover:text-accent transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[#5a7090] mb-4 leading-relaxed">{cat.description}</p>
                <span className="inline-flex items-center text-accent font-semibold text-sm">
                  前往 HackMD 查看 →
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 p-6 bg-[#0f1629] rounded-lg border border-[#1e2d4a] text-center"
          >
            <p className="text-[#4a5c78] text-sm">
              筆記存放於 HackMD，持續更新中 ✍️
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
