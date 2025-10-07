import React from 'react'

export default function SectionHowItWork() {
  return (
    <section id="howto" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Cara Transaksi Mudah</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hanya 4 langkah sederhana untuk jual beli PayPal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '1', title: 'Pilih Jenis', description: 'Tentukan mau beli atau jual PayPal' },
            { number: '2', title: 'Isi Form', description: 'Masukkan jumlah dan data yang diperlukan' },
            { number: '3', title: 'Bayar/Terima', description: 'Lakukan pembayaran atau terima transfer' },
            { number: '4', title: 'Selesai', description: 'Transaksi berhasil dalam menit' },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold relative">
                {step.number}
                {index < 3 && <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-0.5 bg-blue-300"></div>}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
