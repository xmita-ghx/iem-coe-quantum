import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  containerClassName?: string;
}

export const AnimatedGradientBorder: React.FC<AnimatedGradientBorderProps> = ({
  children,
  className,
  containerClassName,
  ...props
}) => {
  return (
    <div className={cn('relative p-[1px] rounded-2xl overflow-hidden group', containerClassName)} {...props}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 via-indigo-500/50 to-cyan-500/50 opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
      <div className={cn('relative rounded-2xl bg-surface/90 backdrop-blur-xl', className)}>
        {children}
      </div>
    </div>
  );
};