import React from 'react';

const features = [
  {
    title: 'Proses 5-15 Menit',
    description: 'Transaksi jual beli PayPal selesai dalam hitungan menit',
    icon: '⚡',
  },
  {
    title: 'Rate All-In',
    description: 'Harga sudah include semua biaya, tidak ada biaya tambahan',
    icon: '💰',
  },
  {
    title: 'Bebas Biaya Penanganan',
    description: 'Tidak ada biaya admin atau biaya tersembunyi lainnya',
    icon: '🎉',
  },
  {
    title: 'Support 24/7',
    description: 'Customer service siap membantu kapan saja',
    icon: '💬',
  },
];

export default function SectionFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Kenapa Pilih Avaller.com?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Platform jual beli PayPal terpercaya dengan harga all-in tanpa biaya tambahan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition duration-200">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* No Fees Section */}
        <div className="mt-12 bg-green-50 rounded-2xl p-8 border border-green-200 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🎉</span>
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">Bebas Biaya Penanganan!</h3>
            <p className="text-green-700 mb-6 text-lg">Kami tidak mengenakan biaya admin, biaya penanganan, atau biaya tersembunyi apapun. Semua sudah termasuk dalam rate yang Anda lihat.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3">Beli PayPal</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Jumlah Transfer:</span>
                    <span className="font-medium">Rp 1,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Biaya Tambahan:</span>
                    <span className="text-green-600 font-bold">Rp 0</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t border-green-200 pt-2">
                    <span>Saldo Diterima:</span>
                    <span className="text-green-600">$64.10</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3">Jual PayPal</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Jumlah Jual:</span>
                    <span className="font-medium">$100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Biaya Tambahan:</span>
                    <span className="text-green-600 font-bold">Rp 0</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t border-green-200 pt-2">
                    <span>Rupiah Diterima:</span>
                    <span className="text-green-600">Rp 1,490,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
