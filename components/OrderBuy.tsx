'use client';
import React, { useState } from 'react';
import { useCalculatorStore } from '@/stores/calculatorStore';

export default function OrderBuy() {
  const [step, setStep] = useState(1);
  const { paypalEmail, paymentMethod, amount } = useCalculatorStore((state) => state);

  const steps = [
    { number: 1, title: 'Informasi Order', description: 'Isi data order Anda' },
    { number: 2, title: 'Metode Pembayaran', description: 'Pilih cara pembayaran' },
    { number: 3, title: 'Konfirmasi', description: 'Review dan konfirmasi' },
    { number: 4, title: 'Selesai', description: 'Order berhasil' },
  ];

  const clickMe = async () => {
    // const res = await fetch('/api/whatsapp', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name: 'iman', email: 'oke@oke.com', message: 'pesan' }),
    // });
    const accessToken = process.env.NEXT_PUBLIC_WHATSAPP_ACCESS_TOKEN!;
    const phoneNumberId = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID!;
    const to = process.env.NEXT_PUBLIC_WHATSAPP_TO_NUMBER!;

    const body = 'haiiii';

    console.log(accessToken)

    const res = await fetch(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to,
        type: 'text',
        text: { preview_url: false, body },
      }),
      // Meta’s API is fine on Edge, but Node runtime is often simpler for local dev
      cache: 'no-store',
    });
    const data = await res.json();


    console.log(data);
    // console.log(waToken);
  };

  return (
    <div className="container">
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              {steps.map((stepItem, index) => (
                <div key={stepItem.number} className="flex items-center">
                  <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-bold transition duration-200 ${step > stepItem.number ? 'bg-green-500 border-green-500 text-white' : step === stepItem.number ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-gray-300 text-gray-400'}`}>{step > stepItem.number ? '✓' : stepItem.number}</div>
                    <div className="mt-2 text-center">
                      <div className={`text-sm font-medium ${step >= stepItem.number ? 'text-gray-800' : 'text-gray-400'}`}>{stepItem.title}</div>
                      <div className="text-xs text-gray-500 hidden sm:block">{stepItem.description}</div>
                    </div>
                  </div>
                  {index < steps.length - 1 && <div className={`flex-1 h-1 mx-4 ${step > stepItem.number ? 'bg-green-500' : 'bg-gray-200'}`}></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <button onClick={clickMe}>Click Me</button>
    </div>
  );
}
