'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Building, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Badge variant="cyan" className="mb-3">Get in Touch</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Connect With QuantCom
        </h1>
        <p className="text-sm text-gray-400 mt-4 leading-relaxed">
          Reach out for research collaborations, faculty exchanges, defense and industry partnerships, or upcoming workshops.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* Contact Coordinates Card */}
        <Card className="lg:col-span-2 p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">Centre Coordinates</h2>
              <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                IEM Centre of Excellence in Quantum Computing.
              </p>
            </div>

            <div className="space-y-5 pt-2">
              <div className="flex items-start gap-3 text-xs text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="text-white font-medium block">Lab Location</span>
                  Centre of Excellence for Quantum Computing, IEM Kolkata, Godrej Genesis Building, 15th floor, Street Number 18, Block EP & GP, Sector V, Bidhannagar, Kolkata, West Bengal – 700091
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Lead Contact</span>
                  <a
                    href="mailto:prithwineel.paul@iem.edu.in"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    prithwineel.paul@iem.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Direct Line</span>
                  <a
                    href="tel:+919444553517"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    +91 94445 53517
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/5 text-[11px] text-gray-500">
            Institute of Engineering & Management • UEM Group
          </div>
        </Card>

        {/* Message Form Card */}
        <Card className="lg:col-span-3 p-8">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-cyan-400" />
              <h2 className="text-lg font-bold text-white">Message Dispatched</h2>
              <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                Thank you for reaching out. The QuantCom research desk will review your inquiry and follow up promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-lg font-bold text-white mb-2">Send an Inquiry</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Jane Doe"
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jane.doe@organization.edu"
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Inquiry Domain</label>
                <select className="w-full bg-surface border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors">
                  <option value="research">Joint Research Proposal / Collaboration</option>
                  <option value="workshop">Qiskit Fall Fest & Workshop Participation</option>
                  <option value="internship">Student Research & Project Fellowship</option>
                  <option value="general">General Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Message / Proposal</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline your objectives, collaboration scope, or inquiry details..."
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2 mt-2">
                <Send className="w-4 h-4" /> Send Inquiry
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}