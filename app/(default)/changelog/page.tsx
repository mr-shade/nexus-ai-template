'use client';

import React from 'react';

const logs = [
  {
    version: '2.4.0',
    date: 'May 2026',
    title: 'Multi-Agent Orchestration',
    changes: [
      'Introduced sub-agent delegation patterns.',
      'Enhanced reasoning tokens by 40% for complex math.',
      'Added support for vector database streaming.',
    ],
  },
  {
    version: '2.3.5',
    date: 'April 2026',
    title: 'Security Hardening',
    changes: [
      'SOC2 Type II compliance audit passed.',
      'End-to-end encryption for inference streams.',
      'Improved audit logging for enterprise customers.',
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="px-6 py-12 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-mono text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
            The <span className="text-blue-700">Timeline</span>
          </h1>
          <p className="font-mono text-lg uppercase font-bold text-ink-soft max-w-3xl">
            {'// Continuous evolution of the intelligence operating system'}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="space-y-24">
          {logs.map((log, index) => (
            <div key={index} className="relative pl-12 border-l border-border">
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-blue-700 rounded-full" />
              <div className="font-mono text-xs font-bold text-blue-700 uppercase mb-2">
                Version {log.version} — {log.date}
              </div>
              <h2 className="font-mono text-3xl font-bold uppercase mb-6">{log.title}</h2>
              <ul className="space-y-4 font-mono text-sm uppercase text-ink-soft leading-relaxed">
                {log.changes.map((change, i) => (
                  <li key={i}>
                    {'//'} {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
