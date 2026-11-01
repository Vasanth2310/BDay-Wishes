import React, { useMemo } from 'react';

export default function BackgroundParticles() {
  // Generate random stable particles
  const balloons = useMemo(() => [
    { id: 1, left: '8%', delay: '0s', duration: '18s', color: '#ff85a2', size: 48 },
    { id: 2, left: '22%', delay: '4s', duration: '22s', color: '#c084fc', size: 54 },
    { id: 3, left: '45%', delay: '2s', duration: '20s', color: '#fbcfe8', size: 42 },
    { id: 4, left: '72%', delay: '6s', duration: '24s', color: '#fed7aa', size: 50 },
    { id: 5, left: '88%', delay: '1s', duration: '19s', color: '#f472b6', size: 46 },
    { id: 6, left: '60%', delay: '9s', duration: '26s', color: '#e9d5ff', size: 44 },
  ], []);

  const hearts = useMemo(() => [
    { id: 1, left: '12%', top: '25%', size: 22, dur: '6s', rot: 15 },
    { id: 2, left: '85%', top: '15%', size: 28, dur: '7s', rot: -20 },
    { id: 3, left: '7%', top: '65%', size: 24, dur: '5.5s', rot: 10 },
    { id: 4, left: '92%', top: '75%', size: 30, dur: '8s', rot: -15 },
    { id: 5, left: '48%', top: '88%', size: 20, dur: '6.5s', rot: 5 },
    { id: 6, left: '30%', top: '40%', size: 18, dur: '7.5s', rot: 25 },
    { id: 7, left: '78%', top: '48%', size: 26, dur: '6.2s', rot: -12 },
  ], []);

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {/* Dreamy ambient light blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          maxWidth: '650px',
          maxHeight: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(254, 215, 170, 0.45) 0%, rgba(254, 215, 170, 0) 70%)',
          filter: 'blur(40px)',
          animation: 'floatSlow 14s ease-in-out infinite alternate',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '55vw',
          height: '55vw',
          maxWidth: '700px',
          maxHeight: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.35) 0%, rgba(244, 114, 182, 0) 70%)',
          filter: 'blur(50px)',
          animation: 'floatReverse 16s ease-in-out infinite alternate',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '20%',
          width: '60vw',
          height: '60vw',
          maxWidth: '750px',
          maxHeight: '750px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.35) 0%, rgba(192, 132, 252, 0) 70%)',
          filter: 'blur(50px)',
          animation: 'floatSlow 18s ease-in-out infinite alternate',
        }}
      />

      {/* Floating balloons */}
      {balloons.map((b) => (
        <div
          key={b.id}
          style={{
            position: 'absolute',
            left: b.left,
            bottom: '-120px',
            animation: `gentleBalloons ${b.duration} ease-in-out infinite`,
            animationDelay: b.delay,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: 0.75,
          }}
        >
          {/* Balloon body */}
          <div
            style={{
              width: `${b.size}px`,
              height: `${b.size * 1.25}px`,
              borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
              background: `radial-gradient(circle at 30% 30%, #ffffff 0%, ${b.color} 50%, #db2777 100%)`,
              boxShadow: 'inset -3px -3px 8px rgba(0,0,0,0.1), 0 8px 18px rgba(236,72,153,0.25)',
              position: 'relative',
            }}
          >
            {/* Balloon highlight */}
            <div
              style={{
                position: 'absolute',
                top: '15%',
                left: '22%',
                width: '24%',
                height: '35%',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.65)',
                transform: 'rotate(-25deg)',
              }}
            />
            {/* Balloon knot */}
            <div
              style={{
                position: 'absolute',
                bottom: '-4px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '6px',
                height: '4px',
                borderRadius: '2px',
                background: b.color,
              }}
            />
          </div>
          {/* Balloon string */}
          <div
            style={{
              width: '1px',
              height: '55px',
              background: 'linear-gradient(to bottom, rgba(150,150,150,0.4), transparent)',
              transform: 'rotate(2deg)',
            }}
          />
        </div>
      ))}

      {/* Floating hearts */}
      {hearts.map((h) => (
        <div
          key={h.id}
          style={{
            position: 'absolute',
            left: h.left,
            top: h.top,
            fontSize: `${h.size}px`,
            animation: `floatSlow ${h.dur} ease-in-out infinite alternate`,
            transform: `rotate(${h.rot}deg)`,
            opacity: 0.45,
            filter: 'drop-shadow(0 0 6px rgba(255, 107, 157, 0.5))',
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
}

