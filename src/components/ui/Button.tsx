import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'ghost' | 'emergency'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

export function Button({
  variant = 'gold',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    'relative inline-flex items-center justify-center font-body font-semibold tracking-wider uppercase text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-midnight disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]'

  const variants = {
    gold: 'bg-gold text-midnight hover:bg-gold-light',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-midnight',
    ghost: 'text-text-muted hover:text-gold',
    emergency:
      'bg-red-600 text-white hover:bg-red-500 animate-pulse-gold shadow-lg shadow-red-600/30',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-base',
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...(props as object)}
    >
      {children}
    </motion.button>
  )
}
