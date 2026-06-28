import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { blog } from '../data/blog'

export default function BlogDetail() {
  const { id } = useParams()
  const post = blog.find((b) => b.id === id)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  if (!post) {
    return (
      <div className="pt-20 text-center text-[#4a5c78] py-20">
        找不到此頁面
        <div className="mt-4">
          <Link to="/blog" className="text-primary hover:underline">← 返回活動心得</Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="pt-20 max-w-2xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* 封面照片 */}
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-56 object-cover rounded-xl mb-8"
        />
      )}

      {/* 標題與 meta */}
      <div className="mb-6">
        <div className="font-mono text-[10px] text-primary tracking-widest uppercase mb-2">
          // {post.date}{post.location ? ` · ${post.location}` : ''} · {post.category}
        </div>
        <h1 className="text-2xl font-bold text-[#c8d8f0] mb-3">{post.title}</h1>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#1a2744] border border-[#3878ff44] text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 外部連結 */}
      {post.links.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-8">
          {post.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] px-3 py-1.5 rounded-md border border-primary text-primary hover:bg-[#3878ff18] transition-colors"
            >
              ↗ {link.label}
            </a>
          ))}
        </div>
      )}

      {/* 心得內文（Markdown） */}
      <div
        className="prose prose-invert prose-sm max-w-none mb-10
                   prose-headings:text-[#c8d8f0] prose-p:text-[#7a8ba8]
                   prose-strong:text-[#e2e8f0] prose-a:text-primary"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      {/* 照片牆 */}
      {post.photos.length > 0 && (
        <div className="mb-10">
          <div className="font-mono text-[10px] text-primary tracking-widest uppercase mb-4">
            // 活動照片
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {post.photos.map((src, i) => (
              <button
                key={i}
                onClick={() => {
                  setLightboxIndex(i)
                  setLightboxOpen(true)
                }}
                className="aspect-square overflow-hidden rounded-lg border border-[#1e2d4a] hover:border-primary transition-colors"
              >
                <img
                  src={src}
                  alt={`照片 ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            index={lightboxIndex}
            slides={post.photos.map((src) => ({ src }))}
          />
        </div>
      )}

      {/* 返回按鈕 */}
      <Link
        to="/blog"
        className="font-mono text-[11px] text-[#5a7090] hover:text-[#c8d8f0] transition-colors flex items-center gap-2"
      >
        ← 返回活動心得
      </Link>
    </motion.div>
  )
}
