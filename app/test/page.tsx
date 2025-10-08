'use client';

import React from 'react';
import { motion } from 'framer-motion';

const banks = [
  { name: 'BCA', logo: '🏦', color: 'from-red-500 to-red-600' },
  { name: 'Mandiri', logo: '🏛️', color: 'from-blue-500 to-blue-600' },
  { name: 'BRI', logo: '💼', color: 'from-green-500 to-green-600' },
  { name: 'BNI', logo: '🏢', color: 'from-yellow-500 to-yellow-600' },
  { name: 'DANA', logo: '💜', color: 'from-purple-500 to-purple-600' },
  { name: 'GoPay', logo: '🟢', color: 'from-green-400 to-green-500' },
  { name: 'OVO', logo: '🔵', color: 'from-blue-400 to-blue-500' },
  { name: 'LinkAja', logo: '🔴', color: 'from-red-400 to-red-500' },
];

export default function SectionPaymentMethods() {
  // Duplicate the banks array to create seamless loop
  const duplicatedBanks = [...banks, ...banks, ...banks];

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
      y: 30,
      scale: 0.8,
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

  const scrollVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 40,
          ease: 'linear',
        },
      },
    },
  };

  const scrollVariantsFast = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        },
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.05,
      rotateY: 10,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <section id="payment-methods" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: '-100px' }}>
          <motion.h2 className="text-3xl font-bold text-gray-800 mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            Metode Pembayaran
          </motion.h2>
          <motion.p className="text-gray-600 max-w-2xl mx-auto text-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            Berbagai metode pembayaran yang kami dukung untuk kemudahan transaksi Anda
          </motion.p>
        </motion.div>

        {/* First Scrolling Row - Normal Speed */}
        <motion.div className="relative mb-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
          <motion.div className="flex" variants={scrollVariants} animate="animate">
            {duplicatedBanks.map((bank, index) => (
              <motion.div key={`first-${index}`} className="flex-shrink-0 mx-3" variants={itemVariants} whileHover="hover">
                <motion.div variants={cardHoverVariants} className="w-36 h-36 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
                  {/* Animated Background */}
                  <motion.div className={`absolute inset-0 bg-gradient-to-br ${bank.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} initial={false} />

                  {/* Logo */}
                  <motion.div
                    className="text-5xl mb-3 relative z-10"
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {bank.logo}
                  </motion.div>

                  {/* Bank Name */}
                  <motion.span className="font-bold text-gray-800 text-center relative z-10" whileHover={{ color: '#3B82F6' }}>
                    {bank.name}
                  </motion.span>

                  {/* Hover Border Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${bank.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                    style={{
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'xor',
                      WebkitMaskComposite: 'xor',
                      padding: '2px',
                    }}
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Fade Effects */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50/90 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50/90 to-transparent pointer-events-none z-10"></div>
        </motion.div>

        {/* Second Scrolling Row - Faster Speed */}
        <motion.div className="relative" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
          <motion.div className="flex" variants={scrollVariantsFast} animate="animate">
            {duplicatedBanks.map((bank, index) => (
              <motion.div key={`second-${index}`} className="flex-shrink-0 mx-2" variants={itemVariants} whileHover="hover">
                <motion.div variants={cardHoverVariants} className="w-28 h-28 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-3 relative overflow-hidden group">
                  {/* Subtle Background */}
                  <motion.div className={`absolute inset-0 bg-gradient-to-br ${bank.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} initial={false} />

                  {/* Logo */}
                  <motion.div
                    className="text-3xl mb-2 relative z-10"
                    whileHover={{
                      scale: 1.3,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {bank.logo}
                  </motion.div>

                  {/* Bank Name */}
                  <motion.span className="font-semibold text-gray-700 text-sm text-center relative z-10" whileHover={{ color: '#3B82F6' }}>
                    {bank.name}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Fade Effects */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50/90 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50/90 to-transparent pointer-events-none z-10"></div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
          <motion.div variants={pulseVariants} animate="pulse" className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>✨</span>
            <span>Dan masih banyak metode pembayaran lainnya yang tersedia</span>
          </motion.div>

          {/* Additional Info Cards */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
            <motion.div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm" whileHover={{ y: -5, transition: { duration: 0.3 } }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">⚡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Proses Instan</h4>
                  <p className="text-sm text-gray-600">Transfer langsung diproses</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm" whileHover={{ y: -5, transition: { duration: 0.3 } }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">🔒</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Aman & Terpercaya</h4>
                  <p className="text-sm text-gray-600">Transaksi dilindungi</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm" whileHover={{ y: -5, transition: { duration: 0.3 } }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600">💎</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Premium Support</h4>
                  <p className="text-sm text-gray-600">Bantuan 24/7</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
