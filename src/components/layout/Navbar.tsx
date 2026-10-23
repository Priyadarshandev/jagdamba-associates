import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS } from '../../data/business';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Detect if we're on hero pages (transparent nav initially)
  const isHeroPage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isTransparent = isHeroPage && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-[#F7F4EF]/95 backdrop-blur-sm border-b border-[#DDD5C8]'
        }`}
        role="banner"
      >
        <nav
          className="container-site flex items-center justify-between h-16 md:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col leading-none"
            aria-label="Jagdamba Associates — Home"
          >
            <span
              className={`font-serif text-xl font-medium tracking-tight transition-colors duration-300 ${
                isTransparent ? 'text-[#F7F4EF]' : 'text-[#242421]'
              }`}
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Jagdamba Associates
            </span>
            <span
              className={`hindi text-xs transition-colors duration-300 ${
                isTransparent ? 'text-[rgba(247,244,239,0.7)]' : 'text-[#B6A797]'
              }`}
            >
              जगदम्बा एसोसिएट्स
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isTransparent ? 'nav-link-light' : ''} ${isActive ? 'active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                isTransparent
                  ? 'text-[rgba(247,244,239,0.85)] hover:text-[#F7F4EF]'
                  : 'text-[#6B6257] hover:text-[#242421]'
              }`}
              aria-label={`Call us at ${BUSINESS.phone}`}
            >
              <Phone size={14} />
              <span>{BUSINESS.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent('Hello Jagdamba Associates, I am interested in your interior design services. Please let me know the next steps.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-widest border transition-all duration-200 ${
                isTransparent
                  ? 'border-[rgba(247,244,239,0.5)] text-[#F7F4EF] hover:bg-[rgba(247,244,239,0.1)]'
                  : 'border-[#242421] text-[#242421] hover:bg-[#242421] hover:text-[#F7F4EF]'
              }`}
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className={`lg:hidden p-2 transition-colors duration-200 ${
              isTransparent ? 'text-[#F7F4EF]' : 'text-[#242421]'
            }`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          <div
            className="mobile-menu-overlay"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="mobile-menu-panel"
            role="dialog"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <div
                  className="text-lg font-medium text-[#242421]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Jagdamba Associates
                </div>
                <div className="hindi text-xs text-[#B6A797]">जगदम्बा एसोसिएट्स</div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-[#242421]"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-1" role="list">
                {NAV_LINKS.map(link => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `block py-3 px-2 text-sm uppercase tracking-widest font-medium border-b border-[#DDD5C8] transition-colors ${
                          isActive ? 'text-[#242421]' : 'text-[#6B6257] hover:text-[#242421]'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-outline w-full justify-center"
                aria-label={`Call ${BUSINESS.phone}`}
              >
                <Phone size={16} />
                {BUSINESS.phone}
              </a>
              <a
                href={`https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent('Hello Jagdamba Associates, I am interested in your interior design services. Please let me know the next steps.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DDD5C8]">
              <p className="text-xs text-[#9A8E84] leading-relaxed">
                {BUSINESS.address.line1}<br />
                {BUSINESS.address.line2}<br />
                {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.pincode}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
