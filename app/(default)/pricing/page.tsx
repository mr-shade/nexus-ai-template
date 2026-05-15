'use client';

import React from 'react';
import Pricing from '@/components/home/pricing';
import FAQ from '@/components/home/faq';

export default function PricingPage() {
  return (
    <div className="pt-24">
      <div className="px-6 py-12 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-mono text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
            Simple <span className="text-blue-700">Plans</span>
          </h1>
          <p className="font-mono text-lg uppercase font-bold text-ink-soft max-w-3xl">
            {'// Scaling intelligence with transparent, usage-based economics'}
          </p>
        </div>
      </div>
      <Pricing />
      <FAQ />
    </div>
  );
}
