'use client';

import React from 'react';

export default function DocsPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="px-6 py-12 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-mono text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
            The <span className="text-blue-700">Manual</span>
          </h1>
          <p className="font-mono text-lg uppercase font-bold text-ink-soft max-w-3xl">
            {'// Comprehensive guides for developers and enterprise architects'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-4 gap-12">
        <aside className="col-span-1 border-r border-border pr-8">
          <div className="sticky top-32 space-y-8">
            <div>
              <h3 className="font-mono text-xs font-bold uppercase mb-4 text-blue-700">
                Getting Started
              </h3>
              <ul className="space-y-2 font-mono text-[10px] uppercase font-bold text-ink-soft">
                <li className="text-foreground">Introduction</li>
                <li>Quick Start Guide</li>
                <li>Core Concepts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs font-bold uppercase mb-4 text-blue-700">
                API Reference
              </h3>
              <ul className="space-y-2 font-mono text-[10px] uppercase font-bold text-ink-soft">
                <li>Authentication</li>
                <li>Endpoints</li>
                <li>Rate Limits</li>
              </ul>
            </div>
          </div>
        </aside>

        <div className="col-span-3 prose dark:prose-invert max-w-none">
          <div className="font-mono uppercase text-sm leading-relaxed text-ink-soft space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Introduction</h2>
              <p>
                Nexus AI is a distributed intelligence engine designed for complex enterprise
                workflows. Our SDK allows you to instantiate autonomous agents that can reason about
                data, interact with external APIs, and collaborate with other agents in real-time.
              </p>
            </section>

            <section className="p-8 bg-secondary/30 border border-border font-mono text-xs">
              <div className="flex justify-between mb-4 border-b border-border pb-2">
                <span>npm install @nexus-ai/core</span>
                <span className="text-blue-700">COPY</span>
              </div>
              <code className="text-blue-700">
                import {'{ NexusClient }'} from &apos;@nexus-ai/core&apos;;
                <br />
                <br />
                const nexus = new NexusClient(&apos;YOUR_API_KEY&apos;);
                <br />
                const agent = await nexus.createAgent(&apos;analyst&apos;);
              </code>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
