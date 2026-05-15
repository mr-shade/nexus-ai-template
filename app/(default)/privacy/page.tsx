'use client';

import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="px-6 py-12 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-mono text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
            Privacy <span className="text-blue-700">Policy</span>
          </h1>
          <p className="font-mono text-lg uppercase font-bold text-ink-soft max-w-3xl">
            {'// How we protect and process your enterprise data'}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="font-mono text-xs uppercase leading-loose text-ink-soft space-y-12">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">1. Data Collection</h2>
            <p>
              We collect minimal data required to provide autonomous agent services. This includes
              technical metadata, account information, and data explicitly provided for ingestion
              into our reasoning engine.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">2. Data Sovereignty</h2>
            <p>
              Your data remains yours. We do not use customer data to train our global models unless
              explicitly opted-in for federated learning. All inference happens in isolated
              environments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">3. Security Standards</h2>
            <p>
              We employ military-grade AES-256 encryption at rest and TLS 1.3 in transit. Our
              systems are SOC2 Type II compliant and regularly audited by third-party security
              firms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
