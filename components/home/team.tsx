'use client';

import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const members = [
  {
    name: 'Dr. Aris Thorne',
    role: 'Chief Architect',
    bio: 'Former lead at DeepMind. Specialist in autonomous reasoning systems.',
  },
  {
    name: 'Elena Vance',
    role: 'VP Engineering',
    bio: 'Distributed systems expert. Previously built infra at Stripe.',
  },
  {
    name: 'Marcus Kaine',
    role: 'Head of Product',
    bio: 'Human-computer interaction pioneer. Obsessed with seamless UX.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Security Lead',
    bio: 'Ex-NSA security researcher. Ensures Nexus is military-grade.',
  },
];

export default function Team() {
  return (
    <section className="py-24 px-6 border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-mono text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            The <span className="text-blue-700">Collective</span>
          </h2>
          <p className="font-mono text-sm uppercase font-bold text-ink-soft">
            {'// Engineering the future of autonomous systems'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-background border border-border p-8 shadow-[8px_8px_0px_0px_var(--border)] group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              <div className="w-20 h-20 bg-blue-700/10 border border-border mb-6 flex items-center justify-center font-mono text-2xl font-bold text-blue-700">
                {member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <h3 className="font-mono text-sm font-bold uppercase mb-1">{member.name}</h3>
              <div className="font-mono text-[10px] uppercase text-blue-700 font-bold mb-4">
                {member.role}
              </div>
              <p className="font-mono text-[10px] uppercase text-ink-soft leading-relaxed mb-6">
                {member.bio}
              </p>
              <div className="flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <Github className="w-4 h-4 cursor-pointer hover:text-blue-700" />
                <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-700" />
                <Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
