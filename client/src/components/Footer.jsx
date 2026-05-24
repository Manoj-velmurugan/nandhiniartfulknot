function Footer() {
  return (
    <footer>
      <img src="/images/logo.png" alt="Nandhini Artfulknot" className="footer-logo" style={{ height: '80px', width: '80px', objectFit: 'cover', borderRadius: '50%', marginBottom: '1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
      <div className="footer-links">
        <a href="#features">Features</a>
        <a href="#services">Services</a>
        <a href="/catalog">Catalog</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="copyright">
        © 2025 Nandhini Artfulknot. Crafted with 🧵 & ❤️
      </div>
    </footer>
  );
}

export default Footer;
