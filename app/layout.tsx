import type { Metadata } from 'next';
import { fira_sans, fira_mono } from '@/assets/fonts/gfonts';
import '@/assets/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Jasa Top Up PayPal Cepat & Aman',
  description: 'Avaller.com menyediakan layanan jasa top up saldo PayPal dan Kartu Kredit dengan rate murah, pengiriman cepat, aman, dan terpercaya sejak 2019. Dapatkan kurs Dolar USD PayPal terbaik yang terupdate 24 jam, dukungan pelanggan 24 jam, dan gratis biaya admin.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fira_mono.variable} ${fira_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
