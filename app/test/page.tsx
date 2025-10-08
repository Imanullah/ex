'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimate, animate } from 'motion/react';

export default function SectionHero() {
  const [activeTab, setActiveTab] = useState<'beli' | 'jual'>('beli');
  const [amount, setAmount] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('transfer');

  // const [scope, animate] = useAnimate();

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

  // Animated Counter Component
  const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = '', className = '' }) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
      const controls = animate(from, to, {
        duration,
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }, [from, to, duration]);

    return (
      <motion.span className={className}>
        {count.toLocaleString()}
        {suffix}
      </motion.span>
    );
  };

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

  const buttonVariants: any = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 3, ease: 'easeInOut' } },
  };

  const statsVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, transform: 'translateY(40px)' }} animate={{ opacity: 1, transform: 'translateY(0px)' }} transition={{ duration: 0.8, type: 'spring' }} className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 mb-6">
              Jasa Top Up <span className="text-blue-500">PayPal</span> Cepat & Aman
            </motion.h1>

            <motion.h2 className="hok text-medium text-gray-600 mb-8" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              Platform terpercaya untuk convert saldo PayPal dengan rate murah ke Rupiah dan sebaliknya. Dapatkan kurs Dolar USD PayPal terbaik yang terupdate 24 jam
              <p className="font-semibold text-green-600 mt-2"> Bebas biaya penanganan & tanpa biaya admin!</p>
            </motion.h2>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={buttonVariants} initial="initial" animate="animate">
              <Link href="#calculator" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-200 text-center">
                Hitung Sekarang
              </Link>
              <Link href="#howto" className="bg-white text-blue-500 border-2 border-blue-500 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition duration-200 text-center">
                Cara Kerja
              </Link>
            </motion.div>

            {/* Stats dengan animasi */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12"
              initial="initial"
              animate="animate"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {/* Transaksi */}
              <motion.div className="text-center" variants={statsVariants}>
                <div className="text-2xl font-bold text-blue-500">
                  <AnimatedCounter from={0} to={10} duration={2} suffix="K+" />
                </div>
                <div className="text-gray-600 text-sm">Transaksi</div>
              </motion.div>

              {/* Biaya Admin */}
              <motion.div className="text-center" variants={statsVariants}>
                <motion.div
                  className="text-2xl font-bold text-green-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    delay: 0.5,
                  }}
                >
                  0%
                </motion.div>
                <div className="text-gray-600 text-sm">Biaya Admin</div>
              </motion.div>

              {/* Support */}
              <motion.div className="text-center" variants={statsVariants}>
                <motion.div
                  className="text-2xl font-bold text-blue-500"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    delay: 0.7,
                  }}
                >
                  24/7
                </motion.div>
                <div className="text-gray-600 text-sm">Support</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Calculator Section */}
          <motion.div id="calculator" className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="flex space-x-4 mb-6">
              <motion.button onClick={() => setActiveTab('beli')} className={`flex-1 py-3 rounded-lg font-bold transition duration-200 ${activeTab === 'beli' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Beli PayPal
              </motion.button>
              <motion.button onClick={() => setActiveTab('jual')} className={`flex-1 py-3 rounded-lg font-bold transition duration-200 ${activeTab === 'jual' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Jual PayPal
              </motion.button>
            </div>

            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <label className="block text-gray-700 mb-2 font-medium">{activeTab === 'beli' ? 'Jumlah Rupiah (IDR)' : 'Jumlah PayPal (USD)'}</label>
                <motion.input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder={activeTab === 'beli' ? '15600' : '1'} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" whileFocus={{ scale: 1.01 }} />
                <p className="text-sm text-gray-500 mt-1">{activeTab === 'beli' ? 'Minimal beli: $1 (Rp 15,600)' : 'Minimal jual: $1'}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <label className="block text-gray-700 mb-2 font-medium">Email PayPal</label>
                <motion.input type="email" value={paypalEmail} onChange={(e) => setPaypalEmail(e.target.value)} placeholder="contoh@email.com" className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" whileFocus={{ scale: 1.01 }} />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <label className="block text-gray-700 mb-2 font-medium">Metode Pembayaran</label>
                <div className="grid grid-cols-3 gap-2">
                  {paymentMethods.map((method) => (
                    <motion.button key={method.id} onClick={() => setPaymentMethod(method.id)} className={`p-3 rounded-lg border-2 text-center transition duration-200 ${paymentMethod === method.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + paymentMethods.indexOf(method) * 0.1 }}>
                      <div className="text-2xl mb-1">{method.icon}</div>
                      <div className="text-sm font-medium">{method.name}</div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Result yang sederhana tanpa breakdown biaya */}
              <motion.div className="bg-green-50 rounded-lg p-4 border border-green-200" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{activeTab === 'beli' ? 'Saldo yang diterima:' : 'Rupiah yang diterima:'}</span>
                  <motion.span
                    className="text-2xl font-bold text-green-600"
                    key={total} // Key change triggers animation
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {activeTab === 'beli' ? `$ ${total.toFixed(2)}` : `Rp ${total.toLocaleString('id-ID')}`}
                  </motion.span>
                </div>
                <div className="text-sm text-green-600 mt-2 flex items-center">
                  <span className="mr-2">🎉</span>
                  <span>Rate all-in! Tidak ada biaya tambahan</span>
                </div>
                <div className="text-xs text-green-700 mt-1">
                  Rate: {activeTab === 'beli' ? '1 USD = ' : '1 USD = '}
                  Rp {rate.toLocaleString('id-ID')}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <Link href={`/order?type=${activeTab}&amount=${amount}&email=${paypalEmail}&method=${paymentMethod}`} className={`w-full py-3 rounded-lg font-bold transition duration-200 flex items-center justify-center space-x-2 ${!amount || !paypalEmail ? 'bg-gray-400 text-white cursor-not-allowed' : activeTab === 'beli' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-green-500 text-white hover:bg-green-600'}`}>
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {activeTab === 'beli' ? 'Beli PayPal Sekarang' : 'Jual PayPal Sekarang'}
                  </motion.span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'loop',
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
