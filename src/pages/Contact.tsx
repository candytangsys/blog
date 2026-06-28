import { motion } from 'framer-motion'

export default function Contact() {
  const contactMethods = [
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/candytangsys',
      link: 'https://github.com/candytangsys',
    },
    {
      icon: '🔗',
      title: 'GitLab',
      value: 'gitlab.com/candytangsys',
      link: 'https://gitlab.com/candytangsys',
    },
  ]

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
            <h1 className="text-4xl font-bold mb-4">想聊天嗎？ 💬</h1>
            <p className="text-lg text-[#7a8ba8]">
              歡迎聯繫我，聊聊技術、想法，或乾脆閒聊都可以
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-[#0a0e1a] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-primary text-center mb-8">找到我的方式 📍</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card text-center block"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-[#c8d8f0] mb-2">{method.title}</h3>
                  <p className="text-[#5a7090] break-all hover:text-accent transition-colors">
                    {method.value}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
