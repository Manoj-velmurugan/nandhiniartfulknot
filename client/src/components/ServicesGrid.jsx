import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ServicesGrid({ services }) {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('up');
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [services]);

  return (
    <section id="services" ref={sectionRef}>
      <div className="services-header reveal">
        <h2 className="section-heading">Everything You Need for<br/><em>Perfect Embroidery</em></h2>
        <p className="body-text">From intricate zardosi to flawless saree pleating, our services keep you looking elegant, organized, and moving forward—together.</p>
      </div>

      <div className="bento-grid">
        {services.map((srv, index) => (
          <div 
            key={srv._id || srv.slug}
            className={`bento-card reveal ${index % 4 === 0 || index % 4 === 3 ? 'large' : ''}`}
            onClick={() => navigate(`/catalog#${srv.slug}`)}
            style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
          >
            <img src={srv.image} alt={srv.name} />
            <div className="bento-overlay">
              <h3>{srv.name}</h3>
              <p>{srv.shortDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesGrid;
