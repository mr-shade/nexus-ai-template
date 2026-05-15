'use client';

import React from 'react';
import { Share2, Slack, Github, Database, Cloud, MessageSquare } from 'lucide-react';

const partners = [
  { name: 'Slack', icon: Slack, description: 'Direct AI integration for team workflows.' },
  { name: 'GitHub', icon: Github, description: 'Automated code review and PR management.' },
  { name: 'Postgres', icon: Database, description: 'Secure data ingestion and vector storage.' },
  { name: 'AWS', icon: Cloud, description: 'Scalable infrastructure and edge computing.' },
  { name: 'Intercom', icon: MessageSquare, description: 'Autonomous customer support agents.' },
  { name: 'Segment', icon: Share2, description: 'Real-time data routing and analytics.' },
];

export default function Integrations() {
  return (
    <section className="py-24 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-mono text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
              Native <span className="text-blue-700">Integrations</span>
            </h2>
            <p className="font-mono text-sm uppercase font-bold text-ink-soft">
              {'// Connect your entire stack to our reasoning engine'}
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase font-bold text-blue-700 border border-blue-700 px-4 py-2 hover:bg-blue-700 hover:text-white transition-all cursor-pointer shadow-[4px_4px_0px_0px_var(--border)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
            View All 50+ Apps
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-16 h-16 border border-border flex items-center justify-center mb-4 bg-secondary/30 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-[4px_4px_0px_0px_var(--border)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none">
                <partner.icon className="w-8 h-8" />
              </div>
              <h3 className="font-mono text-xs font-bold uppercase mb-1">{partner.name}</h3>
              <p className="font-mono text-[10px] uppercase text-ink-soft leading-tight opacity-0 group-hover:opacity-100 transition-opacity">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
