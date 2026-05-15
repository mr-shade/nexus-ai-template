'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the autonomous agent system work?",
    answer: "Our agents use a proprietary reasoning engine to break down high-level objectives into executable tasks. They integrate with your existing tools via secure APIs and learn from your team's feedback loops."
  },
  {
    question: "Is my data secure with Nexus AI?",
    answer: "Absolutely. We are SOC2 Type II compliant. All data is encrypted at rest and in transit. We also offer a dedicated instance option for enterprise customers who require complete data isolation."
  },
  {
    question: "Can I integrate custom tools?",
    answer: "Yes, our Professional and Enterprise plans include access to the Nexus SDK, allowing you to build custom integrations and specialized agents for your unique workflows."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer community support for the Starter plan, priority email support for Professional, and 24/7 dedicated phone support for Enterprise customers."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 border-t border-border bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Common <span className="text-blue-700">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left font-mono text-sm font-bold uppercase hover:bg-secondary/30 transition-colors"
              >
                {faq.question}
                {openIndex === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 font-mono text-xs uppercase text-ink-soft leading-relaxed border-t border-border/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
