import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Launchify-Style Radial Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-cyan-500/15 via-indigo-600/10 to-transparent blur-3xl rounded-full" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[500px] bg-cyan-600/10 blur-[140px] rounded-full" />
      <div className="absolute top-[70%] left-[-10%] w-[600px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-subtle-grid bg-[size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};