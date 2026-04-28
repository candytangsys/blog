import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 構建 mailto 連結
    const mailtoLink = `mailto:candytang1009@gmail.com?subject=來自 ${formData.name} 的訊息&body=${encodeURIComponent(
      `名字: ${formData.name}\nEmail: ${formData.email}\n\n訊息:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email',
      value: 'candytang1009@gmail.com',
      link: 'mailto:candytang1009@gmail.com',
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/candytangsys',
      link: 'https://github.com/candytangsys',
    },
    {
      icon: '📷',
      title: 'Instagram',
      value: '@tang_fish0',
      link: 'https://instagram.com/tang_fish0',
    },
    {
      icon: '📱',
      title: 'Telegram',
      value: '@Tang10Yu',
      link: 'https://t.me/Tang10Yu',
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
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">想聊天嗎？ 💬</h1>
            <p className="text-lg text-blue-100">
              歡迎聯繫我，聊聊技術、想法，或乾脆閒聊都可以
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
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
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)' }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all text-center border-t-4 border-accent block"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{method.title}</h3>
                  <p className="text-gray-700 break-all hover:text-accent transition-colors">
                    {method.value}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-primary text-center mb-8">或是直接寫信給我 ✉️</h2>

            <motion.form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                  你的名字
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                  placeholder="例如：小明"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  你的 Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  訊息內容
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="寫下你的訊息..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-accent hover:bg-cyan-500 text-primary font-bold rounded-lg transition-all transform"
              >
                發送訊息
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-primary mb-8">一點點關於我 👤</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">學校</h3>
                <p className="text-gray-700">淡江大學資訊管理學系 大一學生</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">出身地</h3>
                <p className="text-gray-700">新竹，台灣</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg shadow-md md:col-span-2"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">個人標語</h3>
                <p className="text-gray-700 text-lg italic">
                  "Driven by curiosity, growing through challenges."
                </p>
                <p className="text-gray-600 mt-2">
                  一個帶著衝勁闖進未知領域的人，喜歡在挑戰中快速成長。
                  <span className="line-through">不排除會崩潰的部分</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">擊個掌，跟我聊聊吧！ 👋</h2>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
