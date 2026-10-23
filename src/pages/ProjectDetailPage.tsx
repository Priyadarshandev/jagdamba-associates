import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { getImageUrl } from '../components/ui/UnsplashImage';
import Breadcrumb from '../components/ui/Breadcrumb';
import { buildWhatsAppUrl } from '../data/business';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const index = PROJECTS.findIndex(p => p.slug === slug);
  const project = PROJECTS[index];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const prev = PROJECTS[index - 1];
  const next = PROJECTS[index + 1];

  const whatsappMsg = `Hello Jagdamba Associates, I saw your ${project.title} project and I am interested in a similar design for my space. Please let me know the next steps.`;

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 md:pt-40 overflow-hidden"
        aria-label={`${project.title} hero`}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={getImageUrl(project.imageQuery)}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#242421]/65" />
        </div>
        <div className="container-site relative z-10 pb-16 md:pb-24">
          <Breadcrumb
            items={[
              { label: 'Projects', to: '/projects' },
              { label: project.title },
            ]}
          />
          <div className="mt-6 max-w-2xl">
            {/* Demo badge */}
            <span className="inline-block bg-[rgba(247,244,239,0.15)] border border-[rgba(247,244,239,0.3)] text-[#F7F4EF] text-[10px] uppercase tracking-widest px-3 py-1 mb-4">
              Demonstration Project
            </span>
            <span className="section-label text-[#B6A797] block mb-3">{project.category}</span>
            <h1 className="display-lg text-[#F7F4EF] mb-4">{project.title}</h1>
            <p className="body-lg text-[rgba(247,244,239,0.8)]">{project.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-[#F7F4EF]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Demo disclaimer */}
              <div className="bg-amber-50 border border-amber-200 p-4 mb-8 flex gap-3">
                <div>
                  <p className="text-sm text-amber-800 font-medium mb-1">Demonstration Project</p>
                  <p className="text-sm text-amber-700">
                    This is a sample design project used for portfolio illustration only. The image is sourced from a licensed stock library. Actual completed projects by Jagdamba Associates will be featured here with client consent.
                  </p>
                </div>
              </div>

              <h2
                className="display-sm text-[#242421] mb-5"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                About This Project
              </h2>
              <div className="divider" aria-hidden="true" />
              <p className="body-md text-[#6B6257] mb-8">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-[#DDD5C8] text-xs uppercase tracking-wider text-[#9A8E84]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Full image */}
              <div className="img-overlay mb-8">
                <img
                  src={getImageUrl(project.imageQuery)}
                  alt={project.imageAlt}
                  className="w-full object-cover max-h-[500px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA */}
                <div className="bg-[#242421] p-6 text-[#F7F4EF]">
                  <h3
                    className="text-xl font-medium mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Interested in a Similar Space?
                  </h3>
                  <p className="text-sm text-[#9A8E84] mb-5">
                    Tell us about your project and we'll discuss how we can bring a similar design vision to life for you.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={buildWhatsAppUrl(whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp justify-center"
                    >
                      <MessageCircle size={16} />
                      Enquire on WhatsApp
                    </a>
                    <Link to="/contact" className="btn-outline-light justify-center">
                      Send Enquiry
                    </Link>
                  </div>
                </div>

                {/* Project info */}
                <div className="border border-[#DDD5C8] p-6">
                  <h3 className="text-xs uppercase tracking-widest font-medium text-[#9A8E84] mb-4">
                    Project Details
                  </h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-[#B6A797] mb-1">Category</dt>
                      <dd className="text-sm text-[#242421]">{project.category}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-[#B6A797] mb-1">Type</dt>
                      <dd className="text-sm text-[#242421]">Demonstration Project</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Prev/Next */}
          <div className="flex justify-between mt-16 pt-8 border-t border-[#DDD5C8]">
            {prev ? (
              <Link
                to={`/projects/${prev.slug}`}
                className="flex items-center gap-3 text-sm text-[#6B6257] hover:text-[#242421] transition-colors"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#B6A797] mb-0.5">Previous</div>
                  <div className="font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {prev.title}
                  </div>
                </div>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to={`/projects/${next.slug}`}
                className="flex items-center gap-3 text-sm text-[#6B6257] hover:text-[#242421] transition-colors text-right"
              >
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#B6A797] mb-0.5">Next</div>
                  <div className="font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {next.title}
                  </div>
                </div>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
