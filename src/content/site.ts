import type { IconName } from '../components/Icon'

/* Copy taken verbatim from the Figma homepage frame (node 51:14) */

export const PHONE = '(555) 012-3456'
export const PHONE_HREF = 'tel:+15550123456'
export const EMAIL = 'hello@clearflowplumbing.com'

export const navLinks = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export const services: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'zap',
    title: 'Emergency Plumbing',
    description: 'Burst pipes, major leaks and no-water calls handled around the clock by an on-call licensed plumber.',
  },
  {
    icon: 'waves',
    title: 'Drain Cleaning',
    description: 'Clogged sinks, tubs, showers and main lines cleared with professional augers and hydro-jetting.',
  },
  {
    icon: 'flame',
    title: 'Water Heaters',
    description: 'Repair, flushing and replacement for tank and tankless water heaters, gas or electric.',
  },
  {
    icon: 'droplet',
    title: 'Leak Detection & Repair',
    description: 'Pinpoint hidden leaks behind walls, ceilings and under slabs with minimal disruption.',
  },
  {
    icon: 'bath',
    title: 'Fixtures & Toilets',
    description: 'Faucets, toilets, showers and garbage disposals repaired or installed to local code.',
  },
  {
    icon: 'search',
    title: 'Sewer & Camera Inspection',
    description: 'HD video inspection finds root intrusion, breaks and blockages before anything is dug up.',
  },
]

export const trustItems: { icon: IconName; title: string; text: string }[] = [
  { icon: 'badge-check', title: 'Licensed & insured', text: 'Lic. #PL-000000' },
  { icon: 'file-text', title: 'Upfront written quotes', text: 'Approve the price first' },
  { icon: 'shield-check', title: 'Workmanship warranty', text: 'Terms provided in writing' },
  { icon: 'users', title: 'Vetted technicians', text: 'Uniformed technicians' },
]

export type Plan = {
  name: string
  price: string
  unit: string
  description: string
  includes: string[]
  cta: string
  featured?: boolean
}

export const plans: Plan[] = [
  {
    name: 'Service Call & Diagnosis',
    price: 'Flat fee',
    unit: 'per visit',
    description:
      'A licensed plumber inspects the problem and gives you a written quote. The visit fee is confirmed when you book.',
    includes: [
      'Arrival window with text updates',
      'Full inspection of the issue',
      'Written, itemized quote',
      'Options explained in plain language',
      'No obligation to proceed',
    ],
    cta: 'Book a diagnosis',
  },
  {
    name: 'Repairs',
    price: 'Flat rate',
    unit: 'per job',
    description:
      'Most repairs are priced per job, not per hour, so the price stays the same even if the work takes longer.',
    includes: [
      'Price approved before work begins',
      'Parts and labor itemized',
      'Common parts stocked on the truck',
      'Workmanship warranty in writing',
      'Floor protection and clean-up',
    ],
    cta: 'Book a repair',
    featured: true,
  },
  {
    name: 'Installs & Replacements',
    price: 'Estimate',
    unit: 'on-site',
    description:
      'Water heaters, repiping, sewer lines and new fixtures are quoted after an on-site assessment.',
    includes: [
      'Good / better / best options',
      'Permits and inspections handled',
      'Removal of old equipment',
      'Financing details on request',
      'Manufacturer warranty registration',
    ],
    cta: 'Request an estimate',
  },
]

export const policyPoints: { icon: IconName; title: string; text: string }[] = [
  { icon: 'check', title: 'You approve the price first', text: 'No work starts until you accept the written quote.' },
  { icon: 'clock', title: 'No overtime surprises', text: 'After-hours and emergency rates are stated before dispatch.' },
  { icon: 'search', title: 'Scope changes get a new quote', text: 'If we find something unexpected, we stop and re-quote.' },
  { icon: 'file-text', title: 'Itemized invoices', text: 'Your invoice matches the approved quote, line by line.' },
]

export const reviewFilters = ['All reviews', 'Repairs', 'Water heaters', 'Drains', 'Emergency'] as const
export type ReviewFilter = (typeof reviewFilters)[number]

export const reviews: { quote: string; name: string; meta: string; photo: boolean; tags: ReviewFilter[] }[] = [
  {
    quote:
      '“Our water heater died on a Sunday. They gave us a price over the phone, arrived inside the window and had hot water back by dinner.”',
    name: 'Sarah M.',
    meta: 'Aurora, CO · Water heater replacement',
    photo: true,
    tags: ['Water heaters', 'Emergency'],
  },
  {
    quote:
      '“The quote was clear, the plumber walked me through the camera footage, and the final invoice matched the quote to the dollar.”',
    name: 'David R.',
    meta: 'Lakewood, CO · Sewer camera inspection',
    photo: false,
    tags: ['Repairs', 'Drains'],
  },
  {
    quote: '“Fast, tidy and honest. They put down floor covers before touching anything. We have found our plumber.”',
    name: 'Priya K.',
    meta: 'Littleton, CO · Drain cleaning',
    photo: false,
    tags: ['Drains'],
  },
]

/* Map chip positions from the 1280×540 "Service area map" frame */
export const areaChips = [
  { name: 'Westminster', x: 640, y: 60 },
  { name: 'Thornton', x: 930, y: 80 },
  { name: 'Arvada', x: 500, y: 150 },
  { name: 'Aurora', x: 1040, y: 250 },
  { name: 'Wheat Ridge', x: 470, y: 260 },
  { name: 'Lakewood', x: 560, y: 360 },
  { name: 'Englewood', x: 780, y: 400 },
  { name: 'Centennial', x: 990, y: 410 },
  { name: 'Littleton', x: 650, y: 460 },
  { name: 'Golden', x: 420, y: 370 },
  { name: 'Broomfield', x: 800, y: 110 },
]

export const faqs = [
  {
    q: 'Do you charge for estimates?',
    a: 'Diagnostic visits have a flat service-call fee that we confirm when you book. For installations and replacements, we provide a written estimate after an on-site assessment.',
  },
  {
    q: 'How quickly can you get here?',
    a: 'For urgent issues we dispatch the next available plumber. You will get a two-hour arrival window and a text with a live ETA when your plumber is on the way.',
  },
  {
    q: 'Are your plumbers licensed and insured?',
    a: 'Yes. Every plumber holds a Colorado plumbing license and ClearFlow carries liability insurance. License details are printed on every quote.',
  },
  {
    q: 'Do you offer 24/7 emergency service?',
    a: 'Our emergency line is answered around the clock. After-hours rates are explained on the call, before anyone is dispatched.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Major credit and debit cards, ACH transfers and checks. Financing details are available on request for larger installations.',
  },
  {
    q: 'Is your work guaranteed?',
    a: 'Our workmanship is covered by a written labor warranty. The terms are listed on your quote and invoice.',
  },
]

export const footerColumns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Services',
    links: [
      { label: 'Emergency Plumbing', href: '#services' },
      { label: 'Drain Cleaning', href: '#services' },
      { label: 'Water Heaters', href: '#services' },
      { label: 'Leak Detection', href: '#services' },
      { label: 'Fixtures & Toilets', href: '#services' },
      { label: 'Sewer Inspection', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Careers', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Service Areas',
    links: [
      { label: 'Denver', href: '#service-areas' },
      { label: 'Aurora', href: '#service-areas' },
      { label: 'Lakewood', href: '#service-areas' },
      { label: 'Littleton', href: '#service-areas' },
      { label: 'Westminster', href: '#service-areas' },
      { label: 'View all areas', href: '#service-areas' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: EMAIL, href: `mailto:${EMAIL}` },
      { label: 'Mon–Sat, 7am–7pm', href: '#contact' },
      { label: 'Emergencies 24/7', href: PHONE_HREF },
      { label: 'Denver, CO 80202', href: '#contact' },
    ],
  },
]
