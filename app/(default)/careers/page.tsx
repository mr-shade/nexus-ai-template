'use client';

import React from 'react';

const positions = [
  {
    title: 'Senior AI Research Engineer',
    location: 'San Francisco / Remote',
    team: 'Intelligence',
  },
  { title: 'Distributed Systems Engineer', location: 'Remote', team: 'Infrastructure' },
  { title: 'Product Designer', location: 'New York / London', team: 'Experience' },
  { title: 'Security Architect', location: 'Washington D.C. / Remote', team: 'Trust' },
];

export default function CareersPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="px-6 py-12 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-mono text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
            Join the <span className="text-blue-700">Evolution</span>
          </h1>
          <p className="font-mono text-lg uppercase font-bold text-ink-soft max-w-3xl">
            {'// Build the operating system for the autonomous era'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 gap-px bg-border border border-border shadow-[12px_12px_0px_0px_var(--border)]">
          {positions.map((pos, index) => (
            <div
              key={index}
              className="bg-background p-8 flex flex-col md:flex-row justify-between items-start md:items-center group hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <div>
                <h3 className="font-mono text-xl font-bold uppercase mb-2">{pos.title}</h3>
                <div className="font-mono text-xs uppercase text-ink-soft font-bold">
                  {pos.team} {'//'} {pos.location}
                </div>
              </div>
              <div className="mt-6 md:mt-0 font-mono text-[10px] uppercase font-bold text-blue-700 border border-blue-700 px-6 py-2 group-hover:bg-blue-700 group-hover:text-white transition-all">
                Apply Now
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
