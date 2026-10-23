import { Star, ExternalLink, MessageCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS, buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/business';

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-14 md:pt-44 md:pb-16 bg-[#F7F4EF]"
        aria-label="Reviews hero"
      >
        <div className="container-site">
          <span className="section-label">Client Reviews</span>
          <h1 className="display-lg text-[#242421] max-w-2xl mb-5">
            What Our Clients Say
          </h1>
          <div className="divider" aria-hidden="true" />
          <p className="body-lg text-[#6B6257] max-w-xl">
            We value every client relationship and are proud of the feedback we receive. View our verified Google reviews below.
          </p>
        </div>
      </section>

      {/* Rating summary */}
      <section className="section-padding bg-[#E6DDD1]" aria-labelledby="rating-summary-heading">
        <div className="container-site">
          <h2 id="rating-summary-heading" className="sr-only">Google Rating Summary</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Big rating */}
            <div className="text-center md:text-left">
              <div
                className="text-8xl font-light text-[#242421] leading-none mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                aria-label={`${BUSINESS.rating.value} stars`}
              >
                {BUSINESS.rating.value}
              </div>
              <div className="flex gap-1 justify-center md:justify-start mb-2" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="star-filled fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#9A8E84]">
                Based on {BUSINESS.rating.count} Google reviews
              </p>
            </div>

            {/* Divider */}
            <div className="w-px h-32 bg-[#DDD5C8] hidden md:block" aria-hidden="true" />

            {/* Info */}
            <div className="max-w-md">
              <h3
                className="text-xl font-medium text-[#242421] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Verified Google Reviews
              </h3>
              <p className="text-sm text-[#6B6257] leading-relaxed mb-5">
                Our Google Business Profile rating reflects genuine feedback from clients who have worked with us. To read individual reviews, visit our Google listing directly.
              </p>
              <a
                href={BUSINESS.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex"
                aria-label="Read our reviews on Google (opens in new tab)"
              >
                <ExternalLink size={14} />
                Read Reviews on Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency notice */}
      <section className="py-10 bg-[#F7F4EF]" aria-labelledby="transparency-heading">
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-4 p-6 bg-white border border-[#DDD5C8]">
              <Info size={20} className="text-[#B6A797] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 id="transparency-heading" className="text-base font-medium text-[#242421] mb-2">
                  About Our Review Policy
                </h2>
                <p className="text-sm text-[#6B6257] leading-relaxed mb-3">
                  We do not publish manually written testimonials on this website, as these cannot be independently verified. Instead, we link directly to our Google Business Profile where all reviews are attributed to real Google accounts and subject to Google's review policies.
                </p>
                <p className="text-sm text-[#6B6257] leading-relaxed">
                  The rating of {BUSINESS.rating.value} / 5 from {BUSINESS.rating.count} reviews was provided by the business and reflects the Google listing at the time of this website's last update. Verify the current rating directly on Google.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="section-padding bg-[#242421]" aria-labelledby="review-cta-heading">
        <div className="container-site text-center">
          <span className="section-label text-[#B6A797]">Your Experience Matters</span>
          <h2 id="review-cta-heading" className="display-md text-[#F7F4EF] mb-5">
            Have We Worked Together?
          </h2>
          <p className="body-lg text-[#9A8E84] max-w-lg mx-auto mb-10">
            If we've had the pleasure of designing your space, we'd be grateful for your honest review on Google. Your feedback helps others make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
              aria-label="Leave a review on Google (opens in new tab)"
            >
              <ExternalLink size={14} />
              Leave a Google Review
            </a>
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={16} />
              Start a New Project
            </a>
          </div>
        </div>
      </section>

      {/* Link to contact */}
      <section className="py-16 bg-[#F7F4EF]">
        <div className="container-site text-center">
          <p className="text-[#6B6257] mb-4">
            Ready to experience our service for yourself?
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
