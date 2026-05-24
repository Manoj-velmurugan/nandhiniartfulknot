import { useEffect, useRef } from 'react';

function StatsRow() {
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

  const stats = [
    { num: '80+', label: 'Bridal Pieces' },
    { num: '6', label: 'Signature Services' },
    { num: '100%', label: 'Handcrafted' },
    { num: '∞', label: 'Custom Designs' },
  ];

  return (
    <section id="stats" ref={ref}>
      <h2 className="section-heading reveal">Proven Results, Real Impact</h2>
      <p className="body-text reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>Discover why brides across the country trust us to make their special day even more beautiful with exquisite, custom handcrafted embroidery.</p>
      
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-item reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsRow;
