import { useState, useEffect, useCallback } from 'react';

function Lightbox() {
  const [active, setActive] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const openLightbox = useCallback((src) => {
    setImgSrc(src);
    setActive(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setActive(false);
    document.body.style.overflow = '';
    setImgSrc('');
  }, []);

  useEffect(() => {
    // Listen for custom event from catalog items
    const handler = (e) => openLightbox(e.detail);
    window.addEventListener('open-lightbox', handler);
    return () => window.removeEventListener('open-lightbox', handler);
  }, [openLightbox]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [closeLightbox]);

  return (
    <div
      id="lightbox"
      className={active ? 'active' : ''}
      role="dialog"
      aria-label="Image viewer"
      onClick={(e) => { if (e.target.id === 'lightbox') closeLightbox(); }}
    >
      <button id="lightbox-close" aria-label="Close" onClick={closeLightbox}>×</button>
      <img id="lightbox-img" src={imgSrc} alt="" />
    </div>
  );
}

export default Lightbox;
