import React from 'react';

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Online Seller',
    content: 'Rate all-in sangat menguntungkan, tidak ada biaya tambahan yang bikin bingung!',
    rating: 5,
    type: 'beli',
  },
  {
    name: 'Ahmad R.',
    role: 'Freelancer',
    content: 'Akhirnya nemu jasa tanpa biaya admin, proses cepat dan harga jelas dari awal.',
    rating: 5,
    type: 'jual',
  },
  {
    name: 'Budi S.',
    role: 'Student',
    content: 'Pelayanan CS sangat ramah, dan yang paling penting tidak ada biaya tersembunyi.',
    rating: 4,
    type: 'beli',
  },
];

export default function SectionTestimonial() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Apa Kata Pelanggan?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Testimoni jujur dari pelanggan setia Avaller.com</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <div className={`px-2 py-1 rounded text-xs font-medium ${testimonial.type === 'jual' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{testimonial.type === 'jual' ? 'Jual PayPal' : 'Beli PayPal'}</div>
                <div className="flex ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">{testimonial.name.charAt(0)}</div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
