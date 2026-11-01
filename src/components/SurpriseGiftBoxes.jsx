import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, Heart, Check, X } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { triggerHeartConfetti } from '../utils/confetti';

const GIFTS = [
  {
    id: 1,
    title: 'Mystery Box #1',
    boxColor: '#ec4899',
    ribbonColor: '#fef08a',
    badge: '🎟️ VIP Bestie Pass',
    headline: 'One Lifetime Pass of Unconditional Support',
    description:
      'Valid 24/7/365. Redeemable for late-night venting, emergency drive-thru runs, instant advice, or someone to laugh at things only the two of us understand. Never expires! 💕',
  },
  {
    id: 2,
    title: 'Mystery Box #2',
    boxColor: '#8b5cf6',
    ribbonColor: '#fbcfe8',
    badge: '🍿 Cheer-Up Guarantee',
    headline: 'Emergency Hugs & Favorite Snacks On Demand',
    description:
      'Whenever life gets heavy or cloudy, this guarantees unlimited warm hugs, your favorite comfort snacks, and silly dance sessions until your smile returns! 🌸✨',
  },
  {
    id: 3,
    title: 'Mystery Box #3',
    boxColor: '#f59e0b',
    ribbonColor: '#fce7f3',
    badge: '👑 Golden Best Friend Promise',
    headline: 'A Friendship Rooted In Loyalty & Love',
    description:
      'A solemn promise that no matter how many years pass or how busy the world gets, you will always have a sister and best friend in me. You are never alone, Kawya! 👭💖',
  },
];

export default function SurpriseGiftBoxes() {
  const [openedGifts, setOpenedGifts] = useState({});
  const [activeModalGift, setActiveModalGift] = useState(null);

  const handleOpenBox = (gift) => {
    sounds.playSparkle();
    triggerHeartConfetti();
    setOpenedGifts((prev) => ({ ...prev, [gift.id]: true }));
    setActiveModalGift(gift);
  };

  return (
    <section
      style={{
        padding: '70px 20px',
        position: 'relative',
        zIndex: 1,
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
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
            marginBottom: '12px',
          }}
        >
          <Gift size={16} />
          <span>Interactive Surprise Boxes</span>
          <Gift size={16} />
        </motion.div>

        <h3
          className="font-serif glow-text-pink"
          style={{
            fontSize: 'clamp(26px, 4vw, 38px)',
            color: '#9d174d',
            fontWeight: 700,
            marginBottom: '8px',
          }}
        >
          Clickable Birthday Mystery Gifts 🎁✨
        </h3>
        <p style={{ color: '#6b5b75', fontSize: '15px' }}>
          Tap on each gift box to unwrap special personalized bestie perks for Kawya!
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}
      >
        {GIFTS.map((gift) => {
          const isOpened = openedGifts[gift.id];

          return (
            <motion.div
              key={gift.id}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleOpenBox(gift)}
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                borderRadius: '24px',
                padding: '30px 20px',
                border: isOpened ? `2px solid ${gift.boxColor}` : '2px dashed #f472b6',
                boxShadow: isOpened
                  ? `0 14px 28px ${gift.boxColor}25`
                  : '0 8px 20px rgba(244, 114, 182, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              {/* Animated Gift Graphic */}
              <motion.div
                animate={isOpened ? { rotate: [0, -6, 6, 0] } : { y: [0, -4, 0] }}
                transition={isOpened ? { duration: 0.5 } : { repeat: Infinity, duration: 2.5 }}
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '16px',
                  background: gift.boxColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  position: 'relative',
                  boxShadow: `0 8px 18px ${gift.boxColor}40`,
                }}
              >
                {/* Cross Ribbon */}
                <div
                  style={{
                    position: 'absolute',
                    width: '12px',
                    height: '100%',
                    background: gift.ribbonColor,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    height: '12px',
                    width: '100%',
                    background: gift.ribbonColor,
                  }}
                />
                <Gift size={32} color="#ffffff" style={{ zIndex: 2 }} />
              </motion.div>

              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#831843',
                  marginBottom: '6px',
                }}
              >
                {gift.title}
              </h4>

              <p
                style={{
                  fontSize: '13px',
                  color: isOpened ? gift.boxColor : '#9ca3af',
                  fontWeight: 600,
                }}
              >
                {isOpened ? '✨ Opened (Tap to read)' : 'Tap to unwrap surprise! ✨'}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Gift Modal Detail */}
      <AnimatePresence>
        {activeModalGift && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalGift(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '36px 28px',
                maxWidth: '480px',
                width: '100%',
                position: 'relative',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                textAlign: 'center',
              }}
            >
              <button
                onClick={() => setActiveModalGift(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: '#f3f4f6',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={18} />
              </button>

              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: activeModalGift.boxColor,
                  background: `${activeModalGift.boxColor}15`,
                  padding: '6px 16px',
                  borderRadius: '999px',
                  display: 'inline-block',
                  marginBottom: '16px',
                }}
              >
                {activeModalGift.badge}
              </span>

              <h3
                className="font-serif glow-text-pink"
                style={{
                  fontSize: '22px',
                  color: '#831843',
                  marginBottom: '14px',
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                {activeModalGift.headline}
              </h3>

              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
                {activeModalGift.description}
              </p>

              <button
                onClick={() => setActiveModalGift(null)}
                style={{
                  background: `linear-gradient(135deg, ${activeModalGift.boxColor}, #ec4899)`,
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 28px',
                  borderRadius: '999px',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: `0 6px 18px ${activeModalGift.boxColor}40`,
                }}
              >
                Claim This Bestie Gift 💖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

