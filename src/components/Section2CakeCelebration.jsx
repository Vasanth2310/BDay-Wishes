import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Wind, Flame, RotateCcw } from 'lucide-react';
import { triggerCandleWishConfetti, triggerFullCelebration } from '../utils/confetti';
import { sounds } from '../utils/soundEffects';

export default function Section2CakeCelebration() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [wishRevealed, setWishRevealed] = useState(false);

  const handleBlowCandles = () => {
    if (candlesBlown) return;
    sounds.playBlowOut();
    setCandlesBlown(true);

    setTimeout(() => {
      sounds.playSparkle();
      triggerCandleWishConfetti();
      setWishRevealed(true);
    }, 500);

    setTimeout(() => {
      triggerFullCelebration();
    }, 1200);
  };

  const handleRelight = () => {
    sounds.playChime(784, 0.4);
    setCandlesBlown(false);
    setWishRevealed(false);
  };

  return (
    <section
      id="cake"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '90px 24px',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
        {/* Section Heading Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid #fbcfe8',
            marginBottom: '16px',
            color: '#be185d',
            fontWeight: 600,
            fontSize: '14px',
          }}
        >
          <Sparkles size={16} />
          <span>The Birthday Ritual</span>
          <Sparkles size={16} />
        </motion.div>

        {/* Big Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif glow-text-pink"
          style={{
            fontSize: 'clamp(32px, 5.5vw, 52px)',
            color: '#be185d',
            fontWeight: 700,
            marginBottom: '12px',
          }}
        >
          Today is all about YOU!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: '17px',
            color: '#6b5b75',
            maxWidth: '540px',
            margin: '0 auto 40px auto',
            lineHeight: 1.6,
          }}
        >
          Close your eyes, make the deepest wish in your heart, and blow out the candles, Kawya! 🎂✨
        </motion.p>

        {/* Interactive Cake Illustration */}
        <motion.div
          className="cake-wrapper"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            position: 'relative',
            width: '320px',
            height: '340px',
            margin: '0 auto 36px auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {/* Cake Stand Plate */}
          <div
            style={{
              width: '320px',
              height: '18px',
              background: 'linear-gradient(180deg, #fce7f3 0%, #e2e8f0 100%)',
              borderRadius: '50%',
              boxShadow: '0 12px 25px rgba(0, 0, 0, 0.12)',
              position: 'relative',
              zIndex: 1,
            }}
          />
          {/* Stand Base */}
          <div
            style={{
              width: '80px',
              height: '24px',
              background: 'linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)',
              clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
              marginBottom: '-2px',
            }}
          />

          {/* Tier 1 (Bottom Layer) */}
          <div
            style={{
              width: '260px',
              height: '75px',
              background: 'linear-gradient(180deg, #f472b6 0%, #ec4899 100%)',
              borderRadius: '16px 16px 8px 8px',
              position: 'relative',
              boxShadow: 'inset 0 -6px 10px rgba(0,0,0,0.1), 0 8px 20px rgba(236,72,153,0.25)',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              zIndex: 2,
              marginBottom: '-6px',
            }}
          >
            {/* Frosting drips */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '20px',
                background: '#fff',
                borderRadius: '16px 16px 0 0',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 10px',
              }}
            >
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '14px',
                    height: i % 2 === 0 ? '16px' : '22px',
                    background: '#fff',
                    borderRadius: '0 0 10px 10px',
                  }}
                />
              ))}
            </div>
            {/* Little sugar pearls decoration */}
            <span style={{ fontSize: '13px', marginTop: '16px' }}>🍓</span>
            <span style={{ fontSize: '13px', marginTop: '16px' }}>✨</span>
            <span style={{ fontSize: '13px', marginTop: '16px' }}>🍓</span>
            <span style={{ fontSize: '13px', marginTop: '16px' }}>✨</span>
            <span style={{ fontSize: '13px', marginTop: '16px' }}>🍓</span>
          </div>

          {/* Tier 2 (Middle Layer) */}
          <div
            style={{
              width: '200px',
              height: '65px',
              background: 'linear-gradient(180deg, #c084fc 0%, #a855f7 100%)',
              borderRadius: '14px 14px 6px 6px',
              position: 'relative',
              boxShadow: 'inset 0 -5px 8px rgba(0,0,0,0.1), 0 6px 16px rgba(168,85,247,0.2)',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              zIndex: 3,
              marginBottom: '-6px',
            }}
          >
            {/* White Frosting top */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '18px',
                background: '#ffffff',
                borderRadius: '14px 14px 0 0',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 8px',
              }}
            >
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '13px',
                    height: i % 2 === 0 ? '14px' : '18px',
                    background: '#ffffff',
                    borderRadius: '0 0 8px 8px',
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: '12px', marginTop: '14px' }}>🌸</span>
            <span style={{ fontSize: '12px', marginTop: '14px' }}>💖</span>
            <span style={{ fontSize: '12px', marginTop: '14px' }}>🌸</span>
          </div>

          {/* Tier 3 (Top Layer) */}
          <div
            style={{
              width: '140px',
              height: '55px',
              background: 'linear-gradient(180deg, #fed7aa 0%, #fb923c 100%)',
              borderRadius: '12px 12px 6px 6px',
              position: 'relative',
              boxShadow: 'inset 0 -4px 6px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 4,
            }}
          >
            {/* White cream top */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '16px',
                background: '#ffffff',
                borderRadius: '12px 12px 0 0',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 6px',
              }}
            >
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '12px',
                    height: i % 2 === 0 ? '12px' : '16px',
                    background: '#ffffff',
                    borderRadius: '0 0 6px 6px',
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: '12px', marginTop: '12px', color: '#fff', fontWeight: 'bold' }}>KAWYA</span>
          </div>

          {/* Candles on Top */}
          <div
            style={{
              position: 'absolute',
              top: '78px',
              display: 'flex',
              gap: '24px',
              zIndex: 10,
            }}
          >
            {[1, 2, 3].map((candleNum) => (
              <div
                key={candleNum}
                onClick={handleBlowCandles}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                {/* Flame / Smoke */}
                {!candlesBlown ? (
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 0.9, 1.1],
                      rotate: [-2, 3, -1, 2],
                    }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
                    style={{
                      width: '16px',
                      height: '24px',
                      background: 'radial-gradient(ellipse at bottom, #fff 10%, #fbbf24 45%, #ef4444 90%)',
                      borderRadius: '50% 50% 35% 35% / 60% 60% 40% 40%',
                      boxShadow: '0 0 16px #fbbf24, 0 0 30px #f97316',
                      marginBottom: '2px',
                    }}
                  />
                ) : (
                  /* Animated Smoke Wisps when blown out */
                  <motion.div
                    initial={{ opacity: 0.8, y: 0, scale: 0.5 }}
                    animate={{ opacity: 0, y: -25, scale: 1.5, x: candleNum % 2 === 0 ? 8 : -8 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                    style={{
                      width: '12px',
                      height: '16px',
                      borderRadius: '50%',
                      background: 'rgba(160, 160, 160, 0.4)',
                      filter: 'blur(3px)',
                      marginBottom: '4px',
                    }}
                  />
                )}

                {/* Candle Wick */}
                <div style={{ width: '2px', height: '6px', background: '#333' }} />

                {/* Candle Stick */}
                <div
                  style={{
                    width: '10px',
                    height: '36px',
                    borderRadius: '3px',
                    background:
                      candleNum === 1
                        ? 'repeating-linear-gradient(45deg, #f472b6, #f472b6 4px, #ffffff 4px, #ffffff 8px)'
                        : candleNum === 2
                        ? 'repeating-linear-gradient(45deg, #c084fc, #c084fc 4px, #ffffff 4px, #ffffff 8px)'
                        : 'repeating-linear-gradient(45deg, #38bdf8, #38bdf8 4px, #ffffff 4px, #ffffff 8px)',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Blow Out Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          {!candlesBlown ? (
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(245,158,11,0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBlowCandles}
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '14px clamp(18px, 4vw, 36px)',
                borderRadius: '999px',
                fontSize: 'clamp(14px, 3.8vw, 17px)',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 25px rgba(245, 158, 11, 0.3)',
                maxWidth: '92%',
                textAlign: 'center',
                justifyContent: 'center',
              }}
            >
              <Wind size={18} />
              <span>Make a Wish & Blow Out Candles! 🎂✨</span>
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRelight}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#db2777',
                border: '2px solid #fbcfe8',
                padding: '12px 24px',
                borderRadius: '999px',
                fontSize: 'clamp(13px, 3.5vw, 15px)',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                maxWidth: '92%',
              }}
            >
              <RotateCcw size={16} />
              <span>Light the Candles Again 🔥</span>
            </motion.button>
          )}
        </div>

        {/* Revealed Wish Message Card */}
        <AnimatePresence>
          {wishRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7, type: 'spring', bounce: 0.35 }}
              className="glass-card glow-box"
              style={{
                marginTop: '36px',
                padding: '30px',
                maxWidth: '620px',
                margin: '36px auto 0 auto',
                border: '2px solid rgba(251, 191, 36, 0.4)',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🎉✨💖✨🎉</div>
              <h3
                className="font-serif glow-text-gold"
                style={{
                  fontSize: '24px',
                  color: '#b45309',
                  marginBottom: '10px',
                  fontWeight: 700,
                }}
              >
                Your Birthday Wish Has Been Cast Into the Stars!
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  lineHeight: 1.7,
                }}
              >
                May every single dream you hold close to your heart bloom into reality this year, Kawya.
                You deserve an endless ocean of pure joy, boundless love, and gentle peace. Happy Birthday, bestie! 🌸🌟
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

