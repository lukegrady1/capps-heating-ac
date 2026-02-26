import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle2, Phone } from 'lucide-react'
import { SERVICE_TYPES, TIME_SLOTS, PHONE_NUMBER, PHONE_RAW } from '@/constants'
import type { BookingFormData } from '@/types'

const schema = z.object({
  serviceType: z.string().min(1, 'Please select a service'),
  urgency: z.string().min(1, 'Please select urgency'),
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Service address is required'),
  city: z.string().min(2, 'City is required'),
  preferredDate: z.string().min(1, 'Please select a date'),
  preferredTime: z.string().min(1, 'Please select a time'),
  notes: z.string().optional(),
})

const STEPS = [
  { id: 1, label: 'Service', title: 'What do you need?' },
  { id: 2, label: 'Contact', title: 'Your information' },
  { id: 3, label: 'Schedule', title: 'Preferred timing' },
  { id: 4, label: 'Review', title: 'Confirm details' },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 60 : -60,
    opacity: 0,
  }),
}

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
        {label}{required && <span className="text-gold ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        className="w-full bg-midnight border border-gold/20 text-text-primary font-body text-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200 placeholder:text-text-muted/50"
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

function SelectField({
  label,
  id,
  error,
  required,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  id: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-body text-xs font-medium tracking-widest uppercase text-text-muted mb-2"
      >
        {label}{required && <span className="text-gold ml-1" aria-hidden="true">*</span>}
      </label>
      <select
        id={id}
        className="w-full bg-midnight border border-gold/20 text-text-primary font-body text-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200 appearance-none"
        aria-required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 font-body text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export function BookingForm() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  })

  const goNext = async () => {
    let fieldsToValidate: (keyof BookingFormData)[] = []
    if (step === 1) fieldsToValidate = ['serviceType', 'urgency']
    if (step === 2) fieldsToValidate = ['firstName', 'lastName', 'email', 'phone', 'address', 'city']
    if (step === 3) fieldsToValidate = ['preferredDate', 'preferredTime']

    const valid = await trigger(fieldsToValidate)
    if (valid) {
      setDirection(1)
      setStep((s) => s + 1)
    }
  }

  const goPrev = () => {
    setDirection(-1)
    setStep((s) => s - 1)
  }

  const onSubmit = (_data: BookingFormData) => {
    setSubmitted(true)
  }

  const values = getValues()

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
        role="alert"
        aria-live="polite"
      >
        <CheckCircle2 size={52} className="text-gold mx-auto mb-6" aria-hidden="true" />
        <h3 className="font-display text-3xl font-bold text-arctic mb-3">Request Received</h3>
        <p className="font-body text-sm text-text-muted max-w-sm mx-auto leading-relaxed mb-8">
          Thank you, {values.firstName}. A Capps comfort advisor will contact you within 30 minutes to confirm your appointment.
        </p>
        <a
          href={`tel:${PHONE_RAW}`}
          className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold-light transition-colors duration-200"
          aria-label={`Call us directly at ${PHONE_NUMBER}`}
        >
          <Phone size={14} aria-hidden="true" />
          Or call us directly: {PHONE_NUMBER}
        </a>
      </motion.div>
    )
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center mb-10" role="list" aria-label="Form steps">
        {STEPS.map((s, i) => (
          <div key={s.id} className="flex items-center flex-1 last:flex-none" role="listitem">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center border font-body text-xs font-bold transition-all duration-300 ${
                  s.id < step
                    ? 'bg-gold border-gold text-midnight'
                    : s.id === step
                    ? 'border-gold text-gold'
                    : 'border-gold/20 text-text-muted'
                }`}
                aria-current={s.id === step ? 'step' : undefined}
                aria-label={`Step ${s.id}: ${s.label}${s.id < step ? ' (completed)' : s.id === step ? ' (current)' : ''}`}
              >
                {s.id < step ? '✓' : s.id}
              </div>
              <span className="font-body text-[10px] tracking-wider uppercase text-text-muted mt-1.5 hidden sm:block">
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 h-px mx-3 transition-colors duration-300 ${
                  s.id < step ? 'bg-gold' : 'bg-gold/15'
                }`}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>

      {/* Step title */}
      <div className="mb-8">
        <p className="font-body text-xs text-gold tracking-widest uppercase mb-1">
          Step {step} of {STEPS.length}
        </p>
        <h3 className="font-display text-2xl font-bold text-arctic">
          {STEPS[step - 1].title}
        </h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Step 1: Service */}
              {step === 1 && (
                <div className="space-y-5">
                  <SelectField
                    label="Service Type"
                    id="serviceType"
                    required
                    error={errors.serviceType?.message}
                    {...register('serviceType')}
                  >
                    <option value="">Select a service...</option>
                    {SERVICE_TYPES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </SelectField>
                  <SelectField
                    label="Urgency"
                    id="urgency"
                    required
                    error={errors.urgency?.message}
                    {...register('urgency')}
                  >
                    <option value="">How soon do you need service?</option>
                    <option value="emergency">Emergency — Today</option>
                    <option value="urgent">Urgent — Within 24 hours</option>
                    <option value="soon">Soon — Within a week</option>
                    <option value="scheduled">Scheduled — I have a date in mind</option>
                    <option value="planning">Planning — Just getting a quote</option>
                  </SelectField>
                </div>
              )}

              {/* Step 2: Contact */}
              {step === 2 && (
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <InputField
                      label="First Name"
                      id="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      error={errors.firstName?.message}
                      {...register('firstName')}
                    />
                    <InputField
                      label="Last Name"
                      id="lastName"
                      type="text"
                      autoComplete="family-name"
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
                    required
                    error={errors.email?.message}
                    {...register('email')}
                  />
                  <InputField
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    error={errors.phone?.message}
                    {...register('phone')}
                  />
                  <InputField
                    label="Service Address"
                    id="address"
                    type="text"
                    autoComplete="street-address"
                    required
                    error={errors.address?.message}
                    {...register('address')}
                  />
                  <InputField
                    label="City"
                    id="city"
                    type="text"
                    autoComplete="address-level2"
                    required
                    error={errors.city?.message}
                    {...register('city')}
                  />
                </div>
              )}

              {/* Step 3: Schedule */}
              {step === 3 && (
                <div className="space-y-5">
                  <InputField
                    label="Preferred Date"
                    id="preferredDate"
                    type="date"
                    required
                    error={errors.preferredDate?.message}
                    min={new Date().toISOString().split('T')[0]}
                    {...register('preferredDate')}
                  />
                  <SelectField
                    label="Preferred Time Window"
                    id="preferredTime"
                    required
                    error={errors.preferredTime?.message}
                    {...register('preferredTime')}
                  >
                    <option value="">Select a time window...</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </SelectField>
                  <div>
                    <label
                      htmlFor="notes"
                      className="block font-body text-xs font-medium tracking-widest uppercase text-text-muted mb-2"
                    >
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      placeholder="Describe the issue, model numbers, or any other details..."
                      className="w-full bg-midnight border border-gold/20 text-text-primary font-body text-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200 placeholder:text-text-muted/50 resize-none"
                      {...register('notes')}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {step === 4 && (
                <div className="space-y-4">
                  {[
                    { label: 'Service', value: values.serviceType },
                    { label: 'Urgency', value: values.urgency },
                    { label: 'Name', value: `${values.firstName} ${values.lastName}` },
                    { label: 'Email', value: values.email },
                    { label: 'Phone', value: values.phone },
                    { label: 'Address', value: `${values.address}, ${values.city}` },
                    { label: 'Date', value: values.preferredDate },
                    { label: 'Time', value: values.preferredTime },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-start border-b border-gold/10 pb-3">
                      <span className="font-body text-xs tracking-widest uppercase text-text-muted">
                        {label}
                      </span>
                      <span className="font-body text-sm text-text-primary text-right max-w-[60%]">
                        {value}
                      </span>
                    </div>
                  ))}
                  <p className="font-body text-xs text-text-muted leading-relaxed pt-2">
                    By submitting, you agree to be contacted by Capps Heating & Air Conditioning regarding your service request.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gold/10">
          {step > 1 ? (
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex items-center gap-2 font-body text-xs font-medium tracking-widest uppercase text-text-muted hover:text-text-primary transition-colors duration-200 min-h-[48px]"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Back
            </button>
          ) : (
            <div />
          )}

          {step < STEPS.length ? (
            <motion.button
              type="button"
              onClick={goNext}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gold text-midnight font-body font-bold tracking-widest uppercase text-xs px-8 py-4 hover:bg-gold-light transition-colors duration-200 min-h-[48px]"
            >
              Continue
              <ArrowRight size={14} aria-hidden="true" />
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gold text-midnight font-body font-bold tracking-widest uppercase text-xs px-8 py-4 hover:bg-gold-light transition-colors duration-200 min-h-[48px]"
            >
              Confirm Booking
              <CheckCircle2 size={14} aria-hidden="true" />
            </motion.button>
          )}
        </div>
      </form>
    </div>
  )
}
