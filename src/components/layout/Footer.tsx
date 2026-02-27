import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { PHONE_NUMBER, PHONE_RAW, NAV_LINKS, SERVICES } from '@/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-midnight border-t border-gold/10" role="contentinfo">
      {/* Top CTA strip */}
      <div className="bg-slate-surface border-b border-gold/10">
        <div className="container-luxury section-padding py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-gold mb-1">
                24/7 Emergency Service
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-arctic">
                Climate emergency? We're always on call.
              </h2>
            </div>
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center gap-3 bg-gold text-midnight font-body font-bold tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-200 whitespace-nowrap min-h-[52px]"
              aria-label={`Call us at ${PHONE_NUMBER}`}
            >
              <Phone size={16} aria-hidden="true" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-luxury section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-display text-2xl font-bold text-arctic block">
                Capps
              </span>
              <span className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-gold">
                Heating & Air Conditioning
              </span>
            </div>
            <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
              Defining the gold standard in home climate since 2004. Trusted by discerning homeowners across the region.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                aria-label="Follow Capps on Instagram"
                className="text-text-muted hover:text-gold transition-colors duration-200 p-2"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Follow Capps on Facebook"
                className="text-text-muted hover:text-gold transition-colors duration-200 p-2"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-widest uppercase text-gold mb-5">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/emergency"
                  className="font-body text-sm text-red-400 hover:text-red-300 transition-colors duration-200"
                >
                  Emergency Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-widest uppercase text-gold mb-5">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-widest uppercase text-gold mb-5">
              Contact
            </h3>
            <address className="not-italic space-y-4">
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-start gap-3 font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                aria-label={`Call ${PHONE_NUMBER}`}
              >
                <Phone size={15} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                {PHONE_NUMBER}
              </a>
              <a
                href="mailto:info@cappsac.com"
                className="flex items-start gap-3 font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                aria-label="Email us at info@cappsac.com"
              >
                <Mail size={15} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                info@cappsac.com
              </a>
              <div className="flex items-start gap-3 font-body text-sm text-text-muted">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Serving the Ogden Valley &<br />Northern Utah</span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <div className="container-luxury px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-text-muted">
            © {year} Capps Heating & Air Conditioning Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="font-body text-xs text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-body text-xs text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
