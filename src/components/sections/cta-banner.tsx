'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGradientBorder } from '@/components/ui/animated-gradient-border';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <AnimatedGradientBorder className="p-8 sm:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Join Our Quantum Research Network
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed">
            Collaborate on cutting-edge Post-Quantum Cryptography, Quantum Machine Learning
            initiatives, or initiate joint institutional research programs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="gap-2">
                <Mail className="w-4 h-4" />
                Initiate Collaboration
              </Button>
            </Link>
            <Link href="/research">
              <Button size="lg" variant="outline" className="gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </AnimatedGradientBorder>
      </motion.div>
    </section>
  );
};