'use client';

import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nexus AI has completely transformed how our engineering team handles infrastructure. It's like having an extra 10 seniors on the team.",
    author: "Sarah Chen",
    role: "CTO @ TechFlow",
  },
  {
    quote: "The autonomous agents are a game changer. We've reduced our operational overhead by 60% in just three months.",
    author: "Marcus Thorne",
    role: "VP Operations @ GlobalScale",
  },
  {
    quote: "Simplicity meets extreme power. The integration was seamless, and the insights are actually actionable.",
    author: "Elena Rodriguez",
    role: "Head of Product @ InnovateAI",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 border-t border-border bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-mono text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            Trusted by <span className="text-blue-700">Leaders</span>
          </h2>
          <p className="font-mono text-sm uppercase font-bold text-ink-soft">
            // Don't just take our word for it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-background border border-border p-8 shadow-[8px_8px_0px_0px_var(--border)]">
              <Quote className="w-8 h-8 text-blue-700 mb-6" />
              <p className="font-mono text-sm uppercase leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div>
                <div className="font-mono text-sm font-bold uppercase">{t.author}</div>
                <div className="font-mono text-[10px] uppercase text-ink-soft">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
