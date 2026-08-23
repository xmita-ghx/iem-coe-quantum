'use client';

import React from 'react';
import { partners } from '@/data/partners';
import { Building2 } from 'lucide-react';

export const PartnersTicker: React.FC = () => {
  // Duplicate array to enable seamless marquee looping
  const tickerItems = [...partners, ...partners];

  return (
    <section className="py-12 border-y border-white/5 bg-surface/30 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
          National & International Collaborations
        </p>
      </div>

      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-6">
          {tickerItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl glass-panel border-white/5 hover:border-cyan-500/30 whitespace-nowrap transition-all"
            >
              <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-gray-200">{partner.name}</span>
                <span className="text-[10px] text-gray-500">{partner.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};