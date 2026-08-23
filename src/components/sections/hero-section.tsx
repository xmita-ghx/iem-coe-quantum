'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Binary } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedGradientBorder } from '@/components/ui/animated-gradient-border';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden flex flex-col items-center text-center px-4">
      {/* Top Pill */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge variant="cyan" className="mb-6 py-1.5 px-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 mr-1 animate-spin" />
          QuantCom • IEM Centre of Excellence for Quantum Computing
        </Badge>
      </motion.div>

      {/* Main Punchy Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl text-white leading-[1.1]"
      >
        IEM Centre of Excellence for Quantum Computing
      </motion.h1>

      {/* Stylized Subtitle with Gradient Ombre */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-gray-200"
      >
        Pioneering <span className="quantum-gradient-text">Quantum AI</span> & Resilient Cryptography
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed"
      >
        Bridging theoretical quantum mechanics and real-world deployment across Post-Quantum
        Security, Quantum Machine Learning, and next-generation algorithm design.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <Link href="/research">
          <Button size="lg" variant="primary" className="gap-2">
            Explore Research Tracks
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <Link href="/publications">
          <Button size="lg" variant="secondary">
            View Publications
          </Button>
        </Link>
      </motion.div>

      {/* Hero Visual Feature Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-14 w-full max-w-4xl"
      >
        <AnimatedGradientBorder className="p-6 md:p-8 bg-surface/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Post-Quantum Cryptography</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Engineered protocols for payload protection and sensor data in post-quantum environments.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <Binary className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Quantum Machine Learning</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Hybrid parameterized quantum circuits solving high-complexity biomedical image analysis.
                </p>
              </div>
            </div>
          </div>
        </AnimatedGradientBorder>
      </motion.div>
    </section>
  );
};