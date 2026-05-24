import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        {/* Left Links */}
        <ul className={`nav-links left${menuOpen ? ' open' : ''}`} style={{ justifyContent: 'flex-start', paddingRight: 0 }}>
          <li>{isHome ? <a href="#hero" onClick={closeMenu}>Home</a> : <Link to="/" onClick={closeMenu}>Home</Link>}</li>
          <li>{isHome ? <a href="#features" onClick={closeMenu}>Features</a> : <Link to="/#features" onClick={closeMenu}>Features</Link>}</li>
          <li>{isHome ? <a href="#services" onClick={closeMenu}>Services</a> : <Link to="/#services" onClick={closeMenu}>Services</Link>}</li>
          <li><Link to="/catalog" onClick={closeMenu}>Catalog</Link></li>
          <li>{isHome ? <a href="#contact" onClick={closeMenu}>Contact</a> : <Link to="/#contact" onClick={closeMenu}>Contact</Link>}</li>
        </ul>

        {/* Center Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu} style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: '700', color: '#000', letterSpacing: '1px' }}>
          Nandhini Artfulknot
        </Link>

        {/* Right CTA */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <a href="tel:+918610853175" className="btn" style={{ backgroundColor: '#FCE7F3', color: '#BE185D', border: '1px solid #FBCFE8', borderRadius: '30px', padding: '10px 24px', fontWeight: '600' }} onClick={closeMenu}>
            Order Now
          </a>
        </div>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
