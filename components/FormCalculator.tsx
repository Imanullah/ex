'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useForm, SubmitHandler } from 'react-hook-form';
import { clsx } from 'clsx';

interface IFormCalculator {
  amount: string;
  paypalEmail: string;
  // paymentMethod: string;
}

export default function FormCalculator() {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

  const [amount, setAmount] = useState('');
  // const [paypalEmail, setPaypalEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('transfer');

  const { register, handleSubmit, watch, formState, reset } = useForm<IFormCalculator>({ mode: 'onChange', defaultValues: { paymentMethod: 'transfer' } });
  const { errors, isValid } = formState;

  const router = useRouter();

  const watchAmount = watch('amount');

  const paymentMethods = [
    { id: 'transfer', name: 'Transfer Bank', icon: '🏦' },
    { id: 'ewallet', name: 'E-Wallet', icon: '📱' },
    // { id: 'qris', name: 'Qris', icon: '₿' },
    { id: 'crypto', name: 'Crypto', icon: '₿' },
  ];

  // Rate sudah include semua biaya - lebih transparan untuk customer
  const rates = {
    buy: 16500, // 1 USD = Rp 15,600 (user beli PayPal dari kita)
    sell: 15900, // 1 USD = Rp 14,900 (user jual PayPal ke kita)
  };

  const amountValidation = {
    required: 'Jumlah PayPal wajib diisi',
    min: { value: 1, message: 'Minimal jumlah adalah $1' },
    validate: {
      positive: (value: string) => parseFloat(value) > 0 || 'Jumlah harus lebih dari 0',
    },
  };

  const emailValidation = {
    required: 'Email PayPal wajib diisi',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Format email tidak valid',
    },
  };

  const calculateResult = () => {
    if (!watchAmount)
      return {
        total: 0,
        rate: rates[activeTab],
      };

    const numericAmount = parseFloat(watchAmount);

    if (activeTab === 'buy') {
      // User beli PayPal: IDR → USD
      const total = numericAmount * rates.buy;
      return {
        // total: parseFloat(total.toFixed(2)),
        total: total,
        rate: rates.buy,
      };
    } else {
      // User jual PayPal: USD → IDR
      const total = numericAmount * rates.sell;
      return {
        total: total,
        rate: rates.sell,
      };
    }
  };

  const { total, rate } = calculateResult();

  const onSubmit = async (data: IFormCalculator) => {
    try {
      console.log('Form data:', data);
      // reset();
    } catch (error) {}

    // Handle form submission here
  };

  const onSubmitForm: SubmitHandler<any> = (data: IFormCalculator) => {
    console.log('okeeke');

    reset();
    // router.push('/order/');

    // try {
    //   console.log('Form data:', data);
    //   // reset();
    // } catch (error) {}
  };

  return (
    <div id="calculator" className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
      <div className="flex space-x-4 mb-6">
        <button onClick={() => setActiveTab('buy')} className={`flex-1 py-3 rounded-lg font-bold transition duration-200 cursor-pointer ${activeTab === 'buy' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          Beli PayPal
        </button>
        <button onClick={() => setActiveTab('sell')} className={`flex-1 py-3 rounded-lg font-bold transition duration-200 cursor-pointer ${activeTab === 'sell' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          Jual PayPal
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">{activeTab === 'buy' ? 'Jumlah PayPal (USD)' : 'Jumlah PayPal (USD)'}</label>
            <input type="number" min={1} {...register('amount', amountValidation)} placeholder={activeTab === 'buy' ? 'Minimal beli $1' : 'Minimal jual $1'} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />

            {errors.amount && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.amount?.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Email PayPal</label>
            <input type="email" placeholder="contoh@email.com" {...register('paypalEmail', emailValidation)} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            {errors.paypalEmail && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.paypalEmail.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Metode Pembayaran</label>
            <div className="grid grid-cols-3 gap-2">
              {paymentMethods.map((method) => (
                <div key={method.id} onClick={() => setPaymentMethod(method.id)} className={`p-3 rounded-lg border-2 text-center transition duration-200 cursor-pointer ${paymentMethod === method.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                  <div className="text-2xl mb-1">{method.icon}</div>
                  <div className="text-sm font-medium">{method.name}</div>
                </div>
              ))}
            </div>
            {/* <input type="hidden" {...register('paymentMethod')} /> */}
          </div>

          {/* Result yang sederhana tanpa breakdown biaya */}
          <div className={clsx('rounded-lg p-4 border', { 'bg-blue-100 border-blue-500': activeTab === 'buy', 'bg-green-50 border-green-200': activeTab === 'sell' })}>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">{activeTab === 'buy' ? 'Rupiah yang dibayar:' : 'Rupiah yang diterima:'}</span>
              <span className="text-2xl font-bold text-green-600">{activeTab === 'buy' ? `Rp ${total.toLocaleString('id-ID')}` : `Rp ${total.toLocaleString('id-ID')}`}</span>
            </div>
            <div className="text-sm text-green-600 mt-2 flex items-center">
              <span className="mr-2">🎉</span>
              <span>Rate all-in! Tidak ada biaya tambahan</span>
            </div>
            <div className="text-xs text-green-700 mt-1">
              Rate: {activeTab === 'buy' ? '1 USD = ' : '1 USD = '}
              Rp {rate.toLocaleString('id-ID')}
            </div>
          </div>

          <button type="submit" className={`w-full py-3 rounded-lg font-bold transition duration-200 flex items-center justify-center space-x-2 ${!amount || !paypalEmail ? 'bg-gray-400 text-white cursor-not-allowed' : activeTab === 'buy' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-green-500 text-white hover:bg-green-600'}`}>
            <span>{activeTab === 'buy' ? 'Beli PayPal Sekarang' : 'Jual PayPal Sekarang'}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>

      <form>
        <div className="space-y-6">
          {/* Amount Input */}
          {/* <div>
            <label className="block text-gray-700 mb-2 font-medium">{activeTab === 'beli' ? 'Jumlah Rupiah (IDR)' : 'Jumlah PayPal (USD)'}</label>
            <input type="number" min={1} {...register('amount')} placeholder={activeTab === 'beli' ? '15600' : '1'} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />

            <p className="text-sm text-gray-500 mt-1">{activeTab === 'beli' ? 'Minimal beli: $1 (Rp 15,600)' : 'Minimal jual: $1'}</p>
          </div> */}

          {/* Email Input */}
          {/* <div>
            <label className="block text-gray-700 mb-2 font-medium">Email PayPal</label>
            <input type="email" placeholder="contoh@email.com" {...register('paypalEmail', emailValidation)} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            {errors.paypalEmail && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.paypalEmail.message}
              </p>
            )}
          </div> */}

          {/* Payment Method */}
          {/* <div>
            <label className="block text-gray-700 mb-2 font-medium">Metode Pembayaran</label>
            <div className="grid grid-cols-3 gap-2">
              {paymentMethods.map((method) => (
                <button key={method.id} onClick={() => setPaymentMethod(method.id)} className={`p-3 rounded-lg border-2 text-center transition duration-200 ${paymentMethod === method.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                  <div className="text-2xl mb-1">{method.icon}</div>
                  <div className="text-sm font-medium">{method.name}</div>
                </button>
              ))}
            </div>
          </div> */}

          {/* Result yang sederhana tanpa breakdown biaya */}
          {/* <div className={clsx('rounded-lg p-4 border', { 'bg-blue-100 border-blue-500': activeTab === 'buy', 'bg-green-50 border-green-200': activeTab === 'sell' })}>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">{activeTab === 'buy' ? 'Rupiah yang dibayar:' : 'Rupiah yang diterima:'}</span>
              <span className="text-2xl font-bold text-green-600">{activeTab === 'buy' ? `Rp ${total.toLocaleString('id-ID')}` : `Rp ${total.toLocaleString('id-ID')}`}</span>
            </div>
            <div className="text-sm text-green-600 mt-2 flex items-center">
              <span className="mr-2">🎉</span>
              <span>Rate all-in! Tidak ada biaya tambahan</span>
            </div>
            <div className="text-xs text-green-700 mt-1">
              Rate: {activeTab === 'buy' ? '1 USD = ' : '1 USD = '}
              Rp {rate.toLocaleString('id-ID')}
            </div>
          </div> */}

          {/* <Link href={`/order?type=${activeTab}&amount=${amount}&email=${paypalEmail}&method=${paymentMethod}`} className={`w-full py-3 rounded-lg font-bold transition duration-200 flex items-center justify-center space-x-2 ${!amount || !paypalEmail ? 'bg-gray-400 text-white cursor-not-allowed' : activeTab === 'buy' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-green-500 text-white hover:bg-green-600'}`}>
            <span>{activeTab === 'buy' ? 'Beli PayPal Sekarang' : 'Jual PayPal Sekarang'}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link> */}
          {/* <button type="submit" className="bg-gray-300">
            Beli Paypal Sekarang
          </button> */}
        </div>
      </form>
    </div>
  );
}
