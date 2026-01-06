'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useCalculatorStore } from '@/stores/calculatorStore';

import { useForm, SubmitHandler, set } from 'react-hook-form';
import { clsx } from 'clsx';

interface IFormCalculator {
  name: string;
  amount: number;
  paypalEmail: string;
  paymentMethod: string;
}

export default function FormCalculator() {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

  // const [amount, setAmount] = useState('');
  // const [paypalEmail, setPaypalEmail] = useState('');
  const [selectPayment, setSelectPayment] = useState('transfer');

  const { register, handleSubmit, watch, formState, setValue, reset } = useForm<IFormCalculator>({ mode: 'onChange', defaultValues: { paymentMethod: 'transfer' } });
  const { errors, isValid } = formState;

  const router = useRouter();

  const watchAmount = watch('amount');
  const watchPaypalEmail = watch('paypalEmail');

  const { setAmount, setPaypalEmail, setPaymentMethod } = useCalculatorStore((state) => state);

  const WHATSAPP_TO_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_TO_NUMBER!;

  const paymentOptions = [
    { id: 'transfer_bank', name: 'Transfer Bank', icon: '🏦' },
    { id: 'ewallet', name: 'E-Wallet', icon: '📱' },
    // { id: 'qris', name: 'Qris', icon: '₿' },
    { id: 'crypto', name: 'Crypto', icon: '₿' },
  ];

  // Rate sudah include semua biaya - lebih transparan untuk customer
  const rates = {
    buy: process.env.NEXT_PUBLIC_RATE_BUY, // 1 USD = Rp 15,600 (user beli PayPal dari kita)
    sell: process.env.NEXT_PUBLIC_RATE_SELL, // 1 USD = Rp 14,900 (user jual PayPal ke kita)
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

    const numericAmount = parseFloat(watchAmount as any);

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

  const handlePayment = (id: string) => {
    setSelectPayment(id);
    setValue('paymentMethod', id);
  };

  const onSubmitForm: SubmitHandler<IFormCalculator> = (data) => {
    console.log(data);

    const text = `
    name: ${data.message}
    `;
    const url = `https://wa.me/${WHATSAPP_TO_NUMBER}?text=${encodeURIComponent(text)}`;
    // window.open(url, '_blank');
  };

  // const onSubmitForm: SubmitHandler<IFormCalculator> = (data) => {
  //   try {
  //     if (isValid) {
  //       setAmount(data.amount);
  //       setPaypalEmail(data.paypalEmail);
  //       setPaymentMethod(data.paymentMethod);
  //       reset();
  //       // router.push(`/order/?type=${activeTab}`);
  //     }
  //   } catch (error) {}
  // };

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
          </div>

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
              {paymentOptions.map((option) => (
                <div key={option.id} onClick={() => handlePayment(option.id)} className={`p-3 rounded-lg border-2 text-center transition duration-200 cursor-pointer ${selectPayment === option.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                  <div className="text-2xl mb-1">{option.icon}</div>
                  <div className="text-sm font-medium">{option.name}</div>
                </div>
              ))}
            </div>
            {/* <input type="text" {...register('paymentMethod')} /> */}
          </div>

          {/* Result yang sederhana tanpa breakdown biaya */}
          <div className={clsx('rounded-lg p-4 border', { 'bg-blue-50 border-blue-300': activeTab === 'buy', 'bg-green-50 border-green-200': activeTab === 'sell' })}>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">{activeTab === 'buy' ? 'Rupiah yang dibayar:' : 'Rupiah yang diterima:'}</span>
              <span className={clsx('text-2xl font-bold', { 'text-blue-600': activeTab === 'buy', 'text-green-600': activeTab === 'sell' })}>{activeTab === 'buy' ? `Rp ${total.toLocaleString('id-ID')}` : `Rp ${total.toLocaleString('id-ID')}`}</span>
            </div>
            <div className="text-sm text-green-600 mt-2 flex items-center">
              <span className="mr-2">🎉</span>
              <span>Rate all-in! Tidak ada biaya tambahan</span>
            </div>
            <div className="text-xs text-green-700 mt-1">
              Rate: {activeTab === 'buy' ? '1 USD = ' : '1 USD = '}
              Rp {rate!.toLocaleString('id-ID')}
            </div>
          </div>

          <button type="submit" disabled={isValid ? false : true} className={`w-full py-3 rounded-lg font-bold transition duration-200 flex items-center justify-center space-x-2 ${!watchAmount || !watchPaypalEmail ? 'bg-gray-400 text-white cursor-not-allowed' : activeTab === 'buy' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-green-500 text-white hover:bg-green-600'}`}>
            <span>{activeTab === 'buy' ? 'Beli PayPal Sekarang' : 'Jual PayPal Sekarang'}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
