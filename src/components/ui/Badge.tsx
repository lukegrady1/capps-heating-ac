import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'gold' | 'subtle' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'subtle', className }: BadgeProps) {
  const variants = {
    gold: 'bg-gold text-midnight',
    subtle: 'bg-slate-surface text-text-muted border border-gold/20',
    outline: 'border border-gold text-gold bg-transparent',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
