import { motion } from 'framer-motion'
import { Phone, Clock, Shield, Zap } from 'lucide-react'
import { PHONE_NUMBER, PHONE_RAW } from '@/constants'
import { FadeIn } from '@/components/motion/FadeIn'

export function Emergency() {
  return (
    <main className="bg-midnight min-h-screen" aria-labelledby="emergency-heading">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
        {/* Red glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          {/* Status indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2.5 h-2.5 rounded-full bg-green-400"
              aria-hidden="true"
            />
            <span className="font-body text-xs font-semibold tracking-widest uppercase text-green-400">
              Dispatch Active · Technicians Available
            </span>
          </div>

          <h1
            id="emergency-heading"
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-arctic leading-[1.0] mb-6"
          >
            HVAC
            <br />
            <span className="text-red-400">Emergency?</span>
            <br />
            We're Ready.
          </h1>

          <p className="font-body text-base text-text-muted leading-relaxed mb-10 max-w-md mx-auto">
            Our emergency dispatch team is standing by 24 hours a day, 7 days a week, 365 days a year. No answering machines. No callbacks. Just immediate help.
          </p>

          {/* BIG TAP-TO-CALL */}
          <motion.a
            href={`tel:${PHONE_RAW}`}
            whileTap={{ scale: 0.96 }}
            className="inline-flex flex-col items-center gap-2 bg-red-600 text-white px-12 py-7 mb-4 w-full sm:w-auto hover:bg-red-500 transition-colors duration-200 animate-pulse-gold"
            aria-label={`Call emergency service now at ${PHONE_NUMBER}`}
          >
            <span className="font-body text-xs font-bold tracking-widest uppercase opacity-80">
              Tap to Call Now
            </span>
            <span className="font-display text-3xl sm:text-4xl font-bold flex items-center gap-3">
              <Phone size={28} aria-hidden="true" />
              {PHONE_NUMBER}
            </span>
            <span className="font-body text-xs opacity-70">
              Average response time: 45 minutes
            </span>
          </motion.a>

          <p className="font-body text-xs text-text-muted">
            All areas served · No overtime fees · Licensed & insured
          </p>
        </motion.div>
      </section>

      {/* Info section */}
      <section className="bg-slate-surface border-t border-red-500/10 py-16 px-6" aria-label="Emergency service details">
        <div className="container-luxury">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-arctic text-center mb-12">
              What to Expect
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: Phone,
                title: 'Live Answer',
                desc: 'A real person answers every call—no automated menus, no waiting.',
              },
              {
                icon: Clock,
                title: '45-Min Response',
                desc: 'Our technician arrives at your door within 45 minutes on average.',
              },
              {
                icon: Shield,
                title: 'No Surprise Fees',
                desc: 'Transparent emergency pricing. You approve costs before any work begins.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <FadeIn key={title}>
                <div className="text-center">
                  <div className="w-12 h-12 border border-red-500/30 flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-red-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-body text-sm font-semibold text-text-primary mb-2">{title}</h3>
                  <p className="font-body text-xs text-text-muted leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Common emergencies */}
      <section className="bg-midnight py-16 px-6" aria-labelledby="emergencies-heading">
        <div className="container-luxury">
          <FadeIn>
            <h2 id="emergencies-heading" className="font-display text-3xl font-bold text-arctic text-center mb-10">
              Common HVAC Emergencies We Handle
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              'No Cooling',
              'No Heat',
              'Strange Noises',
              'Water Leaks',
              'Electrical Issues',
              'Carbon Monoxide',
            ].map((item) => (
              <FadeIn key={item}>
                <div className="bg-slate-surface border border-gold/10 p-4 text-center">
                  <Zap size={16} className="text-gold mx-auto mb-2" aria-hidden="true" />
                  <p className="font-body text-xs font-medium text-text-primary">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom fixed call bar — mobile */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-red-600 border-t border-red-500/30 safe-bottom"
        role="complementary"
        aria-label="Emergency call button"
      >
        <a
          href={`tel:${PHONE_RAW}`}
          className="flex items-center justify-center gap-3 py-4 font-body font-bold text-white tracking-widest uppercase text-sm min-h-[60px]"
          aria-label={`Call emergency service at ${PHONE_NUMBER}`}
        >
          <Phone size={16} aria-hidden="true" />
          Call Now: {PHONE_NUMBER}
        </a>
      </div>
    </main>
  )
}
