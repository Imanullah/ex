// pages/privacy-policy.js
import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-2xl font-bold">Kebijakan Privasi</h1>
          <p className="mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
        </div>

        <div className="p-6 md:p-8">
          <div className="prose max-w-none">
            <p className="mb-6">Selamat datang di Kebijakan Privasi kami. Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda bagikan dengan kami.</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Informasi yang Kami Kumpulkan</h2>
              <p className="mb-4">Kami mengumpulkan informasi berikut untuk memberikan layanan kami:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Informasi kontak (alamat email PayPal)</li>
                <li>Informasi transaksi (jumlah, waktu, metode pembayaran)</li>
                <li>Data pembayaran (tergantung metode yang dipilih)</li>
                <li>Informasi teknis (alamat IP, jenis browser, perangkat)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Cara Kami Menggunakan Informasi Anda</h2>
              <p className="mb-4">Kami menggunakan informasi yang kami kumpulkan untuk:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Memproses transaksi top-up PayPal Anda</li>
                <li>Mengonfirmasi pembayaran dan mengirim dana</li>
                <li>Memberikan dukungan pelanggan</li>
                <li>Meningkatkan layanan dan pengalaman pengguna</li>
                <li>Memenuhi kewajiban hukum dan peraturan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Berbagi Informasi</h2>
              <p className="mb-4">Kami tidak menjual, memperdagangkan, atau mentransfer informasi pribadi Anda kepada pihak ketiga, kecuali dalam situasi berikut:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Dengan penyedia layanan pembayaran yang diperlukan untuk memproses transaksi</li>
                <li>Untuk mematuhi hukum, peraturan, atau permintaan pemerintah yang sah</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami, pengguna kami, atau pihak lain</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Keamanan Data</h2>
              <p className="mb-4">Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Namun, tidak ada metode transmisi melalui internet atau penyimpanan elektronik yang 100% aman.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Penyimpanan Data</h2>
              <p className="mb-4">Kami menyimpan informasi pribadi Anda hanya selama diperlukan untuk memenuhi tujuan yang diuraikan dalam Kebijakan Privasi ini, kecuali jika periode penyimpanan yang lebih lama diperlukan atau diizinkan oleh hukum.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">6. Hak Anda</h2>
              <p className="mb-4">Anda memiliki hak untuk:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Mengakses informasi pribadi yang kami miliki tentang Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Meminta penghapusan informasi pribadi Anda</li>
                <li>Membatasi atau menolak pemrosesan data Anda</li>
              </ul>
              <p>Untuk menggunakan hak-hak ini, silakan hubungi kami melalui informasi kontak di bawah.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">7. Perubahan pada Kebijakan Privasi</h2>
              <p className="mb-4">Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini dan memperbarui tanggal "Terakhir diperbarui" di bagian atas.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">8. Hubungi Kami</h2>
              <p className="mb-4">Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:</p>
              <div className="bg-gray-100 p-4 rounded">
                <p className="font-medium">Email: privacy@juaipaypal.com</p>
                <p className="mt-2">Kami akan berusaha merespons pertanyaan Anda dalam waktu 3-5 hari kerja.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
