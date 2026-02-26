export interface Service {
  id: string
  title: string
  shortDesc: string
  description: string
  icon: string
  features: string[]
  slug: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  service: string
  date: string
}

export interface NavLink {
  label: string
  href: string
}

export interface BookingFormData {
  serviceType: string
  urgency: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  preferredDate: string
  preferredTime: string
  notes: string
}
