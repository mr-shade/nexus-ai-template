'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6 border-t border-border bg-blue-700 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
             backgroundSize: '24px 24px'
           }} 
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-mono text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
          Ready to Scale Your <br />
          <span className="text-yellow-400">Intelligence?</span>
        </h2>
        <p className="font-mono text-lg md:text-xl uppercase mb-12 opacity-90 max-w-2xl mx-auto">
          Join thousands of teams building the future with Nexus AI. Start your 14-day free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-700 border border-black px-10 py-4 font-mono text-sm font-bold uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2">
            Get Started Now <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-transparent text-white border border-white px-10 py-4 font-mono text-sm font-bold uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
}
