import { useState, useMemo } from 'react';
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from '../data/projects';
import { getImageUrl } from '../components/ui/UnsplashImage';
import Lightbox from '../components/ui/Lightbox';
import { Info } from 'lucide-react';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeFilter),
    [activeFilter]
  );

  const lightboxImages = filtered.map(p => ({
    src: getImageUrl(p.imageQuery),
    alt: p.imageAlt,
    caption: `${p.title} — ${p.category}`,
  }));

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-14 md:pt-44 md:pb-16 bg-[#F7F4EF]"
        aria-label="Projects hero"
      >
        <div className="container-site">
          <span className="section-label">Portfolio</span>
          <h1 className="display-lg text-[#242421] max-w-2xl mb-5">
            Selected Projects
          </h1>
          <div className="divider" aria-hidden="true" />
          <p className="body-lg text-[#6B6257] max-w-xl">
            A demonstration portfolio showcasing the types of interior spaces we design. Actual client projects will be added with consent.
          </p>
        </div>
      </section>

      {/* Demo notice */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="container-site py-3 flex items-center gap-3">
          <Info size={16} className="text-amber-600 shrink-0" aria-hidden="true" />
          <p className="text-sm text-amber-700">
            <strong>Demonstration portfolio.</strong> All images below are sample interior design photography — not verified completed projects by Jagdamba Associates.
          </p>
        </div>
      </div>

      {/* Filters */}
      <section className="py-8 bg-[#F7F4EF] border-b border-[#DDD5C8]" aria-label="Project category filters">
        <div className="container-site">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            <button
              className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => setActiveFilter('All')}
              aria-pressed={activeFilter === 'All'}
            >
              All Projects
            </button>
            {PROJECT_CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={activeFilter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-[#F7F4EF]" aria-labelledby="gallery-heading">
        <div className="container-site">
          <h2 id="gallery-heading" className="sr-only">
            {activeFilter === 'All' ? 'All projects' : `${activeFilter} projects`}
          </h2>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#9A8E84]">No projects in this category yet.</p>
            </div>
          ) : (
            <div className="masonry-grid">
              {filtered.map((project, index) => (
                <div
                  key={project.id}
                  className="masonry-item group relative cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxIndex(index);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open ${project.title} in full view`}
                >
                  <div className="img-overlay overflow-hidden">
                    <img
                      src={getImageUrl(project.imageQuery)}
                      alt={project.imageAlt}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-104"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#242421]/0 group-hover:bg-[#242421]/50 transition-all duration-300 flex items-end p-4">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="section-label text-[rgba(247,244,239,0.7)]">
                          {project.category}
                        </span>
                        <p
                          className="text-[#F7F4EF] font-medium text-base"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {project.title}
                        </p>
                      </div>
                    </div>
                    {/* Demo badge */}
                    <div className="absolute top-2 left-2 bg-[rgba(36,36,33,0.7)] text-[#F7F4EF] text-[10px] uppercase tracking-widest px-2 py-0.5">
                      Sample
                    </div>
                  </div>
                  <div className="pt-3 pb-1">
                    <span className="section-label" style={{ color: 'var(--taupe)', marginBottom: '0.125rem' }}>
                      {project.category}
                    </span>
                    <h3
                      className="text-base font-medium text-[#242421]"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
