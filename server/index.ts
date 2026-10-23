import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import { z } from 'zod';

// ============================================================
// Environment
// ============================================================
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || '';
const NODE_ENV = process.env.NODE_ENV || 'development';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';

// ============================================================
// Enquiry Mongoose Schema
// ============================================================
const enquiryMongooseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxlength: 100 },
    phone: { type: String, required: true, maxlength: 20 },
    email: { type: String, maxlength: 200 },
    projectType: { type: String, required: true },
    budgetRange: { type: String },
    contactMethod: { type: String },
    message: { type: String, maxlength: 2000 },
    status: {
      type: String,
      enum: ['new', 'contacted', 'in-progress', 'closed'],
      default: 'new',
    },
    ip: { type: String },  // for rate-limit logging only, not exposed
  },
  { timestamps: true }
);

const Enquiry = mongoose.model('Enquiry', enquiryMongooseSchema);

// ============================================================
// Zod validation schema (server-side)
// ============================================================
const enquirySchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(10).max(15).regex(/^[+]?[0-9\s\-().]{10,15}$/),
  email: z.string().email().optional().or(z.literal('')),
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
  ]),
  budgetRange: z
    .enum(['below-3l', '3l-7l', '7l-15l', '15l-30l', 'above-30l', 'not-sure'])
    .optional(),
  contactMethod: z.enum(['whatsapp', 'call', 'email']).optional(),
  message: z.string().max(2000).optional(),
  // Honeypot — must be absent or empty
  website: z.string().max(0).optional(),
});

// ============================================================
// Express App
// ============================================================
const app = express();

// Security
app.use(helmet());

// CORS
app.use(
  cors({
    origin: NODE_ENV === 'production' ? ALLOWED_ORIGIN : '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

// Body parser
app.use(express.json({ limit: '10kb' }));

// Rate limiting: max 10 enquiry submissions per 15 minutes per IP
const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    error: 'Too many requests from this IP. Please try again in 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// ============================================================
// Health check
// ============================================================
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    dbConnected: mongoose.connection.readyState === 1,
    timestamp: new Date().toISOString(),
  });
});

// ============================================================
// POST /api/enquiries
// ============================================================
app.post('/api/enquiries', enquiryLimiter, async (req, res) => {
  // Honeypot check
  if (req.body?.website) {
    // Silently reject spam
    return res.json({ success: true });
  }

  // Validate
  const result = enquirySchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    });
  }

  const data = result.data;

  // Check DB
  if (mongoose.connection.readyState !== 1) {
    console.error('[enquiry] MongoDB not connected — cannot save enquiry');
    return res.status(503).json({
      error: 'Database temporarily unavailable. Please try WhatsApp or call us directly.',
    });
  }

  try {
    const enquiry = new Enquiry({
      name: data.name.trim(),
      phone: data.phone.trim(),
      email: data.email?.trim() || undefined,
      projectType: data.projectType,
      budgetRange: data.budgetRange || undefined,
      contactMethod: data.contactMethod || undefined,
      message: data.message?.trim() || undefined,
      ip: req.ip,
    });

    await enquiry.save();

    // Do NOT log PII in production
    if (NODE_ENV !== 'production') {
      console.log(`[enquiry] New enquiry saved: ${enquiry._id} — ${data.projectType}`);
    }

    return res.status(201).json({ success: true, id: enquiry._id });
  } catch (err) {
    console.error('[enquiry] Save error:', err);
    return res.status(500).json({
      error: 'Failed to save enquiry. Please try WhatsApp or call us directly.',
    });
  }
});

// ============================================================
// MongoDB connection
// ============================================================
async function connectDB() {
  if (!MONGODB_URI) {
    console.warn(
      '[db] MONGODB_URI not set. The form submission endpoint will return 503 until configured.'
    );
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log('[db] MongoDB connected');
  } catch (err) {
    console.error('[db] MongoDB connection failed:', err);
    console.warn('[db] Server will run without database — form submissions will return 503.');
  }
}

// ============================================================
// Start server
// ============================================================
async function start() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`[server] Jagdamba Associates API running on http://localhost:${PORT}`);
    console.log(`[server] Health: http://localhost:${PORT}/api/health`);
  });
}

start();
