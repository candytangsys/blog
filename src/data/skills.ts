export interface Skill {
  id: string
  name: string
  category: string
  icon: string
  relatedProjects: string[]
}

const devicon = (slug: string, variant: 'original' | 'plain' = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`

export const skills: Skill[] = [
  { id: 'java', name: 'Java', category: '程式語言', icon: devicon('java'), relatedProjects: ['exercise-set'] },
  { id: 'python', name: 'Python', category: '程式語言', icon: devicon('python'), relatedProjects: [] },
  { id: 'csharp', name: 'C#', category: '程式語言', icon: devicon('csharp'), relatedProjects: [] },
  { id: 'cplusplus', name: 'C++', category: '程式語言', icon: devicon('cplusplus'), relatedProjects: [] },
  { id: 'html', name: 'HTML', category: '前端框架', icon: devicon('html5'), relatedProjects: ['ar-heritage-explorer', 'question-number-generator', 'exercise-set'] },
  { id: 'css', name: 'CSS', category: '前端框架', icon: devicon('css3'), relatedProjects: ['question-number-generator'] },
  { id: 'javascript', name: 'JavaScript', category: '前端框架', icon: devicon('javascript'), relatedProjects: ['personal-website', 'ar-heritage-explorer', 'question-number-generator'] },
  { id: 'react', name: 'React', category: '前端框架', icon: devicon('react'), relatedProjects: ['personal-website'] },
  { id: 'tailwindcss', name: 'Tailwind CSS', category: '前端框架', icon: devicon('tailwindcss', 'plain'), relatedProjects: ['personal-website'] },
  { id: 'nodejs', name: 'Node.js', category: '工具', icon: devicon('nodejs'), relatedProjects: [] },
  { id: 'flask', name: 'Flask', category: '工具', icon: devicon('flask', 'original'), relatedProjects: ['ar-heritage-explorer'] },
  { id: 'postgresql', name: 'PostgreSQL', category: '工具', icon: devicon('postgresql'), relatedProjects: [] },
  { id: 'access', name: 'Access', category: '工具', icon: 'https://cdn.simpleicons.org/microsoftaccess/7a8ba8', relatedProjects: [] },
  { id: 'git', name: 'Git', category: '工具', icon: devicon('git'), relatedProjects: ['personal-website'] },
  { id: 'github', name: 'GitHub', category: '工具', icon: 'https://cdn.simpleicons.org/github/e2e8f0', relatedProjects: ['personal-website'] },
  { id: 'vercel', name: 'Vercel', category: '工具', icon: 'https://cdn.simpleicons.org/vercel/e2e8f0', relatedProjects: ['personal-website'] },
  { id: 'vmware', name: 'VMware', category: '工具', icon: 'https://cdn.simpleicons.org/vmware/7a8ba8', relatedProjects: [] },
  { id: 'linux', name: 'Linux', category: '工具', icon: devicon('linux'), relatedProjects: [] },
]

export const categories = ['全部', ...Array.from(new Set(skills.map((s) => s.category)))]
