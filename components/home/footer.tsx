'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Image src="/logo.svg" alt="Nexus AI" width={32} height={32} />
            <span className="font-mono text-2xl font-bold uppercase tracking-tighter text-blue-700">
              Nexus AI
            </span>
          </Link>
          <p className="font-mono text-xs uppercase font-bold text-ink-soft max-w-sm leading-tight">
            The Intelligent Operating System for Enterprise Teams. Streamlining complexity through
            autonomous intelligence since 2026.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-sm font-bold uppercase mb-6 text-foreground border-b border-border pb-2 inline-block">
            Product
          </h4>
          <ul className="space-y-4 font-mono text-xs uppercase font-bold text-ink-soft">
            <li>
              <Link href="/features" className="hover:text-blue-700 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-blue-700 transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/docs" className="hover:text-blue-700 transition-colors">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="/changelog" className="hover:text-blue-700 transition-colors">
                Changelog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-sm font-bold uppercase mb-6 text-foreground border-b border-border pb-2 inline-block">
            Company
          </h4>
          <ul className="space-y-4 font-mono text-xs uppercase font-bold text-ink-soft">
            <li>
              <Link href="/about" className="hover:text-blue-700 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-blue-700 transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-700 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-700 transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[10px] uppercase font-bold text-ink-soft opacity-60">
          © 2026 Nexus AI Technologies Inc. All rights reserved.
        </p>
        <div className="flex gap-6 font-mono text-[10px] uppercase font-bold text-ink-soft opacity-60">
          <a href="#" className="hover:text-blue-700 transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-blue-700 transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-blue-700 transition-colors">
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
