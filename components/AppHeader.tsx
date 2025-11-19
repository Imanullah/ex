import Link from 'next/link';
import React from 'react';

export default function AppHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">$⇄₿</span>
          </div>
          <div>
            <span className="text-xl font-bold text-gray-800">Avaller.com</span>
            <span className="text-xs text-blue-500 font-medium block">Jual Beli PayPal</span>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="#services" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
            Layanan
          </Link>
          <Link href="#payment-methods" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
            Pembayaran
          </Link>
          <Link href="#howto" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
            Cara Transaksi
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
            Testimoni
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
            FAQ
          </Link>
          <Link href="/privacy" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
            Privacy
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
            Masuk
          </Link>
          <Link href="/order" className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200">
            Mulai Transaksi
          </Link>
        </div>
      </div>
    </header>
  );
}
