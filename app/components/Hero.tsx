import ProctoringButton from './ProctoringButton'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="container mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
            Revolutionize
          </span> Your Business with AI
        </h1>
        <p className="text-xl md:text-2xl mb-12 animate-fade-in-up animation-delay-200">
          Harness the power of artificial intelligence to transform your operations
        </p>
      </div>
      <ProctoringButton />
    </section>
  )
}

