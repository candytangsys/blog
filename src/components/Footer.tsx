import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0a0e1a] border-t border-[#1e2d4a] text-[#7a8ba8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#e2e8f0]">Tang Yu</h3>
            <p>Curious • Energetic • Thoughtful</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#e2e8f0]">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-primary transition-colors">Home</Link>
              <Link to="/skills" className="block hover:text-primary transition-colors">Skills</Link>
              <Link to="/projects" className="block hover:text-primary transition-colors">Projects</Link>
              <Link to="/activities" className="block hover:text-primary transition-colors">Activities</Link>
              <Link to="/blog" className="block hover:text-primary transition-colors">Blog</Link>
              <Link to="/contact" className="block hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#e2e8f0]">Connect</h4>
            <div className="space-y-2">
              <a href="https://github.com/candytangsys" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://gitlab.com/candytangsys" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                GitLab
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#1e2d4a] pt-8 text-center text-sm">
          <p>&copy; Tang Yu</p>
        </div>
      </div>
    </footer>
  )
}
