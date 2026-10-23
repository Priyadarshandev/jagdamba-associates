import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { getImageUrl } from '../components/ui/UnsplashImage';

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 md:pt-44 md:pb-20 bg-[#F7F4EF]"
        aria-label="Services page hero"
      >
        <div className="container-site">
          <span className="section-label">Services</span>
          <h1 className="display-lg text-[#242421] max-w-2xl mb-5">
            Interior Design Services
          </h1>
          <div className="divider" aria-hidden="true" />
          <p className="body-lg text-[#6B6257] max-w-xl">
            We offer a full range of residential and commercial interior design services in Rewari, Haryana. Each project is approached individually — your space, your brief, your vision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[#F7F4EF]" aria-labelledby="services-list-heading">
        <div className="container-site">
          <h2 id="services-list-heading" className="sr-only">All Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(service => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group card-base block overflow-hidden"
                aria-label={`${service.name} — click to learn more`}
              >
                {/* Image */}
                <div className="img-overlay h-56">
                  <img
                    src={getImageUrl(service.heroKeyword)}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2
                    className="text-xl font-medium text-[#242421] mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.name}
                  </h2>
                  <p className="text-sm text-[#6B6257] leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Features preview */}
                  <ul className="space-y-1 mb-5" aria-label={`Key features of ${service.name}`}>
                    {service.features.slice(0, 3).map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#9A8E84]">
                        <div
                          className="w-1 h-1 rounded-full bg-[#B6A797] shrink-0"
                          aria-hidden="true"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-medium text-[#242421] group-hover:gap-2 transition-all">
                    View Service
                    <ArrowRight size={12} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-10 bg-[#E6DDD1]">
        <div className="container-site">
          <p className="text-sm text-[#9A8E84] text-center italic max-w-2xl mx-auto">
            These service categories represent the types of projects we work on. Confirm your specific requirements by contacting us directly — we tailor our approach to every project.
          </p>
        </div>
      </section>
    </>
  );
}
