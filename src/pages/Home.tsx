import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  const collegeItems = [
    '資訊技術研究社 成員',
    '宿舍自治會 成員',
    '電腦維修隊 成員 (預備役幹部)',
  ]

  const highSchoolItems = [
    'STS社團 副社長',
    '多項幹部與小老師經驗',
  ]

  const tags = ['#ENTP', '#優雅的厭世者', '#效率至上主義', '#莽夫']

  return (
    <div className="pt-20 min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-6 shadow-2xl shadow-cyan-500/10"
            >
              <div className="flex justify-center">
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/20">
                  <img
                    src="/S__110952451.jpg"
                    alt="Tang Yu"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">tang yu</p>
                <h1 className="mt-4 text-3xl md:text-4xl font-black leading-tight">想做的事，先衝再說！</h1>
              </div>

              <div className="mt-6 flex justify-center gap-4 text-2xl text-cyan-300">
                <a href="mailto:candytang1009@gmail.com" aria-label="Email">✉️</a>
                <a href="https://github.com/candytangsys" target="_blank" rel="noreferrer" aria-label="GitHub">🐙</a>
              </div>
            </motion.div>

            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-6"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">快速連結</p>
              <div className="mt-4 space-y-3">
                <Link to="/" className="block text-lg text-slate-100 hover:text-cyan-300 transition-colors">📍 關於我</Link>
                <Link to="/skills" className="block text-lg text-slate-100 hover:text-cyan-300 transition-colors">💻 技能</Link>
                <Link to="/experience" className="block text-lg text-slate-100 hover:text-cyan-300 transition-colors">🤝 參與活動</Link>
                <Link to="/projects" className="block text-lg text-slate-100 hover:text-cyan-300 transition-colors">📂 專案</Link>
                <Link to="/contact" className="block text-lg text-slate-100 hover:text-cyan-300 transition-colors">✉️ 聯絡</Link>
              </div>
            </motion.nav>
          </aside>

          <main className="space-y-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-10 shadow-2xl shadow-cyan-500/10"
            >
              <h2 className="text-2xl font-bold mb-6">關於我</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                你可以這麼形容我：「一個純純有衝勁的莽夫」，這讓我經常在還是一張白紙時就跳進未知的領域。
                雖然過程總是以「小白」身分開場，但我超重的勝負欲不允許自己落後太久。
              </p>
              <p className="text-slate-400 leading-relaxed">
                現在就讀淡江大學資訊管理系，大學生活裡喜歡用實作挖掘問題、用筆記整理思考，也喜歡和團隊一起把不可能變成有跡可循的成果。
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid gap-6 md:grid-cols-2"
            >
              <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8">
                <h3 className="text-2xl font-semibold mb-4">目前</h3>
                <p className="text-slate-300 mb-3">淡江大學資訊管理系在學中</p>
                <p className="text-slate-300">我的日常是寫程式、修電腦、想活動，然後再想下一個可以衝的計畫。</p>
              </div>

              <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8">
                <h3 className="text-2xl font-semibold mb-4">個性標籤</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-800 bg-slate-800/80 px-3 py-1 text-slate-200 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid gap-6 md:grid-cols-2"
            >
              <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8">
                <h3 className="text-2xl font-semibold mb-4">大學經歷</h3>
                <ul className="space-y-3 text-slate-300">
                  {collegeItems.map((item) => (
                    <li key={item} className="list-disc list-inside">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8">
                <h3 className="text-2xl font-semibold mb-4">高中經歷</h3>
                <ul className="space-y-3 text-slate-300">
                  {highSchoolItems.map((item) => (
                    <li key={item} className="list-disc list-inside">{item}</li>
                  ))}
                </ul>
              </div>
            </motion.section>

            <motion.footer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-6 text-center text-slate-500"
            >
              © tang yu.
            </motion.footer>
          </main>
        </div>
      </div>
    </div>
  )
}
