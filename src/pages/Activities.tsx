import { motion } from 'framer-motion'

interface Activity {
  title: string
  date: string
  tags: string[]
  content: string[]
}

export default function Activities() {
  const activities: Activity[] = [
    {
      title: 'SITCON 2026',
      date: '2026',
      tags: ['研討會', '資訊', '學生'],
      content: [
        '參加了 SITCON（Student Information Technology CONference）2026 年會。',
        'SITCON 是由學生自發舉辦、面向學生的資訊技術研討會，每年吸引來自各地對資訊有熱情的學生參與。',
        '在這次活動中聆聽了各種議程，接觸到不同領域的技術分享，也認識了一些志同道合的夥伴。',
      ],
    },
  ]

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
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">活動心得 🎪</h1>
            <p className="text-lg text-blue-100">參加各種活動後留下來的感想與紀錄</p>
          </motion.div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-10"
          >
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md hover:shadow-xl transition-all border-l-4 border-accent overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <h2 className="text-2xl font-bold text-primary">{activity.title}</h2>
                    <span className="text-sm text-accent font-semibold bg-white px-3 py-1 rounded-full shadow-sm">
                      ⏰ {activity.date}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {activity.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent text-white text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {activity.content.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {activities.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-gray-400"
            >
              <p className="text-5xl mb-4">🌱</p>
              <p>還沒有活動心得，敬請期待！</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
