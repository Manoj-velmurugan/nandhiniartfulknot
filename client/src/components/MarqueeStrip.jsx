function MarqueeStrip() {
  const items = [
    'Bridal Blouses', 'Zardosi Work', 'Bead & Stone',
    'Motif & Figure', 'Mirror Work', 'Saree Pleating',
  ];

  // Duplicate for seamless infinite loop
  const track = [...items, ...items];

  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i}>
            {i > 0 && <span className="dot">✦</span>}
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default MarqueeStrip;
