// app/page.tsx
'use client';
import Link from 'next/link';

import SectionCta from '@/components/SectionCta';
import SectionFaq from '@/components/SectionFaq';
import SectionTestimonial from '@/components/SectionTestimonial';
import SectionHowItWork from '@/components/SectionHowItWork';
import SectionFeatures from '@/components/SectionFeatures';
import SectionServices from '@/components/SectionServices';
import SectionPaymentMehods from '@/components/SectionPaymentMehods';
import SectionHero from '@/components/SectionHero';

export default function Home() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <SectionHero />


      {/* Payment Methods Section */}
      <SectionPaymentMehods />

      {/* Services Section */}
      <SectionServices />

      {/* Features Section */}
      <SectionFeatures />

      {/* How It Works */}
      <SectionHowItWork />

      {/* Testimonials */}
      <SectionTestimonial />

      {/* FAQ Section */}
      <SectionFaq />

      {/* CTA Section */}
      <SectionCta />
    </div>
  );
}
