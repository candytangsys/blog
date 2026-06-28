export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  skillTags: string[]
  coverImage?: string
  content?: string
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    id: 'personal-website',
    title: '個人部落格網站',
    description: '你現在看到的這個！用 React + TypeScript 打造的個人網站，展示技能、經歷與筆記。部署在 GitHub Pages / Vercel。',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    skillTags: ['react', 'tailwindcss', 'javascript', 'git', 'github', 'vercel'],
    links: [
      { label: 'GitHub', url: 'https://github.com/candytangsys/blog' },
    ],
  },
  {
    id: 'ar-heritage-explorer',
    title: 'AR Heritage Explorer',
    description: '淡江大學校園古蹟 AR 導覽系統。用手機瀏覽器就能體驗 AR，結合地圖、歷史解說與闖關問答，不需要安裝 App。',
    tech: ['HTML', 'JavaScript', 'AR.js', 'A-Frame', 'Flask', 'SQLite'],
    skillTags: ['html', 'javascript', 'flask'],
    links: [
      { label: 'GitHub', url: 'https://github.com/candytangsys/ar-heritage-explorer' },
    ],
  },
  {
    id: 'question-number-generator',
    title: 'Question Number Generator',
    description: '隨機分配題目給各組的小工具，適合課堂遊戲或團隊活動用。純 HTML 單頁實作。',
    tech: ['HTML', 'CSS', 'JavaScript'],
    skillTags: ['html', 'css', 'javascript'],
    links: [
      { label: 'GitHub', url: 'https://github.com/candytangsys/Question-Number-Generator' },
    ],
  },
  {
    id: 'exercise-set',
    title: '程式練習題集',
    description: '整理與解決程式設計相關的練習題。',
    tech: ['Java', 'HTML'],
    skillTags: ['java', 'html'],
    links: [
      { label: 'GitHub', url: 'https://github.com/orgs/BasicExercises/repositories' },
    ],
  },
]
