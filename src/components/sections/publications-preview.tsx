'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import publicationsData from '@/data/publications.json';
import { Publication } from '@/types';

export const PublicationsPreview: React.FC = () => {
  const publications = (publicationsData as Publication[]).slice(0, 3);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <Badge variant="cyan" className="mb-3">Scholarship</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Recent Publications & Discoveries
          </h2>
        </div>
        <Link
          href="/publications"
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
        >
          View All 53+ Publications <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-4">
        {publications.map((pub, idx) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5">
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex items-center gap-2">
                  <Badge variant="cyan">{pub.type}</Badge>
                  <span className="text-xs text-gray-500">{pub.year}</span>
                </div>
                <h3 className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors">
                  {pub.title}
                </h3>
                <p className="text-xs text-gray-400">
                  {pub.venue} • <span className="text-gray-500">{pub.authors.join(', ')}</span>
                </p>
              </div>

              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 border border-cyan-500/20 px-3 py-1.5 rounded-lg bg-cyan-500/5 transition-colors shrink-0"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>DOI</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};