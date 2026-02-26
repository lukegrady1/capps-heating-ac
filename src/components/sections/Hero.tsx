import { motion } from 'framer-motion'
import { ArrowRight, Phone, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PHONE_NUMBER, PHONE_RAW } from '@/constants'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero — Defining the Gold Standard in Home Climate"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-midnight">
        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #C5A059 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #C5A059 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Diagonal accent line */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #C5A059 0, #C5A059 1px, transparent 0, transparent 50%)',
            backgroundSize: '30px 30px',
          }}
          aria-hidden="true"
        />

        {/* Right image panel */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-[55%]">
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/70 to-transparent z-10" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&auto=format&fit=crop&q=80")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            role="img"
            aria-label="Pristine HVAC mechanical installation"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury section-padding pt-32 pb-24 md:pt-40 md:pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
              Est. 1998 · Houston, Texas
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-arctic mb-6"
          >
            Defining the
            <br />
            <span className="text-gradient-gold italic">Gold Standard</span>
            <br />
            in Home Climate.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg text-text-muted leading-relaxed mb-10 max-w-md"
          >
            White-glove HVAC installation, service, and maintenance for homeowners who refuse to compromise on comfort or quality.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link to="/book">
              <motion.span
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gold text-midnight font-body font-bold tracking-widest uppercase text-sm px-8 py-4 hover:bg-gold-light transition-colors duration-200 min-h-[52px] group"
              >
                Book a Consultation
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </motion.span>
            </Link>
            <a
              href={`tel:${PHONE_RAW}`}
              aria-label={`Call us at ${PHONE_NUMBER}`}
            >
              <motion.span
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 border border-gold/40 text-text-primary font-body font-medium tracking-wider uppercase text-sm px-8 py-4 hover:border-gold hover:text-gold transition-all duration-200 min-h-[52px]"
              >
                <Phone size={15} aria-hidden="true" />
                {PHONE_NUMBER}
              </motion.span>
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mt-12 pt-10 border-t border-white/5"
          >
            <div className="flex -space-x-2" aria-hidden="true">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-midnight bg-slate-surface flex items-center justify-center"
                >
                  <span className="font-body text-xs font-bold text-gold">
                    {['M', 'R', 'J', 'S'][i - 1]}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5" aria-label="4.9 out of 5 stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={12}
                    className="text-gold fill-gold"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="font-body text-xs text-text-muted">
                <strong className="text-text-primary">4.9</strong> from 300+ verified reviews
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-body text-[10px] tracking-widest uppercase text-text-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
