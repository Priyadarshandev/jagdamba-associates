// ============================================================
// PROJECT DATA
// NOTE: These are demonstration projects only.
// Replace with actual client projects when supplied.
// Do NOT invent client names, locations, budgets, or claims.
// ============================================================

export type ProjectCategory =
  | 'Residential'
  | 'Kitchen'
  | 'Bedroom'
  | 'Living Room'
  | 'Commercial'
  | 'Bathroom';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  description: string;
  // Unsplash image query for demo purposes
  imageQuery: string;
  imageAlt: string;
  tags: string[];
  isDemo: true; // All entries must be demo until real projects are supplied
}

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    slug: 'contemporary-living-room',
    title: 'Contemporary Living Room',
    category: 'Living Room',
    shortDescription: 'A refined contemporary living space balancing warmth and sophistication.',
    description:
      'This demonstration project showcases a contemporary living room design with layered lighting, custom seating, and a warm neutral palette. Actual completed projects will be added with client permission.',
    imageQuery: 'contemporary living room interior warm neutral',
    imageAlt: 'Contemporary living room with warm neutral tones and custom furniture',
    tags: ['Contemporary', 'Neutral Palette', 'Custom Furniture'],
    isDemo: true,
  },
  {
    id: 'p2',
    slug: 'modern-modular-kitchen',
    title: 'Modern Modular Kitchen',
    category: 'Kitchen',
    shortDescription: 'A sleek, functional modular kitchen with integrated appliances.',
    description:
      'A demonstration of a modern modular kitchen layout with optimised storage, clean lines, and integrated appliances. This is a sample design; actual projects will be showcased with client consent.',
    imageQuery: 'modern modular kitchen white minimal interior',
    imageAlt: 'Sleek modern modular kitchen with white cabinets and integrated appliances',
    tags: ['Modular', 'Contemporary', 'Storage Optimised'],
    isDemo: true,
  },
  {
    id: 'p3',
    slug: 'serene-master-bedroom',
    title: 'Serene Master Bedroom',
    category: 'Bedroom',
    shortDescription: 'A peaceful master bedroom sanctuary with custom wardrobe and soft lighting.',
    description:
      'This sample demonstrates a master bedroom designed for comfort and calm, featuring a built-in wardrobe, layered lighting, and a curated material palette. Actual completed bedrooms will be added when available.',
    imageQuery: 'serene master bedroom interior design soft lighting',
    imageAlt: 'Serene master bedroom with built-in wardrobe and soft ambient lighting',
    tags: ['Serene', 'Custom Wardrobe', 'Ambient Lighting'],
    isDemo: true,
  },
  {
    id: 'p4',
    slug: 'luxury-bathroom-design',
    title: 'Luxury Bathroom Design',
    category: 'Bathroom',
    shortDescription: 'A spa-inspired bathroom with premium tiles and elegant fixtures.',
    description:
      'A demonstration of a spa-inspired bathroom design featuring large-format tiles, freestanding bath, and carefully layered lighting. This is a sample design showcase.',
    imageQuery: 'luxury bathroom spa interior design tiles',
    imageAlt: 'Luxury spa-inspired bathroom with premium tiles and elegant fixtures',
    tags: ['Luxury', 'Spa Inspired', 'Premium Tiles'],
    isDemo: true,
  },
  {
    id: 'p5',
    slug: 'professional-office-interior',
    title: 'Professional Office Interior',
    category: 'Commercial',
    shortDescription: 'A productive, branded office interior for a modern business.',
    description:
      'A sample commercial office interior design showing how brand identity, ergonomic workstations, and professional aesthetics can be combined effectively. Actual completed projects will be added with client consent.',
    imageQuery: 'modern professional office interior design open plan',
    imageAlt: 'Modern professional office interior with open workstations and branded design',
    tags: ['Office', 'Professional', 'Branded Space'],
    isDemo: true,
  },
  {
    id: 'p6',
    slug: 'complete-apartment-interior',
    title: 'Complete Apartment Interior',
    category: 'Residential',
    shortDescription: 'A fully designed apartment interior with cohesive style across all rooms.',
    description:
      'This demonstration project illustrates a complete apartment interior design — living, dining, kitchen, bedrooms, and bathrooms unified by a consistent design language. Actual completed projects will be featured when available.',
    imageQuery: 'complete apartment interior design modern Indian',
    imageAlt: 'Complete apartment interior with cohesive design across living, dining, and bedrooms',
    tags: ['Complete Apartment', 'Cohesive Design', 'Modern'],
    isDemo: true,
  },
  {
    id: 'p7',
    slug: 'elegant-dining-room',
    title: 'Elegant Dining Room',
    category: 'Living Room',
    shortDescription: 'An elegant dining space designed for family gatherings and entertaining.',
    description:
      'A sample dining room design featuring a custom dining table, statement lighting, and refined wall treatment. This demonstrates the type of tailored spaces we design for our clients.',
    imageQuery: 'elegant dining room interior design statement lighting',
    imageAlt: 'Elegant dining room with custom furniture and statement pendant lighting',
    tags: ['Dining Room', 'Elegant', 'Statement Lighting'],
    isDemo: true,
  },
  {
    id: 'p8',
    slug: 'childrens-bedroom',
    title: "Children's Bedroom",
    category: 'Bedroom',
    shortDescription: 'A playful yet practical bedroom designed for a growing child.',
    description:
      "A sample children's bedroom design showing how playful aesthetics and practical storage can coexist. Safe materials, adaptable storage, and stimulating colours are the priority.",
    imageQuery: "children's bedroom interior design playful colorful",
    imageAlt: "Playful and practical children's bedroom with smart storage solutions",
    tags: ["Children's Room", 'Playful', 'Smart Storage'],
    isDemo: true,
  },
  {
    id: 'p9',
    slug: 'retail-showroom-design',
    title: 'Retail Showroom Design',
    category: 'Commercial',
    shortDescription: 'A commercial showroom designed to engage customers and showcase products.',
    description:
      'A demonstration of retail and showroom interior design — customer flow planning, display strategy, branded lighting, and durable materials. This is a sample; actual commercial projects will be shown with consent.',
    imageQuery: 'retail showroom interior design modern luxury',
    imageAlt: 'Modern retail showroom interior with strategic display and branded lighting',
    tags: ['Retail', 'Showroom', 'Commercial'],
    isDemo: true,
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Residential',
  'Kitchen',
  'Bedroom',
  'Living Room',
  'Commercial',
  'Bathroom',
];
