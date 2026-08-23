import React from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { StatsCounter } from '@/components/sections/stats-counter';
import { PartnersTicker } from '@/components/sections/partners-ticker';
import { ResearchDomains } from '@/components/sections/research-domains';
import { EventsSection } from '@/components/sections/events-section';
import { PublicationsPreview } from '@/components/sections/publications-preview';
import { RoadmapTimeline } from '@/components/sections/roadmap-timeline';
import { CtaBanner } from '@/components/sections/cta-banner';

export default function HomePage() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <StatsCounter />
      <PartnersTicker />
      <ResearchDomains />
      <EventsSection />
      <PublicationsPreview />
      <RoadmapTimeline />
      <CtaBanner />
    </div>
  );
}