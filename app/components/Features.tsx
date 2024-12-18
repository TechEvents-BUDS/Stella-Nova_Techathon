import { Brain, Zap, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: <Brain className="h-12 w-12 text-indigo-400" />,
    title: "Advanced AI Algorithms",
    description: "Cutting-edge machine learning models to solve complex problems."
  },
  {
    icon: <Zap className="h-12 w-12 text-purple-400" />,
    title: "Real-time Processing",
    description: "Lightning-fast data analysis and decision-making capabilities."
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-indigo-400" />,
    title: "Scalable Solutions",
    description: "Grow your AI capabilities alongside your business needs."
  }
]

export default function Features() {
  return (
    <section className="py-20 px-4 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 animate-fade-in-up">
          Our AI Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/30 p-6 rounded-lg backdrop-blur-sm hover:bg-black/50 transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up" style={{animationDelay: `${(index + 1) * 200}ms`}}>
              <div className="mb-4 animate-float">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

