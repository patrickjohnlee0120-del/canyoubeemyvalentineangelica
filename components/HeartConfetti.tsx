
import React, { useEffect, useState } from 'react';
import { Particle } from '../types';

const HeartConfetti: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ['#FFD1DC', '#F4C2C2', '#E57373', '#FF8A80', '#F06292'];
    const newParticles: Particle[] = Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      x: 50, // center
      y: 50, // center
      size: 10 + Math.random() * 25,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 0.5,
      angle: Math.random() * 360,
      rotation: Math.random() * 360
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            color: p.color,
            animation: `float-${p.id} ${p.duration}s ease-out ${p.delay}s forwards`,
            opacity: 0,
            transform: `rotate(${p.rotation}deg)`
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" style={{ width: p.size, height: p.size }}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <style>{`
            @keyframes float-${p.id} {
              0% {
                opacity: 1;
                transform: translate(0, 0) rotate(${p.rotation}deg);
              }
              20% {
                transform: translate(
                  ${Math.cos(p.angle) * 100}px, 
                  ${Math.sin(p.angle) * 100}px
                ) rotate(${p.rotation + 90}deg);
              }
              100% {
                opacity: 0;
                transform: translate(
                  ${Math.cos(p.angle) * 200}px, 
                  ${Math.sin(p.angle) * 400 + 400}px
                ) rotate(${p.rotation + 720}deg);
              }
            }
          `}</style>
        </div>
      ))}
    </div>
  );
};

export default HeartConfetti;
