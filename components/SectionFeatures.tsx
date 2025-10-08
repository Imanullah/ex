'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Proses 5-15 Menit',
    description: 'Transaksi jual beli PayPal cepat dan Aman',
    icon: '⚡',
    color: 'from-yellow-400 to-orange-500',
    delay: 0.1,
  },
  {
    title: 'Rate All-In',
    description: 'Harga sudah include semua biaya, tidak ada biaya lain',
    icon: '💰',
    color: 'from-green-400 to-emerald-500',
    delay: 0.2,
  },
  {
    title: 'Bebas Biaya Admin',
    description: 'Tidak ada biaya admin atau biaya tersembunyi lainnya',
    icon: '🎉',
    color: 'from-blue-400 to-cyan-500',
    delay: 0.3,
  },
  {
    title: 'Support 24/7',
    description: 'Customer service siap membantu kapan saja',
    icon: '💬',
    color: 'from-purple-400 to-indigo-500',
    delay: 0.4,
  },
];

export default function SectionFeatures() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
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

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const noFeesVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.5,
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: '-100px' }}>
          <motion.h2 className="text-3xl font-bold text-gray-800 mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            Kenapa Pilih <span className="text-blue-500">Avaller.com</span>?
          </motion.h2>
          <motion.p className="text-gray-600 max-w-2xl mx-auto text-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            Platform jual beli PayPal terpercaya dengan harga all-in tanpa biaya tambahan
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} whileHover="hover" className="group relative">
              <motion.div variants={cardHoverVariants} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                {/* Background Gradient Effect */}
                <motion.div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} initial={false} />

                {/* Icon */}
                <motion.div className="text-4xl mb-4 relative z-10" variants={iconVariants}>
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <motion.h3 className="text-xl font-semibold mb-2 text-gray-800 relative z-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: feature.delay + 0.3 }} viewport={{ once: true }}>
                  {feature.title}
                </motion.h3>
                <motion.p className="text-gray-600 relative z-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: feature.delay + 0.4 }} viewport={{ once: true }}>
                  {feature.description}
                </motion.p>

                {/* Hover Border Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
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

        {/* No Fees Section */}
        <motion.div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 border border-green-200 max-w-4xl mx-auto shadow-lg" variants={noFeesVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
          <div className="text-center">
            <motion.div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" variants={pulseVariants} animate="pulse">
              <span className="text-white text-3xl">🎉</span>
            </motion.div>

            <motion.h3 className="text-3xl font-bold text-green-800 mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
              Bebas Biaya Penanganan!
            </motion.h3>

            <motion.p className="text-green-700 mb-8 text-lg leading-relaxed max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} viewport={{ once: true }}>
              Kami tidak mengenakan biaya admin, biaya penanganan, atau biaya tersembunyi apapun. Semua sudah termasuk dalam rate yang Anda lihat.
            </motion.p>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }}>
              {/* Beli PayPal Card */}
              <motion.div
                className="bg-white p-6 rounded-xl border border-green-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{
                  y: -5,
                  transition: { type: 'spring', stiffness: 300 },
                }}
              >
                <motion.h4 className="font-semibold text-green-800 mb-4 text-lg flex items-center" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.9 }} viewport={{ once: true }}>
                  <span className="mr-2">🛒</span>
                  Beli PayPal
                </motion.h4>
                <div className="space-y-3 text-sm">
                  <motion.div className="flex justify-between items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.0 }} viewport={{ once: true }}>
                    <span className="text-gray-600">Jumlah Transfer:</span>
                    <span className="font-medium text-gray-800">Rp 1,000,000</span>
                  </motion.div>
                  <motion.div className="flex justify-between items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }} viewport={{ once: true }}>
                    <span className="text-gray-600">Biaya Tambahan:</span>
                    <span className="text-green-600 font-bold">Rp 0</span>
                  </motion.div>
                  <motion.div className="flex justify-between items-center font-semibold border-t border-green-200 pt-3 mt-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }} viewport={{ once: true }}>
                    <span className="text-gray-800">Saldo Diterima:</span>
                    <span className="text-green-600 text-lg">$64.10</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Jual PayPal Card */}
              <motion.div
                className="bg-white p-6 rounded-xl border border-green-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{
                  y: -5,
                  transition: { type: 'spring', stiffness: 300 },
                }}
              >
                <motion.h4 className="font-semibold text-green-800 mb-4 text-lg flex items-center" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.9 }} viewport={{ once: true }}>
                  <span className="mr-2">💸</span>
                  Jual PayPal
                </motion.h4>
                <div className="space-y-3 text-sm">
                  <motion.div className="flex justify-between items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.0 }} viewport={{ once: true }}>
                    <span className="text-gray-600">Jumlah Jual:</span>
                    <span className="font-medium text-gray-800">$100</span>
                  </motion.div>
                  <motion.div className="flex justify-between items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }} viewport={{ once: true }}>
                    <span className="text-gray-600">Biaya Tambahan:</span>
                    <span className="text-green-600 font-bold">Rp 0</span>
                  </motion.div>
                  <motion.div className="flex justify-between items-center font-semibold border-t border-green-200 pt-3 mt-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }} viewport={{ once: true }}>
                    <span className="text-gray-800">Rupiah Diterima:</span>
                    <span className="text-green-600 text-lg">Rp 1,490,000</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Additional CTA */}
            <motion.div className="mt-8 pt-6 border-t border-green-200" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.3 }} viewport={{ once: true }}>
              <p className="text-green-700 mb-4">
                💡 <strong>Transparan 100%</strong> - Tidak ada kejutan biaya di akhir!
              </p>
              <motion.button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Mulai Transaksi Sekarang
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
