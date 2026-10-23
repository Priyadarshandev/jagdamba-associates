import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone, MapPin, CheckCircle } from 'lucide-react';
import { BUSINESS, buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/business';

const PHILOSOPHY_POINTS = [
  {
    title: 'Function First',
    description:
      'Every design decision begins with how the space will be used. A beautiful room that doesn\'t work for its occupants is not a successful design.',
  },
  {
    title: 'Honest Aesthetics',
    description:
      'We favour honest materials, careful proportions, and considered details over trends. Good design ages gracefully.',
  },
  {
    title: 'Your Brief, Our Craft',
    description:
      'We listen before we design. Your lifestyle, preferences, and constraints shape every space we create — we are the craftspeople who realise your vision.',
  },
  {
    title: 'Transparent Process',
    description:
      'We communicate clearly throughout the project — on timelines, budgets, and decisions. No surprises.',
  },
];

const PROCESS_STEPS = [
  { number: '01', title: 'Initial Consultation', description: 'We begin with a free conversation to understand your project, space, and vision.' },
  { number: '02', title: 'Site Measurement & Analysis', description: 'Our team visits your space to measure, observe light conditions, and identify constraints and opportunities.' },
  { number: '03', title: 'Design Concept Development', description: 'We develop a design concept — including layouts, material palettes, and mood boards — for your review.' },
  { number: '04', title: 'Design Refinement', description: 'We iterate with you until every element of the design feels right. Your feedback drives this stage.' },
  { number: '05', title: 'Contractor Coordination', description: 'We coordinate with skilled craftspeople and suppliers, managing the execution to match design intent.' },
  { number: '06', title: 'Final Handover', description: 'We deliver a finished, styled space and remain available for follow-up questions or adjustments.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-[#242421] overflow-hidden"
        aria-label="About page hero"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&q=75"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="container-site relative z-10">
          <span className="section-label text-[#B6A797]">About</span>
          <h1 className="display-lg text-[#F7F4EF] max-w-2xl mb-6">
            Jagdamba Associates
          </h1>
          <p className="hindi text-[#B6A797] text-lg mb-6">जगदम्बा एसोसिएट्स</p>
          <p className="body-lg text-[rgba(247,244,239,0.75)] max-w-xl">
            An interior design studio based in Rewari, Haryana — creating thoughtful, beautiful spaces for homes and businesses.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-[#F7F4EF]" aria-labelledby="about-intro-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Who We Are</span>
              <h2 id="about-intro-heading" className="display-md text-[#242421] mb-6">
                Interior Design in Rewari, Haryana
              </h2>
              <div className="divider" aria-hidden="true" />
              <p className="body-md text-[#6B6257] mb-5">
                Jagdamba Associates is an interior design practice based in Rewari, Haryana, serving homeowners, apartment residents, and businesses across the region.
              </p>
              <p className="body-md text-[#6B6257] mb-5">
                We work on residential projects — complete home interiors, individual rooms, modular kitchens, and wardrobes — as well as commercial and office spaces of all sizes.
              </p>
              <p className="body-md text-[#6B6257] mb-8">
                Our studio is located at Office No. 265, opposite BMG Mall, Sector 5, Rewari. We welcome enquiries by phone, WhatsApp, or in person.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.consultation)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={16} />
                  Discuss Your Project
                </a>
                <a href={`tel:${BUSINESS.phone}`} className="btn-outline">
                  <Phone size={16} />
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="img-overlay h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"
                  alt="Interior design drafting and space planning process"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className="absolute -bottom-5 -left-5 w-24 h-24 bg-[#E6DDD1] -z-10 hidden lg:block"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section-padding bg-[#E6DDD1]" aria-labelledby="philosophy-heading">
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <span className="section-label">Our Approach</span>
            <h2 id="philosophy-heading" className="display-md text-[#242421]">
              Design Philosophy
            </h2>
            <div className="divider" aria-hidden="true" />
            <p className="body-md text-[#6B6257]">
              We believe good interior design is built on listening, craft, and restraint — not complexity for its own sake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PHILOSOPHY_POINTS.map(point => (
              <div key={point.title} className="bg-[#F7F4EF] p-8">
                <h3
                  className="text-xl font-medium text-[#242421] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {point.title}
                </h3>
                <p className="text-sm text-[#6B6257] leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section-padding bg-[#F7F4EF]" aria-labelledby="process-heading">
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <span className="section-label">How We Work</span>
            <h2 id="process-heading" className="display-md text-[#242421]">
              Our Design Process
            </h2>
            <div className="divider" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROCESS_STEPS.map(step => (
              <div key={step.number} className="flex gap-6">
                <div
                  className="font-serif text-5xl font-light text-[#DDD5C8] leading-none shrink-0 w-12"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <div>
                  <h3
                    className="text-lg font-medium text-[#242421] mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B6257] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-[#242421]" aria-labelledby="service-area-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label text-[#B6A797]">Where We Work</span>
              <h2 id="service-area-heading" className="display-md text-[#F7F4EF] mb-6">
                Service Area
              </h2>
              <div className="divider" style={{ background: 'var(--taupe)' }} aria-hidden="true" />
              <p className="body-md text-[#9A8E84] mb-6">
                We are based in Rewari, Haryana and primarily serve clients in Rewari and surrounding areas, including Dharuhera, Bhiwadi, Bawal, and parts of the NCR.
              </p>
              <p className="body-md text-[#9A8E84] mb-8">
                If you are outside our primary area and have an interesting project, please reach out — we consider requests case by case.
              </p>
              <div className="flex flex-wrap gap-2">
                {BUSINESS.serviceArea.map(area => (
                  <span
                    key={area}
                    className="px-3 py-1.5 border border-[rgba(247,244,239,0.15)] text-sm text-[#B6A797]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 border border-[rgba(247,244,239,0.1)]">
                <MapPin size={18} className="text-[#B6A797] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-[#F7F4EF] font-medium mb-1">Our Studio</p>
                  <address className="not-italic text-sm text-[#9A8E84] leading-relaxed">
                    {BUSINESS.address.line1}<br />
                    {BUSINESS.address.line2}<br />
                    {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.pincode}
                  </address>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 border border-[rgba(247,244,239,0.1)]">
                <Phone size={18} className="text-[#B6A797] shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[#F7F4EF] font-medium mb-1">Call or WhatsApp</p>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="text-sm text-[#9A8E84] hover:text-[#F7F4EF] transition-colors"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light w-full justify-center mt-2 inline-flex"
              >
                <MapPin size={14} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Elevated Luxury CTA Banner */}
      <section className="section-padding bg-[#F7F4EF] relative overflow-hidden" aria-labelledby="about-cta-heading">
        {/* Subtle decorative background motif */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#EAE3D6] to-transparent rounded-full blur-3xl -z-10" />
        </div>

        <div className="container-site max-w-5xl relative z-10">
          <div className="bg-[#FAF8F5] border border-[#E5DFD4] p-8 md:p-14 lg:p-16 shadow-[0_20px_50px_rgba(36,36,33,0.04)] relative overflow-hidden">
            {/* Top Corner Architectural Accent */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#EBE4D8] to-transparent pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#D5CCC0] text-[#7A7064] text-xs uppercase tracking-widest mb-6 bg-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                Complimentary Design Consultation
              </div>

              {/* Main Heading */}
              <h2 id="about-cta-heading" className="display-md text-[#242421] mb-5">
                Ready to Shape a Space That Feels Distinctly Yours?
              </h2>

              <p className="body-lg text-[#6B6257] mb-10 leading-relaxed">
                Whether you’re conceptualising a new home in Rewari, refining a modular kitchen, or redesigning an entire commercial floor, our design studio is here to bring clarity and craftsmanship to your vision.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.consultation)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full sm:w-auto justify-center shadow-sm hover:shadow-md"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                  <span className="text-[11px] font-normal opacity-90 pl-1">· Instant Reply</span>
                </a>

                <Link to="/contact" className="btn-primary w-full sm:w-auto justify-center">
                  Book Studio Visit
                  <ArrowRight size={14} />
                </Link>

                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="btn-outline w-full sm:w-auto justify-center text-sm"
                  title="Direct Phone Call"
                >
                  <Phone size={14} />
                  <span>{BUSINESS.phone}</span>
                </a>
              </div>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#E8E2D8] text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#8C7E6D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#242421]">No Obligation Briefing</h4>
                    <p className="text-xs text-[#7A7064] mt-0.5 leading-relaxed">30-minute discovery discussion to explore layouts, budget, and scope.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#8C7E6D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#242421]">Transparent Estimates</h4>
                    <p className="text-xs text-[#7A7064] mt-0.5 leading-relaxed">Clear bill of quantities with honest material specifications.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#8C7E6D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#242421]">Rewari Studio Presence</h4>
                    <p className="text-xs text-[#7A7064] mt-0.5 leading-relaxed">Visit our studio opposite BMG Mall, Sector 5 for tactile samples.</p>
                  </div>
                </div>
              </div>

              {/* Studio Hours Note */}
              <p className="text-xs text-[#8C8276] mt-8 tracking-wide">
                Studio Hours: Mon – Sat, 9:30 AM – 6:00 PM · Opposite BMG Mall, Sector 5, Rewari, Haryana
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
