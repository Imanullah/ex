'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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
  {
    question: 'Berapa minimal dan maksimal transaksi?',
    answer: 'Minimal transaksi adalah $1 untuk kedua layanan (beli dan jual PayPal). Tidak ada batas maksimal, namun untuk transaksi besar disarankan menghubungi customer service terlebih dahulu.',
  },
  {
    question: 'Bagaimana jika terjadi masalah dengan transaksi?',
    answer: 'Tim customer service kami siap membantu 24/7 melalui WhatsApp. Biasanya masalah dapat diselesaikan dalam waktu 1-2 jam.',
  },
];

export default function SectionFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const mobileNumber = process.env.NEXT_PUBLIC_MOBILE_NUMBER;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const contentVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const iconVariants = {
    closed: {
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 12,
      },
    },
    open: {
      rotate: 45,
      scale: 1.1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 12,
      },
    },
  };

  return (
    <section id="faq" className="py-16 bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: '-100px' }}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Pertanyaan Umum</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami</p>
        </motion.div>

        <motion.div className="max-w-4xl mx-auto space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <motion.button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                onClick={() => toggleFaq(index)}
                whileHover={{
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4 flex-1">{faq.question}</h3>
                <motion.div variants={iconVariants} initial="closed" animate={openIndex === index ? 'open' : 'closed'} className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div variants={contentVariants} initial="closed" animate="open" exit="closed" className="overflow-hidden">
                    <div className="px-6 pb-5">
                      <motion.p className="text-gray-600 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.3 }}>
                        {faq.answer}
                      </motion.p>

                      {/* Additional decorative element */}
                      <motion.div className="flex items-center mt-4 space-x-2" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-blue-600 font-medium">Butuh bantuan lebih lanjut?</span>
                        <a href={`https://wa.me/${mobileNumber}`} target='_blank' className="text-sm text-green-600 font-semibold hover:underline">
                          Chat WhatsApp
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <motion.h3 className="text-2xl font-bold text-gray-800 mb-4" initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
              Masih Ada Pertanyaan?
            </motion.h3>
            <motion.p className="text-gray-600 mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              Tim customer service kami siap membantu Anda 24/7
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <a href="https://wa.me/62812345678" className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200 flex items-center justify-center space-x-2">
                <span>💬</span>
                <span>Chat WhatsApp</span>
              </a>
              <a href="mailto:cs@avaller.com" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 flex items-center justify-center space-x-2">
                <span>📧</span>
                <span>Email Kami</span>
              </a>
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
