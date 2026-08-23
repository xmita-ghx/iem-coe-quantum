export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'SCI' | 'SCIE' | 'ESCI' | 'Conference' | 'Workshop' | 'Other';
  doi?: string;
  link?: string;
  abstract?: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  focusArea: 'Post-Quantum Security' | 'Quantum ML' | 'Quantum Algorithms';
  status: 'Ongoing' | 'Completed';
  tags: string[];
  lead?: string;
  collaborators?: string[];
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: 'International' | 'National' | 'Industry' | 'Government';
  location: string;
  url?: string;
}

export interface StatMetric {
  label: string;
  value: number;
  suffix?: string;
  description?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}