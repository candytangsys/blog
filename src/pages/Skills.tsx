import { motion } from 'framer-motion'

export default function Skills() {
  const programmingSkills = [
    {
      name: 'Java',
      details: ['物件導向概念', '程式邏輯設計', '基礎專案開發'],
    },
    {
      name: 'Python',
      details: ['自動化思維', '演算法基礎', '問題解決應用'],
    },
    {
      name: 'C#',
      details: ['語法熟悉', '基礎應用開發'],
    },
    {
      name: 'C++',
      details: ['程式碼閱讀能力'],
    },
    {
      name: 'HTML',
      details: ['網頁結構理解', '基礎前端頁面設計'],
    },
  ]

  const itSkills = [
    '電腦重灌與系統安裝',
    '硬體設備維修與更換',
    'BIOS 基本設定',
    '校園設備維護',
    '印表機設定與排錯',
    '基礎網路問題處理',
  ]

  const toolSkills = [
    { name: 'Excel', skills: ['IF 函數', 'VLOOKUP', '資料整理', '表單處理'] },
    { name: 'Word', skills: ['文件編輯與排版'] },
    { name: 'PowerPoint', skills: ['簡報製作與視覺呈現'] },
  ]

  const softSkills = [
    '團隊合作',
    '現場應變',
    '問題解決',
    '主動學習',
    '教學引導',
    '溝通協調',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
            <h1 className="text-4xl font-bold mb-4">The Tools I Play With 🎮</h1>
            <p className="text-lg text-blue-100">不是完美的技能，但都是透過實踐學來的真本事</p>
          </motion.div>
        </div>
      </section>

      {/* Programming Skills */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-8">💻 程式語言（還在探索中）</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {programmingSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, shadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-bold text-primary mb-3">{skill.name}</h3>
                  <ul className="space-y-2">
                    {skill.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="inline-block w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IT Support Skills */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-8">🖥 硬體和系統那些事</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {itSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-accent"
                >
                  <p className="text-gray-800 font-medium">{skill}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Productivity Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-8">📊 數據和簡報 (日常武器)</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {toolSkills.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">{tool.name}</h3>
                  <ul className="space-y-2">
                    {tool.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-16 bg-gradient-to-br from-accent to-cyan-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-8">🚀 軟實力</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-30 transition-all"
                >
                  <p className="text-lg font-semibold">{skill}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Learning */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-8">🌱 現在迷上的東西</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                'AI 應用技術',
                'XR / Extended Reality',
                'Linux 系統操作',
                '網站架構設計',
                '數位文資掃描應用',
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg shadow-md border-2 border-accent"
                >
                  <p className="text-lg font-semibold text-primary">{skill}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
