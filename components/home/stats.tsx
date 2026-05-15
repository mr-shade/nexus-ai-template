'use client';

import React from 'react';

const stats = [
  { label: 'Users Active', value: '500K+' },
  { label: 'Tasks Automated', value: '12M+' },
  { label: 'Uptime', value: '99.99%' },
  { label: 'Countries', value: '140+' },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-2 text-blue-700">
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase font-bold text-ink-soft">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
