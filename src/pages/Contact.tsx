import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerContainer, staggerItem } from '@/components/motion/StaggerContainer'
import { PHONE_NUMBER, PHONE_RAW } from '@/constants'

const schema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Please provide a brief message'),
})

type ContactFormData = z.infer<typeof schema>

const SUBJECTS = [
  'General Inquiry',
  'Request a Quote',
  'Schedule Service',
  'Maintenance Plan',
  'Billing Question',
  'Feedback',
  'Other',
]

const hours = [
  { days: 'Monday – Friday', hours: '7:00 AM – 7:00 PM' },
  { days: 'Saturday', hours: '8:00 AM – 5:00 PM' },
  { days: 'Sunday', hours: 'Emergency calls only' },
  { days: '24/7 Emergency Line', hours: 'Always available' },
]

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: PHONE_NUMBER,
    href: `tel:${PHONE_RAW}`,
    note: '24/7 for emergencies',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@cappsac.com',
    href: 'mailto:info@cappsac.com',
    note: 'Response within 2 hours',
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'Ogden Valley & Northern Utah',
    href: null,
    note: 'Including Eden, Huntsville, Ogden & more',
  },
]

function InputField({
  label,
  id,
  error,
  required,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  id: string
  error?: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-body text-xs font-medium tracking-widest uppercase text-text-muted mb-2"
      >
        {label}
        {required && <span className="text-gold ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        className="w-full bg-midnight border border-gold/20 text-text-primary font-body text-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200 placeholder:text-text-muted/40"
        aria-required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 font-body text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (_data: ContactFormData) => {
    setSubmitted(true)
  }

  return (
    <main className="bg-midnight" id="contact" aria-label="Contact Capps Heating & Air Conditioning">

      {/* Hero */}
      <section className="relative section-padding pt-36 pb-16 overflow-hidden">
        <div
          className="absolute right-0 top-0 h-full w-1/3 opacity-[0.035]"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, #C5A059 0, #C5A059 1px, transparent 0, transparent 35px)',
          }}
          aria-hidden="true"
        />
        <div className="container-luxury relative z-10">
          <FadeIn className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                Get in Touch
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-arctic leading-[1.05] mb-6">
              We'd Love to
              <br />
              <span className="italic text-gradient-gold">Hear From You</span>
            </h1>
            <p className="font-body text-lg text-text-muted leading-relaxed">
              Whether you have a question, need a quote, or want to schedule service — our team responds within two hours during business hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact details strip */}
      <section className="bg-slate-surface border-y border-gold/10" aria-label="Contact information">
        <div className="container-luxury section-padding py-0">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/10">
            {contactDetails.map(({ icon: Icon, label, value, href, note }) => (
              <motion.div
                key={label}
                variants={staggerItem}
                className="flex items-start gap-4 py-8 md:px-8 first:md:pl-0 last:md:pr-0"
              >
                <div className="w-10 h-10 border border-gold/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={16} className="text-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="font-body text-base font-medium text-arctic hover:text-gold transition-colors duration-200 block"
                      aria-label={`${label}: ${value}`}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-body text-base font-medium text-arctic">{value}</p>
                  )}
                  <p className="font-body text-xs text-text-muted mt-1">{note}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Main content: form + sidebar */}
      <section className="section-padding" aria-labelledby="contact-form-heading">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">

            {/* Form */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <FadeIn direction="left">
                <div className="bg-slate-surface border border-gold/10 p-8 md:p-10">
                  <h2 id="contact-form-heading" className="font-display text-2xl font-bold text-arctic mb-8">
                    Send Us a Message
                  </h2>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-12"
                      role="alert"
                      aria-live="polite"
                    >
                      <CheckCircle2 size={48} className="text-gold mx-auto mb-5" aria-hidden="true" />
                      <h3 className="font-display text-2xl font-bold text-arctic mb-3">Message Sent</h3>
                      <p className="font-body text-sm text-text-muted max-w-sm mx-auto leading-relaxed mb-8">
                        Thank you for reaching out. A member of our team will get back to you within two hours during business hours.
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/contact">
                          <motion.span
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-gold text-midnight font-body font-bold tracking-widest uppercase text-xs px-7 py-3.5 hover:bg-gold-light transition-colors duration-200 min-h-[44px]"
                          >
                            Get in Touch
                            <ArrowRight size={13} aria-hidden="true" />
                          </motion.span>
                        </Link>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="font-body text-xs text-text-muted hover:text-text-primary transition-colors duration-200 underline"
                        >
                          Send another message
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <InputField
                            label="First Name"
                            id="firstName"
                            type="text"
                            autoComplete="given-name"
                            placeholder="Jane"
                            required
                            error={errors.firstName?.message}
                            {...register('firstName')}
                          />
                          <InputField
                            label="Last Name"
                            id="lastName"
                            type="text"
                            autoComplete="family-name"
                            placeholder="Smith"
                            required
                            error={errors.lastName?.message}
                            {...register('lastName')}
                          />
                        </div>

                        <InputField
                          label="Email Address"
                          id="email"
                          type="email"
                          autoComplete="email"
                          placeholder="jane@example.com"
                          required
                          error={errors.email?.message}
                          {...register('email')}
                        />

                        <InputField
                          label="Phone Number"
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="(555) 000-0000"
                          error={errors.phone?.message}
                          {...register('phone')}
                        />

                        <div>
                          <label
                            htmlFor="subject"
                            className="block font-body text-xs font-medium tracking-widest uppercase text-text-muted mb-2"
                          >
                            Subject <span className="text-gold" aria-hidden="true">*</span>
                          </label>
                          <select
                            id="subject"
                            className="w-full bg-midnight border border-gold/20 text-text-primary font-body text-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200 appearance-none"
                            aria-required="true"
                            aria-describedby={errors.subject ? 'subject-error' : undefined}
                            aria-invalid={!!errors.subject}
                            {...register('subject')}
                          >
                            <option value="">Select a subject...</option>
                            {SUBJECTS.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          {errors.subject && (
                            <p id="subject-error" className="mt-1.5 font-body text-xs text-red-400" role="alert">
                              {errors.subject.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block font-body text-xs font-medium tracking-widest uppercase text-text-muted mb-2"
                          >
                            Message <span className="text-gold" aria-hidden="true">*</span>
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            placeholder="How can we help you?"
                            className="w-full bg-midnight border border-gold/20 text-text-primary font-body text-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200 placeholder:text-text-muted/40 resize-none"
                            aria-required="true"
                            aria-describedby={errors.message ? 'message-error' : undefined}
                            aria-invalid={!!errors.message}
                            {...register('message')}
                          />
                          {errors.message && (
                            <p id="message-error" className="mt-1.5 font-body text-xs text-red-400" role="alert">
                              {errors.message.message}
                            </p>
                          )}
                        </div>

                        <motion.button
                          type="submit"
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-3 bg-gold text-midnight font-body font-bold tracking-widest uppercase text-xs px-8 py-4 hover:bg-gold-light transition-colors duration-200 min-h-[48px] group"
                        >
                          Send Message
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                        </motion.button>

                        <p className="font-body text-xs text-text-muted">
                          We'll respond within 2 hours during business hours. For urgent issues,{' '}
                          <a href={`tel:${PHONE_RAW}`} className="text-gold hover:text-gold-light transition-colors duration-200" aria-label={`Call us at ${PHONE_NUMBER}`}>
                            call us directly
                          </a>.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <FadeIn direction="right">
                {/* Hours */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock size={16} className="text-gold" aria-hidden="true" />
                    <h2 className="font-body text-xs font-semibold tracking-widest uppercase text-gold">
                      Hours of Operation
                    </h2>
                  </div>
                  <ul className="space-y-4" role="list">
                    {hours.map(({ days, hours: h }) => (
                      <li
                        key={days}
                        className="flex justify-between items-start gap-4 border-b border-gold/10 pb-4 last:border-0 last:pb-0"
                      >
                        <span className="font-body text-sm text-text-muted">{days}</span>
                        <span className={`font-body text-sm font-medium text-right ${days === '24/7 Emergency Line' ? 'text-red-400' : 'text-arctic'}`}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Emergency CTA */}
                <div className="bg-red-950/30 border border-red-500/20 p-6 mb-10">
                  <p className="font-body text-xs font-semibold tracking-widest uppercase text-red-400 mb-3">
                    HVAC Emergency?
                  </p>
                  <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
                    Don't wait for a callback. Our live dispatch team answers immediately, around the clock.
                  </p>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="inline-flex items-center gap-2 font-display text-xl font-bold text-arctic hover:text-gold transition-colors duration-200"
                    aria-label={`Call emergency service at ${PHONE_NUMBER}`}
                  >
                    <Phone size={18} aria-hidden="true" />
                    {PHONE_NUMBER}
                  </a>
                  <p className="font-body text-xs text-text-muted mt-2">
                    Avg. response time: 45 minutes
                  </p>
                </div>

                {/* Quick links */}
                <div>
                  <h2 className="font-body text-xs font-semibold tracking-widest uppercase text-gold mb-5">
                    Shortcuts
                  </h2>
                  <div className="space-y-2">
                    {[
                      { label: 'View Our Services', to: '/services' },
                      { label: 'View Emergency Services', to: '/emergency' },
                      { label: 'Explore Our Services', to: '/services' },
                      { label: 'Read Client Reviews', to: '/reviews' },
                    ].map(({ label, to }) => (
                      <Link
                        key={to}
                        to={to}
                        className="flex items-center justify-between group border border-gold/10 hover:border-gold/30 px-4 py-3.5 transition-colors duration-200"
                        aria-label={label}
                      >
                        <span className="font-body text-sm text-text-muted group-hover:text-text-primary transition-colors duration-200">
                          {label}
                        </span>
                        <ArrowRight
                          size={13}
                          className="text-text-muted group-hover:text-gold group-hover:translate-x-1 transition-all duration-200"
                          aria-hidden="true"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Service area map placeholder */}
      <section className="bg-slate-surface border-t border-gold/10 section-padding" aria-labelledby="service-area-heading">
        <div className="container-luxury">
          <FadeIn className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                Where We Serve
              </span>
            </div>
            <h2 id="service-area-heading" className="font-display text-4xl font-bold text-arctic">
              Our Service Area
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Area list */}
            <div className="lg:col-span-1">
              <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
                We proudly serve the Ogden Valley and surrounding Northern Utah communities. Not sure if we cover your area? Call us — we'll let you know right away.
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2" role="list">
                {[
                  'Eden', 'Huntsville', 'Liberty', 'Powder Mountain',
                  'Ogden', 'North Ogden', 'South Ogden', 'Pleasant View',
                  'Roy', 'Clearfield', 'Layton', 'Kaysville',
                  'Morgan', 'Mountain Green', 'Brigham City', 'Bountiful',
                ].map((area) => (
                  <li key={area} className="flex items-center gap-2 font-body text-xs text-text-muted">
                    <span className="text-gold" aria-hidden="true">—</span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Map placeholder */}
            <div
              className="lg:col-span-2 relative h-72 lg:h-96 bg-midnight border border-gold/10 overflow-hidden"
              role="img"
              aria-label="Service area map — Ogden Valley and Northern Utah"
            >
              {/* Decorative map stand-in */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={36} className="text-gold/30 mx-auto mb-3" aria-hidden="true" />
                  <p className="font-body text-xs text-text-muted tracking-widest uppercase">
                    Northern Utah Service Area
                  </p>
                  <p className="font-body text-xs text-text-muted mt-1 opacity-60">
                    Interactive map coming soon
                  </p>
                </div>
              </div>
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, #C5A059 0, #C5A059 1px, transparent 0, transparent 40px), repeating-linear-gradient(90deg, #C5A059 0, #C5A059 1px, transparent 0, transparent 40px)',
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
