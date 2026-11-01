import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Mail, MailOpen, Feather } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function Section3BirthdayLetter() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleLetter = () => {
    sounds.playChime(isOpen ? 440 : 660, 0.4);
    setIsOpen(!isOpen);
  };

  return (
    <section
      id="letter"
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
      <div style={{ maxWidth: '820px', width: '100%', position: 'relative' }}>
        {/* Section Pill Badge */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 20px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid #fbcfe8',
              color: '#be185d',
              fontWeight: 600,
              fontSize: '14px',
              boxShadow: '0 4px 15px rgba(244, 114, 182, 0.15)',
            }}
          >
            <Feather size={16} />
            <span>Straight From My Heart</span>
            <Feather size={16} />
          </motion.div>
        </div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif glow-text-pink"
          style={{
            textAlign: 'center',
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: '#9d174d',
            marginBottom: '10px',
            fontWeight: 700,
          }}
        >
          A Birthday Letter to My Best Friend 💌
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            color: '#6b5b75',
            fontSize: '16px',
            marginBottom: '36px',
          }}
        >
          Words could never truly capture how grateful I am for you, but here is what my soul wanted to say:
        </motion.p>

        {/* Envelope Toggle Header */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <button
            onClick={toggleLetter}
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid #f472b6',
              color: '#be185d',
              padding: '10px 22px',
              borderRadius: '999px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(236,72,153,0.15)',
              transition: 'all 0.2s ease',
            }}
          >
            {isOpen ? <MailOpen size={18} /> : <Mail size={18} />}
            <span>{isOpen ? 'Fold Letter' : 'Unfold & Read Letter'}</span>
          </button>
        </div>

        {/* Vintage Parchment Letter Container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              style={{
                background: 'linear-gradient(135deg, #fffdfa 0%, #fffbf0 60%, #fff7eb 100%)',
                borderRadius: '24px',
                padding: 'clamp(28px, 6vw, 56px)',
                boxShadow:
                  '0 20px 60px rgba(190, 24, 93, 0.12), 0 4px 20px rgba(0, 0, 0, 0.06), inset 0 0 40px rgba(254, 215, 170, 0.3)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Wax Seal / Stamp Decoration */}
              <div
                className="letter-wax-seal"
                style={{
                  position: 'absolute',
                  top: '28px',
                  right: '28px',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #f43f5e 0%, #be123c 100%)',
                  boxShadow: '0 6px 16px rgba(190, 18, 60, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '22px',
                  border: '2px dashed #fda4af',
                  transform: 'rotate(12deg)',
                  zIndex: 2,
                }}
              >
                💌
              </div>

              {/* Watermark subtle quote */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '30px',
                  opacity: 0.05,
                  fontSize: '90px',
                  fontWeight: 900,
                  fontFamily: 'Playfair Display, serif',
                  pointerEvents: 'none',
                  color: '#000',
                }}
              >
                KAWYA
              </div>

              {/* Salutation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '24px' }}
              >
                <h3
                  className="font-script glow-text-pink"
                  style={{
                    fontSize: 'clamp(32px, 5vw, 44px)',
                    color: '#be185d',
                    marginBottom: '4px',
                  }}
                >
                  Dearest Kawya,
                </h3>
                <span
                  style={{
                    fontSize: '13px',
                    color: '#9ca3af',
                    fontStyle: 'italic',
                    letterSpacing: '0.5px',
                  }}
                >
                  To the one who makes this world infinitely brighter...
                </span>
              </motion.div>

              {/* Letter Paragraph 1 */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={letterParaStyle}
              >
                Happy Birthday to someone who isn't just an incredible person, but my true{' '}
                <span className="glow-keyword-pink">Best Friend</span> in every sense of the word.
                Sitting down to write this, I find myself reminiscing through all the little moments, the late-night
                conversations, the ridiculous inside jokes, and the silent comfort of knowing I have you in my corner.
                Life is so much softer and warmer simply because you are in it.
              </motion.p>

              {/* Letter Paragraph 2 */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={letterParaStyle}
              >
                You have a rare, luminous spirit, <span className="glow-keyword-gold">Kawya</span>.
                The kind that effortlessly lights up rooms, eases anxious hearts, and turns ordinary, mundane days
                into unforgettable adventures. Your laugh is contagious, your empathy knows no bounds, and the genuine
                kindness you show to everyone around you is nothing short of inspiring. Thank you for never judging me,
                for always listening with an open heart, and for lifting me up whenever the world felt heavy.
              </motion.p>

              {/* Letter Paragraph 3 */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={letterParaStyle}
              >
                On your special day, my greatest wish for you is overflowing, unapologetic{' '}
                <span className="glow-keyword-pink">Happiness</span>. I pray this new year of your life gifts you
                the courage to pursue every secret dream, the strength to conquer every obstacle, boundless health,
                peace in your quietest moments, and reasons to smile every single morning. You give so much love to the
                people around you—I hope today, the universe showers double that magic right back at you.
              </motion.p>

              {/* Letter Paragraph 4 */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={letterParaStyle}
              >
                No matter where life takes us, how busy days get, or how many chapters unfold, know with absolute
                certainty that I will cherish our bond <span className="glow-keyword-purple">Forever</span>.
                You will always have a confidant, a cheerleader, a shoulder to lean on, and a best friend in me for
                all the years ahead.
              </motion.p>

              {/* Letter Sign-off */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  marginTop: '36px',
                  paddingTop: '20px',
                  borderTop: '1px dashed rgba(244, 114, 182, 0.4)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                <div>
                  <p style={{ color: '#6b5b75', fontSize: '15px', fontStyle: 'italic', marginBottom: '4px' }}>
                    With all my heart & endless love,
                  </p>
                  <p
                    className="font-script glow-text-pink"
                    style={{ fontSize: '32px', color: '#db2777', fontWeight: 700 }}
                  >
                    Your Bestie Forever 💖
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ fontSize: '24px' }}>✨</span>
                  <span style={{ fontSize: '24px' }}>🎂</span>
                  <span style={{ fontSize: '24px' }}>🌸</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .glow-keyword-pink {
          color: #be185d;
          font-weight: 700;
          text-shadow: 0 0 10px rgba(244, 114, 182, 0.6);
          padding: 0 4px;
        }
        .glow-keyword-gold {
          color: #b45309;
          font-weight: 700;
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.6);
          padding: 0 4px;
        }
        .glow-keyword-purple {
          color: #7e22ce;
          font-weight: 700;
          text-shadow: 0 0 10px rgba(168, 85, 247, 0.6);
          padding: 0 4px;
        }
        @media (max-width: 600px) {
          .letter-wax-seal {
            width: 44px !important;
            height: 44px !important;
            font-size: 16px !important;
            top: 16px !important;
            right: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

const letterParaStyle = {
  fontSize: 'clamp(14.5px, 2.2vw, 17.5px)',
  color: '#4b5563',
  lineHeight: 1.8,
  marginBottom: '18px',
  fontFamily: "'Poppins', sans-serif",
  textAlign: 'left',
};

