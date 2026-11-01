import React, { useEffect, useState } from 'react';

export default function SparkleCursor() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Only enable on desktop/pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let lastTime = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 50) return; // limit sparkle generation rate
      lastTime = now;

      const colors = ['#ff6b9d', '#ffd166', '#c084fc', '#f472b6', '#38bdf8', '#ffb703'];
      const shapes = ['✨', '💖', '⭐', '🌸'];

      const newSparkle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        size: Math.random() * 12 + 10,
        rotation: Math.random() * 360,
      };

      setSparkles((prev) => [...prev.slice(-18), newSparkle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (sparkles.length === 0) return;
    const timer = setTimeout(() => {
      setSparkles((prev) => prev.slice(1));
    }, 600);
    return () => clearTimeout(timer);
  }, [sparkles]);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99999 }}>
      {sparkles.map((s) => (
        <span
          key={s.id}
          style={{
            position: 'absolute',
            left: s.x,
            top: s.y,
            fontSize: `${s.size}px`,
            color: s.color,
            transform: `translate(-50%, -50%) rotate(${s.rotation}deg)`,
            opacity: 0.85,
            transition: 'all 0.6s cubic-bezier(0.1, 0.8, 0.3, 1)',
            filter: 'drop-shadow(0 0 4px rgba(255, 107, 157, 0.6))',
          }}
        >
          {s.shape}
        </span>
      ))}
    </div>
  );
}

