'use client';

import React from 'react';
import Team from '@/components/home/team';
import Stats from '@/components/home/stats';

export default function AboutPage() {
  return (
    <div className="pt-24">
      <div className="px-6 py-12 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-mono text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
            The <span className="text-blue-700">Mission</span>
          </h1>
          <p className="font-mono text-lg uppercase font-bold text-ink-soft max-w-3xl">
            {'// Scaling human potential through autonomous intelligence'}
          </p>
        </div>
      </div>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-sm uppercase leading-relaxed text-ink-soft space-y-8">
            <p>
              Founded in 2024, Nexus AI was built on a simple premise: the next era of productivity
              won&apos;t be about better tools, but about autonomous systems that can handle the
              mundane while humans focus on the exceptional.
            </p>
            <p>
              Our team consists of researchers, engineers, and designers who have previously built
              systems at OpenAI, DeepMind, Stripe, and NASA. We are headquartered in San Francisco,
              with a distributed team across 12 countries.
            </p>
          </div>
        </div>
      </section>

      <Stats />
      <Team />
    </div>
  );
}
