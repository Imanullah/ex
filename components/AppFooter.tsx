import Link from 'next/link';
import React from 'react';

export default function AppFooter() {
  const mobileNumber = process.env.NEXT_PUBLIC_MOBILE_NUMBER;

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-sm">A</span>
              </div>
              <div>
                <span className="text-xl font-bold">Avaller.com</span>
                <span className="text-xs text-blue-400 font-medium block">Jual Beli PayPal</span>
              </div>
            </div>
            <p className="text-gray-400">
              Platform terpercaya untuk jual beli dan convert saldo PayPal dengan proses cepat dan aman.
              <span className="block mt-1 text-green-400">Bebas biaya penanganan & admin!</span>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#calculator" className="hover:text-white transition duration-200">
                  Beli PayPal
                </Link>
              </li>
              <li>
                <Link href="#calculator" className="hover:text-white transition duration-200">
                  Jual PayPal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition duration-200">
                  Convert Balance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition duration-200">
                  Bisnis Solution
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Bantuan</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#howto" className="hover:text-white transition duration-200">
                  Cara Transaksi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition duration-200">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition duration-200">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <span>📱</span>
                <a href={`https://wa.me/${mobileNumber}`} target='_blank' className="hover:text-white transition duration-200">
                  {mobileNumber}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <a href="mailto:cs@avaller.com" className="hover:text-white transition duration-200">
                  cs@avaller.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>🕒</span>
                <span>Buka 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Avaller.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
