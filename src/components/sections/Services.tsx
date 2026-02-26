import { motion } from 'framer-motion'
import { ArrowRight, Snowflake, Flame, Wind, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SERVICES } from '@/constants'
import { StaggerContainer, staggerItem } from '@/components/motion/StaggerContainer'
import { FadeIn } from '@/components/motion/FadeIn'
import type { Service } from '@/types'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Snowflake,
  Flame,
  Wind,
  Shield,
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Snowflake

  return (
    <motion.article
      variants={staggerItem}
      className="group relative bg-slate-surface border border-gold/10 p-8 hover:border-gold/30 transition-all duration-500 overflow-hidden"
      aria-label={service.title}
    >
      {/* Hover background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, rgba(197,160,89,0.08) 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 w-12 h-12 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 transition-colors duration-300">
          <Icon size={20} className="text-gold" aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-arctic mb-3 group-hover:text-gradient-gold transition-all duration-300">
          {service.title}
        </h3>

        {/* Short desc */}
        <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Features — slide in on hover */}
        <ul className="space-y-2 mb-6" role="list">
          {service.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2 font-body text-xs text-text-muted">
              <span className="text-gold mt-0.5" aria-hidden="true">—</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 font-body text-xs font-semibold tracking-widest uppercase text-gold hover:gap-3 transition-all duration-200"
          aria-label={`View details about ${service.title}`}
        >
          View Details
          <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  )
}

export function Services() {
  return (
    <section
      id="services"
      className="bg-midnight section-padding"
      aria-labelledby="services-heading"
    >
      <div className="container-luxury">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                What We Do
              </span>
            </div>
            <h2
              id="services-heading"
              className="font-display text-4xl md:text-5xl font-bold text-arctic leading-tight"
            >
              Comprehensive Climate<br />
              <span className="italic text-gradient-gold">Mastery</span>
            </h2>
          </div>
          <p className="font-body text-sm text-text-muted leading-relaxed max-w-sm md:text-right">
            Every system we touch is engineered to perform flawlessly for decades. No shortcuts, no compromises.
          </p>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </StaggerContainer>

        {/* View all */}
        <FadeIn className="flex justify-center mt-12">
          <Link to="/services">
            <motion.span
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 border border-gold/30 text-gold font-body font-medium tracking-widest uppercase text-xs px-10 py-4 hover:bg-gold hover:text-midnight transition-all duration-200 min-h-[48px]"
            >
              View All Services
              <ArrowRight size={14} aria-hidden="true" />
            </motion.span>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
