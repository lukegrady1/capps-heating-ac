import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Snowflake, Flame, Wind, Shield, CheckCircle2 } from 'lucide-react'
import { SERVICES } from '@/constants'
import { FadeIn } from '@/components/motion/FadeIn'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Snowflake,
  Flame,
  Wind,
  Shield,
}

export function ServicesPage() {
  const { slug } = useParams<{ slug?: string }>()
  const [activeService, setActiveService] = useState(
    slug ? SERVICES.find((s) => s.slug === slug) ?? SERVICES[0] : SERVICES[0]
  )

  const Icon = iconMap[activeService.icon] ?? Snowflake

  return (
    <main className="bg-midnight min-h-screen pt-28" aria-label="Services">
      {/* Header */}
      <section className="section-padding pb-0">
        <div className="container-luxury">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                Our Services
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-arctic leading-tight mb-6">
              Expert Climate<br />
              <span className="italic text-gradient-gold">Solutions</span>
            </h1>
            <p className="font-body text-sm text-text-muted leading-relaxed max-w-lg mb-12">
              From single-room comfort to whole-home climate mastery, our certified technicians deliver solutions engineered to last decades.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sticky sidebar layout */}
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar nav */}
          <aside className="lg:col-span-1" aria-label="Service navigation">
            <nav className="lg:sticky lg:top-28">
              <ul className="space-y-1" role="list">
                {SERVICES.map((service) => {
                  const SideIcon = iconMap[service.icon] ?? Snowflake
                  return (
                    <li key={service.id}>
                      <button
                        onClick={() => setActiveService(service)}
                        className={cn(
                          'w-full flex items-center gap-3 px-4 py-3.5 text-left transition-all duration-200 border-l-2',
                          activeService.id === service.id
                            ? 'border-gold bg-slate-surface text-gold'
                            : 'border-transparent text-text-muted hover:text-text-primary hover:bg-slate-surface/50'
                        )}
                        aria-current={activeService.id === service.id ? 'page' : undefined}
                        aria-label={`View ${service.title}`}
                      >
                        <SideIcon size={14} aria-hidden="true" />
                        <span className="font-body text-sm font-medium">{service.title}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-8 bg-red-950/30 border border-red-500/20 p-5">
                <p className="font-body text-xs font-semibold tracking-widest uppercase text-red-400 mb-3">
                  Emergency Service
                </p>
                <Link
                  to="/emergency"
                  className="inline-flex items-center gap-2 font-body text-sm text-arctic hover:text-gold transition-colors duration-200"
                  aria-label="View emergency service page"
                >
                  Get help now
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            </nav>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-3">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Service header */}
              <div className="flex items-start gap-5 mb-10 pb-10 border-b border-gold/10">
                <div className="w-14 h-14 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-gold" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-display text-4xl font-bold text-arctic mb-3">
                    {activeService.title}
                  </h2>
                  <p className="font-body text-base text-text-muted leading-relaxed">
                    {activeService.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <section aria-labelledby={`${activeService.id}-features`}>
                <h3 id={`${activeService.id}-features`} className="font-body text-xs font-semibold tracking-widest uppercase text-gold mb-6">
                  What's Included
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12" role="list">
                  {activeService.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 bg-slate-surface border border-gold/10 p-4">
                      <CheckCircle2 size={15} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-body text-sm text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book">
                  <motion.span
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-gold text-midnight font-body font-bold tracking-widest uppercase text-xs px-8 py-4 hover:bg-gold-light transition-colors duration-200 min-h-[48px] group"
                  >
                    Schedule Service
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                  </motion.span>
                </Link>
                <Link to="/emergency">
                  <motion.span
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 border border-gold/30 text-gold font-body font-medium tracking-widest uppercase text-xs px-8 py-4 hover:bg-gold/5 transition-all duration-200 min-h-[48px]"
                  >
                    Emergency Service
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </main>
  )
}
