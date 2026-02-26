import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, PHONE_NUMBER, PHONE_RAW } from '@/constants'
import { useScrolled } from '@/hooks/useScrolled'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(80)
  const location = useLocation()
  const emergencyRef = useRef<HTMLAnchorElement>(null)

  // Magnetic emergency button
  useEffect(() => {
    const btn = emergencyRef.current
    if (!btn) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = (e.clientX - centerX) * 0.25
      const dy = (e.clientY - centerY) * 0.25
      btn.style.transform = `translate(${dx}px, ${dy}px)`
    }

    const handleMouseLeave = () => {
      btn.style.transform = 'translate(0, 0)'
      btn.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
    }

    const parent = btn.parentElement
    parent?.addEventListener('mousemove', handleMouseMove)
    parent?.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      parent?.removeEventListener('mousemove', handleMouseMove)
      parent?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'glass-nav py-3 shadow-2xl shadow-midnight/50' : 'py-5 bg-transparent'
        )}
        role="banner"
      >
        <div className="container-luxury px-6 md:px-10 lg:px-16">
          <nav
            className="flex items-center justify-between"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex flex-col leading-none"
              aria-label="Capps Heating & Air Conditioning — Home"
            >
              <span className="font-display text-xl font-bold text-arctic tracking-tight">
                Capps
              </span>
              <span className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-gold">
                Heating & Air Conditioning
              </span>
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      'font-body text-sm font-medium tracking-wider uppercase transition-colors duration-200',
                      location.pathname === link.href
                        ? 'text-gold'
                        : 'text-text-muted hover:text-text-primary'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side: Emergency + Book */}
            <div className="hidden md:flex items-center gap-4">
              {/* Magnetic Emergency */}
              <div className="relative p-4 -m-4">
                <motion.a
                  ref={emergencyRef}
                  href={`tel:${PHONE_RAW}`}
                  className="inline-flex items-center gap-2 border border-red-500/60 text-red-400 font-body text-xs font-semibold tracking-widest uppercase px-5 py-2.5 hover:bg-red-600/10 transition-colors duration-200"
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Call emergency service: ${PHONE_NUMBER}`}
                >
                  <Phone size={12} aria-hidden="true" />
                  Emergency
                </motion.a>
              </div>

              <Link to="/book">
                <motion.span
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-gold text-midnight font-body text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-gold-light transition-colors duration-200 min-h-[48px]"
                >
                  Book Service
                </motion.span>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-text-primary p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div
              className="absolute inset-0 bg-midnight/95 backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
            />
            <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.href}
                    className="font-display text-3xl font-bold text-arctic hover:text-gold transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07 }}
                className="mt-4 flex flex-col items-center gap-4"
              >
                <Link
                  to="/book"
                  className="bg-gold text-midnight font-body font-bold tracking-widest uppercase px-10 py-4 text-sm min-h-[52px] flex items-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Service
                </Link>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="text-red-400 font-body text-sm tracking-widest uppercase flex items-center gap-2"
                >
                  <Phone size={14} aria-hidden="true" />
                  24/7 Emergency
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
