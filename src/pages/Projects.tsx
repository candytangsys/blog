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
      title: '練習題集',
      description: '整理與解決程式設計相關的練習題。',
      tech: ['Java', 'html'],
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
            <p className="text-lg text-blue-100">邊學邊做中</p>
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
              GitHub 上面還有一堆練習(在組織裡)、會用到的小工具
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
    </div>
  )
}
