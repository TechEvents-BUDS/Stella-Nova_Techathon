import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out hover:bg-black/70">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          AI Promo
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#" className="hover:text-purple-400 transition-colors">Home</Link></li>
            <li><Link href="#" className="hover:text-purple-400 transition-colors">About</Link></li>
            <li><Link href="#" className="hover:text-purple-400 transition-colors">Services</Link></li>
            <li><Link href="#" className="hover:text-purple-400 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

