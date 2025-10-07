// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'beli' | 'jual'>('beli');
  const [amount, setAmount] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('transfer');

  // Rate contoh dengan spread untuk bisnis
  const rates = {
    beli: 15500, // 1 USD = Rp 15,500 (user beli PayPal dari kita)
    jual: 14800, // 1 USD = Rp 14,800 (user jual PayPal ke kita)
  };

  // Biaya penanganan 3%
  const handlingFee = 0.03;

  const paymentMethods = [
    { id: 'transfer', name: 'Transfer Bank', icon: '🏦' },
    { id: 'ewallet', name: 'E-Wallet', icon: '📱' },
    { id: 'crypto', name: 'Crypto', icon: '₿' },
  ];

  const features = [
    {
      title: 'Proses 5-15 Menit',
      description: 'Transaksi jual beli PayPal selesai dalam hitungan menit',
      icon: '⚡',
    },
    {
      title: 'Rate Kompetitif',
      description: 'Harga jual beli terbaik dengan spread rendah',
      icon: '💰',
    },
    {
      title: 'Biaya Jelas 3%',
      description: 'Transparan tanpa biaya tersembunyi, hanya 3% biaya penanganan',
      icon: '📊',
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
      content: 'Buat beli PayPal buat bisnis online, selalu aman dan terpercaya.',
      rating: 5,
      type: 'beli',
    },
    {
      name: 'Ahmad R.',
      role: 'Freelancer',
      content: 'Sering jual saldo PayPal, proses cepat dan rate bersaing!',
      rating: 5,
      type: 'jual',
    },
    {
      name: 'Budi S.',
      role: 'Student',
      content: 'Pelayanan CS sangat ramah, proses jual beli mudah dipahami.',
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
      question: 'Berapa biaya penanganan yang dikenakan?',
      answer: 'Kami mengenakan biaya penanganan sebesar 3% dari total transaksi. Tidak ada biaya tersembunyi lainnya.',
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
        subtotal: 0,
        fee: 0,
        total: 0,
        rate: rates[activeTab],
      };

    const numericAmount = parseFloat(amount);

    if (activeTab === 'beli') {
      // User beli PayPal: IDR → USD
      const subtotal = numericAmount / rates.beli;
      const fee = subtotal * handlingFee;
      const total = subtotal - fee; // User dapat USD setelah dipotong fee

      return {
        subtotal: parseFloat(subtotal.toFixed(2)),
        fee: parseFloat(fee.toFixed(2)),
        total: parseFloat(total.toFixed(2)),
        rate: rates.beli,
      };
    } else {
      // User jual PayPal: USD → IDR
      const subtotal = numericAmount * rates.jual;
      const fee = subtotal * handlingFee;
      const total = subtotal - fee; // User dapat IDR setelah dipotong fee

      return {
        subtotal: subtotal,
        fee: fee,
        total: total,
        rate: rates.jual,
      };
    }
  };

  const { subtotal, fee, total, rate } = calculateResult();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">$⇄₿</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-800">PayConvert</span>
              <span className="text-xs text-blue-500 font-medium block">Jual Beli PayPal</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
              Layanan
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
                Beli & Jual <span className="text-blue-500">PayPal</span> Mudah
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Platform terpercaya untuk convert saldo PayPal ke Rupiah dan sebaliknya.
                <span className="font-semibold text-green-600"> Biaya penanganan hanya 3%!</span>
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
                  <div className="text-2xl font-bold text-blue-500">3%</div>
                  <div className="text-gray-600 text-sm">Biaya</div>
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
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder={activeTab === 'beli' ? '150000' : '10'} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  <p className="text-sm text-gray-500 mt-1">{activeTab === 'beli' ? 'Minimal beli: Rp 150,000' : 'Minimal jual: $10'}</p>
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

                {/* Result dengan breakdown biaya */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-3">Rincian Transaksi</h4>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Subtotal:</span>
                      <span>{activeTab === 'beli' ? `$ ${subtotal.toFixed(2)}` : `Rp ${subtotal.toLocaleString('id-ID')}`}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-700">Biaya Penanganan (3%):</span>
                      <span className="text-red-600">{activeTab === 'beli' ? `$ ${fee.toFixed(2)}` : `Rp ${fee.toLocaleString('id-ID')}`}</span>
                    </div>

                    <div className="border-t border-blue-200 pt-2">
                      <div className="flex justify-between font-semibold">
                        <span className="text-gray-800">{activeTab === 'beli' ? 'Anda akan menerima:' : 'Anda akan mendapatkan:'}</span>
                        <span className="text-blue-600">{activeTab === 'beli' ? `$ ${total.toFixed(2)}` : `Rp ${total.toLocaleString('id-ID')}`}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-blue-600 mt-2">
                    Rate: {activeTab === 'beli' ? '1 USD = ' : '1 USD = '}
                    Rp {rate.toLocaleString('id-ID')}
                  </div>
                </div>

                <Link href={`/order?type=${activeTab}&amount=${amount}&email=${paypalEmail}&method=${paymentMethod}`} className={`w-full py-3 rounded-lg font-bold transition duration-200 flex items-center justify-center space-x-2 ${!amount || !paypalEmail ? 'bg-gray-400 text-white cursor-not-allowed' : activeTab === 'beli' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-green-500 text-white hover:bg-green-600'}`}>
                  <span>{activeTab === 'beli' ? 'Beli PayPal' : 'Jual PayPal'}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Berbagai layanan convert PayPal untuk kebutuhan finansial Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition duration-200 cursor-pointer"
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
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kenapa Pilih PayConvert?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Platform jual beli PayPal terpercaya dengan biaya transparan 3%</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition duration-200">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Biaya Transparan Section */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Biaya Transparan 3%</h3>
              <p className="text-gray-600 mb-6">Kami memberlakukan biaya penanganan flat 3% untuk semua transaksi. Tidak ada biaya tersembunyi!</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-3">Beli PayPal</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Jumlah Transfer:</span>
                      <span className="font-medium">Rp 1,000,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Biaya (3%):</span>
                      <span className="text-red-600">Rp 30,000</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t border-green-200 pt-2">
                      <span>Saldo Diterima:</span>
                      <span className="text-green-600">$62.33</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">Jual PayPal</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Jumlah Jual:</span>
                      <span className="font-medium">$100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Biaya (3%):</span>
                      <span className="text-red-600">Rp 44,400</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t border-blue-200 pt-2">
                      <span>Rupiah Diterima:</span>
                      <span className="text-blue-600">Rp 1,435,600</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="howto" className="py-16 bg-white">
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
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Apa Kata Pelanggan?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Testimoni jujur dari pelanggan setia PayConvert</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
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
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Temukan jawaban untuk pertanyaan yang sering diajukan</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
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
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Bergabung dengan ribuan pelanggan yang telah mempercayai transaksi PayPal mereka pada kami</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#calculator" className="bg-white text-blue-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-200">
              Mulai Sekarang
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
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-sm">$⇄₿</span>
                </div>
                <div>
                  <span className="text-xl font-bold">PayConvert</span>
                  <span className="text-xs text-blue-400 font-medium block">Jual Beli PayPal</span>
                </div>
              </div>
              <p className="text-gray-400">
                Platform terpercaya untuk jual beli dan convert saldo PayPal dengan proses cepat dan aman.
                <span className="block mt-1 text-green-400">Biaya penanganan hanya 3%!</span>
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
                <li>📧 Email: admin@payconvert.com</li>
                <li>🕒 Buka 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PayConvert. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
