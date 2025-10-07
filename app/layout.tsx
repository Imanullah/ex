import type { Metadata } from 'next';
import { fira_sans, fira_mono } from '@/assets/fonts/gfonts';
import '@/assets/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Jasa Bayar Online Terbaik',
  description: 'Menawarkan Layanan Jasa Bayar Online Menggunakan Paypal & Kartu Kredit. Pembayaran Online Dengan rate Murah Pengiriman Cepat, Aman & Terpercaya',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fira_mono.variable} ${fira_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
