import { CheckCircle2 } from 'lucide-react'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerContainer, staggerItem } from '@/components/motion/StaggerContainer'
import { motion } from 'framer-motion'

const differentiators = [
  {
    title: 'White-Glove Technicians',
    description:
      'Every technician arrives in uniform, with shoe covers, and treats your home with the same care as their own.',
  },
  {
    title: 'Same-Day Service',
    description:
      'Our dispatch team maintains real-time availability so we can have a technician at your door within hours.',
  },
  {
    title: 'Transparent Pricing',
    description:
      'Upfront quotes with zero hidden fees. You approve every cost before we turn a single wrench.',
  },
  {
    title: '10-Year Workmanship Warranty',
    description:
      'We stand behind our installations with a decade-long labor warranty—unprecedented in the industry.',
  },
  {
    title: 'Premium Equipment Only',
    description:
      'We install Trane, Carrier, and Lennox systems—the gold standard in HVAC—and never recommend anything less.',
  },
  {
    title: '24/7 Emergency Response',
    description:
      'A live team member answers every call, around the clock, 365 days a year. No answering machines.',
  },
]

export function CappsDifference() {
  return (
    <section
      id="about"
      className="bg-slate-surface section-padding"
      aria-labelledby="difference-heading"
    >
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: image/visual */}
          <FadeIn direction="left" className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Main image placeholder */}
              <div
                className="absolute inset-0 bg-midnight"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                role="img"
                aria-label="Capps technician in a pristine uniform performing a system inspection"
              />
              {/* Overlay frame */}
              <div className="absolute inset-0 border border-gold/20" aria-hidden="true" />
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/30"
                aria-hidden="true"
              />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 20 }}
                className="absolute -right-6 top-1/4 glass p-5 min-w-[140px]"
              >
                <p className="font-display text-3xl font-bold text-gold">25+</p>
                <p className="font-body text-xs text-text-muted tracking-wide mt-1">
                  Years of Excellence
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
                className="absolute -left-6 bottom-1/4 glass p-5 min-w-[140px]"
              >
                <p className="font-display text-3xl font-bold text-gold">4.9★</p>
                <p className="font-body text-xs text-text-muted tracking-wide mt-1">
                  Google Rating
                </p>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold" aria-hidden="true" />
                <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                  The Capps Difference
                </span>
              </div>
              <h2
                id="difference-heading"
                className="font-display text-4xl md:text-5xl font-bold text-arctic leading-tight mb-6"
              >
                Why Discerning<br />
                Homeowners<br />
                <span className="italic text-gradient-gold">Choose Capps</span>
              </h2>
              <p className="font-body text-sm text-text-muted leading-relaxed mb-10">
                In an industry notorious for unreliable service and surprise bills, we have built our reputation on an unwavering commitment to excellence, transparency, and respect for your home.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {differentiators.map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="flex gap-3"
                >
                  <CheckCircle2
                    size={16}
                    className="text-gold flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-body text-sm font-semibold text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
