'use client';

export default function USATransportHeroBg() {
  return (
    <div className="ut-hero-bg-wrap" aria-hidden>
      <div
        className="ut-hero-bg-image"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />
      <div className="ut-hero-bg-overlay" />
    </div>
  );
}
