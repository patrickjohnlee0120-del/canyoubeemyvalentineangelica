
import React, { useState, useCallback, useRef } from 'react';

const NoButton: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [teaseText, setTeaseText] = useState<string | null>(null);
  const [isDead, setIsDead] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const teaseMessages = [
    "Oops! Try again 😜",
    "Are you sure? 🤭",
    "Not that one! 💖",
    "Nice try! 🌸",
    "Wait up! 🏃‍♀️"
  ];

  const moveButton = useCallback(() => {
    // Boundaries for a 390px viewport, assuming button is roughly 160px wide
    // We want to keep it strictly within the horizontal bounds of the screen.
    // Parent is centered, so relative movement is restricted.
    const screenWidth = Math.min(window.innerWidth, 390);
    const screenHeight = window.innerHeight;
    
    const margin = 80; // Safe margin from edges
    const rangeX = (screenWidth / 2) - margin;
    const rangeY = (screenHeight / 3) - margin;

    const randomX = (Math.random() - 0.5) * rangeX * 2;
    const randomY = (Math.random() - 0.5) * rangeY * 2;

    setPosition({ x: randomX, y: randomY });
    setAttempts((prev) => prev + 1);
    
    setTeaseText(teaseMessages[Math.floor(Math.random() * teaseMessages.length)]);
    setTimeout(() => setTeaseText(null), 1200);

    if (attempts >= 6) {
      setTimeout(() => setIsDead(true), 400);
    }
  }, [attempts]);

  if (isDead) return null;

  return (
    <div 
      className="relative transition-all duration-700 ease-in-out z-50 flex items-center justify-center w-full pointer-events-none"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className="relative pointer-events-auto">
        {teaseText && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm text-xs text-rose-500 animate-bounce">
            {teaseText}
          </div>
        )}
        <button
          ref={buttonRef}
          onPointerDown={(e) => {
            e.preventDefault();
            moveButton();
          }}
          className="w-[160px] h-[56px] bg-stone-200 text-stone-500 rounded-full text-xl font-bold shadow-sm transition-all active:scale-95 flex items-center justify-center"
          style={{
            transform: attempts > 4 ? `scale(${Math.max(0.4, 1 - (attempts - 4) * 0.2)})` : 'scale(1)',
            opacity: attempts > 5 ? 0 : 1
          }}
        >
          No 💔
        </button>
      </div>
    </div>
  );
};

export default NoButton;
