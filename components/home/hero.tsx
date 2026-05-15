'use client';

import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

export default function Hero() {
  const buttonClass =
    'group relative border border-black bg-transparent px-8 py-3 font-mono text-sm font-bold uppercase text-blue-700 transition-[transform,box-shadow,background-color,color] duration-150 ease-out hover:bg-blue-700 hover:text-white hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer flex items-center gap-2';

  return (
    <section
      className="relative min-h-[90vh] w-full flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(rgba(29, 78, 216, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(29, 78, 216, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
        <div className="mb-6 inline-block border border-black bg-yellow-400 px-4 py-1 font-mono text-xs font-bold uppercase tracking-widest text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          v2.0 — Now with Autonomous Agents
        </div>
        
        <h1 className="mb-8 font-mono text-6xl font-bold uppercase leading-[0.9] tracking-tighter md:text-8xl lg:text-9xl selection:bg-blue-700 selection:text-white">
          Enterprise <br />
          <span className="text-blue-700">Intelligence</span>
        </h1>
        
        <p className="mb-12 max-w-2xl font-mono text-lg md:text-xl text-ink-soft uppercase leading-tight font-medium">
          Nexus AI integrates seamlessly with your workflow to provide autonomous insights, predictive analytics, and real-time collaboration.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <button className={buttonClass}>
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
          <button className={`${buttonClass} border-blue-700`}>
            <Github className="w-4 h-4" /> View Source
          </button>
        </div>
      </div>

      <div className="mt-24 w-full max-w-6xl border border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-2">
        <div className="bg-slate-100 border border-black aspect-video flex items-center justify-center text-slate-400 font-mono italic">
          [ Dashboard Preview Image ]
        </div>
      </div>
    </section>
  );
}
