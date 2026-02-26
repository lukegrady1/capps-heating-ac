import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/constants'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerContainer, staggerItem } from '@/components/motion/StaggerContainer'

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-midnight section-padding"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-luxury">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
              Client Stories
            </span>
            <div className="h-px w-8 bg-gold" aria-hidden="true" />
          </div>
          <h2
            id="testimonials-heading"
            className="font-display text-4xl md:text-5xl font-bold text-arctic leading-tight"
          >
            What Our Clients Say
          </h2>
          <p className="font-body text-sm text-text-muted mt-4 max-w-md mx-auto">
            Hundreds of homeowners trust Capps with their most important comfort systems.
          </p>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              variants={staggerItem}
              className="relative bg-slate-surface border border-gold/10 p-7 hover:border-gold/25 transition-all duration-500 group"
              aria-label={`Testimonial from ${testimonial.name}`}
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className="text-gold/20 group-hover:text-gold/40 transition-colors duration-300 mb-5"
                aria-hidden="true"
              />

              {/* Stars */}
              <div
                className="flex gap-0.5 mb-4"
                aria-label={`${testimonial.rating} out of 5 stars`}
                role="img"
              >
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" aria-hidden="true" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="font-body text-sm text-text-muted leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <footer className="border-t border-gold/10 pt-5">
                <cite className="not-italic">
                  <p className="font-body text-sm font-semibold text-text-primary not-italic">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-text-muted mt-0.5">
                    {testimonial.location} · {testimonial.service}
                  </p>
                </cite>
              </footer>
            </motion.article>
          ))}
        </StaggerContainer>

        {/* Google rating summary */}
        <FadeIn className="flex items-center justify-center gap-6 mt-14 pt-10 border-t border-gold/10">
          <div className="text-center">
            <p className="font-display text-4xl font-bold text-gold">4.9</p>
            <div
              className="flex gap-0.5 justify-center mt-1"
              aria-label="4.9 out of 5 stars on Google"
              role="img"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={12} className="text-gold fill-gold" aria-hidden="true" />
              ))}
            </div>
          </div>
          <div className="h-12 w-px bg-gold/20" aria-hidden="true" />
          <div>
            <p className="font-body text-sm text-text-primary font-medium">300+ Reviews</p>
            <p className="font-body text-xs text-text-muted mt-0.5">on Google · BBB · Yelp</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
