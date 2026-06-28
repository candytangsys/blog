export interface BlogLink {
  label: string
  url: string
}

export interface BlogPost {
  id: string
  title: string
  date: string
  location?: string
  category: '學校' | '校外'
  tags: string[]
  summary: string
  coverImage?: string
  content: string
  photos: string[]
  links: BlogLink[]
}

export const blog: BlogPost[] = [
  {
    id: 'sitcon-2026',
    title: 'SITCON 2026',
    date: '2026',
    category: '校外',
    tags: ['#sitcon', '#年會', '#資訊'],
    summary: '參加學生自發舉辦的資訊技術研討會，聆聽多場議程、接觸不同技術領域，並認識志同道合的夥伴。',
    content: `
參加了 SITCON（Student Information Technology CONference）2026 年會。

SITCON 是由學生自發舉辦、面向學生的資訊技術研討會，每年吸引來自各地對資訊有熱情的學生參與。

## 印象最深的部分

在這次活動中聆聽了各種議程，接觸到不同領域的技術分享，也認識了一些志同道合的夥伴。
`,
    photos: [],
    links: [
      { label: 'SITCON 官網', url: 'https://sitcon.org' },
    ],
  },
]
