import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Services } from '@/components/sections/Services'
import { CappsDifference } from '@/components/sections/CappsDifference'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <CappsDifference />
      <Testimonials />
      <CTA />
    </>
  )
}
