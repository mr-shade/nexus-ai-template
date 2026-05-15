'use client';

import React from 'react';

export default function TermsPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="px-6 py-12 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-mono text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
            Terms of <span className="text-blue-700">Service</span>
          </h1>
          <p className="font-mono text-lg uppercase font-bold text-ink-soft max-w-3xl">
            {'// The legal framework for using the Nexus AI ecosystem'}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="font-mono text-xs uppercase leading-loose text-ink-soft space-y-12">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Nexus AI, you agree to be bound by these terms. Our service is
              intended for enterprise use and requires a valid corporate identity for account
              instantiation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">2. Usage Limits</h2>
            <p>
              Autonomous agents are subject to token usage limits as defined in your specific
              service tier. Exceeding these limits may result in temporary throttling of inference
              requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">3. Prohibited Use</h2>
            <p>
              Nexus AI may not be used for malicious automation, attempts to bypass security
              protocols, or generation of prohibited content as defined by our acceptable use
              policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
