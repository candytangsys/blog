import { motion } from 'framer-motion'
import { about } from '../data/about'

export default function Home() {
  return (
    <div className="pt-20 min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center gap-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center gap-8 py-8"
          >
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}${about.avatar}`}
                alt={about.name}
                className="w-36 h-36 rounded-full object-cover
                           ring-2 ring-[#3878ff44]
                           shadow-[0_0_32px_rgba(56,120,255,0.15)]"
              />
            </div>

            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-accent mb-3">{about.nickname}</p>
              <h1 className="text-4xl font-bold text-[#e2e8f0] mb-3">{about.taglineZh}</h1>
              {about.interestTags.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {about.interestTags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#1a2744] border border-[#3878ff44] text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.section>

          <main className="w-full space-y-8 text-left">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="card"
            >
              <h2 className="text-2xl font-bold mb-6 text-[#e2e8f0]">關於我</h2>
              <div className="text-[#7a8ba8] leading-relaxed space-y-4">
                {about.bioZh.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {about.noteZh && (
                <p className="text-[#5a7090] text-sm italic mt-6">{about.noteZh}</p>
              )}
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid gap-6 md:grid-cols-2"
            >
              <div className="card">
                <h3 className="text-2xl font-semibold mb-4 text-[#c8d8f0]">日常標籤</h3>
                <div className="flex flex-wrap gap-2">
                  {about.dailyTags.map((tag) => (
                    tag.link ? (
                      <a
                        key={tag.label}
                        href={tag.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[#1e2d4a] bg-[#141e35] px-3 py-1 text-[#e2e8f0] text-sm font-mono hover:border-primary transition-all"
                      >
                        {tag.label}
                      </a>
                    ) : (
                      <span key={tag.label} className="rounded-full border border-[#1e2d4a] bg-[#141e35] px-3 py-1 text-[#e2e8f0] text-sm font-mono">
                        {tag.label}
                      </span>
                    )
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="text-2xl font-semibold mb-4 text-[#c8d8f0]">個性標籤</h3>
                <div className="flex flex-wrap gap-2">
                  {about.personalityTags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#a78bfa44] bg-[#1a1040] px-3 py-1 text-accentPurple text-sm font-mono">
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
              className="card"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#c8d8f0]">經歷</h3>
              <div className="space-y-6">
                {about.experience.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs uppercase tracking-[0.25em] text-accent mb-2">{group.label}</p>
                    <ul className="space-y-2 text-[#7a8ba8]">
                      {group.items.map((item) => (
                        <li key={item} className="list-disc list-inside">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.footer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="card text-center text-[#5a7090]"
            >
              © {about.nickname}.
            </motion.footer>
          </main>
        </div>
      </div>
    </div>
  )
}
