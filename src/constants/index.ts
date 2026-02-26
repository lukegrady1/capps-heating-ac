import type { NavLink, Service, Testimonial } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/#about' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/#contact' },
]

export const PHONE_NUMBER = '(555) 247-7734'
export const PHONE_RAW = '5552477734'

export const SERVICES: Service[] = [
  {
    id: 'ac-installation',
    title: 'Air Conditioning',
    shortDesc: 'Precision-engineered cooling for year-round comfort.',
    description:
      'From high-efficiency system installation to meticulous maintenance, we engineer the perfect climate for your home using only top-tier equipment.',
    icon: 'Snowflake',
    features: [
      'Central AC installation & replacement',
      'Ductless mini-split systems',
      'Seasonal tune-ups & maintenance',
      'Emergency repair service',
    ],
    slug: 'air-conditioning',
  },
  {
    id: 'heating',
    title: 'Heating Systems',
    shortDesc: 'Unwavering warmth engineered to precision standards.',
    description:
      'Our heating specialists bring decades of expertise to every installation and repair, ensuring flawless performance throughout every winter.',
    icon: 'Flame',
    features: [
      'Furnace installation & repair',
      'Heat pump systems',
      'Radiant floor heating',
      'Boiler service & repair',
    ],
    slug: 'heating',
  },
  {
    id: 'iaq',
    title: 'Indoor Air Quality',
    shortDesc: 'Breathe air as refined as your standard of living.',
    description:
      'Advanced filtration, UV purification, and humidity control systems that transform your indoor environment into a sanctuary of clean air.',
    icon: 'Wind',
    features: [
      'HEPA filtration systems',
      'UV air purifiers',
      'Whole-home humidifiers',
      'Air quality testing & analysis',
    ],
    slug: 'indoor-air-quality',
  },
  {
    id: 'maintenance',
    title: 'Maintenance Plans',
    shortDesc: 'Concierge-level care for your climate systems.',
    description:
      'Our premium maintenance agreements deliver twice-yearly expert inspections, priority scheduling, and exclusive member discounts.',
    icon: 'Shield',
    features: [
      'Bi-annual system inspections',
      'Priority emergency service',
      '15% discount on repairs',
      'Dedicated account manager',
    ],
    slug: 'maintenance-plans',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Margaret H.',
    location: 'River Oaks',
    rating: 5,
    text: 'Capps transformed our home\'s climate experience entirely. The installation was immaculate—not a trace of their presence except perfect, silent cooling. Worth every penny.',
    service: 'AC Installation',
    date: 'January 2026',
  },
  {
    id: '2',
    name: 'Robert & Diana C.',
    location: 'Memorial',
    rating: 5,
    text: 'After three mediocre HVAC companies, finding Capps felt like discovering a hidden gem. Their technician arrived on time, in uniform, with white-glove professionalism throughout.',
    service: 'System Replacement',
    date: 'December 2025',
  },
  {
    id: '3',
    name: 'James P.',
    location: 'Tanglewood',
    rating: 5,
    text: 'The maintenance plan has been exceptional. Two years in and our 20-year-old system runs like new. The peace of mind alone is worth the investment.',
    service: 'Maintenance Plan',
    date: 'November 2025',
  },
  {
    id: '4',
    name: 'Sarah K.',
    location: 'Bellaire',
    rating: 5,
    text: 'Called at 10 PM on a Friday—technician arrived within the hour. Truly 24/7 service that\'s as good as their marketing suggests. Exceptional company.',
    service: 'Emergency Repair',
    date: 'October 2025',
  },
]

export const CERTIFICATIONS = [
  { name: 'NATE Certified', detail: 'North American Technician Excellence' },
  { name: 'BBB A+', detail: 'Better Business Bureau Accredited' },
  { name: 'EPA 608', detail: 'Certified Refrigerant Handling' },
  { name: '4.9★ Google', detail: '300+ Verified Reviews' },
  { name: 'Trane Comfort', detail: 'Specialist Dealer' },
  { name: 'Carrier Factory', detail: 'Authorized Dealer' },
  { name: '25+ Years', detail: 'Serving the Community' },
  { name: 'Licensed & Insured', detail: 'Texas HVAC License' },
]

export const SERVICE_TYPES = [
  'Air Conditioning Repair',
  'Air Conditioning Installation',
  'Heating Repair',
  'Heating Installation',
  'Indoor Air Quality',
  'Maintenance Plan',
  'Emergency Service',
  'Other',
]

export const TIME_SLOTS = [
  '8:00 AM – 10:00 AM',
  '10:00 AM – 12:00 PM',
  '12:00 PM – 2:00 PM',
  '2:00 PM – 4:00 PM',
  '4:00 PM – 6:00 PM',
]
