'use client';

import React from 'react';
import { Cpu, Zap, Shield, Globe, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Autonomous Agents',
    description: 'Our AI agents handle complex workflows without constant human oversight.',
    icon: Cpu,
    color: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    title: 'Real-time Sync',
    description: 'Collaborate with your team instantly with zero latency state synchronization.',
    icon: Zap,
    color: 'bg-yellow-100 dark:bg-yellow-900/30',
  },
  {
    title: 'Enterprise Security',
    description: 'Military-grade encryption and SOC2 Type II compliance out of the box.',
    icon: Shield,
    color: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    title: 'Global Edge',
    description: 'Deploy intelligence closer to your users with our global edge network.',
    icon: Globe,
    color: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    title: 'Advanced Analytics',
    description: 'Deep insights into your operations with predictive performance modeling.',
    icon: BarChart3,
    color: 'bg-red-100 dark:bg-red-900/30',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-mono text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            Built for <span className="text-blue-700">Scale</span>
          </h2>
          <p className="font-mono text-sm uppercase font-bold text-ink-soft">
            {'// Powerful tools for the next generation of builders'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border shadow-[12px_12px_0px_0px_var(--border)]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-8 group hover:bg-secondary/50 transition-colors"
            >
              <div
                className={`w-12 h-12 ${feature.color} border border-border flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_var(--border)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all`}
              >
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-mono text-xl font-bold uppercase mb-2">{feature.title}</h3>
              <p className="font-mono text-sm text-ink-soft uppercase leading-tight">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
