export interface ActivityLink {
  label: string
  url: string
}

export interface ActivityEntry {
  id: string
  title: string
  date: string
  location: string
  category: '學校' | '校外'
  tags: string[]
  summary: string
  responsibilities: string[]
  links: ActivityLink[]
}

export const activities: ActivityEntry[] = [
  {
    id: 'tku-open-source',
    title: '淡江開源社群｜理事長',
    date: '2026 - now',
    location: '淡江大學',
    category: '學校',
    tags: ['開源', '社群'],
    summary: '',
    responsibilities: [],
    links: [],
  },
  {
    id: 'computer-repair-team',
    title: '校園電腦維修隊｜工讀生',
    date: '2026 - now',
    location: '淡江大學',
    category: '學校',
    tags: ['工讀', '技術支援'],
    summary: '協助校內資訊設備維護。',
    responsibilities: [
      '電腦硬體問題排除',
      '設備檢修',
      '系統安裝',
      '印表機支援',
      '現場資訊協助',
    ],
    links: [],
  },
  {
    id: 'dorm-association',
    title: '宿舍自治會｜成員',
    date: '2025 - now',
    location: '淡江大學',
    category: '學校',
    tags: ['宿舍', '活動企劃'],
    summary: '協助辦理宿舍內活動。',
    responsibilities: [
      '發放小禮物',
      '慶祝節日',
      '協助期初、期末搬宿舍事宜',
    ],
    links: [],
  },
  {
    id: 'it-research-club',
    title: '資訊技術研究社｜成員',
    date: '2025 - 2026',
    location: '淡江大學',
    category: '學校',
    tags: ['社團', '資訊技術'],
    summary: '提早接觸高年級會製作的資訊東東',
    responsibilities: [
      '學習資訊技術',
      '參與社團活動',
      '技術實作練習',
    ],
    links: [],
  },
  {
    id: 'sts-club',
    title: 'STS 社團｜副社長',
    date: '2023 - 2024',
    location: '高中',
    category: '學校',
    tags: ['社團', '文史'],
    summary: '以推廣新竹在地歷史文物與文化為核心的學生社團。',
    responsibilities: [
      '協助社團運營',
      '活動規劃與執行',
      '團隊溝通協調',
      '社團管理與支援',
    ],
    links: [],
  },
  {
    id: 'scout-camp',
    title: '童軍露營活動｜隊輔',
    date: '2023',
    location: '童軍營地',
    category: '校外',
    tags: ['童軍', '營隊'],
    summary: '帶領國中生小隊參與露營與闖關活動。',
    responsibilities: [
      '小隊帶領',
      '活動引導',
      '生活照顧',
      '情緒關懷',
      '突發狀況處理',
    ],
    links: [],
  },
  {
    id: 'school-festival',
    title: '校慶活動｜總召（多次）',
    date: '國中 - 高中',
    location: '學校',
    category: '學校',
    tags: ['活動企劃'],
    summary: '多次擔任班級活動總召。',
    responsibilities: [
      '表演企劃',
      '編曲編舞',
      '任務分工',
      '團隊進度管理',
      '現場統籌執行',
    ],
    links: [],
  },
]
