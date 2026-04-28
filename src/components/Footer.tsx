import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary via-blue-800 to-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>小魚.dev ✨</h3>
            <p className="text-blue-100">Curious • Energetic • Thoughtful</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-accent transition-colors">Home</Link>
              <Link to="/skills" className="block hover:text-accent transition-colors">Skills</Link>
              <Link to="/experience" className="block hover:text-accent transition-colors">Experience</Link>
              <Link to="/projects" className="block hover:text-accent transition-colors">Projects</Link>
              <Link to="/contact" className="block hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="space-y-2">
              <a href="https://github.com/candytangsys" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">
                GitHub
              </a>
              <a href="mailto:candytang1009@gmail.com" className="block hover:text-accent transition-colors">
                Email
              </a>
              <a href="https://instagram.com/tang_fish0" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-400 pt-8 text-center text-blue-100">
          <p>做有趣的東西，和有趣的人一起工作 ✨</p>
          <p className="mt-2 text-sm">&copy; 2024 Tang Yu • Made with ❤️ and curiosity</p>
        </div>
      </div>
    </footer>
  )
}
