'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, ArrowUpRight, Network } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { researchProjects } from '@/data/research-projects';

const iconMap = {
  'Post-Quantum Security': ShieldCheck,
  'Quantum ML': Cpu,
  'Quantum Algorithms': Network,
};

export const ResearchDomains: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <Badge variant="cyan" className="mb-3">Research Frontier</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Core Investigation Domains
          </h2>
        </div>
        <Link
          href="/research"
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
        >
          Explore All Research Projects <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchProjects.map((project, idx) => {
          const Icon = iconMap[project.focusArea] || Cpu;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="indigo">{project.status}</Badge>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {project.collaborators && project.collaborators.length > 0 && (
                    <div className="text-[11px] text-gray-500">
                      Collaborating with:{' '}
                      <span className="text-gray-300">
                        {project.collaborators.join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};