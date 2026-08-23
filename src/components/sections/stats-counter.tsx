'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { centerStats } from '@/data/stats';
import { Card } from '@/components/ui/card';

export const StatsCounter: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {centerStats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="text-center py-6 px-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                <span className="quantum-gradient-text">{stat.value}</span>
                <span className="text-cyan-400">{stat.suffix}</span>
              </div>
              <div className="mt-2 text-xs font-semibold text-gray-200">{stat.label}</div>
              {stat.description && (
                <div className="mt-1 text-[11px] text-gray-500 line-clamp-2">
                  {stat.description}
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};