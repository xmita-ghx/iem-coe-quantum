'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { User, Linkedin, GraduationCap, Users } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  department: string;
  linkedin: string;
  highlight?: string;
}

const facultyLeadership: Member[] = [
  {
    name: 'Dr. Moutushi Singh',
    role: 'Faculty Investigator & Advisory',
    department: 'Institute of Engineering & Management (IEM)',
    linkedin: 'https://www.linkedin.com/in/dr-moutushi-singh-bb295b6a/',
    highlight: 'Quantum AI Systems & Computational Research',
  },
  {
    name: 'Dr. Prithwineel Paul',
    role: 'Principal Investigator & CoE Lead',
    department: 'Institute of Engineering & Management (IEM)',
    linkedin: 'https://www.linkedin.com/in/prithwineel-paul-768aa212',
    highlight: 'Post-Quantum Security & Cryptographic Architectures',
  },
  {
    name: 'Prof. Partha Chakraborty',
    role: 'Faculty Investigator',
    department: 'Institute of Engineering & Management (IEM)',
    linkedin: 'https://www.linkedin.com/in/partha-chakraborty-bb506638',
    highlight: 'Distributed Quantum Frameworks & Advanced Computing',
  },
  {
    name: 'Prof. Sourav Malakar',
    role: 'Faculty Investigator',
    department: 'Institute of Engineering & Management (IEM)',
    linkedin: 'https://www.linkedin.com/in/sourav-malakar-330216113',
    highlight: 'Quantum Machine Learning & Algorithmic Modeling',
  },
];

const studentTeam: Member[] = [
  {
    name: 'Asmita Ghorai',
    role: 'Student Researcher & Developer',
    department: 'Department of Computer Science & Engineering (CSE)',
    linkedin: 'https://www.linkedin.com/in/asmita-ghorai-a613563a5',
    highlight: 'Quantum Algorithms, Full-Stack Architecture & Simulation Tracks',
  },
  {
    name: 'Arna Roy',
    role: 'Student Researcher & Developer',
    department: 'Department of Computer Science & Engineering (CSE)',
    linkedin: 'https://www.linkedin.com/in/arna-roy-0a839a366',
    highlight: 'Quantum ML Investigations & Circuit Prototyping',
  },
];

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Badge variant="cyan" className="mb-3">People & Leadership</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          QuantCom Research Team
        </h1>
        <p className="text-sm text-gray-400 mt-4 leading-relaxed">
          The faculty leaders, investigators, and student researchers pioneering quantum algorithms, post-quantum cryptography, and quantum AI at IEM Kolkata.
        </p>
      </div>

      {/* Faculty Leadership Section */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xl font-bold text-white tracking-wide">
            Faculty & Research Investigators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facultyLeadership.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                      <User className="w-6 h-6" />
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-xs text-cyan-400 font-medium mt-0.5">{member.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{member.department}</p>
                </div>

                {member.highlight && (
                  <div className="mt-5 pt-4 border-t border-white/5">
                    <span className="text-[10px] text-gray-400 block font-semibold uppercase tracking-wider">
                      Research Realm
                    </span>
                    <p className="text-xs text-gray-300 mt-1">{member.highlight}</p>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Student Research Section */}
      <div>
        <div className="flex items-center gap-2 mb-8">
          <Users className="w-5 h-5 text-indigo-400" />
          <h2 className="text-xl font-bold text-white tracking-wide">
            Student Research Division
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studentTeam.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                      <User className="w-6 h-6" />
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-xs text-indigo-400 font-medium mt-0.5">{member.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{member.department}</p>
                </div>

                {member.highlight && (
                  <div className="mt-5 pt-4 border-t border-white/5">
                    <span className="text-[10px] text-gray-400 block font-semibold uppercase tracking-wider">
                      Specialization
                    </span>
                    <p className="text-xs text-gray-300 mt-1">{member.highlight}</p>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}