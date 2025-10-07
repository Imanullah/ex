// app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('transfer');

  const paymentMethods = [
    { id: 'transfer', name: 'Transfer Bank', icon: '🏦' },
    { id: 'ewallet', name: 'E-Wallet', icon: '📱' },
    { id: 'crypto', name: 'Crypto', icon: '₿' },
  ];

  const features = [
    {
      title: 'Proses 5 Menit',
      description: 'Saldo PayPal langsung masuk dalam hitungan menit',
      icon: '⚡',
    },
    {
      title: 'Rate Kompetitif',
      description: 'Harga terbaik dengan spread yang rendah',
      icon: '💰',
    },
    {
      title: 'Aman & Terpercaya',
      description: 'Transaksi dilindungi sistem keamanan berlapis',
      icon: '🔒',
    },
    {
      title: 'Support 24/7',
      description: 'Customer service siap membantu kapan saja',
      icon: '💬',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmad R.',
      role: 'Freelancer',
      content: 'Proses top up cepat banget, 10 menit langsung masuk. Rate juga bersaing!',
      rating: 5,
    },
    {
      name: 'Sarah L.',
      role: 'Online Seller',
      content: 'Sudah langganan 2 tahun, selalu aman dan terpercaya untuk bisnis online saya.',
      rating: 5,
    },
    {
      name: 'Budi S.',
      role: 'Student',
      content: 'Pelayanan CS sangat ramah dan membantu, prosesnya juga mudah dipahami.',
      rating: 4,
    },
  ];

  const faqs = [
    {
      question: 'Berapa lama proses top up PayPal?',
      answer: 'Biasanya proses top up memakan waktu 5-15 menit setelah pembayaran dikonfirmasi.',
    },
    {
      question: 'Apakah ada biaya tambahan?',
      answer: 'Tidak ada biaya tambahan tersembunyi. Semua biaya sudah termasuk dalam rate yang ditampilkan.',
    },
    {
      question: 'Bagaimana cara melakukan top up?',
      answer: 'Pilih jumlah, pilih metode pembayaran, transfer sesuai instruksi, dan saldo akan dikirim ke PayPal Anda.',
    },
    {
      question: 'Apakah aman menggunakan jasa ini?',
      answer: 'Sangat aman! Kami telah melayani ribuan transaksi dengan sistem keamanan berlapis.',
    },
  ];

  const calculateResult = () => {
    if (!amount) return '0.00';
    const usdAmount = parseFloat(amount);
    // Contoh rate: 1 USD = 15,500 IDR (bisa disesuaikan)
    const rate = 16500;
    const total = usdAmount * rate;
    return total.toLocaleString('id-ID');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-800">Avaller</span>
              <span className="text-xs text-blue-500 font-medium block">Jasa Convert PayPal</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
              Layanan
            </Link>
            <Link href="#howto" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
              Cara Order
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
              Testimoni
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
              Masuk
            </Link>
            <Link href="#order" className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200">
              Order Sekarang
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Top Up <span className="text-blue-500">PayPal</span> Mudah & Cepat
              </h1>
              <p className="text-xl text-gray-600 mb-8">Isi saldo PayPal Anda dengan proses instan, aman, dan rate terbaik. Dukungan 24/7 untuk kebutuhan transaksi internasional Anda.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#order" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-200 text-center">
                  Top Up Sekarang
                </Link>
                <Link href="#howto" className="bg-white text-blue-500 border-2 border-blue-500 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition duration-200 text-center">
                  Cara Order
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">10K+</div>
                  <div className="text-gray-600 text-sm">Pelanggan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">50K+</div>
                  <div className="text-gray-600 text-sm">Transaksi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">24/7</div>
                  <div className="text-gray-600 text-sm">Support</div>
                </div>
              </div>
            </div>

            {/* Order Calculator */}
            <div id="order" className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Hitung Top Up Anda</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Jumlah Top Up (USD)</label>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0" className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  <p className="text-sm text-gray-500 mt-1">Minimal top up: $10</p>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Metode Pembayaran</label>
                  <div className="grid grid-cols-3 gap-2">
                    {paymentMethods.map((method) => (
                      <button key={method.id} onClick={() => setPaymentMethod(method.id)} className={`p-3 rounded-lg border-2 text-center transition duration-200 ${paymentMethod === method.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        <div className="text-2xl mb-1">{method.icon}</div>
                        <div className="text-sm font-medium">{method.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Result */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Jumlah yang dibayar:</span>
                    <span className="text-xl font-bold text-blue-600">Rp {calculateResult()}</span>
                  </div>
                  <div className="text-sm text-gray-600">Rate: 1 USD = Rp 16,500</div>
                </div>

                <button className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition duration-200 flex items-center justify-center space-x-2">
                  <span>Lanjutkan Order</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kenapa Pilih PayTopUp?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Layanan top up PayPal terpercaya dengan pengalaman melayani ribuan customer</p>
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
        </div>
      </section>

      {/* How It Works */}
      <section id="howto" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Cara Order Mudah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hanya 4 langkah sederhana untuk top up PayPal Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1', title: 'Pilih Jumlah', description: 'Tentukan jumlah USD yang ingin di-top up' },
              { number: '2', title: 'Bayar', description: 'Transfer sesuai metode pembayaran pilihan' },
              { number: '3', title: 'Konfirmasi', description: 'Kirim bukti transfer ke admin' },
              { number: '4', title: 'Saldo Masuk', description: 'Saldo langsung masuk ke PayPal Anda' },
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

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Apa Kata Pelanggan?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Testimoni jujur dari pelanggan setia PayTopUp</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">{testimonial.name.charAt(0)}</div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Temukan jawaban untuk pertanyaan yang sering diajukan</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Top Up PayPal?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Bergabung dengan ribuan pelanggan yang telah mempercayai top up PayPal mereka pada kami</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#order" className="bg-white text-blue-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-200">
              Top Up Sekarang
            </Link>
            <Link href="#" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-500 transition duration-200">
              Chat Admin
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-sm">P</span>
                </div>
                <div>
                  <span className="text-xl font-bold">PayTopUp</span>
                  <span className="text-xs text-blue-400 font-medium block">Jasa Top Up PayPal</span>
                </div>
              </div>
              <p className="text-gray-400">Layanan top up PayPal terpercaya dengan proses cepat dan aman.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition duration-200">
                    Top Up PayPal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition duration-200">
                    Withdraw PayPal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition duration-200">
                    Konversi Saldo
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
                  <Link href="#" className="hover:text-white transition duration-200">
                    Cara Order
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
                  <Link href="#" className="hover:text-white transition duration-200">
                    Kontak Kami
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📱 WhatsApp: +62 812-3456-7890</li>
                <li>📧 Email: admin@paytopup.com</li>
                <li>🕒 Buka 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PayTopUp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
