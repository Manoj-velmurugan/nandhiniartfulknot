import { useEffect, useRef } from 'react';

function SplitSection({ id, flip, altBg, tagLine, heading, paragraphs, image, imageAlt, ctaText, ctaHref }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('up');
        });
      },
      { threshold: 0.1 }
    );

    const els = contentRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const sectionClass = `split-section${flip ? ' flip' : ''}${altBg ? ' alt-bg' : ''}`;

  return (
    <section id={id} className={sectionClass}>
      <div className="split-img">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="split-content" ref={contentRef}>
        <span className="tag-line reveal">{tagLine}</span>
        <h2 className="section-heading reveal" dangerouslySetInnerHTML={{ __html: heading }} />
        <div className="divider"></div>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="body-text reveal"
            style={i > 0 ? { marginTop: '0.75rem' } : undefined}
          >
            {p}
          </p>
        ))}
        {ctaText && (
          <a
            href={ctaHref}
            className="btn btn-dark reveal"
            style={{ marginTop: '2rem', width: 'fit-content' }}
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}

export default SplitSection;
