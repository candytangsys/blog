export interface NoteCategory {
  id: string
  title: string
  emoji: string
  description: string
  link: string
}

export const noteCategories: NoteCategory[] = [
  {
    id: 'tools',
    title: '工具筆記',
    emoji: '🛠️',
    description: '各種工具的使用紀錄與心得，包含開發環境設定、常用指令整理等。',
    link: 'https://hackmd.io/folders/ll6lCzc7qAmVEvtqxXibZ?nav=overview',
  },
  {
    id: 'programming',
    title: '程式語言筆記',
    emoji: '💻',
    description: '學習程式語言的過程紀錄，包含語法整理、觀念釐清與練習範例。',
    link: 'https://hackmd.io/folders/zpQfVzs_Jzi9rbQJE5uDL?nav=overview',
  },
]
