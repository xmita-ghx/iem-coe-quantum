'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Search, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import publicationsData from '@/data/publications.json';
import { Publication } from '@/types';

export default function PublicationsPage() {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const publications = publicationsData as Publication[];

  const filtered = publications.filter((pub) => {
    const matchesFilter = filter === 'All' || pub.type === filter;
    const matchesSearch =
      pub.title.toLowerCase().includes(search.toLowerCase()) ||
      pub.authors.some((a) => a.toLowerCase().includes(search.toLowerCase())) ||
      pub.venue.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Badge variant="cyan" className="mb-3">
          Peer-Reviewed & Indexed
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Research Publications
        </h1>
        <p className="text-sm text-gray-400 mt-4 leading-relaxed">
          Comprehensive repository of QuantCom's 53+ scholarly publications, including 14 SCI / SCIE / ESCI indexed papers, conference proceedings, and collaborative findings.
        </p>
      </div>

      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-surface/50 p-4 rounded-2xl border border-white/10">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search papers, authors, venues..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-surface border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          <Filter className="w-3.5 h-3.5 text-gray-400 mr-1 hidden sm:inline-block" />
          {['All', 'SCI', 'SCIE', 'ESCI', 'Conference'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filter === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-4">
        {filtered.map((pub, idx) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <Card className="p-6 group hover:border-cyan-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2 max-w-4xl">
                  <div className="flex items-center gap-2">
                    <Badge variant="cyan">{pub.type}</Badge>
                    <span className="text-xs text-gray-500 font-semibold">{pub.year}</span>
                  </div>
                  <h2 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {pub.title}
                  </h2>
                  <p className="text-xs text-cyan-400 font-medium">{pub.venue}</p>
                  <p className="text-xs text-gray-400">
                    Authors: <span className="text-gray-300">{pub.authors.join(', ')}</span>
                  </p>
                  {pub.abstract && (
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed line-clamp-2">
                      {pub.abstract}
                    </p>
                  )}
                </div>

                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 border border-cyan-500/20 px-3.5 py-2 rounded-xl bg-cyan-500/5 hover:bg-cyan-500/10 transition-all shrink-0 self-start mt-2 md:mt-0"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View DOI</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-sm text-gray-500 glass-panel rounded-2xl">
            No publications found matching your search query or filter.
          </div>
        )}
      </div>
    </div>
  );
}