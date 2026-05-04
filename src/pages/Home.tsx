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
  
  const dailyTags = [
    { label: '#狼人殺', link: null },
    { label: '#電競', link: 'https://www.instagram.com/ctesa.tw?igsh=N2Z0bTJ6cDVnZGF0' },
    { label: '#追劇', link: null },
    { label: '#追星', link: 'https://www.instagram.com/twicetagram/' },
    { label: '#探索好吃的甜食', link: null },
  ]

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
                    src={`${import.meta.env.BASE_URL}S__110952451.jpg`}
                    alt="Tang Yu"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">tang yu</p>
                <h1 className="mt-4 text-3xl md:text-3xl font-black leading-tight">想做的事，先衝再說！</h1>
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
              <div className="text-slate-300 leading-relaxed">
                {/* 第一段：核心特質 */}
                <p className="mb-2">
                  你可以這麼形容我：「一個純純有衝勁的莽夫」。
                  <br />
                  在還沒摸清地圖前我就敢先跳進未知領域(大腦還在猶豫，身體已經先執行了 😅)
                </p>

                <p className="mb-6">
                  雖然開局總是「小白」，但我超強的勝負欲（求生欲）
                  <br />
                  會驅使我用最短時間跟上腳步，絕不讓自己落後太多。
                </p>
              </div>

              {/* 願望部分 */}
              <p className="text-slate-400 text-sm italic">
                目前最大的願望是每天能準時上床睡覺。
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid gap-6 md:grid-cols-2"
            >
              <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8">
                <h3 className="text-2xl font-semibold mb-4">日常標籤</h3>
                <div className="flex flex-wrap gap-2">
                  {dailyTags.map((tag) => (
                    tag.link ? (
                      <a
                        key={tag.label}
                        href={tag.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-slate-800 bg-slate-800/80 px-3 py-1 text-slate-200 text-sm hover:border-cyan-400 hover:bg-slate-700 transition-all"
                      >
                        {tag.label}
                      </a>
                    ) : (
                      <span key={tag.label} className="rounded-full border border-slate-800 bg-slate-800/80 px-3 py-1 text-slate-200 text-sm">
                        {tag.label}
                      </span>
                    )
                  ))}
                </div>
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
