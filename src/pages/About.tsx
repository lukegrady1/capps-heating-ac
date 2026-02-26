import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, Heart, Zap } from 'lucide-react'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerContainer, staggerItem } from '@/components/motion/StaggerContainer'
import { CERTIFICATIONS } from '@/constants'

const milestones = [
  { year: '1998', title: 'Founded', desc: 'Gary Capps starts the company with a single service van and a commitment to honest, quality work.' },
  { year: '2004', title: 'NATE Certified', desc: 'Entire technician team achieves NATE certification — the first company in the region to do so.' },
  { year: '2009', title: 'BBB Accreditation', desc: 'Awarded A+ rating by the Better Business Bureau, a distinction maintained every year since.' },
  { year: '2015', title: 'Fleet Expansion', desc: 'Grew to 12 fully-stocked service vehicles to meet growing demand across Northern Utah.' },
  { year: '2020', title: '300+ Reviews', desc: 'Reached 300 five-star reviews across Google, Yelp, and BBB — driven entirely by word of mouth.' },
  { year: '2024', title: 'Gold Standard Award', desc: 'Named a Trane Comfort Specialist Dealer of the Year for the third consecutive year.' },
]

const values = [
  {
    icon: Award,
    title: 'Uncompromising Excellence',
    desc: 'We install only equipment we would put in our own homes. Every job is treated as if our reputation depends on it — because it does.',
  },
  {
    icon: Heart,
    title: 'Genuine Care',
    desc: 'We treat every home as if it were our own. Shoe covers, drop cloths, and a thorough clean-up are standard — not extras.',
  },
  {
    icon: Users,
    title: 'Transparent Partnership',
    desc: 'No hidden fees. No upsells. We explain every option clearly so you can make the decision that\'s right for your home and budget.',
  },
  {
    icon: Zap,
    title: 'Relentless Reliability',
    desc: 'When we say we\'ll be there, we\'re there. Our on-time arrival rate is above 97% — and we call ahead if anything changes.',
  },
]

const team = [
  {
    name: 'Gary Capps',
    title: 'Founder & Master Technician',
    tenure: '25+ years',
    bio: 'Gary founded Capps in 1998 with one goal: build the HVAC company he wished existed. A Master HVAC technician and EPA-certified, he still takes service calls himself.',
  },
  {
    name: 'Michelle Capps',
    title: 'Director of Operations',
    tenure: '18 years',
    bio: 'Michelle built the systems that keep Capps running seamlessly — from dispatch and scheduling to quality control and customer follow-up.',
  },
  {
    name: 'Derek Okafor',
    title: 'Lead Comfort Advisor',
    tenure: '11 years',
    bio: 'Derek leads the consultation and design team, ensuring every installation is engineered precisely for the home and the client\'s needs.',
  },
  {
    name: 'Lena Hartman',
    title: 'Senior Technician',
    tenure: '8 years',
    bio: 'Lena specializes in indoor air quality and high-efficiency systems. She holds dual NATE certifications in air distribution and air conditioning.',
  },
]

export function About() {
  return (
    <main className="bg-midnight" aria-label="About Capps Heating & Air Conditioning">

      {/* Hero */}
      <section className="relative section-padding pt-36 pb-24 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, #C5A059 0, #C5A059 1px, transparent 0, transparent 40px)',
          }}
          aria-hidden="true"
        />
        <div className="container-luxury relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-gold" aria-hidden="true" />
                <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                  Our Story
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-arctic leading-[1.05] mb-8">
                Built on<br />
                <span className="italic text-gradient-gold">Integrity.</span><br />
                Driven by<br />
                <span className="italic text-gradient-gold">Excellence.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-body text-lg text-text-muted leading-relaxed max-w-xl">
                For over 25 years, Capps Heating & Air Conditioning has been the trusted name in premium climate control for Northern Utah's most discerning homeowners. We didn't get here by being the cheapest — we got here by being the best.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="bg-slate-surface section-padding" aria-labelledby="story-heading">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&auto=format&fit=crop&q=80")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                  }}
                  role="img"
                  aria-label="Capps technician in the field"
                />
                <div className="absolute inset-0 border border-gold/20" aria-hidden="true" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/20" aria-hidden="true" />

                {/* Year badge */}
                <div className="absolute top-6 left-6 glass px-5 py-3">
                  <p className="font-display text-2xl font-bold text-gold">1998</p>
                  <p className="font-body text-xs text-text-muted tracking-wide">Est. Eden, UT</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold" aria-hidden="true" />
                <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                  How It Began
                </span>
              </div>
              <h2 id="story-heading" className="font-display text-4xl font-bold text-arctic leading-tight mb-6">
                One Van. One Promise.
                <br />
                <span className="italic text-gradient-gold">No Shortcuts.</span>
              </h2>
              <div className="space-y-4 font-body text-sm text-text-muted leading-relaxed">
                <p>
                  Gary Capps started this company in 1998 with a single service van and a simple mission: to be the HVAC company he always wished existed — one that showed up on time, told the truth, and did the job right the first time.
                </p>
                <p>
                  In an industry notorious for bait-and-switch pricing and shortcuts, Gary built something different. He hired only technicians who shared his obsession with quality. He turned away business when he couldn't staff it properly. He answered every call himself for the first five years.
                </p>
                <p>
                  Twenty-five years later, that same philosophy drives everything we do. The van count has grown to twelve, the team to over twenty, and the awards and certifications fill a wall — but the promise Gary made in 1998 remains unchanged.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Milestones timeline */}
      <section className="section-padding" aria-labelledby="milestones-heading">
        <div className="container-luxury">
          <FadeIn className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                25 Years of Milestones
              </span>
            </div>
            <h2 id="milestones-heading" className="font-display text-4xl md:text-5xl font-bold text-arctic leading-tight">
              A Quarter-Century<br />
              <span className="italic text-gradient-gold">of Excellence</span>
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/15 md:-translate-x-px" aria-hidden="true" />

            <StaggerContainer className="space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  variants={staggerItem}
                  className={`relative flex items-start gap-8 pb-12 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold border-2 border-midnight md:-translate-x-1.5 -translate-x-1.5 mt-1.5" aria-hidden="true" />

                  {/* Content — desktop: alternating sides */}
                  <div className={`pl-10 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-14 md:text-right' : 'md:pl-14'}`}>
                    <span className="font-display text-3xl font-bold text-gold block mb-1">{m.year}</span>
                    <h3 className="font-body text-base font-semibold text-arctic mb-2">{m.title}</h3>
                    <p className="font-body text-sm text-text-muted leading-relaxed">{m.desc}</p>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-surface section-padding" aria-labelledby="values-heading">
        <div className="container-luxury">
          <FadeIn className="mb-14 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                What We Stand For
              </span>
              <div className="h-px w-8 bg-gold" aria-hidden="true" />
            </div>
            <h2 id="values-heading" className="font-display text-4xl md:text-5xl font-bold text-arctic leading-tight">
              Our Core Values
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
            {values.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="bg-midnight p-8 group"
              >
                <div className="w-11 h-11 border border-gold/25 group-hover:border-gold/60 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon size={18} className="text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-body text-sm font-semibold text-arctic mb-3">{title}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" aria-labelledby="team-heading">
        <div className="container-luxury">
          <FadeIn className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                The People Behind the Promise
              </span>
            </div>
            <h2 id="team-heading" className="font-display text-4xl md:text-5xl font-bold text-arctic leading-tight">
              Meet the Team
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <motion.article
                key={member.name}
                variants={staggerItem}
                className="bg-slate-surface border border-gold/10 hover:border-gold/25 transition-colors duration-300"
                aria-label={`${member.name}, ${member.title}`}
              >
                {/* Avatar placeholder */}
                <div
                  className="h-52 bg-midnight relative overflow-hidden"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-surface via-midnight to-slate-surface" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-gold/20">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-body text-base font-semibold text-arctic mb-0.5">{member.name}</h3>
                  <p className="font-body text-xs text-gold tracking-wide mb-1">{member.title}</p>
                  <p className="font-body text-xs text-text-muted mb-4">{member.tenure} with Capps</p>
                  <p className="font-body text-xs text-text-muted leading-relaxed">{member.bio}</p>
                </div>
              </motion.article>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-slate-surface section-padding" aria-labelledby="certs-heading">
        <div className="container-luxury">
          <FadeIn className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                Credentials
              </span>
              <div className="h-px w-8 bg-gold" aria-hidden="true" />
            </div>
            <h2 id="certs-heading" className="font-display text-4xl font-bold text-arctic">
              Certified & Accredited
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.name}
                variants={staggerItem}
                className="bg-midnight border border-gold/10 p-6 text-center hover:border-gold/30 transition-colors duration-300"
              >
                <p className="font-display text-lg font-bold text-gold mb-1">{cert.name}</p>
                <p className="font-body text-xs text-text-muted">{cert.detail}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" aria-label="Call to action">
        <div className="container-luxury text-center">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-arctic mb-6">
              Ready to experience the<br />
              <span className="italic text-gradient-gold">Capps difference?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <motion.span
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gold text-midnight font-body font-bold tracking-widest uppercase text-sm px-10 py-4 hover:bg-gold-light transition-colors duration-200 min-h-[52px] group"
                >
                  Contact Us
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </motion.span>
              </Link>
              <Link to="/reviews">
                <motion.span
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 border border-gold/30 text-gold font-body font-medium tracking-widest uppercase text-sm px-10 py-4 hover:bg-gold/5 transition-all duration-200 min-h-[52px]"
                >
                  Read Our Reviews
                </motion.span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
