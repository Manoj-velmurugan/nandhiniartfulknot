import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
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
    <section id="hero" ref={ref}>
      <div className="hero-content reveal">
        <h1 className="section-heading">
          Threads of Elegance,<br/>
          <em>Crafted to Perfection</em>
        </h1>
        <p className="hero-subtitle">
          Premium aari embroidery tailored for you. From resplendent bridal blouses to intricate zardosi and beadwork — faster and smarter.
        </p>
        <Link to="/catalog" className="btn btn-dark">Explore Our Work ✦</Link>
      </div>

      <div className="hero-cards-container reveal">
        <div className="hero-card hc-1"><img src="/images/hero_img_1_1779564082840.png" alt="Zardosi Embroidery" /></div>
        <div className="hero-card hc-2"><img src="/images/hero_img_2_1779564098974.png" alt="Bridal Lehenga Detail" /></div>
        <div className="hero-card hc-3"><img src="/images/hero_img_3_1779564115724.png" alt="Aari Craftsmanship" /></div>
        <div className="hero-card hc-4"><img src="/images/hero_img_4_1779564130344.png" alt="Peacock Motif" /></div>
        <div className="hero-card hc-5"><img src="/images/hero_img_5_1779564143564.png" alt="Mirror Work" /></div>
      </div>
    </section>
  );
}

export default Hero;
