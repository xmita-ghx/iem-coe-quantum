import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 bg-surface/50 backdrop-blur-md pt-16 pb-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-surface border border-white/10 flex items-center justify-center">
              <Image
                src="/assets/logos/quantcom-logo.png"
                alt="QuantCom Logo"
                width={32}
                height={32}
                className="object-contain p-0.5"
              />
            </div>
            <span className="font-bold text-white tracking-wide">QuantCom CoE</span>
          </div>
          <p className="text-xs text-gray-400 max-w-md leading-relaxed">
            IEM Centre of Excellence for Quantum Computing. Advancing quantum AI
            innovation, post-quantum resilience, and collaborative computational research.
          </p>
          <div className="text-[11px] text-gray-400 space-y-1 pt-1 leading-relaxed">
            <p className="text-gray-300 font-medium">
              Godrej Genesis Building, 15th Floor, Street No. 18, Block EP & GP, Sector V, Bidhannagar, Kolkata – 700091
            </p>
            <p>
              Lead: <a href="mailto:prithwineel.paul@iem.edu.in" className="text-cyan-400 hover:underline">prithwineel.paul@iem.edu.in</a> | Phone: +91 94445 53517
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>
              <Link href="/research" className="hover:text-cyan-400 transition-colors">
                Research Tracks
              </Link>
            </li>
            <li>
              <Link href="/publications" className="hover:text-cyan-400 transition-colors">
                Publications & Papers
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-cyan-400 transition-colors">
                Faculty & Researchers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                Contact & Collaborations
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
            Affiliations
          </h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>
              <a
                href="https://iem.edu.in"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
              >
                IEM Kolkata <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href="https://uem.edu.in"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
              >
                UEM Group <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <span className="text-gray-500">DRDO & ISI Collaborations</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4 text-center sm:text-left">
        <p>© 2026 IEM Centre of Excellence for Quantum Computing. All rights reserved.</p>
        <p>
          Site developed and maintained by{' '}
          <a
            href="https://www.linkedin.com/in/asmita-ghorai-a613563a5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-2 transition-colors"
          >
            Asmita Ghorai
          </a>
        </p>
      </div>
    </footer>
  );
};