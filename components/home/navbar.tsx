'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '@/components/mode-toggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-black bg-background/80 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Nexus AI" width={32} height={32} />
          <span className="font-mono text-xl font-bold uppercase tracking-tighter">Nexus AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs font-bold uppercase">
          <Link href="/features" className="hover:text-blue-700 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-blue-700 transition-colors">
            Pricing
          </Link>
          <Link href="/docs" className="hover:text-blue-700 transition-colors">
            Documentation
          </Link>
          <Link href="/about" className="hover:text-blue-700 transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <button className="border border-black dark:border-white bg-blue-700 px-6 py-2 font-mono text-xs font-bold uppercase text-white shadow-[4px_4px_0px_0px_var(--border)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all">
            Launch App
          </button>
        </div>
      </div>
    </nav>
  );
}
