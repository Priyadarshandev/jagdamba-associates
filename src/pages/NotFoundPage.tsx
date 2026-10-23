import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center pt-20">
      <div className="container-site text-center py-20">
        <div
          className="text-8xl font-light text-[#DDD5C8] mb-4 leading-none"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          aria-hidden="true"
        >
          404
        </div>
        <h1
          className="text-3xl font-medium text-[#242421] mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Page Not Found
        </h1>
        <p className="text-[#6B6257] max-w-sm mx-auto mb-10">
          The page you're looking for doesn't exist. It may have been moved or the URL might be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home size={16} />
            Go Home
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Us
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
