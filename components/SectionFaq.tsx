import React from 'react';

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

export default function SectionFaq() {
  return (
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
  );
}
