import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import { useScrollToTop } from './hooks/useScrollToTop'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Notes from './pages/Notes'
import Activities from './pages/Activities'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function AppRoutes() {
  useScrollToTop()
  return (
    <PageTransition>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/activities" element={<Experience />} />
        <Route path="/blog" element={<Activities />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  )
}

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-bg-base">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
