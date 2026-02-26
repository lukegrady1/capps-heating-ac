import type { NavLink, Service, Testimonial } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
]

export const PHONE_NUMBER = '(801) 745-3585'
export const PHONE_RAW = '8017453585'

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
    location: 'Eden',
    rating: 5,
    text: 'Capps transformed our home\'s climate experience entirely. The installation was immaculate—not a trace of their presence except perfect, silent cooling. Worth every penny.',
    service: 'AC Installation',
    date: 'January 2026',
  },
  {
    id: '2',
    name: 'Robert & Diana C.',
    location: 'Huntsville',
    rating: 5,
    text: 'After three mediocre HVAC companies, finding Capps felt like discovering a hidden gem. Their technician arrived on time, in uniform, with white-glove professionalism throughout.',
    service: 'System Replacement',
    date: 'December 2025',
  },
  {
    id: '3',
    name: 'James P.',
    location: 'Ogden',
    rating: 5,
    text: 'The maintenance plan has been exceptional. Two years in and our 20-year-old system runs like new. The peace of mind alone is worth the investment.',
    service: 'Maintenance Plan',
    date: 'November 2025',
  },
  {
    id: '4',
    name: 'Sarah K.',
    location: 'North Ogden',
    rating: 5,
    text: 'Called at 10 PM on a Friday—technician arrived within the hour. Truly 24/7 service that\'s as good as their marketing suggests. Exceptional company.',
    service: 'Emergency Repair',
    date: 'October 2025',
  },
  {
    id: '5',
    name: 'Thomas W.',
    location: 'Morgan',
    rating: 5,
    text: 'Had three quotes for a full system replacement. Capps wasn\'t the cheapest, but the level of detail in their assessment—room-by-room load calculations, duct inspection—showed they actually care about getting it right.',
    service: 'System Replacement',
    date: 'September 2025',
  },
  {
    id: '6',
    name: 'Patricia L.',
    location: 'Layton',
    rating: 5,
    text: 'Our air quality had been bothering us for years. The whole-home filtration system Capps installed has made a noticeable difference. My allergies are finally under control.',
    service: 'Indoor Air Quality',
    date: 'August 2025',
  },
  {
    id: '7',
    name: 'Michael B.',
    location: 'Roy',
    rating: 5,
    text: 'I\'ve been on their maintenance plan for three years. Not a single unexpected breakdown. When my neighbors are calling emergency lines in July, I\'m staying comfortable.',
    service: 'Maintenance Plan',
    date: 'July 2025',
  },
  {
    id: '8',
    name: 'Caroline F.',
    location: 'Clearfield',
    rating: 5,
    text: 'Every single person I\'ve interacted with—from the person who answered my call to the technician—has been exceptional. This is how service businesses should operate.',
    service: 'AC Repair',
    date: 'June 2025',
  },
  {
    id: '9',
    name: 'David & Anne R.',
    location: 'Pleasant View',
    rating: 5,
    text: 'We were skeptical of the ductless mini-split recommendation but trusted their expertise. Three months in, our energy bill is 30% lower and the temperature control is flawless.',
    service: 'AC Installation',
    date: 'May 2025',
  },
  {
    id: '10',
    name: 'Jennifer T.',
    location: 'Brigham City',
    rating: 5,
    text: 'The furnace went out on a Sunday in January. Capps had someone here by noon, with the part in hand. No drama, no gouging on the emergency rate. Just excellent service.',
    service: 'Emergency Repair',
    date: 'January 2025',
  },
  {
    id: '11',
    name: 'William C.',
    location: 'Kaysville',
    rating: 5,
    text: 'I manage several properties and Capps handles all of them. Their documentation, invoicing, and follow-up are as professional as their technical work. A true partner.',
    service: 'Maintenance Plan',
    date: 'December 2024',
  },
  {
    id: '12',
    name: 'Laura M.',
    location: 'Bountiful',
    rating: 5,
    text: 'The technician spent 20 minutes explaining exactly what was wrong and why, showed me photos, and walked through every option before touching anything. Refreshing transparency.',
    service: 'AC Repair',
    date: 'November 2024',
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
  { name: 'Licensed & Insured', detail: 'Utah HVAC License' },
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
