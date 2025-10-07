// app/order/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function OrderPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    amount: searchParams.get('amount') || '',
    paymentMethod: searchParams.get('paymentMethod') || 'transfer',
    paypalEmail: '',
    customerName: '',
    customerPhone: '',
    paymentProof: null as File | null,
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  const paymentMethods = [
    { id: 'transfer', name: 'Transfer Bank', icon: '🏦', instructions: 'Transfer ke rekening BCA: 1234567890 a.n. PayTopUp' },
    { id: 'ewallet', name: 'E-Wallet', icon: '📱', instructions: 'Transfer ke Dana/OVO/Gopay: 081234567890 a.n. PayTopUp' },
    { id: 'crypto', name: 'Crypto', icon: '₿', instructions: 'Kirim ke wallet address: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh' },
  ];

  const calculateTotal = () => {
    if (!formData.amount) return { idr: 0, fee: 0, total: 0 };
    const usdAmount = parseFloat(formData.amount);
    const rate = 15500;
    const idr = usdAmount * rate;
    const fee = idr * 0.02; // 2% fee
    const total = idr + fee;
    return { idr, fee, total };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, paymentProof: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate random order ID
    const newOrderId = 'PTU' + Date.now().toString().slice(-8);
    setOrderId(newOrderId);
    setOrderComplete(true);
    setStep(4);
    setIsSubmitting(false);
  };

  const steps = [
    { number: 1, title: 'Informasi Order', description: 'Isi data order Anda' },
    { number: 2, title: 'Metode Pembayaran', description: 'Pilih cara pembayaran' },
    { number: 3, title: 'Konfirmasi', description: 'Review dan konfirmasi' },
    { number: 4, title: 'Selesai', description: 'Order berhasil' },
  ];

  const selectedPayment = paymentMethods.find((method) => method.id === formData.paymentMethod);
  const totals = calculateTotal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-800">PayTopUp</span>
              <span className="text-xs text-blue-500 font-medium block">Jasa Top Up PayPal</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
              Beranda
            </Link>
            <Link href="/#howto" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
              Cara Order
            </Link>
            <Link href="/#testimonials" className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
              Testimoni
            </Link>
          </nav>
        </div>
      </header>

      {/* Progress Steps */}
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

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  {step === 1 && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">Informasi Order</h2>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-gray-700 mb-2 font-medium">Email PayPal</label>
                          <input type="email" name="paypalEmail" value={formData.paypalEmail} onChange={handleInputChange} placeholder="contoh@email.com" className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                        </div>

                        <div>
                          <label className="block text-gray-700 mb-2 font-medium">Jumlah Top Up (USD)</label>
                          <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} placeholder="0" min="10" step="0.01" className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                          <p className="text-sm text-gray-500 mt-1">Minimal top up: $10</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 mb-2 font-medium">Nama Lengkap</label>
                            <input type="text" name="customerName" value={formData.customerName} onChange={handleInputChange} placeholder="Nama Anda" className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                          </div>

                          <div>
                            <label className="block text-gray-700 mb-2 font-medium">Nomor WhatsApp</label>
                            <input type="tel" name="customerPhone" value={formData.customerPhone} onChange={handleInputChange} placeholder="081234567890" className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-700 mb-2 font-medium">Catatan (Opsional)</label>
                          <textarea name="notes" value={formData.notes} onChange={handleInputChange} placeholder="Catatan tambahan untuk admin..." rows={3} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>

                        <button onClick={() => setStep(2)} disabled={!formData.paypalEmail || !formData.amount || !formData.customerName || !formData.customerPhone} className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed">
                          Lanjut ke Pembayaran
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">Metode Pembayaran</h2>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-gray-700 mb-4 font-medium">Pilih Metode Pembayaran</label>
                          <div className="grid grid-cols-1 gap-3">
                            {paymentMethods.map((method) => (
                              <button key={method.id} type="button" onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: method.id }))} className={`p-4 rounded-lg border-2 text-left transition duration-200 ${formData.paymentMethod === method.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                <div className="flex items-center space-x-3">
                                  <div className="text-2xl">{method.icon}</div>
                                  <div>
                                    <div className="font-semibold text-gray-800">{method.name}</div>
                                    <div className="text-sm text-gray-600 mt-1">{method.instructions}</div>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="text-yellow-500 text-xl">⚠️</div>
                            <div>
                              <h4 className="font-semibold text-yellow-800">Penting!</h4>
                              <p className="text-yellow-700 text-sm mt-1">Simpan bukti transfer Anda. Anda akan diminta untuk mengupload bukti transfer pada langkah selanjutnya.</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <button onClick={() => setStep(1)} className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-bold hover:bg-gray-600 transition duration-200">
                            Kembali
                          </button>
                          <button onClick={() => setStep(3)} className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-200">
                            Lanjut ke Konfirmasi
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">Konfirmasi Order</h2>

                      <div className="space-y-6">
                        {/* Order Summary */}
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h3 className="font-semibold text-gray-800 mb-3">Ringkasan Order</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Email PayPal:</span>
                              <span className="font-medium">{formData.paypalEmail}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Jumlah Top Up:</span>
                              <span className="font-medium">${formData.amount} USD</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Metode Pembayaran:</span>
                              <span className="font-medium">{selectedPayment?.name}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Nama:</span>
                              <span className="font-medium">{formData.customerName}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">WhatsApp:</span>
                              <span className="font-medium">{formData.customerPhone}</span>
                            </div>
                            {formData.notes && (
                              <div className="flex justify-between">
                                <span className="text-gray-600">Catatan:</span>
                                <span className="font-medium">{formData.notes}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Payment Instructions */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h3 className="font-semibold text-blue-800 mb-3">Instruksi Pembayaran</h3>
                          <p className="text-blue-700 text-sm mb-2">{selectedPayment?.instructions}</p>
                          <p className="text-blue-700 text-sm font-semibold">Total yang harus dibayar: Rp {totals.total.toLocaleString('id-ID')}</p>
                        </div>

                        {/* Payment Proof Upload */}
                        <div>
                          <label className="block text-gray-700 mb-2 font-medium">Upload Bukti Transfer</label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <input type="file" onChange={handleFileChange} accept="image/*,.pdf" className="hidden" id="paymentProof" />
                            <label htmlFor="paymentProof" className="cursor-pointer">
                              <div className="text-4xl text-gray-400 mb-2">📎</div>
                              <p className="text-gray-600">{formData.paymentProof ? `File terpilih: ${formData.paymentProof.name}` : 'Klik untuk upload bukti transfer'}</p>
                              <p className="text-sm text-gray-500 mt-1">Format: JPG, PNG, PDF (Max 5MB)</p>
                            </label>
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <button onClick={() => setStep(2)} className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-bold hover:bg-gray-600 transition duration-200">
                            Kembali
                          </button>
                          <button onClick={handleSubmit} disabled={!formData.paymentProof || isSubmitting} className="flex-1 bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Memproses...</span>
                              </>
                            ) : (
                              <span>Konfirmasi Order</span>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 4 && orderComplete && (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-white text-3xl">✓</span>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Berhasil!</h2>
                      <p className="text-gray-600 mb-6">Terima kasih telah melakukan order di PayTopUp. Order Anda sedang diproses.</p>

                      <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
                        <div className="text-sm text-gray-600 mb-2">Kode Order</div>
                        <div className="text-2xl font-bold text-blue-600 mb-4">{orderId}</div>

                        <div className="space-y-2 text-sm text-left">
                          <div className="flex justify-between">
                            <span>Email PayPal:</span>
                            <span className="font-medium">{formData.paypalEmail}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Jumlah:</span>
                            <span className="font-medium">${formData.amount} USD</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Bayar:</span>
                            <span className="font-medium">Rp {totals.total.toLocaleString('id-ID')}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6 max-w-md mx-auto">
                        <h4 className="font-semibold text-blue-800 mb-2">Langkah Selanjutnya</h4>
                        <p className="text-blue-700 text-sm">Admin akan menghubungi Anda via WhatsApp dalam 5-15 menit untuk konfirmasi dan proses top up.</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <Link href="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-200">
                          Kembali ke Beranda
                        </Link>
                        <button onClick={() => window.print()} className="bg-gray-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition duration-200">
                          Cetak Invoice
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Detail Pembayaran</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Jumlah Top Up</span>
                      <span>${formData.amount || '0'} USD</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Kurs</span>
                      <span>1 USD = Rp 15,500</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span>Rp {totals.idr.toLocaleString('id-ID')}</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Biaya Admin (2%)</span>
                      <span>Rp {totals.fee.toLocaleString('id-ID')}</span>
                    </div>

                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span className="text-blue-600">Rp {totals.total.toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Customer Support */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Butuh Bantuan?</h4>
                    <p className="text-blue-700 text-sm mb-3">Hubungi customer service kami untuk bantuan cepat.</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center space-x-2">
                        <span>📱</span>
                        <span>+62 812-3456-7890</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>💬</span>
                        <span>WhatsApp 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} PayTopUp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
