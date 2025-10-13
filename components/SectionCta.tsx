import Link from 'next/link';
import React from 'react'

export default function SectionCta() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Siap Bertransaksi?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Bergabung dengan ribuan pelanggan yang telah menikmati transaksi PayPal tanpa biaya tambahan</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#calculator" className="bg-white text-blue-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-200">
            Mulai Sekarang
          </Link>
          <a href="https://wa.me/6285121312337" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-500 transition duration-200">
            Chat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}


