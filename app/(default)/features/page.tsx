'use client';

import React from 'react';
import Features from '@/components/home/features';
import Integrations from '@/components/home/integrations';

export default function FeaturesPage() {
  return (
    <div className="pt-24">
      <div className="px-6 py-12 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-mono text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
            The <span className="text-blue-700">Capabilities</span>
          </h1>
          <p className="font-mono text-lg uppercase font-bold text-ink-soft max-w-3xl">
            {'// Explore the full spectrum of the Nexus AI ecosystem'}
          </p>
        </div>
      </div>
      <Features />
      <Integrations />
    </div>
  );
}
