import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { PHONE_NUMBER, PHONE_RAW } from '@/constants'

export function MobileEmergencyBar() {
  const location = useLocation()

  // Don't show on emergency page (has its own bar)
  if (location.pathname === '/emergency') return null

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      role="complementary"
      aria-label="Emergency call shortcut"
    >
      <a
        href={`tel:${PHONE_RAW}`}
        className="flex items-center justify-center gap-3 bg-slate-surface border-t border-gold/20 py-4 font-body text-sm font-semibold text-text-primary hover:bg-gold hover:text-midnight transition-colors duration-200 min-h-[56px]"
        aria-label={`Call emergency service at ${PHONE_NUMBER}`}
      >
        <Phone size={15} className="text-gold" aria-hidden="true" />
        <span>
          <span className="text-gold">24/7 Emergency: </span>
          {PHONE_NUMBER}
        </span>
      </a>
    </motion.div>
  )
}
