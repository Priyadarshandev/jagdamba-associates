import { z } from 'zod';

export const enquirySchema = z.object({
  name: z
    .string()
    .min(2, 'Please enter your full name (at least 2 characters)')
    .max(100, 'Name is too long'),
  phone: z
    .string()
    .min(10, 'Please enter a valid 10-digit phone number')
    .max(15, 'Phone number is too long')
    .regex(
      /^[+]?[0-9\s\-().]{10,15}$/,
      'Please enter a valid phone number'
    ),
  email: z
    .string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  projectType: z.enum([
    'residential',
    'living-room',
    'bedroom',
    'kitchen',
    'wardrobe',
    'bathroom',
    'office',
    'commercial',
    'consultation',
    'other',
  ], {
    message: 'Please select a project type',
  }),
  budgetRange: z
    .enum([
      'below-3l',
      '3l-7l',
      '7l-15l',
      '15l-30l',
      'above-30l',
      'not-sure',
    ])
    .optional(),
  contactMethod: z
    .enum(['whatsapp', 'call', 'email'])
    .optional(),
  message: z
    .string()
    .max(2000, 'Message is too long (max 2000 characters)')
    .optional(),
  // Honeypot field — must be empty
  website: z.string().max(0, 'Spam detected').optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

export const PROJECT_TYPE_OPTIONS = [
  { value: 'residential', label: 'Residential Interior Design' },
  { value: 'living-room', label: 'Living Room' },
  { value: 'bedroom', label: 'Bedroom' },
  { value: 'kitchen', label: 'Modular Kitchen' },
  { value: 'wardrobe', label: 'Wardrobe & Storage' },
  { value: 'bathroom', label: 'Bathroom' },
  { value: 'office', label: 'Office Interior' },
  { value: 'commercial', label: 'Commercial Space' },
  { value: 'consultation', label: 'Design Consultation' },
  { value: 'other', label: 'Other / Not Sure' },
] as const;

export const BUDGET_OPTIONS = [
  { value: 'below-3l', label: 'Below ₹3 Lakh' },
  { value: '3l-7l', label: '₹3 – ₹7 Lakh' },
  { value: '7l-15l', label: '₹7 – ₹15 Lakh' },
  { value: '15l-30l', label: '₹15 – ₹30 Lakh' },
  { value: 'above-30l', label: 'Above ₹30 Lakh' },
  { value: 'not-sure', label: 'Not Sure Yet' },
] as const;

export const CONTACT_METHOD_OPTIONS = [
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'call', label: 'Phone Call' },
  { value: 'email', label: 'Email' },
] as const;
