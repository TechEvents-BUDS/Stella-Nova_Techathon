import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 md:mb-0">
            AI Promo
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © {new Date().getFullYear()} AI Promo. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

