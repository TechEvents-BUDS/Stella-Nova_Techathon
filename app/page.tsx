import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import VideoBackground from './components/VideoBackground'

export default function Home() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <VideoBackground />
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

