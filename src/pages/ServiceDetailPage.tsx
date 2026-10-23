import { useParams, Link, Navigate } from 'react-router-dom';
import { MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICES } from '../data/services';
import { getImageUrl } from '../components/ui/UnsplashImage';
import FAQAccordion from '../components/ui/FAQAccordion';
import Breadcrumb from '../components/ui/Breadcrumb';
import { buildWhatsAppUrl } from '../data/business';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      {/* Structured data for this service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.name,
            description: service.description,
            provider: {
              '@type': 'InteriorDesigner',
              name: 'Jagdamba Associates',
              telephone: '+919873112413',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Rewari',
                addressRegion: 'Haryana',
                addressCountry: 'IN',
              },
            },
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-0 md:pt-40 overflow-hidden"
        aria-label={`${service.name} hero`}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={getImageUrl(service.heroKeyword)}
            alt={service.name}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#242421]/70" />
        </div>
        <div className="container-site relative z-10 pb-16 md:pb-24">
          <Breadcrumb
            items={[
              { label: 'Services', to: '/services' },
              { label: service.name },
            ]}
          />
          <div className="mt-6 max-w-2xl">
            <h1 className="display-lg text-[#F7F4EF] mb-4">{service.name}</h1>
            <p className="body-lg text-[rgba(247,244,239,0.8)]">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-[#F7F4EF]" aria-labelledby="service-detail-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Content column */}
            <div className="lg:col-span-2">
              <h2 id="service-detail-heading" className="display-sm text-[#242421] mb-5">
                About This Service
              </h2>
              <div className="divider" aria-hidden="true" />
              <p className="body-md text-[#6B6257] mb-8">{service.description}</p>

              {/* Features */}
              <h3
                className="text-xl font-medium text-[#242421] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                What's Included
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10" aria-label="Service features">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-[#B6A797] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[#6B6257]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Considerations */}
              <h3
                className="text-xl font-medium text-[#242421] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Key Design Considerations
              </h3>
              <ul className="space-y-3 mb-12" aria-label="Design considerations">
                {service.considerations.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-[#B6A797] shrink-0 mt-2"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[#6B6257]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* FAQs */}
              <h3
                className="text-xl font-medium text-[#242421] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Frequently Asked Questions
              </h3>
              <FAQAccordion items={service.faqs} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Enquiry CTA */}
                <div className="bg-[#242421] p-6 text-[#F7F4EF]">
                  <h3
                    className="text-xl font-medium mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Enquire About This Service
                  </h3>
                  <p className="text-sm text-[#9A8E84] mb-5">
                    Discuss your {service.name.toLowerCase()} project with us.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={buildWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp justify-center"
                      aria-label={`Enquire about ${service.name} on WhatsApp`}
                    >
                      <MessageCircle size={16} />
                      Chat on WhatsApp
                    </a>
                    <Link to="/contact" className="btn-outline-light justify-center">
                      Send Enquiry
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Other services */}
                <div className="border border-[#DDD5C8] p-6">
                  <h3
                    className="text-sm uppercase tracking-widest font-medium text-[#9A8E84] mb-4"
                  >
                    Other Services
                  </h3>
                  <ul className="space-y-2" role="list">
                    {SERVICES.filter(s => s.id !== service.id).slice(0, 5).map(s => (
                      <li key={s.id}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="flex items-center justify-between text-sm text-[#6B6257] hover:text-[#242421] py-1.5 border-b border-[#F0EBE4] last:border-0 transition-colors group"
                        >
                          <span>{s.name}</span>
                          <ArrowRight
                            size={12}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[#B6A797] hover:text-[#242421] mt-4 transition-colors"
                  >
                    All Services
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
