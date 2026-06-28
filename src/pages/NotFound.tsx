import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#0a0e1a] text-[#e2e8f0]">
      <p className="font-mono text-primary text-sm mb-4">404</p>
      <h1 className="text-3xl font-bold mb-3">找不到這個頁面</h1>
      <p className="text-[#7a8ba8] mb-8">頁面可能被移動或網址打錯了。</p>
      <Link to="/" className="text-primary hover:underline">← 回首頁</Link>
    </div>
  )
}
