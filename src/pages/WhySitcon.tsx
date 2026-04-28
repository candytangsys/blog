import { motion } from 'framer-motion'

export default function WhySitcon() {
  const features = [
    {
      icon: '🛠',
      title: '技術協助',
      description: '協助學員排除學習障礙',
    },
    {
      icon: '💖',
      title: '陪伴成長',
      description: '主動關心與鼓勵學員',
    },
    {
      icon: '🤝',
      title: '團隊合作',
      description: '與工作人員共同完成營隊',
    },
  ]

  const traits = [
    '敏銳觀察力',
    '主動關心他人',
    '善於引導討論',
    '解決問題能力',
    '團隊合作精神',
    '正向影響力',
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
            <h1 className="text-5xl font-bold mb-4">Why SITCON Camp?</h1>
            <p className="text-xl text-blue-100">成為一位有溫度的技術引導者</p>
          </motion.div>
        </div>
      </section>

      {/* Main Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-2xl md:text-3xl leading-relaxed text-gray-800 mb-8">
              我相信學習資訊科技，
              <span className="text-accent font-bold">不只是學會程式語言</span>，
              <br />
              更重要的是培養
              <span className="text-primary font-bold">
                解決問題、合作交流與自主學習的能力
              </span>
              。
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg border-2 border-accent">
              <p className="text-xl text-gray-800 leading-relaxed">
                我希望能以自身的技術背景、活動經驗與陪伴熱忱，
                <br />
                協助學員在營隊中
                <span className="text-accent font-bold">安心學習、勇敢嘗試</span>
                ，
                <br />
                並讓更多人感受到資訊領域的魅力。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-primary text-center mb-12">隊輔的三大責任</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)' }}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all text-center border-t-4 border-accent"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-8">團隊合作經驗</h2>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border-l-4 border-accent">
              <p className="text-gray-800 mb-4">
                曾在高中校慶表演中擔任統籌，負責全班編曲與教學。
              </p>
              <p className="text-gray-800 mb-4">
                過程中發現部分同學對內容有不同想法，讓我理解
                <span className="text-primary font-bold">領導者不能只顧成果，更要重視成員聲音</span>
                。
              </p>
              <p className="text-gray-800">
                透過反覆溝通與修改，最終完成大家都認同的成果，也提升了團隊向心力。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Crisis Management */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-8">危機處理能力</h2>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg border-l-4 border-orange-400">
              <p className="text-gray-800 font-semibold mb-4">
                若學員受傷、失聯或身體不適：
              </p>
              <ol className="space-y-3">
                {[
                  '先確保安全',
                  '立即通報主管與醫護',
                  '陪伴穩定情緒',
                  '記錄事件資訊',
                  '協助後續處理',
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-orange-400 text-white text-sm font-bold mr-4 flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-gray-800">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilitation Skills */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-8">引導學員能力</h2>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border-l-4 border-green-400">
              <p className="text-gray-800 font-semibold mb-4">
                若小組氣氛不佳或討論失衡：
              </p>
              <ul className="space-y-3">
                {[
                  '主動觀察問題來源',
                  '引導理性表達意見',
                  '聚焦共同目標',
                  '協助形成折衷方案',
                  '重建合作氛圍',
                ].map((skill, idx) => (
                  <li key={idx} className="flex items-center text-gray-800">
                    <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-4"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Traits */}
      <section className="py-16 bg-gradient-to-r from-accent to-cyan-300 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">優秀隊輔應具備的特質</h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {traits.map((trait, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-30 transition-all text-center"
                >
                  <p className="font-bold text-lg">{trait}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">讓我們一起成長</h2>
            <p className="text-lg text-gray-700 mb-8">
              我期待在 SITCON Camp 與一群志同道合的夥伴共事，
              <br />
              透過團隊合作與知識分享，帶給學員最好的學習體驗。
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
