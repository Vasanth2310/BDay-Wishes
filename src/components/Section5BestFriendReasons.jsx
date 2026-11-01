import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Smile, Compass, Sparkles, ShieldCheck, Stars, UserCheck } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

const REASONS = [
  {
    number: '01',
    icon: <Heart size={26} color="#ec4899" />,
    title: 'Your Beautiful Heart',
    description:
      'You have an incredible capacity for empathy, gentleness, and love. You feel deeply and always make everyone around you feel valued and safe.',
    gradient: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
    border: '#f472b6',
  },
  {
    number: '02',
    icon: <Smile size={26} color="#f59e0b" />,
    title: 'Your Contagious Laughter',
    description:
      'One giggle from you and the entire room lights up. You have the best sense of humor, turning mundane moments into pure comedic gold.',
    gradient: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
    border: '#fbbf24',
  },
  {
    number: '03',
    icon: <Sparkles size={26} color="#8b5cf6" />,
    title: 'Your Kindness & Understanding',
    description:
      'You listen without judgment and understand what remains unsaid. Having someone who truly gets me is the greatest gift of all.',
    gradient: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
    border: '#c084fc',
  },
  {
    number: '04',
    icon: <Stars size={26} color="#06b6d4" />,
    title: 'Making Ordinary Days Special',
    description:
      'A simple walk, a quick phone call, or sharing a snack turns into a cherished memory just because you are part of it.',
    gradient: 'linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)',
    border: '#67e8f9',
  },
  {
    number: '05',
    icon: <ShieldCheck size={26} color="#10b981" />,
    title: 'Your Endless Support',
    description:
      'Through every doubt, triumph, and high and low, you are always there cheering the loudest. You believe in me even when I forget to believe in myself.',
    gradient: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    border: '#86efac',
  },
  {
    number: '06',
    icon: <Compass size={26} color="#f43f5e" />,
    title: 'The Memories We Create Together',
    description:
      'Our chaotic adventures, late-night talks, whispered secrets, and inside jokes that no one else in the world would ever understand.',
    gradient: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
    border: '#fda4af',
  },
  {
    number: '07',
    icon: <UserCheck size={26} color="#d946ef" />,
    title: 'Simply Being YOU, Kawya',
    description:
      'You are authentic, genuine, irreplaceable, and truly one of a kind. There is nobody else on this planet like you, and I wouldn’t trade our friendship for anything.',
    gradient: 'linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)',
    border: '#e879f9',
    featured: true,
  },
];

export default function Section5BestFriendReasons() {
  const handleCardClick = () => {
    sounds.playChime(698.46, 0.3);
  };

  return (
    <section
      id="reasons"
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
      <div style={{ maxWidth: '1050px', width: '100%' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
            <Heart size={16} fill="#be185d" />
            <span>Forever Grateful For You</span>
            <Heart size={16} fill="#be185d" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif glow-text-pink"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#be185d',
              marginBottom: '12px',
              fontWeight: 700,
            }}
          >
            Reasons Why You're My Best Friend 💖
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              color: '#6b5b75',
              fontSize: '16px',
              maxWidth: '580px',
              margin: '0 auto',
            }}
          >
            There are a million reasons, but here are seven that make you so deeply special to me:
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {REASONS.map((reason, idx) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: '0 16px 30px rgba(244, 114, 182, 0.25)',
              }}
              onClick={handleCardClick}
              style={{
                background: reason.gradient,
                borderRadius: '20px',
                padding: '28px 24px',
                border: `1.5px solid ${reason.border}`,
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                gridColumn: reason.featured ? '1 / -1' : 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Top Row: Number & Icon */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
                    }}
                  >
                    {reason.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      color: reason.border,
                      letterSpacing: '1px',
                    }}
                  >
                    {reason.number}
                  </span>
                </div>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: '20px',
                    color: '#831843',
                    marginBottom: '10px',
                    fontWeight: 700,
                  }}
                >
                  {reason.title}
                </h3>

                <p
                  style={{
                    fontSize: '14.5px',
                    color: '#4b5563',
                    lineHeight: 1.65,
                  }}
                >
                  {reason.description}
                </p>
              </div>

              {reason.featured && (
                <div
                  style={{
                    marginTop: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#d946ef',
                    fontWeight: 600,
                    fontSize: '13px',
                  }}
                >
                  <Sparkles size={14} />
                  <span>The ultimate reason: Nobody could ever take your place!</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

