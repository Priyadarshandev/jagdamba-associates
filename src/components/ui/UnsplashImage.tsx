import { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface UnsplashImageProps {
  query: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  /** If true, show a "demo image" badge */
  isDemo?: boolean;
}

// Use a curated set of Unsplash photo IDs for interior design
// These are stable, high-quality interior design images
const INTERIOR_IMAGES: Record<string, string> = {
  'contemporary living room interior warm neutral':
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
  'modern modular kitchen white minimal interior':
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  'serene master bedroom interior design soft lighting':
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80',
  'luxury bathroom spa interior design tiles':
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
  'modern professional office interior design open plan':
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  'complete apartment interior design modern Indian':
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
  'elegant dining room interior design statement lighting':
    'https://images.unsplash.com/photo-1549497538-303791108f95?w=1200&q=80',
  "children's bedroom interior design playful colorful":
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  'retail showroom interior design modern luxury':
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
  'modern residential interior design living room':
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
  'elegant modern living room interior design':
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80',
  'luxury bedroom interior design serene':
    'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80',
  'modern modular kitchen interior':
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  'custom wardrobe closet interior design':
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  'luxury bathroom interior design modern':
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
  'modern office interior design professional':
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  'commercial retail interior design modern showroom':
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
  'interior design consultation space planning blueprint':
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
  // Hero image
  'hero interior design rewari':
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=85',
  'about interior design studio':
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80',
  'design process planning':
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
};

// Fallback images if query not found
const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
];

export function getImageUrl(query: string): string {
  return INTERIOR_IMAGES[query] || FALLBACK_IMAGES[Math.abs(hashCode(query)) % FALLBACK_IMAGES.length];
}

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

export default function UnsplashImage({
  query,
  alt,
  className = '',
  loading = 'lazy',
  isDemo = false,
}: UnsplashImageProps) {
  const [error, setError] = useState(false);
  const src = getImageUrl(query);

  return (
    <div className="relative overflow-hidden">
      {error ? (
        <div className={`${className} bg-[#E6DDD1] flex items-center justify-center`}>
          <AlertCircle size={32} className="text-[#B6A797]" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={className}
          loading={loading}
          onError={() => setError(true)}
        />
      )}
      {isDemo && (
        <div className="absolute top-2 left-2 bg-[rgba(36,36,33,0.75)] text-[#F7F4EF] text-[10px] uppercase tracking-widest px-2 py-1 backdrop-blur-sm">
          Sample Image
        </div>
      )}
    </div>
  );
}
