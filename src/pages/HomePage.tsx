import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { BUSINESS, buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/business';
import { SERVICES } from '../data/services';
import { PROJECTS } from '../data/projects';
import { getImageUrl } from '../components/ui/UnsplashImage';

const HERO_IMG = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=85';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'We begin with a conversation — understanding your space, lifestyle, vision, and budget. No commitment required.',
  },
  {
    number: '02',
    title: 'Site Study & Planning',
    description:
      'Our team measures and analyses your space, considering light, traffic flow, and practical requirements.',
  },
  {
    number: '03',
    title: 'Design Concept',
    description:
      'We present a design concept including layouts, material palettes, and mood boards for your review.',
  },
  {
    number: '04',
    title: 'Refinement & Approval',
    description:
      'We refine the design based on your feedback until every detail feels right before work begins.',
  },
  {
    number: '05',
    title: 'Execution & Supervision',
    description:
      'We coordinate with trusted craftspeople and contractors to bring the design to life with precision.',
  },
  {
    number: '06',
    title: 'Handover & Styling',
    description:
      'We deliver a finished, styled space — ready to live in, with follow-up support if needed.',
  },
];

const FEATURED_SERVICES = SERVICES.slice(0, 6);
const FEATURED_PROJECTS = PROJECTS.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section
        className="relative min-h-screen flex flex-col justify-center pt-16 pb-6 sm:pt-20 sm:pb-8 md:pt-24 md:pb-10 overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background image & luxury overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="Thoughtfully designed residential and commercial interiors by Jagdamba Associates"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          {/* Dual-direction gradient for elite editorial legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#141412]/95 via-[#141412]/80 sm:to-[#141412]/30 to-[#141412]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141412]/90 via-transparent to-[#141412]/50" />
        </div>

        <div className="container-site relative z-10 w-full my-auto">
          <div className="max-w-3xl lg:max-w-4xl">
            {/* Architectural Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(247,244,239,0.1)] backdrop-blur-md border border-[rgba(247,244,239,0.22)] mb-2.5 sm:mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5B54F] animate-pulse" />
              <span className="text-[#F7F4EF] text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium">
                Jagdamba Associates · Interior Design & Architecture
              </span>
            </div>

            {/* Grand Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.65rem] font-light text-[#F7F4EF] leading-[1.06] tracking-[-0.025em] mb-3 sm:mb-3.5 font-serif">
              Thoughtfully Designed Spaces.{' '}
              <span className="block mt-1 italic font-normal text-[#E8DCC4] tracking-normal">
                Beautifully Lived.
              </span>
            </h1>

            {/* Expanded Lead Text */}
            <p className="text-sm sm:text-base md:text-lg text-[rgba(247,244,239,0.88)] mb-5 sm:mb-6 max-w-2xl font-light leading-relaxed">
              We design and craft bespoke residences, modular kitchens, and premium commercial environments in Rewari and across Haryana — where architectural refinement meets the warmth of everyday living.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.consultation)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#F7F4EF] text-[#242421] hover:bg-[#EAE4D8] font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:-translate-y-0.5"
                aria-label="Discuss your interior design project on WhatsApp"
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white/10 hover:bg-white/20 text-[#F7F4EF] backdrop-blur-md border border-white/25 hover:border-white/50 font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5"
                aria-label="View our project portfolio"
              >
                <span>Explore Portfolio</span>
              </Link>

              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center gap-2 text-[rgba(247,244,239,0.8)] hover:text-[#F7F4EF] text-xs sm:text-sm py-1.5 px-2 transition-colors ml-0 sm:ml-1"
                title="Direct Phone Call"
              >
                <Phone size={14} className="text-[#E5B54F]" />
                <span className="font-medium">{BUSINESS.phone}</span>
              </a>
            </div>

            {/* Trust Proof Bar */}
            <div className="pt-3.5 sm:pt-4 border-t border-[rgba(247,244,239,0.18)] flex flex-wrap items-center gap-y-2.5 gap-x-6 sm:gap-x-8">
              {/* Google Rating */}
              <div className="flex items-center gap-2.5">
                <div className="flex gap-0.5 text-[#E5B54F]" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#E5B54F]" />
                  ))}
                </div>
                <div className="leading-tight">
                  <div className="text-[#F7F4EF] text-xs sm:text-sm font-semibold tracking-wide">
                    {BUSINESS.rating.value} / 5.0 Rating
                  </div>
                  <div className="text-[rgba(247,244,239,0.65)] text-[11px] sm:text-xs">
                    {BUSINESS.rating.count}+ Verified Google Reviews
                  </div>
                </div>
              </div>

              {/* Studio Location */}
              <div className="flex items-center gap-2 text-[rgba(247,244,239,0.8)] text-xs sm:text-sm">
                <MapPin size={15} className="text-[#E5B54F] shrink-0" aria-hidden="true" />
                <span>Opposite BMG Mall, Sector 5, Rewari</span>
              </div>

              {/* Turnkey Assurance */}
              <div className="hidden sm:flex items-center gap-2 text-[rgba(247,244,239,0.8)] text-xs sm:text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                <span>Complete Turnkey Execution</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 scroll-indicator text-[rgba(247,244,239,0.5)]"
          aria-hidden="true"
        >
          <ChevronDown size={22} />
        </div>
      </section>

      {/* ============ SERVICES OVERVIEW ============ */}
      <section className="section-padding bg-[#F7F4EF]" aria-labelledby="services-heading">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="section-label">What We Do</span>
              <h2 id="services-heading" className="display-md text-[#242421]">
                Interior Design Services
              </h2>
              <div className="divider" aria-hidden="true" />
              <p className="body-md text-[#6B6257] max-w-lg">
                From a single room to a complete home or commercial space — we tailor our approach to your vision, timeline, and budget.
              </p>
            </div>
            <Link to="/services" className="btn-outline shrink-0">
              All Services
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_SERVICES.map(service => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group card-base block overflow-hidden"
                aria-label={`Learn more about ${service.name}`}
              >
                <div className="img-overlay h-52">
                  <img
                    src={getImageUrl(service.heroKeyword)}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-medium text-[#242421] mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#6B6257] leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-medium text-[#242421] group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight size={12} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="section-padding bg-[#E6DDD1]" aria-labelledby="projects-heading">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="section-label">Our Work</span>
              <h2 id="projects-heading" className="display-md text-[#242421]">
                Selected Projects
              </h2>
              <div className="divider" aria-hidden="true" />
              <p className="text-sm text-[#9A8E84] mt-2 italic">
                Demonstration portfolio — actual client projects will be showcased with consent.
              </p>
            </div>
            <Link to="/projects" className="btn-outline shrink-0">
              Full Portfolio
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_PROJECTS.map((project, i) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className={`group relative overflow-hidden block ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-1' : ''
                }`}
                aria-label={`View project: ${project.title}`}
              >
                <div className={`img-overlay ${i === 0 ? 'h-80 md:h-96' : 'h-64'}`}>
                  <img
                    src={getImageUrl(project.imageQuery)}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#242421]/0 group-hover:bg-[#242421]/40 transition-all duration-300 flex items-end p-5">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="section-label text-[rgba(247,244,239,0.7)]">
                        {project.category}
                      </span>
                      <h3
                        className="text-[#F7F4EF] text-lg font-medium"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  {/* Demo badge */}
                  <div className="absolute top-2 left-2 bg-[rgba(36,36,33,0.75)] text-[#F7F4EF] text-[10px] uppercase tracking-widest px-2 py-1">
                    Sample
                  </div>
                </div>
                {/* Below image info (visible without hover) */}
                <div className="py-3">
                  <span className="section-label" style={{ color: 'var(--taupe)', marginBottom: '0.25rem' }}>
                    {project.category}
                  </span>
                  <h3
                    className="text-base font-medium text-[#242421]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT INTRO ============ */}
      <section className="section-padding bg-[#F7F4EF]" aria-labelledby="about-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="img-overlay h-96 lg:h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1000&q=80"
                  alt="Interior design studio — professional design space"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Accent element */}
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E6DDD1] -z-10 hidden lg:block"
                aria-hidden="true"
              />
            </div>

            {/* Text */}
            <div>
              <span className="section-label">About Us</span>
              <h2 id="about-heading" className="display-md text-[#242421] mb-6">
                Design That Reflects You
              </h2>
              <div className="divider" aria-hidden="true" />
              <p className="body-md text-[#6B6257] mb-5">
                Jagdamba Associates is an interior design firm based in Rewari, Haryana. We work with homeowners, businesses, and developers to create spaces that are beautiful, purposeful, and built to last.
              </p>
              <p className="body-md text-[#6B6257] mb-5">
                Our approach is collaborative and detail-oriented. We listen carefully to understand how you use your space, what matters to you aesthetically, and what your practical constraints are — then we design around those realities.
              </p>
              <p className="body-md text-[#6B6257] mb-8">
                From a single modular kitchen to a complete home or commercial fit-out, we bring the same care and quality to every project.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-outline">
                  About Jagdamba Associates
                </Link>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-2 text-sm font-medium text-[#242421] hover:text-[#6B6257] transition-colors"
                  aria-label={`Call us at ${BUSINESS.phone}`}
                >
                  <Phone size={16} aria-hidden="true" />
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DESIGN PROCESS ============ */}
      <section className="section-padding bg-[#242421]" aria-labelledby="process-heading">
        <div className="container-site">
          <div className="mb-14">
            <span className="section-label text-[#B6A797]">How We Work</span>
            <h2
              id="process-heading"
              className="display-md text-[#F7F4EF]"
            >
              Our Design Process
            </h2>
            <div className="divider" style={{ background: 'var(--taupe)' }} aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROCESS_STEPS.map(step => (
              <div key={step.number} className="process-step">
                <div className="process-number" aria-hidden="true">
                  {step.number}
                </div>
                <div>
                  <h3
                    className="text-lg font-medium text-[#F7F4EF] mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#9A8E84] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUST / RATING ============ */}
      <section className="section-padding bg-[#F7F4EF]" aria-labelledby="reviews-heading">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Client Reviews</span>
            <h2 id="reviews-heading" className="display-md text-[#242421] mb-4">
              What Our Clients Say
            </h2>
            <div className="divider mx-auto" aria-hidden="true" />
          </div>

          {/* Google Rating Badge */}
          <div className="flex justify-center mb-10">
            <a
              href={BUSINESS.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border border-[#DDD5C8] px-6 py-4 hover:shadow-md transition-shadow"
              aria-label={`View our ${BUSINESS.rating.value} star rating on Google from ${BUSINESS.rating.count} reviews`}
            >
              {/* Google G */}
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="star-filled fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-[#242421]">{BUSINESS.rating.value}</span>
                </div>
                <p className="text-xs text-[#9A8E84]">
                  {BUSINESS.rating.count} reviews on Google
                </p>
              </div>
            </a>
          </div>

          <p className="text-center text-sm text-[#9A8E84] italic mb-8">
            Rating as supplied by the business. Verify on Google before publishing.
          </p>

          <div className="text-center">
            <Link to="/reviews" className="btn-outline">
              Read Reviews
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHATSAPP CTA BANNER ============ */}
      <section className="bg-[#242421] py-20" aria-labelledby="whatsapp-cta-heading">
        <div className="container-site text-center">
          <span className="section-label text-[#B6A797]">Ready to Start?</span>
          <h2
            id="whatsapp-cta-heading"
            className="display-md text-[#F7F4EF] mb-5"
          >
            Let's Design Your Space Together
          </h2>
          <p className="body-lg text-[#9A8E84] max-w-xl mx-auto mb-10">
            Share your project details on WhatsApp and we'll get back to you promptly. No forms, no waiting — just a direct conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              aria-label="Chat with Jagdamba Associates on WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="btn-outline-light"
              aria-label={`Call us at ${BUSINESS.phone}`}
            >
              <Phone size={16} aria-hidden="true" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ============ CONTACT / LOCATION ============ */}
      <section className="section-padding bg-[#F7F4EF]" aria-labelledby="location-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Find Us</span>
              <h2 id="location-heading" className="display-sm text-[#242421] mb-6">
                Visit Our Studio
              </h2>
              <div className="divider" aria-hidden="true" />

              <address className="not-italic mb-6">
                <div className="flex items-start gap-3 text-[#6B6257] mb-4">
                  <MapPin size={18} className="text-[#B6A797] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-[#242421]">{BUSINESS.name}</p>
                    <p>{BUSINESS.address.line1}</p>
                    <p>{BUSINESS.address.line2}</p>
                    <p>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.pincode}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[#6B6257] mb-4">
                  <Phone size={18} className="text-[#B6A797] shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="hover:text-[#242421] transition-colors"
                    aria-label={`Call ${BUSINESS.phone}`}
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </address>

              <p className="text-sm text-[#9A8E84] italic mb-6">
                Closing time: 6:00 PM. Full hours not confirmed — please call before visiting.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  aria-label="Get directions to Jagdamba Associates on Google Maps"
                >
                  <MapPin size={14} aria-hidden="true" />
                  Get Directions
                </a>
                <Link to="/contact" className="btn-primary">
                  Contact Us
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Embedded map */}
            <div className="h-80 lg:h-96 bg-[#E6DDD1] overflow-hidden">
              <iframe
                title="Jagdamba Associates location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.2!2d76.6184!3d28.1973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDExJzUwLjMiTiA3NsKwMzcnMDYuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
