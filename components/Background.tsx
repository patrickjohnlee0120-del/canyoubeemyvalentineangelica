
import React from 'react';

const PeonyOutline = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400 opacity-[0.08]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Center petals */}
    <path d="M50 45 C55 40, 60 45, 55 50 C60 55, 55 60, 50 55 C45 60, 40 55, 45 50 C40 45, 45 40, 50 45" />
    {/* Inner layer petals */}
    <path d="M50 35 C60 30, 70 40, 65 50 C70 60, 60 70, 50 65 C40 70, 30 60, 35 50 C30 40, 40 30, 50 35" />
    {/* Middle layer petals */}
    <path d="M50 25 C70 15, 85 35, 75 50 C85 65, 70 85, 50 75 C30 85, 15 65, 25 50 C15 35, 30 15, 50 25" />
    {/* Outer layer petals */}
    <path d="M50 15 C85 0, 100 40, 85 60 C100 85, 75 100, 50 90 C25 100, 0 85, 15 60 C0 40, 15 0, 50 15" />
    {/* Decorative details */}
    <path d="M50 50 L52 48 M48 52 L46 54 M52 52 L54 54 M48 48 L46 46" strokeWidth="1" />
  </svg>
);

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-[#FFF9F3] -z-10">
      {/* Peony Outlines Pattern */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 p-8">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="transform transition-transform duration-1000"
            style={{ 
              transform: `rotate(${(i * 37) % 360}deg) scale(${0.8 + (i % 5) * 0.1})`,
              margin: `${(i % 3) * 10}px`
            }}
          >
            <PeonyOutline />
          </div>
        ))}
      </div>

      {/* Floating Soft Hearts */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce opacity-25"
            style={{
              left: `${(i * 7.7) % 100}%`,
              top: `${(i * 13.3) % 100}%`,
              animationDuration: `${4 + (i % 4)}s`,
              animationDelay: `${i * 0.3}s`,
              transform: `scale(${0.6 + (i % 3) * 0.2})`
            }}
          >
            <svg className="w-8 h-8 text-rose-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Background;
