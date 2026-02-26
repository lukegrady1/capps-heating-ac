import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FadeIn } from '@/components/motion/FadeIn'
import { PHONE_NUMBER, PHONE_RAW } from '@/constants'

export function CTA() {
  return (
    <section
      className="relative bg-midnight section-padding overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #C5A059 0, #C5A059 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, #C5A059 0, #C5A059 1px, transparent 0, transparent 60px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #C5A059 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-luxury relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                Ready to Begin
              </span>
              <div className="h-px w-8 bg-gold" aria-hidden="true" />
            </div>
            <h2
              id="cta-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-arctic leading-tight mb-6"
            >
              Experience Climate<br />
              Control at its{' '}
              <span className="italic text-gradient-gold">Finest</span>
            </h2>
            <p className="font-body text-base text-text-muted leading-relaxed mb-10 max-w-xl mx-auto">
              Schedule your complimentary consultation today. One of our senior comfort advisors will assess your home and design a bespoke climate solution.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <motion.span
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gold text-midnight font-body font-bold tracking-widest uppercase text-sm px-10 py-5 hover:bg-gold-light transition-colors duration-200 min-h-[56px] group"
                >
                  Contact Us
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </motion.span>
              </Link>
              <a href={`tel:${PHONE_RAW}`} aria-label={`Call us at ${PHONE_NUMBER}`}>
                <motion.span
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 border border-gold/40 text-text-primary font-body font-medium tracking-wider uppercase text-sm px-10 py-5 hover:border-gold hover:text-gold transition-all duration-200 min-h-[56px]"
                >
                  <Phone size={15} aria-hidden="true" />
                  {PHONE_NUMBER}
                </motion.span>
              </a>
            </div>

            <p className="font-body text-xs text-text-muted mt-6">
              No obligation · Same-day appointments available · Licensed & insured
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
