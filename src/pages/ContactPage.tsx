import { Phone, MessageCircle, MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS, buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/business';
import EnquiryForm from '../components/ui/EnquiryForm';

export default function ContactPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Jagdamba Associates',
            url: 'https://jagdambaassociates.in/contact',
            mainEntity: {
              '@type': 'InteriorDesigner',
              name: 'Jagdamba Associates',
              telephone: '+919873112413',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Office No. 265, Opposite BMG Mall, Sector 5',
                addressLocality: 'Rewari',
                addressRegion: 'Haryana',
                postalCode: '123401',
                addressCountry: 'IN',
              },
            },
          }),
        }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-14 md:pt-44 md:pb-16 bg-[#242421]"
        aria-label="Contact hero"
      >
        <div className="container-site">
          <span className="section-label text-[#B6A797]">Get in Touch</span>
          <h1 className="display-lg text-[#F7F4EF] max-w-xl mb-5">
            Let's Discuss Your Project
          </h1>
          <p className="body-lg text-[#9A8E84] max-w-lg">
            Whether you have a clear vision or are just starting to explore — we're here to help. Reach out by WhatsApp, phone, or use the form below.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-padding bg-[#F7F4EF]" aria-labelledby="contact-options-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left: contact info */}
            <div className="lg:col-span-1">
              <h2 id="contact-options-heading" className="display-sm text-[#242421] mb-6">
                Contact Options
              </h2>
              <div className="divider" aria-hidden="true" />

              {/* WhatsApp */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest font-medium text-[#9A8E84] mb-3">
                  WhatsApp
                </h3>
                <p className="text-sm text-[#6B6257] mb-3">
                  The fastest way to reach us. Message us and we'll respond promptly.
                </p>
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                  aria-label="Chat with Jagdamba Associates on WhatsApp"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest font-medium text-[#9A8E84] mb-3">
                  Phone
                </h3>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-3 text-[#242421] hover:text-[#6B6257] transition-colors"
                  aria-label={`Call ${BUSINESS.phone}`}
                >
                  <Phone size={18} className="text-[#B6A797]" aria-hidden="true" />
                  <span className="text-lg font-medium">{BUSINESS.phone}</span>
                </a>
              </div>

              {/* Address */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest font-medium text-[#9A8E84] mb-3">
                  Our Studio
                </h3>
                <address className="not-italic text-sm text-[#6B6257] leading-relaxed mb-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#B6A797] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-[#242421]">{BUSINESS.name}</strong><br />
                      {BUSINESS.address.line1}<br />
                      {BUSINESS.address.line2}<br />
                      {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.pincode}
                    </div>
                  </div>
                </address>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B6A797] hover:text-[#242421] transition-colors border border-[#DDD5C8] px-4 py-2"
                  aria-label="Get directions to our studio on Google Maps"
                >
                  <ExternalLink size={12} />
                  Get Directions
                </a>
              </div>

              {/* Hours note */}
              <div className="p-4 bg-[#E6DDD1] border-l-2 border-[#B6A797]">
                <p className="text-xs uppercase tracking-widest font-medium text-[#9A8E84] mb-1">
                  Hours
                </p>
                <p className="text-sm text-[#6B6257]">
                  Closing time: 6:00 PM<br />
                  <span className="text-xs italic text-[#9A8E84]">
                    Full schedule not confirmed. Call before visiting.
                  </span>
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-2">
              <h2
                className="display-sm text-[#242421] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Send Us an Enquiry
              </h2>
              <div className="divider" aria-hidden="true" />
              <p className="text-sm text-[#6B6257] mb-8">
                Fill in the form below and we'll get back to you. Fields marked with * are required.
              </p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#E6DDD1]" aria-label="Location map">
        <div className="h-80 md:h-96">
          <iframe
            title="Jagdamba Associates location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.2!2d76.6184!3d28.1973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDExJzUwLjMiTiA3NsKwMzcnMDYuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
