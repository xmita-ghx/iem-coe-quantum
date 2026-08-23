export interface CenterEvent {
  id: string;
  title: string;
  date: string;
  badge: 'Upcoming' | 'Completed' | 'Featured';
  location: string;
  description: string;
  highlights: string[];
  partner?: string;
  featured?: boolean;
}

export const centerEvents: CenterEvent[] = [
  {
    id: 'qiskit-fall-fest-2026',
    title: 'Qiskit Fall Fest 2026 @ IEM',
    date: 'November 9–10, 2026',
    badge: 'Featured',
    location: 'IEM Kolkata (In association with QuantCom)',
    description:
      'The flagship IBM Quantum community event bringing hands-on quantum computing, interactive tracks, and hardware architecture deep-dives.',
    highlights: [
      'Keynote & Talk on Qiskit 101 by an official IBM Speaker',
      'Comprehensive Introduction to Quantum Machine Learning (QML)',
      'Architectural Overview of Quantum Hardware & Quantum Chips',
      'Hands-on Quantum Circuit Simulator & Lab Sessions'
    ],
    partner: 'IBM Quantum',
    featured: true,
  },
  {
    id: 'isea-isi-bootcamp',
    title: 'ISEA Quantum & Cyber Security Bootcamp',
    date: 'Past Milestone',
    badge: 'Completed',
    location: 'ISI Kolkata & IEM',
    description:
      'Intensive capacity-building bootcamp organized under the Information Security Education and Awareness (ISEA) initiative with ISI Kolkata.',
    highlights: [
      'Post-quantum cryptographic attack surfaces',
      'Hands-on secure protocol testing',
      'Joint training with ISI Kolkata faculty'
    ],
    partner: 'ISI Kolkata / ISEA',
    featured: false,
  },
  {
    id: 'faculty-capacity-workshop',
    title: 'Faculty Capacity Building & FDP Workshop',
    date: 'Past Milestone',
    badge: 'Completed',
    location: 'IEM Centre of Excellence',
    description:
      'National Faculty Development Program designed to train engineering educators in modern Quantum Information Science curriculum design.',
    highlights: [
      'Quantum algorithms pedagogical models',
      'Simulating Hamiltonian dynamics',
      '421+ participants and faculty trained'
    ],
    partner: 'QuantCom CoE',
    featured: false,
  },
];