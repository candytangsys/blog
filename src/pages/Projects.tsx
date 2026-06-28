import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function Projects() {
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
      <section className="bg-[#0a0e1a] text-[#e2e8f0] py-16 grid-texture relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">Side Projects 💼</h1>
            <p className="text-lg text-[#7a8ba8]">邊學邊做中</p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#0a0e1a] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card group"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary opacity-0 group-hover:opacity-5 transition-opacity"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#c8d8f0] mb-3">{project.title}</h3>
                  <p className="text-[#5a7090] mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-[#7a8ba8] mb-2">使用技術：</p>
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

                  {/* Links */}
                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-2 bg-primary hover:bg-[#2a5fd9] text-white font-bold rounded-lg transition-colors"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="py-16 bg-[#0f1629] text-[#e2e8f0] border-t border-[#1e2d4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">想看我的代碼倉庫？ 🚀</h2>
            <p className="text-lg text-[#7a8ba8] mb-8">
              GitHub 上面還有一堆練習(在組織裡)、會用到的小工具
            </p>
            <a
              href="https://github.com/candytangsys"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-accent hover:bg-[#00b894] text-primary font-bold rounded-lg transition-all transform hover:scale-105"
            >
              訪問 GitHub Repository
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
