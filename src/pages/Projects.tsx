import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: '個人品牌網站',
      description: '使用前端技術打造個人品牌網站，展示技能與經歷。',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      link: '#',
    },
    {
      title: 'Java 練習題集',
      description: '整理與解決程式設計相關的練習題，強化邏輯思維。',
      tech: ['Java', 'OOP'],
      link: 'https://github.com/candytangsys',
    },
    {
      title: 'Python 小工具',
      description: '開發自動化工具與日常生活應用程式。',
      tech: ['Python', '自動化'],
      link: 'https://github.com/candytangsys',
    },
    {
      title: 'C# 基礎專案',
      description: '學習 C# 語言與 Windows 開發基礎的實踐項目。',
      tech: ['C#', 'Windows'],
      link: 'https://github.com/candytangsys',
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
            <h1 className="text-4xl font-bold mb-4">Side Projects 💼</h1>
            <p className="text-lg text-blue-100">邊學邊做，有時候成功，有時候失敗，但都很有趣</p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg shadow-md hover:shadow-2xl transition-all border-t-4 border-accent relative overflow-hidden group"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-cyan-300 opacity-0 group-hover:opacity-5 transition-opacity"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-600 mb-2">使用技術：</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent text-white text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-primary hover:bg-blue-900 text-white font-bold rounded-lg transition-colors"
                  >
                    查看詳情 →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">想看我的代碼倉庫？ 🚀</h2>
            <p className="text-lg text-blue-100 mb-8">
              GitHub 上面還有一堆練習、失敗的實驗和突發奇想的小工具
            </p>
            <a
              href="https://github.com/candytangsys"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-accent hover:bg-cyan-500 text-primary font-bold rounded-lg transition-all transform hover:scale-105"
            >
              訪問 GitHub Repository
            </a>
          </motion.div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">我怎麼學的？ 🤔</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: '實踐學習',
                  description: '通過做專案而不是僅閱讀文檔來學習技術',
                },
                {
                  step: '02',
                  title: '持續改進',
                  description: '反覆練習、測試和優化代碼品質',
                },
                {
                  step: '03',
                  title: '分享知識',
                  description: '透過教學他人來加深自己的理解',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="text-4xl font-bold text-accent mb-3">{item.step}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
