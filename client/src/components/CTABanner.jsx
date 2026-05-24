import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function CTABanner() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('up');
        });
      },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-banner" ref={ref} style={{ padding: '8rem 5%', textAlign: 'center', background: 'var(--bg-secondary)' }}>
      <span className="tag-line reveal">Ready to Begin?</span>
      <h2 className="section-heading reveal">
        Explore Our Full <br/>
        <em>Service Catalog</em>
      </h2>
      <p className="body-text reveal" style={{ maxWidth: '480px', margin: '0 auto 2.5rem' }}>
        Each service, beautifully documented with detailed descriptions and photographs to help you choose the perfect style.
      </p>
      <div className="cta-actions reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/catalog" className="btn btn-dark">View Full Catalog</Link>
        <a href="#contact" className="btn btn-outline">Contact Us</a>
      </div>
    </section>
  );
}

export default CTABanner;
