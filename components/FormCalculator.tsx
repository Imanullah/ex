'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FormCalculator() {
  const [activeTab, setActiveTab] = useState<'beli' | 'jual'>('beli');
  const [amount, setAmount] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('transfer');

  const paymentMethods = [
    { id: 'transfer', name: 'Transfer Bank', icon: '🏦' },
    { id: 'ewallet', name: 'E-Wallet', icon: '📱' },
    { id: 'crypto', name: 'Crypto', icon: '₿' },
  ];

  // Rate sudah include semua biaya - lebih transparan untuk customer
  const rates = {
    beli: 16500, // 1 USD = Rp 15,600 (user beli PayPal dari kita)
    jual: 15900, // 1 USD = Rp 14,900 (user jual PayPal ke kita)
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

  return (
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
  );
}
