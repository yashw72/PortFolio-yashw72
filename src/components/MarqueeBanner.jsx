// components/MarqueeBanner.jsx
// Infinite scrolling black ticker banner between Hero and About
import { MARQUEE_ITEMS } from '../data/portfolioData';

export default function MarqueeBanner() {
  // Duplicate items for seamless infinite loop
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, idx) => (
          <span key={idx} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
