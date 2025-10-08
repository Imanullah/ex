'use client';

import { motion } from 'motion/react';

export default function HomePage() {
  const steps = [
    {
      title: 'Registrasi Akun',
      status: 'Mudah & Cepat',
      desc: 'Daftar akun hanya dengan email dan nomor WhatsApp aktif. Proses cepat kurang dari 2 menit.',
      icon: '📝',
    },
    {
      title: 'Deposit / Top Up',
      status: 'Aman & Terpercaya',
      desc: 'Isi saldo PayPal dengan rate terbaik. Proses otomatis melalui sistem kami.',
      icon: '💳',
    },
    {
      title: 'Jual / Tarik Saldo',
      status: 'Langsung Cair',
      desc: 'Jual saldo PayPal Anda dan terima pembayaran langsung ke rekening bank lokal.',
      icon: '💵',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-6 text-center text-white shadow">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Jual Beli PayPal Aman & Terpercaya</h1>
        <p className="max-w-2xl mx-auto text-lg text-blue-100">Layanan cepat, aman, dan profesional untuk top up maupun tarik saldo PayPal dengan kurs terbaik.</p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition">Mulai Sekarang</button>
          <button className="px-6 py-3 border border-white rounded-xl hover:bg-blue-800 transition">Pelajari Lebih Lanjut</button>
        </div>
      </motion.div>

      {/* Info Box */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-2xl shadow-sm mt-10 max-w-2xl w-full">
        <h2 className="font-semibold text-lg">✅ 100% Aman dengan Garansi Transaksi</h2>
        <p className="text-sm mt-1">Semua transaksi dilindungi sistem escrow kami. Jika ada kendala, uang Anda dijamin kembali.</p>
      </motion.div>

      {/* Panduan / CTA */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="bg-blue-50 border border-blue-200 px-6 py-6 rounded-2xl shadow-sm mt-6 max-w-2xl w-full text-center">
        <h2 className="font-semibold text-blue-700 text-xl">Bagaimana Cara Kerjanya?</h2>
        <p className="text-sm text-gray-600 mt-2">Ikuti langkah mudah berikut untuk melakukan transaksi jual beli PayPal.</p>
        <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 transition">Pelajari Selengkapnya</button>
      </motion.div>

      {/* Timeline Steps */}
      <div className="relative mt-10 max-w-2xl w-full">
        <div className="absolute top-0 left-6 w-0.5 h-full bg-gray-200"></div>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.2, duration: 0.8 }} className="relative pl-16">
              <div className="absolute left-0 top-2 w-12 h-12 rounded-full border-4 border-blue-600 bg-white flex items-center justify-center shadow text-xl">{step.icon}</div>
              <div className="bg-white rounded-2xl shadow p-5 border">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{step.title}</h3>
                  <span className="text-sm text-green-600">{step.status}</span>
                </div>
                <p className="mt-2 text-gray-700 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-6 text-gray-500 text-sm">© 2025 JualBeliPayPal. Semua Hak Dilindungi.</footer>
    </div>
  );
}
