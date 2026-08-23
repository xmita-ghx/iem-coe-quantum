import { ResearchProject, TimelineMilestone } from '@/types';

export const researchProjects: ResearchProject[] = [
  {
    id: 'pqc-payload-security',
    title: 'Payload & Data Security Capability',
    description:
      'Designing robust cryptographic protocols for the secure handling of sensor, telemetry, and communication data against quantum attack vectors.',
    focusArea: 'Post-Quantum Security',
    status: 'Ongoing',
    tags: ['PQC', 'Sensor Security', 'Cryptography', 'Lattice-Based'],
    collaborators: ['DRDO', 'ISI Kolkata'],
  },
  {
    id: 'qml-medical-imaging',
    title: 'Medical Image Analysis via Quantum ML',
    description:
      'Leveraging parameterized quantum circuits (PQCs) and hybrid quantum-classical neural networks to boost diagnostic accuracy in dense biomedical imaging.',
    focusArea: 'Quantum ML',
    status: 'Ongoing',
    tags: ['QML', 'Biomedical Vision', 'Variational Circuits', 'Hybrid AI'],
    collaborators: ['Universidad de Sevilla', 'TU Wien'],
  },
];

export const roadmapMilestones: TimelineMilestone[] = [
  {
    year: '2023',
    title: 'QuantCom Established',
    description: 'Founded on Dec 23, 2023, under IEM to anchor specialized quantum research.',
  },
  {
    year: '2024',
    title: 'Ecosystem & Lab Setup',
    description: 'Formed core research tracks, simulation nodes, and academic collaborations.',
  },
  {
    year: '2025',
    title: 'National Outreach',
    description: 'Bootcamps with ISEA/ISI Kolkata, FDPs, and active national deployments.',
  },
  {
    year: '2026',
    title: 'Global Impact',
    description: 'Scaling international joint publications and industry post-quantum transitions.',
  },
];