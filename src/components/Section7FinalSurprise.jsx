import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, RotateCcw, Moon, Stars } from 'lucide-react';
import { triggerContinuousConfetti, triggerFullCelebration } from '../utils/confetti';
import { sounds } from '../utils/soundEffects';

export default function Section7FinalSurprise() {
  const canvasRef = useRef(null);

  // Animated Fireworks Canvas on the Night Sky
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const fireworks = [];
    const particles = [];

    class Firework {
      constructor() {
        this.x = Math.random() * width;
        this.y = height;
        this.targetY = Math.random() * (height * 0.45) + height * 0.1;
        this.speed = Math.random() * 3 + 4;
        this.angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.2;
        this.color = `hsl(${Math.random() * 60 + 300}, 100%, 75%)`; // pinks, purples, golds
        this.dead = false;
      }
      update() {
        this.y -= this.speed;
        if (this.y <= this.targetY) {
          this.dead = true;
          createExplosion(this.x, this.y, this.color);
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.012;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.05; // gravity
        this.alpha -= this.decay;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    function createExplosion(x, y, color) {
      for (let i = 0; i < 40; i++) {
        particles.push(new Particle(x, y, color));
      }
    }

    let tick = 0;
    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      tick++;
      if (tick % 50 === 0 && fireworks.length < 5) {
        fireworks.push(new Firework());
      }

      for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].draw();
        if (fireworks[i].dead) fireworks.splice(i, 1);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].alpha <= 0) particles.splice(i, 1);
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleCelebrateAgain = () => {
    sounds.playFanfare();
    triggerFullCelebration();
    triggerContinuousConfetti(3500);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  return (
    <section
      id="final-surprise"
      style={{
        minHeight: '100vh',
        position: 'relative',
        background: 'linear-gradient(180deg, #1e1136 0%, #150a26 40%, #0d0617 100%)',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px',
        overflow: 'hidden',
        textAlign: 'center',
        zIndex: 1,
      }}
    >
      {/* Animated Fireworks Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Glowing Moon Illustration */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '12%',
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, #fffef0 0%, #fed7aa 60%, #f59e0b 100%)',
          boxShadow: '0 0 40px #fef08a, 0 0 80px rgba(254, 215, 170, 0.4)',
          zIndex: 2,
          opacity: 0.9,
        }}
      >
        {/* Soft Moon craters */}
        <div style={{ position: 'absolute', top: '25%', left: '30%', width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(217, 119, 6, 0.15)' }} />
        <div style={{ position: 'absolute', bottom: '30%', right: '25%', width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(217, 119, 6, 0.15)' }} />
      </motion.div>

      {/* Floating Constellation Stars */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: `${(i * 19) % 90}%`,
              left: `${(i * 37) % 95}%`,
              width: i % 3 === 0 ? '4px' : '2px',
              height: i % 3 === 0 ? '4px' : '2px',
              background: '#ffffff',
              borderRadius: '50%',
              boxShadow: '0 0 6px #ffffff',
              opacity: (i % 5) * 0.2 + 0.3,
            }}
          />
        ))}
      </div>

      <div style={{ maxWidth: '820px', width: '100%', position: 'relative', zIndex: 10 }}>
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 20px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            marginBottom: '24px',
            color: '#fbcfe8',
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          <Stars size={16} color="#f472b6" />
          <span>The Grand Finale</span>
          <Stars size={16} color="#f472b6" />
        </motion.div>

        {/* Large Glowing Text Reveal */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif glow-text-pink"
          style={{
            fontSize: 'clamp(36px, 6.5vw, 68px)',
            fontWeight: 800,
            color: '#fdf2f8',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}
        >
          Happy Birthday, <br />
          <span
            className="text-gradient-magic font-script"
            style={{ fontSize: '1.25em', display: 'inline-block', filter: 'drop-shadow(0 0 25px rgba(236,72,153,0.8))' }}
          >
            My Best Friend Kawya!
          </span>{' '}
          🎆💖
        </motion.h2>

        {/* Final Emotional Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '24px',
            padding: 'clamp(24px, 5vw, 42px)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 0 30px rgba(244, 114, 182, 0.1)',
            marginBottom: '40px',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(16px, 2.4vw, 21px)',
              lineHeight: 1.8,
              color: '#fce7f3',
              fontStyle: 'italic',
              fontWeight: 300,
            }}
          >
            "No matter how much life changes, one thing will always remain the same —{' '}
            <strong style={{ color: '#f472b6', fontWeight: 600 }}>you'll always have a special place in my heart</strong>.
            Thank you for being YOU. Here's to many more memories, laughter, and adventures together.
            Love you always, bestie! 💖"
          </p>

          <div
            style={{
              marginTop: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '28px' }}>🌸</span>
            <span style={{ fontSize: '28px' }}>🎂</span>
            <span style={{ fontSize: '28px' }}>✨</span>
            <span style={{ fontSize: '28px' }}>👭</span>
            <span style={{ fontSize: '28px' }}>👑</span>
          </div>
        </motion.div>

        {/* Celebrate Again Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 16px 45px rgba(236,72,153,0.6)' }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCelebrateAgain}
          style={{
            background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #f59e0b 100%)',
            color: '#ffffff',
            border: 'none',
            padding: '16px clamp(24px, 5vw, 46px)',
            borderRadius: '999px',
            fontSize: 'clamp(15px, 4vw, 19px)',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            boxShadow: '0 10px 35px rgba(236, 72, 153, 0.5)',
            letterSpacing: '0.5px',
            maxWidth: '92%',
          }}
        >
          <RotateCcw size={22} />
          <span>Celebrate Again 🎉</span>
          <Sparkles size={22} />
        </motion.button>
      </div>
    </section>
  );
}

