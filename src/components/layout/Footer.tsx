import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import { BUSINESS } from '../../data/business';

const FOOTER_SERVICES = [
  { label: 'Residential Design', to: '/services/residential-interior-design' },
  { label: 'Living Room', to: '/services/living-room-interiors' },
  { label: 'Bedroom', to: '/services/bedroom-interiors' },
  { label: 'Modular Kitchen', to: '/services/modular-kitchen-design' },
  { label: 'Wardrobe & Storage', to: '/services/wardrobe-storage-design' },
  { label: 'Office Interiors', to: '/services/office-interiors' },
  { label: 'Commercial Interiors', to: '/services/commercial-interiors' },
  { label: 'Consultation', to: '/services/space-planning-consultation' },
];

const FOOTER_NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const year = CURRENT_YEAR;

  return (
    <footer className="bg-[#242421] text-[#F7F4EF]" role="contentinfo">
      {/* WhatsApp Banner */}
      <div className="border-b border-[rgba(247,244,239,0.1)]">
        <div className="container-site py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2
              className="text-2xl font-medium text-[#F7F4EF] mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Ready to transform your space?
            </h2>
            <p className="text-[#B6A797] text-sm">
              Message us on WhatsApp to discuss your project — it takes just a minute.
            </p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent('Hello Jagdamba Associates, I am interested in your interior design services. I would like to discuss my project. Please let me know the next steps.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp shrink-0"
            aria-label="Chat with Jagdamba Associates on WhatsApp"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" aria-label="Jagdamba Associates home">
              <div
                className="text-xl font-medium text-[#F7F4EF] mb-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Jagdamba Associates
              </div>
              <div className="hindi text-sm text-[#B6A797] mb-4">जगदम्बा एसोसिएट्स</div>
            </Link>
            <p className="text-[#9A8E84] text-sm leading-relaxed mb-6">
              Premium interior design services in Rewari, Haryana. Creating beautiful, functional spaces for homes and businesses.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-3 text-sm text-[#B6A797] hover:text-[#F7F4EF] transition-colors"
                aria-label={`Call us at ${BUSINESS.phone}`}
              >
                <Phone size={14} className="shrink-0" />
                {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-[#B6A797] hover:text-[#F7F4EF] transition-colors"
                aria-label="Get directions to our office"
              >
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span>
                  {BUSINESS.address.line1}, {BUSINESS.address.line2},<br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.pincode}
                </span>
              </a>
            </div>

            {/* Social links — add when social profiles are confirmed */}
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium text-[#9A8E84] mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {FOOTER_NAV.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#B6A797] hover:text-[#F7F4EF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium text-[#9A8E84] mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {FOOTER_SERVICES.map(service => (
                <li key={service.to}>
                  <Link
                    to={service.to}
                    className="text-sm text-[#B6A797] hover:text-[#F7F4EF] transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Map CTA */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium text-[#9A8E84] mb-5">
              Visit Us
            </h3>
            <address className="not-italic text-sm text-[#B6A797] leading-relaxed mb-4">
              {BUSINESS.address.line1}<br />
              {BUSINESS.address.line2}<br />
              {BUSINESS.address.city}, {BUSINESS.address.state}<br />
              {BUSINESS.address.pincode}
            </address>
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A8E84] hover:text-[#F7F4EF] border border-[rgba(247,244,239,0.15)] px-4 py-2.5 transition-colors"
            >
              <ExternalLink size={12} />
              Get Directions
            </a>

            <div className="mt-6 pt-6 border-t border-[rgba(247,244,239,0.1)]">
              <p className="text-xs text-[#6B6257] mb-2">Closing time</p>
              <p className="text-sm text-[#B6A797]">6:00 PM</p>
              <p className="text-xs text-[#6B6257] mt-1 italic">
                Full schedule — verify with business
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(247,244,239,0.1)]">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6B6257]">
            © {year} Jagdamba Associates. All rights reserved.
          </p>
          <p className="text-xs text-[#6B6257]">
            Interior Design Services · Rewari, Haryana
          </p>
        </div>
      </div>
    </footer>
  );
}
