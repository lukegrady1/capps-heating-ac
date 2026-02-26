import type { ReactNode } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { MobileEmergencyBar } from '@/components/ui/MobileEmergencyBar'
import { useLenis } from '@/hooks/useLenis'
import { Home } from '@/pages/Home'
import { Book } from '@/pages/Book'
import { Emergency } from '@/pages/Emergency'
import { ServicesPage } from '@/pages/Services'
import { About } from '@/pages/About'
import { Reviews } from '@/pages/Reviews'

// Page transition wrapper
function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

// Skip to main content link for accessibility
function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[99999] bg-gold text-midnight px-4 py-2 font-body font-bold text-sm"
    >
      Skip to main content
    </a>
  )
}

// Noise overlay for luxury texture
function NoiseOverlay() {
  return <div className="noise-overlay" aria-hidden="true" />
}

function AppRoutes() {
  const location = useLocation()
  useLenis()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Layout>
              <PageTransition>
                <Home />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <PageTransition>
                <ServicesPage />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/services/:slug"
          element={
            <Layout>
              <PageTransition>
                <ServicesPage />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/book"
          element={
            <Layout>
              <PageTransition>
                <Book />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/emergency"
          element={
            <Layout>
              <PageTransition>
                <Emergency />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <PageTransition>
                <About />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/reviews"
          element={
            <Layout>
              <PageTransition>
                <Reviews />
              </PageTransition>
            </Layout>
          }
        />
        {/* Fallback */}
        <Route
          path="*"
          element={
            <Layout>
              <PageTransition>
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display text-6xl font-bold text-gold mb-4">404</p>
                    <h1 className="font-display text-2xl font-bold text-arctic mb-4">Page Not Found</h1>
                    <a href="/" className="font-body text-sm text-gold hover:text-gold-light underline">
                      Return Home
                    </a>
                  </div>
                </div>
              </PageTransition>
            </Layout>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <>
      <SkipLink />
      <NoiseOverlay />
      <MobileEmergencyBar />
      <AppRoutes />
    </>
  )
}
