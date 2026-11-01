import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, Heart, CheckCircle2 } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { triggerHeartConfetti } from '../utils/confetti';

const WISHES = [
  {
    id: 1,
    title: 'Endless Happiness 🌈',
    tag: 'Joy & Delight',
    message: 'May every day greet you with radiant sunshine, peaceful mornings, and an overflowing cup of joy.',
    emoji: '✨',
    color: '#ff6b9d',
    bg: '#fdf2f8',
  },
  {
    id: 2,
    title: 'Beautiful Memories 📸',
    tag: 'Cherished Times',
    message: 'May this year be packed with trips, belly laughs, warm hugs, and moments you’ll fondly look back on.',
    emoji: '🌸',
    color: '#c084fc',
    bg: '#faf5ff',
  },
  {
    id: 3,
    title: 'Success in Every Dream 🎯',
    tag: 'Boundless Growth',
    message: 'May every door you knock on swing wide open, and may all your hard work blossom into triumphs.',
    emoji: '⭐',
    color: '#fbbf24',
    bg: '#fffbeb',
  },
  {
    id: 4,
    title: 'Peace & Positivity 🕊️',
    tag: 'Calm Spirit',
    message: 'May your mind stay serene, your heart tranquil, and negative vibes dissolve before reaching you.',
    emoji: '🌿',
    color: '#34d399',
    bg: '#f0fdf4',
  },
  {
    id: 5,
    title: 'Love & Laughter 💖',
    tag: 'Deep Connections',
    message: 'May you be surrounded by people who celebrate your existence and make you laugh till your cheeks hurt.',
    emoji: '🎈',
    color: '#f472b6',
    bg: '#fff1f2',
  },
  {
    id: 6,
    title: 'Countless Reasons to Smile 😊',
    tag: 'Pure Magic',
    message: 'May you stumble upon unexpected surprises, sweet messages, and little miracles at every corner.',
    emoji: '🌟',
    color: '#38bdf8',
    bg: '#f0f9ff',
  },
];

export default function Section6WishesBubbles() {
  const [poppedWishes, setPoppedWishes] = useState({});

  const handlePop = (id) => {
    sounds.playPop();
    sounds.playSparkle();
    triggerHeartConfetti();
    setPoppedWishes((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handlePopAll = () => {
    sounds.playFanfare();
    triggerHeartConfetti();
    const all = {};
    WISHES.forEach((w) => (all[w.id] = true));
    setPoppedWishes(all);
  };

  return (
    <section
      id="wishes"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '100px 20px',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1000px', width: '100%' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid #fbcfe8',
              color: '#be185d',
              fontWeight: 600,
              fontSize: '14px',
              marginBottom: '14px',
            }}
          >
            <Star size={16} fill="#fbbf24" color="#f59e0b" />
            <span>Interactive Wishing Well</span>
            <Star size={16} fill="#fbbf24" color="#f59e0b" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif glow-text-pink"
            style={{
              fontSize: 'clamp(30px, 4.5vw, 46px)',
              color: '#be185d',
              marginBottom: '12px',
              fontWeight: 700,
              lineHeight: 1.25,
            }}
          >
            "May this year bring you everything <br />
            your beautiful heart deserves." ✨
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              color: '#6b5b75',
              fontSize: '16px',
              maxWidth: '560px',
              margin: '0 auto 20px auto',
            }}
          >
            Tap on any glowing wishing bubble below to unwrap and receive its special blessing for you!
          </motion.p>

          <button
            onClick={handlePopAll}
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px dashed #f472b6',
              color: '#be185d',
              padding: '8px 20px',
              borderRadius: '999px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Sparkles size={14} />
            <span>Unwrap All 6 Wishes at Once ✨</span>
          </button>
        </div>

        {/* Floating Bubble Wish Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {WISHES.map((wish, index) => {
            const isOpened = poppedWishes[wish.id];

            return (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => handlePop(wish.id)}
                style={{
                  background: wish.bg,
                  borderRadius: '24px',
                  padding: '24px',
                  border: `2px solid ${isOpened ? wish.color : 'rgba(255, 255, 255, 0.8)'}`,
                  boxShadow: isOpened
                    ? `0 14px 28px ${wish.color}25, 0 0 15px ${wish.color}15`
                    : '0 8px 20px rgba(0, 0, 0, 0.05)',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                }}
              >
                {/* Bubble Shimmer Effect */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${wish.color}30 0%, transparent 70%)`,
                  }}
                />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                    }}
                  >
                    {wish.emoji}
                  </div>

                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: wish.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      background: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: '999px',
                    }}
                  >
                    {isOpened ? '✨ Blessed' : 'Tap to Open'}
                  </span>
                </div>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: '20px',
                    color: '#831843',
                    marginBottom: '8px',
                    fontWeight: 700,
                  }}
                >
                  {wish.title}
                </h3>

                <AnimatePresence mode="wait">
                  {isOpened ? (
                    <motion.p
                      key="revealed"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.4 }}
                      style={{
                        fontSize: '14.5px',
                        color: '#4b5563',
                        lineHeight: 1.6,
                      }}
                    >
                      {wish.message}
                    </motion.p>
                  ) : (
                    <motion.div
                      key="closed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#9ca3af',
                        fontSize: '13px',
                        fontStyle: 'italic',
                      }}
                    >
                      <span>Click to release this birthday blessing...</span>
                      <Sparkles size={14} color={wish.color} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

