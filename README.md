# Jagdamba Associates — Interior Design Website

Premium interior design website for **Jagdamba Associates**, Rewari, Haryana.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite + TypeScript |
| Styling | Tailwind CSS v4 |
| Routing | React Router v6 |
| Icons | Lucide React |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Backend | Node.js + Express |
| Database | MongoDB + Mongoose |

---

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, Layout
│   │   └── ui/             # Reusable components
│   ├── data/               # Business data, services, projects
│   ├── pages/              # All page components
│   ├── schemas/            # Zod validation schemas
│   ├── App.tsx             # Router
│   └── main.tsx            # Entry point
├── server/
│   └── index.ts            # Express API server
├── public/                 # Static assets
├── .env.example            # Environment variable template
└── index.html              # HTML entry with SEO meta tags
```

---

## Quick Start

### 1. Install dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Configure environment variables

```bash
cp .env.example .env
# Edit .env with your MongoDB URI and other settings
```

### 3. Run the frontend (development)

```bash
npm run dev
```

Frontend will run at: `http://localhost:5173`

### 4. Run the backend (optional — required for form submissions)

```bash
npm run server
```

Backend API will run at: `http://localhost:3001`

> **Note:** The frontend works fully without the backend. If the backend is unavailable, the contact form will show a WhatsApp fallback option.

---

## Environment Variables

See `.env.example` for all required and optional variables.

### Backend (`server/.env` or root `.env`)

| Variable | Required | Description |
|---|---|---|
| `MONGODB_URI` | For forms | MongoDB connection string |
| `PORT` | No | API server port (default: 3001) |
| `NODE_ENV` | No | `development` or `production` |
| `ALLOWED_ORIGIN` | Production | Your frontend domain for CORS |

---

## MongoDB Setup

### Option 1: MongoDB Atlas (recommended for production)

1. Create a free account at [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a new cluster
3. Create a database user with password
4. Get the connection string (URI)
5. Add to `.env`: `MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/jagdamba`

### Option 2: Local MongoDB

```bash
# Install MongoDB locally, then:
MONGODB_URI=mongodb://localhost:27017/jagdamba
```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build production frontend |
| `npm run preview` | Preview production build |
| `npm run server` | Start Express API (requires ts-node) |

---

## Deployment

### Frontend (Vercel / Netlify)

1. Build: `npm run build`
2. Deploy the `dist/` folder
3. Configure SPA routing (all routes → `index.html`)
4. Set environment variables in your hosting dashboard

**Vercel `vercel.json` rewrite rule:**
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Netlify `_redirects` file (in `public/`):**
```
/*  /index.html  200
```

### Backend (Railway / Render / VPS)

1. Set `MONGODB_URI`, `ALLOWED_ORIGIN`, `NODE_ENV=production`
2. Deploy `server/` folder
3. Update `ALLOWED_ORIGIN` to your frontend domain

---

## Business Assets Still Required

The following items need to be supplied or verified before the site goes live:

- [ ] **Google Business Profile URL** — verify the exact listing URL for reviews and rating
- [ ] **Google rating** — confirm current rating (supplied as 5.0/79 reviews)
- [ ] **Full opening hours** — only closing time (6 PM) was confirmed
- [ ] **Company logo** — add to `public/` and update Navbar
- [ ] **Favicon** — add `public/favicon.svg` (or .ico)
- [ ] **Social media** — Instagram/Facebook profile URLs
- [ ] **Email address** — add to contact details if desired
- [ ] **Actual project photos** — replace demo portfolio with real client projects (with consent)
- [ ] **Map embed URL** — verify/replace with the correct Google Maps embed for the exact location

---

## SEO Notes

- Unique page titles and meta descriptions are in `index.html` and individual pages
- LocalBusiness structured data is in `index.html`
- Service structured data is in `ServiceDetailPage.tsx`
- Contact structured data is in `ContactPage.tsx`
- Update canonical URL (`https://jagdambaassociates.in`) with actual domain
- Submit `sitemap.xml` to Google Search Console after deployment

---

## Notes on Content Integrity

- No fake reviews, testimonials, or invented company history is present in this codebase
- All project images are clearly labelled as demonstration/sample content
- Opening hours show only what was confirmed (closing time only)
- Google rating is shown with a note to verify against the live listing before publishing
- Customer-supplied business info is used as-is; independently verify critical facts
