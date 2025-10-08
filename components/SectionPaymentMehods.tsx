'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const banks = [
  { name: 'Seabank', logo: 'seabank.png', color: 'from-blue-500 to-blue-600' },
  { name: 'BCA Syariah', logo: 'bcasyariah.png', color: 'from-green-500 to-green-600' },
  { name: 'DANA', logo: 'dana.png', color: 'from-purple-500 to-purple-600' },
  { name: 'Bank JAGO', logo: 'jago.png', color: 'from-orange-500 to-orange-600' },
  { name: 'GOPAY', logo: 'gopay.png', color: 'from-green-400 to-green-500' },
  { name: 'QRIS', logo: 'qris.png', color: 'from-indigo-500 to-indigo-600' },
  // { name: 'ShopeePay', logo: 'shopeepay.png', color: 'from-orange-400 to-orange-500' },
];

export default function SectionPaymentMethods() {
  // Duplicate banks untuk seamless infinite loop
  const duplicatedBanks = [...banks, ...banks, ...banks, ...banks];

  // Animasi scroll yang sangat lambat dan smooth
  const scrollVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 120, // Sangat lambat - 120 detik
          ease: 'linear',
        },
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      scale: 1.03,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <section id="payment-methods" className="py-10 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: '-100px' }}>
          <motion.h2 className="text-3xl font-bold text-gray-800 mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            Metode Pembayaran
          </motion.h2>
          <motion.p className="text-gray-600 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            Berbagai metode pembayaran yang kami dukung untuk kemudahan transaksi Anda
          </motion.p>
        </motion.div>

        {/* Single Scrolling Row - Very Slow */}
        <div className="relative">
          <div className="overflow-hidden py-4">
            <motion.div className="flex" variants={scrollVariants} animate="animate">
              {duplicatedBanks.map((bank, index) => (
                <motion.div key={index} className="flex-shrink-0 mx-3" whileHover="hover">
                  <motion.div variants={cardHoverVariants} className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
                    {/* Animated Background */}
                    <motion.div className={`absolute inset-0 bg-gradient-to-br ${bank.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} initial={false} />

                    {/* Logo Container */}
                    <motion.div className="relative w-full" whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}>
                      <Image src={`/${bank.logo}`} width={180} height={100} alt={bank.name} className="object-contain transition-all duration-300 group-hover:brightness-110" />
                    </motion.div>

                    {/* Hover Border Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${bank.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                      style={{
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'xor',
                        WebkitMaskComposite: 'xor',
                        padding: '1.5px',
                      }}
                      initial={false}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Fade Effects */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Bottom Info */}
        <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
          <motion.div variants={pulseVariants} animate="pulse" className="inline-flex items-center space-x-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm">
            <span>✨</span>
            <span>Dan masih banyak metode pembayaran lainnya</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
