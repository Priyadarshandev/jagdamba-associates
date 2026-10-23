// ============================================================
// BUSINESS DATA — Single source of truth
// Update this file when business info changes
// ============================================================

export const BUSINESS = {
  name: 'Jagdamba Associates',
  nameHindi: 'जगदम्बा एसोसिएट्स',
  tagline: 'Thoughtfully Designed Spaces. Beautifully Lived.',
  description:
    'Premium residential and commercial interior design services in Rewari, Haryana. We bring together thoughtful space planning, quality craftsmanship, and refined aesthetics to create interiors that reflect who you are.',
  phone: '+91 98731 12413',
  phoneRaw: '919873112413',
  email: '', // Add when confirmed
  address: {
    line1: 'Office No. 265',
    line2: 'Opposite BMG Mall, Sector 5',
    city: 'Rewari',
    state: 'Haryana',
    pincode: '123401',
    country: 'India',
    full: 'Office No. 265, Opposite BMG Mall, Sector 5, Rewari, Haryana 123401',
  },
  googleMapsQuery:
    'Jagdamba+Associates,+Office+No.+265,+Opposite+BMG+Mall,+Sector+5,+Rewari,+Haryana+123401',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Jagdamba+Associates+Office+No+265+Opposite+BMG+Mall+Sector+5+Rewari+Haryana+123401',
  // NOTE: Verify exact Google Business Profile URL before publishing
  googleBusinessUrl: 'https://www.google.com/search?q=Jagdamba+Associates+Rewari',
  // NOTE: Rating verified as per business-supplied information. Verify against live listing before publishing.
  rating: {
    value: 5.0,
    count: 79,
    note: 'Rating as supplied by business. Verify against Google Business Profile before publishing.',
  },
  // NOTE: Only closing time (6 PM) was confirmed. Full schedule needs verification.
  hours: {
    note: 'Closing time: 6 PM. Full opening hours not confirmed — verify before displaying a schedule.',
    closingTime: '6:00 PM',
  },
  serviceArea: ['Rewari', 'Dharuhera', 'Bhiwadi', 'Bawal', 'NCR'],
  social: {
    whatsapp: 'https://wa.me/919873112413',
    instagram: '', // Add when confirmed
    facebook: '',  // Add when confirmed
  },
} as const;

export const WHATSAPP_MESSAGES = {
  default:
    'Hello Jagdamba Associates, I am interested in your interior design services. I would like to discuss my project. Please let me know the next steps.',
  residential:
    'Hello Jagdamba Associates, I am interested in your residential interior design services. I would like to discuss my home interior project. Please let me know the next steps.',
  commercial:
    'Hello Jagdamba Associates, I am interested in your commercial interior design services. I would like to discuss an office or commercial space project. Please let me know the next steps.',
  kitchen:
    'Hello Jagdamba Associates, I am interested in modular kitchen design. I would like to discuss my kitchen interior project. Please let me know the next steps.',
  bedroom:
    'Hello Jagdamba Associates, I am interested in bedroom interior design. I would like to discuss my bedroom project. Please let me know the next steps.',
  consultation:
    'Hello Jagdamba Associates, I would like to schedule a design consultation. Please let me know your availability and next steps.',
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function buildServiceWhatsAppUrl(serviceName: string): string {
  const message = `Hello Jagdamba Associates, I am interested in your ${serviceName} services. I would like to discuss my project. Please let me know the next steps.`;
  return buildWhatsAppUrl(message);
}
