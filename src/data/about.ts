export interface AboutInfo {
  name: string
  nickname: string
  taglineZh: string
  taglineEn: string
  avatar: string
  bioZh: string[]
  bioEn: string[]
  noteZh: string
  interestTags: string[]
  personalityTags: string[]
  dailyTags: { label: string; link: string | null }[]
  experience: { label: string; items: string[] }[]
}

export const about: AboutInfo = {
  name: 'Tang Yu',
  nickname: 'tang yu',
  taglineZh: '想做的事，先衝再說！',
  taglineEn: '',
  avatar: 'S__110952451.jpg',
  bioZh: [
    '你可以這麼形容我：「一個純純有衝勁的莽夫」。在還沒摸清地圖前我就敢先跳進未知領域(大腦還在猶豫，身體已經先執行了 😅)',
    '雖然開局總是「小白」，但我超強的求生欲會驅使我用最短時間跟上腳步，絕不讓自己落後太多。',
  ],
  bioEn: [],
  noteZh: '目前最大的願望是每天能正常上床睡眠。',
  interestTags: [],
  personalityTags: ['#ENTP', '#優雅的厭世者', '#效率至上主義', '#莽夫'],
  dailyTags: [
    { label: '#狼人殺', link: 'https://www.youtube.com/@JCDSS' },
    { label: '#電競', link: 'https://www.instagram.com/ctesa.tw?igsh=N2Z0bTJ6cDVnZGF0' },
    { label: '#追星', link: 'https://www.instagram.com/twicetagram/' },
    { label: '#追劇', link: null },
    { label: '#探索好吃的甜食', link: null },
  ],
  experience: [
    { label: '大學', items: ['電腦維修隊 總務+活動', '淡江開源社群 理事長', '宿舍自治會 成員', '資訊技術研究社 成員(目前停社)'] },
    { label: '高中', items: ['STS社團 副社長', '多項班級幹部與小老師經驗'] },
  ],
}
