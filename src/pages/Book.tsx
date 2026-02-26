import { FadeIn } from '@/components/motion/FadeIn'
import { BookingForm } from '@/components/sections/BookingForm'
import { Phone, Shield, Clock, Star } from 'lucide-react'
import { PHONE_NUMBER, PHONE_RAW } from '@/constants'

const guarantees = [
  { icon: Clock, text: 'Same-day appointments available' },
  { icon: Shield, text: '10-year workmanship warranty' },
  { icon: Star, text: 'Certified NATE technicians' },
]

export function Book() {
  return (
    <main className="bg-midnight min-h-screen pt-32 pb-24">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Left sidebar */}
          <div className="lg:col-span-2">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-gold" aria-hidden="true" />
                <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                  Concierge Booking
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-arctic leading-tight mb-6">
                Book Your<br />
                <span className="italic text-gradient-gold">Service Visit</span>
              </h1>
              <p className="font-body text-sm text-text-muted leading-relaxed mb-10">
                Complete the form and a senior comfort advisor will reach out within 30 minutes to confirm your appointment and answer any questions.
              </p>

              {/* Guarantees */}
              <ul className="space-y-5 mb-10" role="list">
                {guarantees.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-gold" aria-hidden="true" />
                    </div>
                    <span className="font-body text-sm text-text-muted">{text}</span>
                  </li>
                ))}
              </ul>

              {/* Emergency call */}
              <div className="bg-red-950/30 border border-red-500/20 p-5">
                <p className="font-body text-xs font-semibold tracking-widest uppercase text-red-400 mb-2">
                  Need emergency service?
                </p>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="inline-flex items-center gap-2 font-display text-lg font-bold text-arctic hover:text-gold transition-colors duration-200"
                  aria-label={`Call emergency service at ${PHONE_NUMBER}`}
                >
                  <Phone size={16} aria-hidden="true" />
                  {PHONE_NUMBER}
                </a>
                <p className="font-body text-xs text-text-muted mt-1">
                  24/7 live dispatch · Average response 45 min
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <FadeIn direction="right">
              <div className="bg-slate-surface border border-gold/10 p-8 md:p-10">
                <BookingForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  )
}
