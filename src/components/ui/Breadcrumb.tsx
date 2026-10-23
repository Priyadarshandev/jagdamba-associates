import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <Link to="/" className="hover:text-[#242421] transition-colors flex items-center gap-1">
        <Home size={12} aria-hidden="true" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          <ChevronRight size={12} aria-hidden="true" />
          {item.to ? (
            <Link to={item.to} className="hover:text-[#242421] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#242421]" aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
