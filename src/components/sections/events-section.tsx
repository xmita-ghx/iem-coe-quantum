'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, CheckCircle2, Award, Zap } from 'lucide-react';
import { centerEvents } from '@/data/events';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { AnimatedGradientBorder } from '@/components/ui/animated-gradient-border';

export const EventsSection: React.FC = () => {
  const featuredEvent = centerEvents.find((e) => e.featured);
  const otherEvents = centerEvents.filter((e) => !e.featured);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="events">
      <div className="text-center max-w-xl mx-auto mb-14">
        <Badge variant="cyan" className="mb-3">Workshops & Community</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Events & Capacity Building
        </h2>
        <p className="text-xs text-gray-400 mt-2">
          Empowering researchers, educators, and students with high-impact quantum events.
        </p>
      </div>

      {/* Featured Upcoming Event: Qiskit Fall Fest 2026 */}
      {featuredEvent && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <AnimatedGradientBorder className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="cyan" className="animate-pulse">
                    <Sparkles className="w-3.5 h-3.5 mr-1" /> Upcoming Flagship Event
                  </Badge>
                  <span className="text-xs font-semibold text-cyan-400">{featuredEvent.date}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {featuredEvent.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl w-fit">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {featuredEvent.location}
              </div>
            </div>

            <p className="text-sm text-gray-300 mt-4 leading-relaxed max-w-3xl">
              {featuredEvent.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {featuredEvent.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-gray-200">{highlight}</span>
                </div>
              ))}
            </div>
          </AnimatedGradientBorder>
        </motion.div>
      )}

      {/* Other Completed Milestone Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otherEvents.map((evt, idx) => (
          <motion.div
            key={evt.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="indigo">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> {evt.badge}
                  </Badge>
                  <span className="text-[11px] text-gray-500">{evt.partner}</span>
                </div>

                <h4 className="text-base font-bold text-white">{evt.title}</h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">{evt.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
                {evt.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-[11px] text-gray-400">
                    <Award className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};