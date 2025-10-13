'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimate } from 'motion/react';

import FormCalculator from '@/components/FormCalculator';
import FormTest from '@/components/FormTest';

export default function SectionHero() {
  const [scope, animate] = useAnimate();

  const buttonVariants: any = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 3, ease: 'easeInOut' } },
  };

  const statsVariants: any = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = '', className = '' }: { from: number; to?: any; duration: number; suffix: string; className?: string }) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
      const controls = animate(from, to, { duration, onUpdate: (value: number) => setCount(Math.floor(value)) });
      return () => controls.stop();
    }, [from, to, duration]);

    return (
      <span className={className}>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, transform: 'translateY(40px)' }} animate={{ opacity: 1, transform: 'translateY(0px)' }} transition={{ duration: 0.8, type: 'spring' }} className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 mb-6">
              Jasa Top Up <span className="text-blue-500">PayPal</span> Cepat & Aman
            </motion.h1>
            <motion.h2 className="hok text-medium text-gray-600 mb-8" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              Platform terpercaya untuk convert saldo PayPal dengan rate murah ke Rupiah dan sebaliknya. Dapatkan kurs Dolar USD PayPal terbaik yang terupdate 24 jam
              <p className="font-semibold text-green-600"> Bebas biaya penanganan & tanpa biaya admin!</p>
            </motion.h2>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={buttonVariants} initial="initial" animate="animate">
              <Link href="#calculator" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-200 text-center">
                Hitung Sekarang
              </Link>
              <Link href="#howto" className="bg-white text-blue-500 border-2 border-blue-500 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition duration-200 text-center">
                Cara Kerja
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div className="grid grid-cols-3 gap-6 mt-12" initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.2 } } }}>
              {/* Transaksi */}
              <motion.div className="text-center" variants={statsVariants}>
                <div className="text-2xl font-bold text-blue-500">
                  <AnimatedCounter from={0} to={10} duration={2} suffix="K+" />
                </div>
                <div className="text-gray-600 text-sm">Transaksi</div>
              </motion.div>

              {/* Biaya Admin */}
              <motion.div className="text-center" variants={statsVariants}>
                <motion.div
                  className="text-2xl font-bold text-green-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    delay: 0.5,
                  }}
                >
                  0%
                </motion.div>
                <div className="text-gray-600 text-sm">Biaya Admin</div>
              </motion.div>

              {/* Support */}
              <motion.div className="text-center" variants={statsVariants}>
                <motion.div
                  className="text-2xl font-bold text-blue-500"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    delay: 0.7,
                  }}
                >
                  24/7
                </motion.div>
                <div className="text-gray-600 text-sm">Support</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Calculator Section */}
          <FormCalculator />
          {/* <FormTest/> */}
        </div>
      </div>
    </section>
  );
}
