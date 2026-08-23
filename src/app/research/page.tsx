'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Network, ArrowRight, Layers, FileCode2, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { researchProjects } from '@/data/research-projects';

const iconMap = {
  'Post-Quantum Security': ShieldCheck,
  'Quantum ML': Cpu,
  'Quantum Algorithms': Network,
};

export default function ResearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Badge variant="cyan" className="mb-3">
          <Sparkles className="w-3.5 h-3.5 mr-1" /> Core Thrust Areas
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Active Research Tracks
        </h1>
        <p className="text-sm text-gray-400 mt-4 leading-relaxed">
          Pioneering computational resilience and hybrid algorithms across post-quantum data
          protection, variational quantum neural circuits, and biomedical AI diagnosis.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {researchProjects.map((project, idx) => {
          const Icon = iconMap[project.focusArea] || Cpu;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="p-8 group hover:border-cyan-500/40 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h2>
                      <span className="text-xs text-cyan-400 font-medium">
                        {project.focusArea}
                      </span>
                    </div>
                  </div>
                  <Badge variant="indigo">Status: {project.status}</Badge>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed max-w-4xl">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {project.collaborators && project.collaborators.length > 0 && (
                    <div className="text-xs text-gray-400">
                      Collaborators:{' '}
                      <span className="text-white font-medium">
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

      {/* Research Methodology Pill Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <Layers className="w-6 h-6 text-cyan-400 mb-3" />
          <h3 className="text-sm font-bold text-white">Hybrid Quantum-Classical</h3>
          <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
            Integrating variational algorithms and PennyLane / Qiskit state vectors into classical deep learning pipelines.
          </p>
        </Card>

        <Card className="p-6">
          <ShieldCheck className="w-6 h-6 text-indigo-400 mb-3" />
          <h3 className="text-sm font-bold text-white">Lattice Cryptography</h3>
          <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
            Benchmarking post-quantum key encapsulation and sensor telemetry security in defense-adjacent contexts.
          </p>
        </Card>

        <Card className="p-6">
          <FileCode2 className="w-6 h-6 text-cyan-400 mb-3" />
          <h3 className="text-sm font-bold text-white">Biomedical Analysis</h3>
          <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
            Accelerating feature extraction for high-dimensional medical imaging datasets via parameterized ansatzes.
          </p>
        </Card>
      </div>

      {/* CTA Box */}
      <div className="mt-16 text-center">
        <Link href="/contact">
          <Button size="lg" variant="primary" className="gap-2">
            Propose a Joint Research Project <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}