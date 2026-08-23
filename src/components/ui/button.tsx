import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary:
        'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:brightness-110 active:scale-[0.98]',
      secondary:
        'glass-panel text-gray-200 hover:bg-white/10 hover:text-white active:scale-[0.98]',
      outline:
        'border border-white/15 text-gray-300 hover:border-cyan-500/50 hover:text-white bg-transparent active:scale-[0.98]',
      ghost: 'text-gray-400 hover:text-white hover:bg-white/5',
    };

    const sizes = {
      sm: 'h-9 px-3.5 text-xs',
      md: 'h-10 px-5 text-sm',
      lg: 'h-12 px-7 text-base font-semibold',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';