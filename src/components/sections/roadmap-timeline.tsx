'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { roadmapMilestones } from '@/data/research-projects';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export const RoadmapTimeline: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-16">
        <Badge variant="indigo" className="mb-3">Strategic Trajectory</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          QuantCom Milestones & Vision
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {roadmapMilestones.map((milestone, idx) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="h-full flex flex-col justify-between relative border-white/10">
              <div className="text-2xl font-black text-cyan-400/80 mb-2">
                {milestone.year}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{milestone.title}</h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};