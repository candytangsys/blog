import { motion } from 'framer-motion'

export default function Notes() {
  const categories = [
    {
      title: '工具筆記',
      emoji: '🛠️',
      description: '各種工具的使用紀錄與心得，包含開發環境設定、常用指令整理等。',
      link: 'https://hackmd.io/folders/ll6lCzc7qAmVEvtqxXibZ?nav=overview',
      color: 'from-blue-50 to-cyan-50',
      border: 'border-accent',
    },
    {
      title: '程式語言筆記',
      emoji: '💻',
      description: '學習程式語言的過程紀錄，包含語法整理、觀念釐清與練習範例。',
      link: 'https://hackmd.io/folders/zpQfVzs_Jzi9rbQJE5uDL?nav=overview',
      color: 'from-indigo-50 to-blue-50',
      border: 'border-indigo-400',
    },
  ]

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
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">筆記整理 📝</h1>
            <p className="text-lg text-blue-100">學習路上的零碎紀錄，整理成可以再查的樣子</p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {categories.map((cat, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={cat.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className={`block bg-gradient-to-br ${cat.color} p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-l-4 ${cat.border} group`}
              >
                <div className="text-4xl mb-4">{cat.emoji}</div>
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{cat.description}</p>
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
            className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200 text-center"
          >
            <p className="text-gray-500 text-sm">
              筆記存放於 HackMD，持續更新中 ✍️
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
