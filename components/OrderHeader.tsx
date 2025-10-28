import Link from 'next/link';

export default function OrderHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <div>
            <span className="text-xl font-bold text-gray-800">PayTopUp</span>
            <span className="text-xs text-blue-500 font-medium block">Jasa Top Up PayPal</span>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
            Beranda
          </Link>
          <Link href="/#howto" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
            Cara Order
          </Link>
          <Link href="/#testimonials" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
            Testimoni
          </Link>
        </nav>
      </div>
    </header>
  );
}
