import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// All navigation links in one place — easy to update later
const NAV_LINKS = [
  { path: '/',           label: 'Home'       },
  { path: '/about',      label: 'About'      },
  { path: '/skills',     label: 'Skills'     },
  { path: '/experience', label: 'Experience' },
  { path: '/projects',   label: 'Projects'   },
  { path: '/education',  label: 'Education'  },
  { path: '/contact',    label: 'Contact'    },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);  // mobile menu toggle
  const [scrolled, setScrolled]   = useState(false);  // shadow on scroll
  const location                   = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Add a subtle backdrop-blur shadow once the user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      style={{
        position:        'fixed',
        top:             0,
        left:            0,
        right:           0,
        zIndex:          100,
        background:      scrolled ? 'rgba(15,15,19,0.88)' : 'rgba(15,15,19,0.6)',
        backdropFilter:  'blur(14px)',
        borderBottom:    '1px solid var(--color-border)',
        transition:      'var(--transition-base)',
        boxShadow:       scrolled ? '0 4px 24px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth:       '1100px',
          margin:         '0 auto',
          padding:        '0 1.5rem',
          height:         '4.5rem',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
        }}
      >
        {/* ── Logo / Brand ── */}
        <NavLink
          to="/"
          id="nav-logo"
          style={{ textDecoration: 'none' }}
        >
          <span
            style={{
              fontFamily:  'var(--font-mono)',
              fontSize:    '1.25rem',
              fontWeight:  700,
              background:  'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor:  'transparent',
              backgroundClip: 'text',
            }}
          >
            &lt;YK /&gt;
          </span>
        </NavLink>

        {/* ── Desktop Navigation ── */}
        <ul
          id="nav-desktop"
          style={{
            display:    'flex',
            gap:        '0.25rem',
            listStyle:  'none',
            alignItems: 'center',
          }}
          className="hidden-mobile"  /* hidden on small screens via CSS below */
        >
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                id={`nav-${link.label.toLowerCase()}`}
                end={link.path === '/'}    /* exact match only for Home */
                style={({ isActive }) => ({
                  display:        'block',
                  padding:        '0.4rem 0.85rem',
                  borderRadius:   'var(--radius-sm)',
                  fontSize:       '0.9rem',
                  fontWeight:     isActive ? 600 : 400,
                  color:          isActive ? 'var(--color-accent-secondary)' : 'var(--color-text-secondary)',
                  background:     isActive ? 'rgba(108,99,255,0.12)' : 'transparent',
                  textDecoration: 'none',
                  transition:     'var(--transition-base)',
                })}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Hamburger button (mobile) ── */}
        <button
          id="nav-hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          style={{
            display:         'none',   /* shown via CSS on small screens */
            background:      'transparent',
            border:          '1px solid var(--color-border)',
            borderRadius:    'var(--radius-sm)',
            padding:         '0.45rem 0.6rem',
            cursor:          'pointer',
            color:           'var(--color-text-primary)',
            fontSize:        '1.2rem',
          }}
          className="show-mobile"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {menuOpen && (
        <div
          id="nav-mobile-menu"
          style={{
            borderTop:   '1px solid var(--color-border)',
            background:  'rgba(15,15,19,0.96)',
            padding:     '1rem 1.5rem',
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  id={`nav-mobile-${link.label.toLowerCase()}`}
                  end={link.path === '/'}
                  style={({ isActive }) => ({
                    display:        'block',
                    padding:        '0.65rem 1rem',
                    borderRadius:   'var(--radius-sm)',
                    fontSize:       '0.95rem',
                    fontWeight:     isActive ? 600 : 400,
                    color:          isActive ? 'var(--color-accent-secondary)' : 'var(--color-text-secondary)',
                    background:     isActive ? 'rgba(108,99,255,0.12)' : 'transparent',
                    textDecoration: 'none',
                    transition:     'var(--transition-base)',
                  })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
