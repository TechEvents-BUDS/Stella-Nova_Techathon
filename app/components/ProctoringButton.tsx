'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function ProctoringButton() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 2000) // Reset after 2 seconds
  }

  return (
    <div className="text-center mt-12 relative">
      <div className={`absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full filter blur-xl transition-all duration-500 ${isAnimating ? 'scale-[2] opacity-0' : 'scale-100 opacity-70'}`}></div>
      <Button
        onClick={handleClick}
        className={`
          relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 
          hover:from-indigo-700 hover:to-purple-700 text-white font-bold 
          py-8 px-16 rounded-full text-3xl shadow-lg transform 
          transition-all duration-300 ease-in-out hover:scale-105
          ${isAnimating ? 'animate-crazy-button' : ''}
        `}
      >
        Launch Proctoring AI
      </Button>
      <p className="mt-4 text-sm text-gray-300 animate-float relative z-10">
        Experience the future of exam monitoring
      </p>
      {isAnimating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 animate-crazy-background"></div>
        </div>
      )}
    </div>
  )
}

