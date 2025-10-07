import React from 'react'

 // Data bank dan e-wallet untuk section baru
  const banks = [
    { name: 'BCA', logo: '🏦' },
    { name: 'Mandiri', logo: '🏛️' },
    { name: 'BRI', logo: '💼' },
    { name: 'BNI', logo: '🏢' },
    { name: 'DANA', logo: '💜' },
    { name: 'GoPay', logo: '🟢' },
    { name: 'OVO', logo: '🔵' },
    { name: 'LinkAja', logo: '🔴' },
  ];



export default function SectionPaymentMehods() {
  return (
    <section id="payment-methods" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Metode Pembayaran</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Berbagai metode pembayaran yang kami dukung untuk kemudahan transaksi Anda</p>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-4 space-x-6 scrollbar-hide">
            {banks.map((bank, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl border border-gray-200 flex flex-col items-center justify-center p-4 hover:shadow-lg transition duration-200">
                <div className="text-4xl mb-3">{bank.logo}</div>
                <span className="font-semibold text-gray-800 text-center">{bank.name}</span>
              </div>
            ))}
          </div>

          {/* Gradient fade effect */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">Dan masih banyak metode pembayaran lainnya yang tersedia</p>
        </div>
      </div>
    </section>
  );
}
