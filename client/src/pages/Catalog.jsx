import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lightbox from '../components/Lightbox';

function Catalog() {
  const [services, setServices] = useState([]);
  const catalogRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error('Failed to fetch services:', err));
  }, []);

  // Scroll to hash anchor when services load
  useEffect(() => {
    if (services.length > 0 && location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [services, location.hash]);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('up');
        });
      },
      { threshold: 0.1 }
    );
    const els = catalogRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [services]);

  const openLightbox = (src) => {
    window.dispatchEvent(new CustomEvent('open-lightbox', { detail: src }));
  };

  return (
    <>
      <Navbar />

      <header className="catalog-header">
        <span className="tag-line">Our Complete Collection</span>
        <h1 className="section-heading">Service <em>Catalog</em></h1>
        <p className="body-text" style={{ maxWidth: '600px', margin: '1.5rem auto 0' }}>
          Six speciality embroidery services — each a craft honed over years of dedication to the art of aari embroidery. Click any image to zoom.
        </p>
      </header>

      <main className="catalog-list" ref={catalogRef}>
        {services.map((srv, index) => (
          <article
            key={srv._id || srv.slug}
            className={`cat-item reveal${index % 2 !== 0 ? ' rev' : ''}`}
            id={srv.slug}
          >
            <div
              className="cat-item-img"
              onClick={() => openLightbox(srv.image)}
            >
              <img src={srv.image} alt={srv.name} />
              <div className="zoom-overlay">🔍</div>
            </div>
            <div className="cat-item-info">
              <div className="cat-num">{srv.number}</div>
              <h3>{srv.name}</h3>
              {srv.fullDesc.map((p, i) => (
                <p className="body-text" key={i} style={{ marginBottom: '1rem' }}>{p}</p>
              ))}
              <div className="cat-tags">
                {srv.tags.map((tag, i) => (
                  <span key={i} className="cat-tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </main>

      <section id="contact" style={{ paddingTop: 0 }}>
        <div className="contact-card reveal">
          <span className="tag-line">Ready to Order?</span>
          <h2 className="section-heading">Let's Create Something <em>Beautiful</em></h2>
          <p className="body-text" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Call or WhatsApp us to discuss your requirements. Every order is treated with personal care and attention.
          </p>
          <a
            href="https://wa.me/919999999999"
            className="btn btn-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Order →
          </a>
        </div>
      </section>

      <Footer />
      <Lightbox />
    </>
  );
}

export default Catalog;
