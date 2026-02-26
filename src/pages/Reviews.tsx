import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ExternalLink, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TESTIMONIALS } from '@/constants'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerContainer, staggerItem } from '@/components/motion/StaggerContainer'

const SERVICE_FILTERS = [
  'All',
  'AC Installation',
  'AC Repair',
  'Emergency Repair',
  'Heating Repair',
  'Indoor Air Quality',
  'Maintenance Plan',
  'System Replacement',
]

const ratingPlatforms = [
  { name: 'Google', rating: '4.9', count: '300+', color: '#4285F4' },
  { name: 'BBB', rating: 'A+', count: 'Accredited', color: '#C5A059' },
  { name: 'Yelp', rating: '4.8', count: '180+', color: '#E04B3A' },
  { name: 'Angi', rating: '4.9', count: '95+', color: '#FF6153' },
]

export function Reviews() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.service === activeFilter)

  return (
    <main className="bg-midnight" aria-label="Client reviews">

      {/* Hero */}
      <section className="relative section-padding pt-36 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, #C5A059 0, #C5A059 1px, transparent 0, transparent 80px), repeating-linear-gradient(90deg, #C5A059 0, #C5A059 1px, transparent 0, transparent 80px)',
          }}
          aria-hidden="true"
        />
        <div className="container-luxury relative z-10">
          <FadeIn className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                Client Stories
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-arctic leading-[1.05] mb-6">
              What Our Clients<br />
              <span className="italic text-gradient-gold">Are Saying</span>
            </h1>
            <p className="font-body text-lg text-text-muted leading-relaxed max-w-xl">
              Over 300 verified five-star reviews across Google, BBB, and Yelp. Every one earned through consistent, white-glove service.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Platform ratings */}
      <section className="bg-slate-surface border-y border-gold/10 section-padding py-10" aria-labelledby="ratings-heading">
        <div className="container-luxury">
          <h2 id="ratings-heading" className="sr-only">Ratings across platforms</h2>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ratingPlatforms.map((p) => (
              <motion.div
                key={p.name}
                variants={staggerItem}
                className="bg-midnight border border-gold/10 p-6 text-center hover:border-gold/25 transition-colors duration-300"
              >
                <p className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">
                  {p.name}
                </p>
                <p className="font-display text-4xl font-bold text-gold mb-1">{p.rating}</p>
                <div className="flex gap-0.5 justify-center mb-2" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={10} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="font-body text-xs text-text-muted">{p.count} reviews</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Filters + reviews */}
      <section className="section-padding" aria-labelledby="reviews-list-heading">
        <div className="container-luxury">
          {/* Filter tabs */}
          <FadeIn className="mb-10">
            <h2 id="reviews-list-heading" className="sr-only">Filter reviews by service</h2>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter reviews by service type"
            >
              {SERVICE_FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`font-body text-xs font-medium tracking-widest uppercase px-5 py-2.5 border transition-all duration-200 min-h-[40px] ${
                    activeFilter === filter
                      ? 'bg-gold text-midnight border-gold'
                      : 'border-gold/20 text-text-muted hover:border-gold/50 hover:text-text-primary'
                  }`}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Review count */}
          <FadeIn className="mb-8">
            <p className="font-body text-xs text-text-muted">
              Showing{' '}
              <strong className="text-text-primary">{filtered.length}</strong>{' '}
              {filtered.length === 1 ? 'review' : 'reviews'}
              {activeFilter !== 'All' && (
                <> for <span className="text-gold">{activeFilter}</span></>
              )}
            </p>
          </FadeIn>

          {/* Reviews grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((review) => (
                  <article
                    key={review.id}
                    className="bg-slate-surface border border-gold/10 p-7 hover:border-gold/25 transition-all duration-300 group flex flex-col"
                    aria-label={`Review by ${review.name}`}
                  >
                    {/* Quote icon */}
                    <Quote
                      size={24}
                      className="text-gold/20 group-hover:text-gold/40 transition-colors duration-300 mb-4 flex-shrink-0"
                      aria-hidden="true"
                    />

                    {/* Stars */}
                    <div
                      className="flex gap-0.5 mb-4"
                      role="img"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={12} className="text-gold fill-gold" aria-hidden="true" />
                      ))}
                    </div>

                    {/* Review text */}
                    <blockquote className="font-body text-sm text-text-muted leading-relaxed italic flex-1 mb-6">
                      "{review.text}"
                    </blockquote>

                    {/* Footer */}
                    <footer className="border-t border-gold/10 pt-5 flex items-end justify-between gap-4">
                      <div>
                        <cite className="not-italic">
                          <p className="font-body text-sm font-semibold text-arctic">{review.name}</p>
                          <p className="font-body text-xs text-text-muted mt-0.5">{review.location}</p>
                        </cite>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="inline-block font-body text-[10px] font-semibold tracking-widest uppercase text-gold/70 border border-gold/20 px-2.5 py-1">
                          {review.service}
                        </span>
                        <p className="font-body text-xs text-text-muted mt-1.5">{review.date}</p>
                      </div>
                    </footer>
                  </article>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="font-body text-sm text-text-muted">No reviews for this service yet.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="bg-slate-surface border-t border-gold/10 section-padding" aria-label="Leave a review">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold" aria-hidden="true" />
                <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                  Share Your Experience
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold text-arctic leading-tight mb-4">
                A Capps client?<br />
                <span className="italic text-gradient-gold">We'd love to hear from you.</span>
              </h2>
              <p className="font-body text-sm text-text-muted leading-relaxed">
                Your review helps other homeowners find trustworthy service — and it means the world to our team.
              </p>
            </FadeIn>

            <FadeIn direction="right">
              <div className="flex flex-col gap-3">
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-midnight border border-gold/10 hover:border-gold/35 px-6 py-4 group transition-colors duration-200"
                  aria-label="Leave a review on Google (opens in new tab)"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex gap-0.5" aria-hidden="true">
                      {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-gold fill-gold" />)}
                    </div>
                    <span className="font-body text-sm font-medium text-text-primary">Review us on Google</span>
                  </div>
                  <ExternalLink size={14} className="text-text-muted group-hover:text-gold transition-colors duration-200" aria-hidden="true" />
                </a>
                <a
                  href="https://bbb.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-midnight border border-gold/10 hover:border-gold/35 px-6 py-4 group transition-colors duration-200"
                  aria-label="Leave a review on BBB (opens in new tab)"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-base font-bold text-gold">A+</span>
                    <span className="font-body text-sm font-medium text-text-primary">Review us on BBB</span>
                  </div>
                  <ExternalLink size={14} className="text-text-muted group-hover:text-gold transition-colors duration-200" aria-hidden="true" />
                </a>
                <a
                  href="https://yelp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-midnight border border-gold/10 hover:border-gold/35 px-6 py-4 group transition-colors duration-200"
                  aria-label="Leave a review on Yelp (opens in new tab)"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex gap-0.5" aria-hidden="true">
                      {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-gold fill-gold" />)}
                    </div>
                    <span className="font-body text-sm font-medium text-text-primary">Review us on Yelp</span>
                  </div>
                  <ExternalLink size={14} className="text-text-muted group-hover:text-gold transition-colors duration-200" aria-hidden="true" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding" aria-label="Book service call to action">
        <div className="container-luxury text-center">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-arctic mb-6">
              Ready to become our<br />
              <span className="italic text-gradient-gold">next five-star client?</span>
            </h2>
            <Link to="/book">
              <motion.span
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gold text-midnight font-body font-bold tracking-widest uppercase text-sm px-10 py-4 hover:bg-gold-light transition-colors duration-200 min-h-[52px] group"
              >
                Book a Consultation
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </motion.span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
