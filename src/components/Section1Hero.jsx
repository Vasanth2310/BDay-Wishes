import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronDown, Music, Volume2 } from 'lucide-react';
import { triggerFullCelebration } from '../utils/confetti';
import { sounds } from '../utils/soundEffects';

export default function Section1Hero({ isMusicPlaying, toggleMusic }) {
  const handleOpenSurprise = () => {
    sounds.playSparkle();
    triggerFullCelebration();
    const nextSec = document.getElementById('cake');
    if (nextSec) {
      nextSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '120px 24px 60px 24px',
        textAlign: 'center',
        zIndex: 1,
      }}
    >
      {/* Decorative Floating Sparkles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <span style={{ position: 'absolute', top: '18%', left: '12%', fontSize: '28px' }} className="animate-float">✨</span>
        <span style={{ position: 'absolute', top: '22%', right: '14%', fontSize: '32px' }} className="animate-float-reverse">🎈</span>
        <span style={{ position: 'absolute', bottom: '28%', left: '15%', fontSize: '24px' }} className="animate-float">🌸</span>
        <span style={{ position: 'absolute', bottom: '22%', right: '16%', fontSize: '30px' }} className="animate-float-reverse">💖</span>
      </div>

      <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
        {/* Subtitle intro */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '8px clamp(12px, 3vw, 20px)',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(244, 114, 182, 0.4)',
            boxShadow: '0 4px 15px rgba(244, 114, 182, 0.2)',
            marginBottom: '20px',
            maxWidth: '94%',
          }}
        >
          <Sparkles size={16} color="#d946ef" />
          <span
            style={{
              fontSize: 'clamp(12px, 3vw, 14px)',
              fontWeight: 600,
              color: '#86198f',
              letterSpacing: '0.5px',
            }}
          >
            A Little Birthday Surprise for Someone Special...
          </span>
          <Sparkles size={16} color="#d946ef" />
        </motion.div>

        {/* Grand Headline: Happy Birthday, Kawya! */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif glow-text-pink"
          style={{
            fontSize: 'clamp(36px, 8vw, 76px)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '16px',
            color: '#be185d',
          }}
        >
          Happy Birthday, <br />
          <span
            className="text-gradient-magic font-script"
            style={{
              fontSize: '1.25em',
              display: 'inline-block',
              padding: '0 10px',
            }}
          >
            Kawya!
          </span>{' '}
          🎂💖
        </motion.h1>

        {/* Emotional Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: 'clamp(16px, 2.5vw, 21px)',
            color: '#6b5b75',
            lineHeight: 1.7,
            maxWidth: '680px',
            margin: '0 auto 36px auto',
          }}
        >
          To my favorite person, the sweetest soul, and the greatest best friend in the entire universe. Today is dedicated entirely to your smile and your happiness! ✨
        </motion.p>

        {/* Action Button: Open Your Surprise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 16px 40px rgba(236,72,153,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenSurprise}
            style={{
              background: 'linear-gradient(135deg, #ec4899 0%, #d946ef 50%, #8b5cf6 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '16px clamp(24px, 5vw, 44px)',
              borderRadius: '999px',
              fontSize: 'clamp(15px, 4vw, 18px)',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 10px 30px rgba(236, 72, 153, 0.4)',
              transition: 'all 0.3s ease',
              letterSpacing: '0.5px',
              maxWidth: '92%',
            }}
          >
            <Sparkles size={20} />
            <span>Open Your Surprise ✨</span>
            <Heart size={20} fill="#ffffff" />
          </motion.button>

          {/* Music quick banner */}
          <div
            onClick={toggleMusic}
            style={{
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#9333ea',
              fontSize: '14px',
              fontWeight: 500,
              background: 'rgba(255, 255, 255, 0.6)',
              padding: '6px 16px',
              borderRadius: '999px',
              border: '1px solid #f3e8ff',
              transition: 'all 0.2s ease',
            }}
          >
            <Music size={16} />
            <span>{isMusicPlaying ? '🎵 Playing Birthday Melody' : 'Tap to start birthday music 🎵'}</span>
          </div>
        </motion.div>
      </div>

      {/* Downward indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        onClick={() => {
          document.getElementById('cake')?.scrollIntoView({ behavior: 'smooth' });
        }}
        style={{
          position: 'absolute',
          bottom: '24px',
          cursor: 'pointer',
          color: '#ec4899',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          fontSize: '12px',
          fontWeight: 600,
        }}
      >
        <span>Scroll to Celebrate</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}

