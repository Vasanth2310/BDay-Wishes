import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Gift } from 'lucide-react';
import { triggerFullCelebration } from '../utils/confetti';
import { sounds } from '../utils/soundEffects';

export default function IntroOverlay({ onEnter }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleOpenGift = () => {
    if (isOpening) return;
    setIsOpening(true);
    sounds.playSparkle();

    setTimeout(() => {
      triggerFullCelebration();
      sounds.playFanfare();
    }, 600);

    setTimeout(() => {
      setIsDismissed(true);
      if (onEnter) onEnter();
    }, 1200);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'radial-gradient(circle at center, #fdf2f8 0%, #f5f3ff 45%, #ede9fe 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          textAlign: 'center',
        }}
      >
        {/* Soft background floating elements */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <span style={{ position: 'absolute', top: '15%', left: '15%', fontSize: '30px', opacity: 0.4 }} className="animate-float">✨</span>
          <span style={{ position: 'absolute', top: '25%', right: '18%', fontSize: '35px', opacity: 0.35 }} className="animate-float-reverse">💖</span>
          <span style={{ position: 'absolute', bottom: '20%', left: '20%', fontSize: '32px', opacity: 0.4 }} className="animate-float">🎈</span>
          <span style={{ position: 'absolute', bottom: '25%', right: '15%', fontSize: '28px', opacity: 0.35 }} className="animate-float-reverse">🌸</span>
        </div>

        {/* Floating gift container */}
        <motion.div
          animate={isOpening ? { scale: [1, 1.25, 0.9, 1.4], rotate: [0, -8, 8, 0] } : { y: [0, -10, 0] }}
          transition={isOpening ? { duration: 0.8 } : { repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          onClick={handleOpenGift}
          style={{
            cursor: 'pointer',
            position: 'relative',
            marginBottom: '32px',
          }}
        >
          {/* Glowing Aura */}
          <div
            style={{
              position: 'absolute',
              inset: '-20px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(168,85,247,0) 70%)',
              filter: 'blur(16px)',
              animation: 'pulseGlow 2s infinite ease-in-out',
            }}
          />

          {/* 3D Animated Gift Box Graphic */}
          <div
            style={{
              width: '150px',
              height: '150px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Box Body */}
            <div
              style={{
                width: '110px',
                height: '95px',
                background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
                borderRadius: '16px',
                position: 'absolute',
                bottom: 0,
                boxShadow: '0 16px 35px rgba(219, 39, 119, 0.35)',
                display: 'flex',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {/* Vertical Ribbon */}
              <div style={{ width: '24px', height: '100%', background: 'linear-gradient(180deg, #fef08a, #f59e0b)' }} />
            </div>

            {/* Box Lid */}
            <motion.div
              animate={isOpening ? { y: -80, rotate: -25, opacity: 0 } : { y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                width: '124px',
                height: '32px',
                background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
                borderRadius: '10px',
                position: 'absolute',
                bottom: '80px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
              }}
            >
              {/* Lid Ribbon */}
              <div style={{ width: '24px', height: '100%', background: 'linear-gradient(180deg, #fef08a, #f59e0b)' }} />
            </motion.div>

            {/* Bow on Top */}
            <motion.div
              animate={isOpening ? { y: -100, opacity: 0 } : { y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '100px',
                zIndex: 3,
                fontSize: '44px',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
              }}
            >
              🎀
            </motion.div>
          </div>
        </motion.div>

        {/* Text Details */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: '15px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: '#a855f7',
            fontWeight: 600,
            marginBottom: '8px',
          }}
        >
          Special Birthday Delivery
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-serif glow-text-pink"
          style={{
            fontSize: 'clamp(28px, 5vw, 44px)',
            color: '#be185d',
            marginBottom: '12px',
            lineHeight: 1.2,
          }}
        >
          For Someone Truly Special ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            color: '#6b5b75',
            fontSize: '16px',
            maxWidth: '380px',
            marginBottom: '28px',
            lineHeight: 1.6,
          }}
        >
          A box full of laughter, memories, and heartfelt love awaits Kawya. Tap below to unwrap your surprise!
        </motion.p>

        {/* Interactive CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(236,72,153,0.45)' }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpenGift}
          style={{
            background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
            color: '#ffffff',
            border: 'none',
            padding: '15px clamp(20px, 4vw, 36px)',
            borderRadius: '999px',
            fontSize: 'clamp(14.5px, 4vw, 17px)',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            boxShadow: '0 8px 25px rgba(236, 72, 153, 0.35)',
            letterSpacing: '0.5px',
            maxWidth: '92%',
          }}
        >
          <Sparkles size={18} />
          <span>Open Your Gift Box ✨</span>
          <Heart size={18} fill="#ffffff" />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}

