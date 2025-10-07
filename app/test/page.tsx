// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'beli' | 'jual'>('beli');
  const [amount, setAmount] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('transfer');

  // Rate sudah include semua biaya - lebih transparan untuk customer
  const rates = {
    beli: 15600, // 1 USD = Rp 15,600 (user beli PayPal dari kita)
    jual: 14900, // 1 USD = Rp 14,900 (user jual PayPal ke kita)
  };

  const paymentMethods = [
    { id: 'transfer', name: 'Transfer Bank', icon: '🏦' },
    { id: 'ewallet', name: 'E-Wallet', icon: '📱' },
    { id: 'crypto', name: 'Crypto', icon: '₿' },
  ];

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

  const services = [
    {
      title: 'Beli PayPal',
      description: 'Top up saldo PayPal dengan proses instan',
      icon: '💸',
      type: 'beli',
    },
    {
      title: 'Jual PayPal',
      description: 'Konversi saldo PayPal ke Rupiah dengan rate terbaik',
      icon: '🔄',
      type: 'jual',
    },
    {
      title: 'Convert Balance',
      description: 'Tukar saldo PayPal dengan mata uang lainnya',
      icon: '🌎',
      type: 'convert',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah L.',
      role: 'Online Seller',
      content: 'Rate all-in sangat menguntungkan, tidak ada biaya tambahan yang bikin bingung!',
      rating: 5,
      type: 'beli',
    },
    {
      name: 'Ahmad R.',
      role: 'Freelancer',
      content: 'Akhirnya nemu jasa tanpa biaya admin, proses cepat dan harga jelas dari awal.',
      rating: 5,
      type: 'jual',
    },
    {
      name: 'Budi S.',
      role: 'Student',
      content: 'Pelayanan CS sangat ramah, dan yang paling penting tidak ada biaya tersembunyi.',
      rating: 4,
      type: 'beli',
    },
  ];

  const faqs = [
    {
      question: 'Berapa lama proses jual/beli PayPal?',
      answer: 'Biasanya proses memakan waktu 5-15 menit setelah pembayaran dikonfirmasi.',
    },
    {
      question: 'Apakah ada biaya tambahan atau biaya penanganan?',
      answer: 'Tidak! Semua biaya sudah termasuk dalam rate yang ditampilkan. Tidak ada biaya admin, biaya penanganan, atau biaya tersembunyi lainnya.',
    },
    {
      question: 'Bagaimana cara melakukan transaksi?',
      answer: 'Pilih jenis transaksi (jual/beli), isi form, transfer sesuai instruksi, dan tunggu konfirmasi.',
    },
    {
      question: 'Apakah aman menggunakan jasa ini?',
      answer: 'Sangat aman! Kami telah melayani ribuan transaksi dengan sistem keamanan berlapis.',
    },
  ];

  const calculateResult = () => {
    if (!amount)
      return {
        total: 0,
        rate: rates[activeTab],
      };

    const numericAmount = parseFloat(amount);

    if (activeTab === 'beli') {
      // User beli PayPal: IDR → USD
      const total = numericAmount / rates.beli;
      return {
        total: parseFloat(total.toFixed(2)),
        rate: rates.beli,
      };
    } else {
      // User jual PayPal: USD → IDR
      const total = numericAmount * rates.jual;
      return {
        total: total,
        rate: rates.jual,
      };
    }
  };

  const { total, rate } = calculateResult();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-800">Avaller.com</span>
              <span className="text-xs text-blue-500 font-medium block">Jual Beli PayPal</span>
            </div>
          </div>

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

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Beli & Jual <span className="text-blue-500">PayPal</span> Tanpa Biaya
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Platform terpercaya untuk convert saldo PayPal ke Rupiah dan sebaliknya.
                <span className="font-semibold text-green-600"> Bebas biaya penanganan & tanpa biaya admin!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#calculator" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-200 text-center">
                  Hitung Sekarang
                </Link>
                <Link href="#howto" className="bg-white text-blue-500 border-2 border-blue-500 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition duration-200 text-center">
                  Cara Kerja
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">10K+</div>
                  <div className="text-gray-600 text-sm">Transaksi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">0%</div>
                  <div className="text-gray-600 text-sm">Biaya Admin</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">24/7</div>
                  <div className="text-gray-600 text-sm">Support</div>
                </div>
              </div>
            </div>

            {/* Calculator Section */}
            <div id="calculator" className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="flex space-x-4 mb-6">
                <button onClick={() => setActiveTab('beli')} className={`flex-1 py-3 rounded-lg font-bold transition duration-200 ${activeTab === 'beli' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  Beli PayPal
                </button>
                <button onClick={() => setActiveTab('jual')} className={`flex-1 py-3 rounded-lg font-bold transition duration-200 ${activeTab === 'jual' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  Jual PayPal
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">{activeTab === 'beli' ? 'Jumlah Rupiah (IDR)' : 'Jumlah PayPal (USD)'}</label>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder={activeTab === 'beli' ? '15600' : '1'} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  <p className="text-sm text-gray-500 mt-1">{activeTab === 'beli' ? 'Minimal beli: $1 (Rp 15,600)' : 'Minimal jual: $1'}</p>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email PayPal</label>
                  <input type="email" value={paypalEmail} onChange={(e) => setPaypalEmail(e.target.value)} placeholder="contoh@email.com" className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
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

                {/* Result yang sederhana tanpa breakdown biaya */}
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{activeTab === 'beli' ? 'Saldo yang diterima:' : 'Rupiah yang diterima:'}</span>
                    <span className="text-2xl font-bold text-green-600">{activeTab === 'beli' ? `$ ${total.toFixed(2)}` : `Rp ${total.toLocaleString('id-ID')}`}</span>
                  </div>
                  <div className="text-sm text-green-600 mt-2 flex items-center">
                    <span className="mr-2">🎉</span>
                    <span>Rate all-in! Tidak ada biaya tambahan</span>
                  </div>
                  <div className="text-xs text-green-700 mt-1">
                    Rate: {activeTab === 'beli' ? '1 USD = ' : '1 USD = '}
                    Rp {rate.toLocaleString('id-ID')}
                  </div>
                </div>

                <Link href={`/order?type=${activeTab}&amount=${amount}&email=${paypalEmail}&method=${paymentMethod}`} className={`w-full py-3 rounded-lg font-bold transition duration-200 flex items-center justify-center space-x-2 ${!amount || !paypalEmail ? 'bg-gray-400 text-white cursor-not-allowed' : activeTab === 'beli' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-green-500 text-white hover:bg-green-600'}`}>
                  <span>{activeTab === 'beli' ? 'Beli PayPal Sekarang' : 'Jual PayPal Sekarang'}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
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

      {/* Services Section */}
      <section id="services" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Berbagai layanan convert PayPal untuk kebutuhan finansial Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition duration-200 cursor-pointer"
                onClick={() => {
                  setActiveTab(service.type as 'beli' | 'jual');
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* How It Works */}
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

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Apa Kata Pelanggan?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Testimoni jujur dari pelanggan setia Avaller.com</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className={`px-2 py-1 rounded text-xs font-medium ${testimonial.type === 'jual' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{testimonial.type === 'jual' ? 'Jual PayPal' : 'Beli PayPal'}</div>
                  <div className="flex ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
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
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
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
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Bertransaksi?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Bergabung dengan ribuan pelanggan yang telah menikmati transaksi PayPal tanpa biaya tambahan</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#calculator" className="bg-white text-blue-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-200">
              Mulai Sekarang
            </Link>
            <a href="https://wa.me/62812345678" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-500 transition duration-200">
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
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
                  <a href="https://wa.me/62812345678" className="hover:text-white transition duration-200">
                    +62 812345678
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
    </div>
  );
}
