import React from 'react';

const services = [
  {
    title: 'Beli PayPal',
    description: 'Top up saldo PayPal dengan proses instan',
    icon: '💸',
    type: 'beli',
  },
  {
    title: 'Jual PayPal',
    description: 'Konversi saldo PayPal ke Rupiah dengan rate terbaik',
    icon: '🔄',
    type: 'jual',
  },
  {
    title: 'Convert Balance',
    description: 'Tukar saldo PayPal dengan mata uang lainnya',
    icon: '🌎',
    type: 'convert',
  },
];

export default function SectionServices() {
  return (
    <section id="services" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Berbagai layanan convert PayPal untuk kebutuhan finansial Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition duration-200 cursor-pointer"
              onClick={() => {
                setActiveTab(service.type as 'beli' | 'jual');
                document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
