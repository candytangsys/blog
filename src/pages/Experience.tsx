import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: 'STS 社團｜副社長',
      period: '2023 - Present',
      description: '以推廣新竹在地歷史文物與文化為核心的學生社團。',
      responsibilities: [
        '協助社團運營',
        '活動規劃與執行',
        '團隊溝通協調',
        '幹部管理與支援',
      ],
    },
    {
      title: '校慶活動｜總召（多次）',
      period: '2022 - 2024',
      description: '多次擔任班級活動總召。',
      responsibilities: [
        '表演企劃',
        '編曲編舞',
        '任務分工',
        '團隊進度管理',
        '現場統籌執行',
      ],
    },
    {
      title: '童軍露營活動｜隊輔',
      period: '2023',
      description: '帶領國中生小隊參與露營與闖關活動。',
      responsibilities: [
        '小隊帶領',
        '活動引導',
        '生活照顧',
        '情緒關懷',
        '突發狀況處理',
      ],
    },
    {
      title: '校園電腦維修隊｜工讀生',
      period: '2022 - 2024',
      description: '協助校內資訊設備維護。',
      responsibilities: [
        '電腦硬體問題排除',
        '設備檢修',
        '系統安裝',
        '印表機支援',
        '現場資訊協助',
      ],
    },
  ]

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
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">The Stuff I've Done 📖</h1>
            <p className="text-lg text-blue-100">一些帶過團隊、面對挑戰、最後都解決了的經驗</p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="relative"
          >
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-transparent"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`mb-12 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'}`}
              >
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute -left-20 top-2 w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg"></div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -5, shadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-l-4 border-accent"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-1">{exp.title}</h3>
                        <p className="text-sm text-accent font-semibold">⏰ {exp.period}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{exp.description}</p>

                    <div>
                      <p className="font-semibold text-primary mb-3">主要職責：</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <span className="inline-block w-2 h-2 bg-accent rounded-full mr-3"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Traits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">個人特質</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary mb-3">別人眼中的我</h3>
                <ul className="space-y-2">
                  {['可靠', '認真', '做事負責', '雖然嘴上抱怨，但事情一定做好'].map((trait, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {trait}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary mb-3">問題處理方式</h3>
                <p className="text-gray-700">
                  遇到問題時，我習慣主動找答案，而不是等待問題自己消失。
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary mb-3">最有成就感的事</h3>
                <p className="text-gray-700">
                  幫助身邊重要的人修好電腦、解決困擾。
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary mb-3">持續成長方向</h3>
                <ul className="space-y-2">
                  {['網站架構能力', 'XR 技術應用', '古蹟數位掃描與科技結合'].map((direction, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {direction}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
