import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

export default function Home() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

