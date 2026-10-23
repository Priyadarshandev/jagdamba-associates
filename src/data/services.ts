export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string; // Lucide icon name
  heroKeyword: string; // for Unsplash image query
  features: string[];
  considerations: string[];
  faqs: { question: string; answer: string }[];
  whatsappMessage: string;
  seoTitle: string;
  seoDescription: string;
}

export const SERVICES: Service[] = [
  {
    id: 'residential',
    slug: 'residential-interior-design',
    name: 'Residential Interior Design',
    shortDescription: 'Complete home interiors tailored to your lifestyle and taste.',
    description:
      'We design complete residential interiors that balance beauty, function, and comfort. From initial space planning to final styling, every element is carefully considered to create a home that truly reflects you.',
    icon: 'Home',
    heroKeyword: 'modern residential interior design living room',
    features: [
      'Comprehensive space planning',
      'Custom furniture selection',
      'Lighting design',
      'Material and finish selection',
      'Colour consultation',
      'Project coordination',
    ],
    considerations: [
      'Lifestyle and daily routines of occupants',
      'Natural light and ventilation',
      'Traffic flow and space efficiency',
      'Budget and phasing options',
      'Long-term durability of materials',
    ],
    faqs: [
      {
        question: 'How long does a residential interior design project take?',
        answer:
          'Project timelines vary based on scope. A single room may take 4–8 weeks, while a full home typically requires 3–6 months from design approval to completion.',
      },
      {
        question: 'Do you work on projects of all budgets?',
        answer:
          'We work with a range of budgets and tailor our material and product selections accordingly. We recommend contacting us to discuss your requirements and budget range.',
      },
      {
        question: 'Do you handle project supervision?',
        answer:
          'Yes, we coordinate with contractors, vendors, and craftspeople throughout the project to ensure design intent is executed accurately.',
      },
    ],
    whatsappMessage:
      'Hello Jagdamba Associates, I am interested in residential interior design for my home. Please let me know how to get started.',
    seoTitle: 'Residential Interior Design in Rewari | Jagdamba Associates',
    seoDescription:
      'Complete residential interior design services in Rewari, Haryana. Custom home interiors — living rooms, bedrooms, kitchens, and more. Call +91 98731 12413.',
  },
  {
    id: 'living-room',
    slug: 'living-room-interiors',
    name: 'Living Room Interiors',
    shortDescription: 'Elegant, functional living spaces designed for everyday living and hosting.',
    description:
      'Your living room is the heart of your home — a space for family, guests, and relaxation. We design living rooms that are elegant, functional, and personal, using thoughtful layouts, curated furnishings, and harmonious colour palettes.',
    icon: 'Sofa',
    heroKeyword: 'elegant modern living room interior design',
    features: [
      'Custom sofa and seating arrangement',
      'TV unit and entertainment design',
      'Accent walls and panelling',
      'Lighting layers (ambient, task, accent)',
      'Rug and soft furnishing selection',
      'Showcase and display unit design',
    ],
    considerations: [
      'Room proportions and ceiling height',
      'Primary use — family, formal entertaining, or both',
      'Natural vs artificial lighting balance',
      'Storage requirements',
      'Colour psychology and mood',
    ],
    faqs: [
      {
        question: 'Can you redesign my existing living room without a full renovation?',
        answer:
          'Yes. We can work with your existing structure and make transformative changes through furniture, lighting, soft furnishings, and styling.',
      },
      {
        question: 'What styles do you design in?',
        answer:
          'We work across contemporary, modern, transitional, and classic styles, always tailored to your preferences and lifestyle.',
      },
    ],
    whatsappMessage:
      'Hello Jagdamba Associates, I am interested in living room interior design. Please let me know how we can proceed.',
    seoTitle: 'Living Room Interior Design in Rewari | Jagdamba Associates',
    seoDescription:
      'Beautiful living room interiors in Rewari, Haryana. Custom furniture, lighting, and styling. Contact Jagdamba Associates — +91 98731 12413.',
  },
  {
    id: 'bedroom',
    slug: 'bedroom-interiors',
    name: 'Bedroom Interiors',
    shortDescription: 'Serene, personal bedroom spaces designed for rest and rejuvenation.',
    description:
      'A bedroom should be your sanctuary. We design bedrooms that balance comfort with aesthetics, creating spaces that promote rest and reflect your personal style through considered material choices, lighting, and custom storage solutions.',
    icon: 'BedDouble',
    heroKeyword: 'luxury bedroom interior design serene',
    features: [
      'Custom wardrobe and storage design',
      'Bed and headboard selection',
      'Bedside and ambient lighting',
      'Dressing area planning',
      'Colour and texture coordination',
      'Children\'s and guest bedroom design',
    ],
    considerations: [
      'Sleep quality and blackout requirements',
      'Storage capacity vs floor space balance',
      'Ventilation and air circulation',
      'En-suite bathroom integration',
      'Future adaptability of the space',
    ],
    faqs: [
      {
        question: 'Do you design custom wardrobes as part of bedroom interiors?',
        answer:
          'Yes, built-in wardrobes are a central part of our bedroom design. We plan storage based on your clothing volume, habits, and space available.',
      },
      {
        question: 'Can you design children\'s bedrooms?',
        answer:
          'Absolutely. We design age-appropriate children\'s rooms that are safe, stimulating, and easy to adapt as they grow.',
      },
    ],
    whatsappMessage:
      'Hello Jagdamba Associates, I am interested in bedroom interior design. Please let me know how we can get started.',
    seoTitle: 'Bedroom Interior Design in Rewari | Jagdamba Associates',
    seoDescription:
      'Custom bedroom interiors in Rewari, Haryana. Built-in wardrobes, lighting, and complete bedroom design. Call Jagdamba Associates — +91 98731 12413.',
  },
  {
    id: 'kitchen',
    slug: 'modular-kitchen-design',
    name: 'Modular Kitchen Design',
    shortDescription: 'Functional, beautiful modular kitchens tailored to your cooking style.',
    description:
      'A well-designed kitchen transforms your daily cooking experience. We design modular kitchens that maximise storage, optimise workflow, and look beautiful — with material selections that balance aesthetics with practicality.',
    icon: 'ChefHat',
    heroKeyword: 'modular kitchen interior design modern',
    features: [
      'Custom modular cabinet layout',
      'Countertop material selection',
      'Appliance planning and integration',
      'Backsplash design',
      'Under-cabinet and overhead lighting',
      'Island and breakfast bar design',
    ],
    considerations: [
      'Kitchen workflow: L-shape, U-shape, parallel, island',
      'Ventilation and exhaust planning',
      'Countertop material durability',
      'Storage for dry goods, utensils, and appliances',
      'Budget allocation across cabinets, counters, and fittings',
    ],
    faqs: [
      {
        question: 'What materials do you use for modular kitchen cabinets?',
        answer:
          'We work with a range of materials including marine plywood, MDF, HDF, and PVC, with finish options such as laminates, lacquer, acrylic, and veneer depending on your budget and preference.',
      },
      {
        question: 'How long does a modular kitchen take to install?',
        answer:
          'Modular kitchen fabrication and installation typically takes 4–8 weeks after design approval and material selection.',
      },
    ],
    whatsappMessage:
      'Hello Jagdamba Associates, I am interested in modular kitchen design. Please let me know how to get started.',
    seoTitle: 'Modular Kitchen Design in Rewari | Jagdamba Associates',
    seoDescription:
      'Premium modular kitchen design in Rewari, Haryana. Custom layouts, quality materials, and complete installation. Call +91 98731 12413.',
  },
  {
    id: 'wardrobe',
    slug: 'wardrobe-storage-design',
    name: 'Wardrobe & Storage Design',
    shortDescription: 'Custom built-in storage solutions that maximise every inch of space.',
    description:
      'Smart storage is the foundation of a clutter-free home. We design custom wardrobes, walk-in closets, and built-in storage solutions that maximise your available space while matching your interior perfectly.',
    icon: 'Package',
    heroKeyword: 'custom wardrobe closet interior design',
    features: [
      'Walk-in wardrobe planning',
      'Sliding and hinged wardrobe systems',
      'Custom internal organisation',
      'Shoe rack and accessory storage',
      'Integrated lighting',
      'Floor-to-ceiling utilisation',
    ],
    considerations: [
      'Volume and type of clothing',
      'Hanging vs folded storage ratio',
      'Depth and door swing clearance',
      'Mirror integration',
      'Ventilation within closed wardrobes',
    ],
    faqs: [
      {
        question: 'What is the difference between sliding and hinged wardrobes?',
        answer:
          'Hinged wardrobes require clearance in front for door swing but provide full access. Sliding wardrobes are better for tighter spaces but may limit simultaneous access. We help you choose based on your room layout.',
      },
      {
        question: 'Can you fit a wardrobe into an awkward space or alcove?',
        answer:
          'Yes. Custom built-in wardrobes are ideal for making use of alcoves, under-stair space, or irregular room shapes.',
      },
    ],
    whatsappMessage:
      'Hello Jagdamba Associates, I am interested in custom wardrobe and storage design. Please let me know how to proceed.',
    seoTitle: 'Wardrobe & Storage Design in Rewari | Jagdamba Associates',
    seoDescription:
      'Custom wardrobe and built-in storage solutions in Rewari, Haryana. Walk-in closets, sliding wardrobes, and more. Contact Jagdamba Associates.',
  },
  {
    id: 'bathroom',
    slug: 'bathroom-interiors',
    name: 'Bathroom Interiors',
    shortDescription: 'Refined bathroom designs that combine comfort with elegant functionality.',
    description:
      'We design bathrooms that feel like private retreats — combining quality fixtures, smart layouts, and refined finishes to create spaces that are as functional as they are beautiful.',
    icon: 'Bath',
    heroKeyword: 'luxury bathroom interior design modern',
    features: [
      'Layout and wet zone planning',
      'Tile selection and pattern design',
      'Fixture and fitting specification',
      'Shower, bath, and vanity design',
      'Lighting and ventilation planning',
      'Accessory and storage coordination',
    ],
    considerations: [
      'Waterproofing and moisture-resistant materials',
      'Natural ventilation vs exhaust fans',
      'Accessibility and safety (grab bars, slip resistance)',
      'Hot water and plumbing requirements',
      'Maintenance ease of chosen finishes',
    ],
    faqs: [
      {
        question: 'Can you retrofit a bathroom without changing plumbing?',
        answer:
          'Many improvements — tiling, fixtures, lighting, and accessories — can be made without moving plumbing. We assess your existing layout and recommend cost-effective improvement routes.',
      },
      {
        question: 'Do you recommend specific tile brands?',
        answer:
          'We work with a range of reputable suppliers and select products based on your budget, style preferences, and the technical requirements of the space.',
      },
    ],
    whatsappMessage:
      'Hello Jagdamba Associates, I am interested in bathroom interior design. Please let me know how we can get started.',
    seoTitle: 'Bathroom Interior Design in Rewari | Jagdamba Associates',
    seoDescription:
      'Custom bathroom interiors in Rewari, Haryana. Tiles, fixtures, lighting, and complete design. Call Jagdamba Associates — +91 98731 12413.',
  },
  {
    id: 'office',
    slug: 'office-interiors',
    name: 'Office Interiors',
    shortDescription: 'Professional office spaces designed for productivity and your brand identity.',
    description:
      'A well-designed office improves productivity, reflects your brand, and makes a strong impression on clients. We design workplaces that balance functionality, comfort, and professional aesthetics.',
    icon: 'Briefcase',
    heroKeyword: 'modern office interior design professional',
    features: [
      'Space planning for workflow efficiency',
      'Meeting room and cabin design',
      'Reception and client area design',
      'Ergonomic furniture selection',
      'Acoustic and lighting solutions',
      'Brand colour integration',
    ],
    considerations: [
      'Number of workstations and growth planning',
      'Collaboration vs focused work zones',
      'Privacy for calls and meetings',
      'Electrical and data points planning',
      'HVAC and air quality',
    ],
    faqs: [
      {
        question: 'Do you design both small offices and large corporate spaces?',
        answer:
          'Yes. We design offices of all sizes — from single-room setups and home offices to multi-floor corporate environments.',
      },
      {
        question: 'Can you incorporate our company branding into the design?',
        answer:
          'Absolutely. We integrate brand colours, materials, and visual elements into the interior to create a consistent brand experience.',
      },
    ],
    whatsappMessage:
      'Hello Jagdamba Associates, I am interested in office interior design. Please let me know how to get started.',
    seoTitle: 'Office Interior Design in Rewari | Jagdamba Associates',
    seoDescription:
      'Professional office interior design in Rewari, Haryana. Workstations, cabins, reception areas, and more. Call Jagdamba Associates.',
  },
  {
    id: 'commercial',
    slug: 'commercial-interiors',
    name: 'Commercial Interiors',
    shortDescription: 'Retail, hospitality, and commercial spaces that attract and engage customers.',
    description:
      'Commercial interiors are powerful business tools. We design retail stores, showrooms, clinics, restaurants, and commercial spaces that create memorable customer experiences and drive business results.',
    icon: 'Store',
    heroKeyword: 'commercial retail interior design modern showroom',
    features: [
      'Retail layout and customer flow planning',
      'Brand experience design',
      'Display and merchandise fixtures',
      'Signage integration',
      'Commercial-grade lighting design',
      'Compliance with commercial building requirements',
    ],
    considerations: [
      'Customer journey through the space',
      'Merchandise or service display hierarchy',
      'Staff workspace and back-of-house needs',
      'Durability of commercial-grade materials',
      'Compliance and fire safety requirements',
    ],
    faqs: [
      {
        question: 'What types of commercial spaces do you design?',
        answer:
          'We design retail stores, showrooms, clinics, salons, restaurants, and other commercial spaces in Rewari and surrounding areas.',
      },
      {
        question: 'How do you handle compliance requirements for commercial spaces?',
        answer:
          'We work within applicable building and safety codes and coordinate with the client\'s contractors and local authorities where required.',
      },
    ],
    whatsappMessage:
      'Hello Jagdamba Associates, I am interested in commercial interior design for my business. Please let me know how to proceed.',
    seoTitle: 'Commercial Interior Design in Rewari | Jagdamba Associates',
    seoDescription:
      'Commercial interior design for retail, showrooms, clinics, and restaurants in Rewari, Haryana. Contact Jagdamba Associates.',
  },
  {
    id: 'consultation',
    slug: 'space-planning-consultation',
    name: 'Space Planning & Consultation',
    shortDescription: 'Expert design consultation to help you plan your space with clarity and confidence.',
    description:
      'Not sure where to start? Our design consultation service gives you expert guidance on layout, materials, colour, and budget — helping you make informed decisions before committing to a full project.',
    icon: 'Ruler',
    heroKeyword: 'interior design consultation space planning blueprint',
    features: [
      'Space measurement and analysis',
      'Layout and furniture planning',
      'Colour scheme recommendations',
      'Material and product guidance',
      'Budget planning and prioritisation',
      'Written design brief and recommendations',
    ],
    considerations: [
      'Current pain points in the space',
      'Short-term changes vs long-term vision',
      'What you can do yourself vs professionally',
      'Priority areas within a constrained budget',
    ],
    faqs: [
      {
        question: 'What is included in a design consultation?',
        answer:
          'A consultation typically covers a walkthrough of your space, discussion of your requirements, initial layout ideas, and written recommendations for materials, colours, and next steps.',
      },
      {
        question: 'Can a consultation be done for a single room?',
        answer:
          'Yes, consultations can be scoped to a single room, a floor, or an entire property depending on your needs.',
      },
    ],
    whatsappMessage:
      'Hello Jagdamba Associates, I would like to book a space planning and design consultation. Please let me know your availability and process.',
    seoTitle: 'Interior Design Consultation in Rewari | Jagdamba Associates',
    seoDescription:
      'Expert interior design consultation and space planning in Rewari, Haryana. Get professional advice before committing to your project. Call +91 98731 12413.',
  },
];

export const SERVICE_CATEGORIES = SERVICES.map(s => ({ id: s.id, name: s.name, slug: s.slug }));
