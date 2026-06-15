import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

interface Skill {
  name: string
  note: string
  level: 'comfortable' | 'learning' | 'touched'
}

interface SkillGroup {
  title: string
  emoji: string
  skills: Skill[]
}

const levelLabel: Record<Skill['level'], string> = {
  comfortable: '有在用',
  learning: '學習中',
  touched: '接觸過',
}

const levelColor: Record<Skill['level'], string> = {
  comfortable: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  learning: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  touched: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
}

const skillGroups: SkillGroup[] = [
  {
    title: '程式語言',
    emoji: '💻',
    skills: [
      { name: 'Java', note: '物件導向、繼承，在終端機程式用過', level: 'comfortable' },
      { name: 'Python', note: '入門中，還在摸語法', level: 'learning' },
      { name: 'HTML', note: '能讀懂結構，與 AI 協作做出過網頁', level: 'comfortable' },
      { name: 'C#', note: '看得懂語法，不會從頭自己寫', level: 'touched' },
      { name: 'C++', note: '看得懂語法，不會從頭自己寫', level: 'touched' },
    ],
  },
  {
    title: '前端',
    emoji: '🖥️',
    skills: [
      { name: 'React', note: '用過，這個網站本身就是', level: 'comfortable' },
      { name: '純 HTML / CSS / JS', note: '有自己動手寫過', level: 'comfortable' },
      { name: 'Tailwind CSS', note: '這個網站有用到，邊查邊寫', level: 'learning' },
    ],
  },
  {
    title: '後端 & 資料庫',
    emoji: '🗄️',
    skills: [
      { name: 'Node.js / Express', note: '看過 AI 寫、知道流程，沒自己獨立跑起來過', level: 'touched' },
      { name: 'Python Flask', note: '看過 AI 寫、知道流程，沒自己獨立跑起來過', level: 'touched' },
      { name: 'PostgreSQL / Supabase', note: '用 AI 協助寫過操作程式碼，沒完全獨立串接過', level: 'touched' },
      { name: 'Access', note: '整理資料用', level: 'comfortable' },
    ],
  },
  {
    title: '開發工具',
    emoji: '🛠️',
    skills: [
      { name: 'Git / GitHub', note: '有在用，基本版控流程', level: 'comfortable' },
      { name: 'GitHub Pages / Vercel', note: '有部署過這個網站', level: 'comfortable' },
      { name: 'VMware', note: '開虛擬機練習用', level: 'comfortable' },
      { name: 'Linux', note: '只會基本指令（ls、cd、mkdir）', level: 'learning' },
    ],
  },
]

export default function Skills() {
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
            <p className="text-lg text-blue-100">實踐學習中，誠實面對自己的程度</p>
          </motion.div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 justify-center">
          {(Object.keys(levelLabel) as Skill['level'][]).map((level) => (
            <span key={level} className={`px-3 py-1 rounded-full text-xs font-medium border ${levelColor[level]}`}>
              {levelLabel[level]}
            </span>
          ))}
        </div>
      </section>

      {/* Skill Groups */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-primary mb-4">
                {group.emoji} {group.title}
              </h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex items-start justify-between gap-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg px-5 py-4 shadow-sm border border-blue-100"
                  >
                    <div>
                      <p className="font-semibold text-primary">{skill.name}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{skill.note}</p>
                    </div>
                    <span className={`shrink-0 mt-0.5 px-2 py-0.5 rounded-full text-xs font-medium border ${levelColor[skill.level]}`}>
                      {levelLabel[skill.level]}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 現在迷上的東西 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl font-bold text-primary mb-4">🌱 現在迷上的東西</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {['XR / Extended Reality', 'Linux 系統操作', '網站架構設計'].map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 p-5 rounded-lg shadow-sm border-2 border-accent"
                >
                  <p className="font-semibold text-primary">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
