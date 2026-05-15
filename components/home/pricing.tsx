'use client';

import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for individual builders and small experiments.',
    features: ['5 Autonomous Agents', 'Basic Analytics', 'Community Support', '1GB Storage'],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$49',
    description: 'Power tools for growing teams and startups.',
    features: ['Unlimited Agents', 'Advanced Analytics', 'Priority Support', '50GB Storage', 'Custom Integrations'],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Maximum security and performance for large organizations.',
    features: ['Dedicated Instance', 'SLA Guarantee', '24/7 Phone Support', 'Unlimited Storage', 'White-labeling'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            Simple <span className="text-blue-700">Pricing</span>
          </h2>
          <p className="font-mono text-sm uppercase font-bold text-ink-soft italic">
            No hidden fees. Scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`border border-border p-8 flex flex-col ${tier.highlight ? 'bg-blue-700 text-white shadow-[12px_12px_0px_0px_var(--border)] scale-105' : 'bg-background text-foreground shadow-[8px_8px_0px_0px_var(--border)]'}`}
            >
              <h3 className="font-mono text-2xl font-bold uppercase mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-xs font-mono uppercase opacity-70">/ month</span>}
              </div>
              <p className="font-mono text-xs uppercase mb-8 opacity-80 leading-tight">
                {tier.description}
              </p>
              
              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 font-mono text-xs uppercase font-bold">
                    <Check className={`w-4 h-4 ${tier.highlight ? 'text-yellow-400' : 'text-blue-700'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 font-mono text-sm font-bold uppercase border border-border transition-all shadow-[4px_4px_0px_0px_var(--border)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${tier.highlight ? 'bg-white text-blue-700' : 'bg-blue-700 text-white'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
