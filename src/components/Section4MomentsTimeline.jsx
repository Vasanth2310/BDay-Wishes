import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, MessageCircleHeart, Coffee, Compass, Smile, Shield, Stars } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

const MOMENTS = [
  {
    id: 1,
    title: 'The Conversations That Melted Time Away',
    tag: 'Heart to Heart',
    icon: <MessageCircleHeart size={26} color="#ec4899" />,
    quote: '"Time stands still whenever we talk."',
    story:
      'Those long, effortless conversations where hours felt like minutes. We could talk about our deepest insecurities, wildest dreams, silly trivial things, or deep life philosophy—and it always felt like the safest place in the world.',
    color: '#ff6b9d',
    bg: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
    border: '#fda4af',
  },
  {
    id: 2,
    title: 'Laughing Until Our Stomachs Hurt',
    tag: 'Pure Happiness',
    icon: <Smile size={26} color="#f59e0b" />,
    quote: '"The kind of laughter that heals your spirit."',
    story:
      'Those uncontrollable fits of laughter over something completely absurd. The moments where we were trying so hard to be quiet, which only made us laugh ten times harder until tears were streaming down our faces.',
    color: '#f59e0b',
    bg: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
    border: '#fde68a',
  },
  {
    id: 3,
    title: 'The Comfort of Unspoken Understanding',
    tag: 'Silent Connection',
    icon: <Heart size={26} color="#c084fc" />,
    quote: '"Real besties speak a language made of glances."',
    story:
      'We never have to fake anything or put on a mask. We can exchange a single look across a crowded room and instantly know what the other is thinking. Even when we are simply quiet together, it feels complete and peaceful.',
    color: '#a855f7',
    bg: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
    border: '#d8b4fe',
  },
  {
    id: 4,
    title: 'Being Each Other’s Safe Anchor',
    tag: 'Unwavering Support',
    icon: <Shield size={26} color="#3b82f6" />,
    quote: '"In every storm, you are my steady ground."',
    story:
      'Whenever life felt too chaotic, overwhelming, or exhausting, knowing I could reach out to you made everything manageable. You listen without judgment, validate my feelings, and remind me of who I truly am.',
    color: '#3b82f6',
    bg: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
    border: '#93c5fd',
  },
  {
    id: 5,
    title: 'Inside Jokes That Nobody Else Gets',
    tag: 'Our Secret Code',
    icon: <Coffee size={26} color="#10b981" />,
    quote: '"Inside jokes: our friendship’s secret currency."',
    story:
      'Words, phrases, and random references that would sound like gibberish to anyone else, but trigger instant giggles between the two of us. It is our own little world within this giant universe.',
    color: '#10b981',
    bg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    border: '#86efac',
  },
  {
    id: 6,
    title: 'The Golden Chapters Yet to Come',
    tag: 'Future Adventures',
    icon: <Stars size={26} color="#f43f5e" />,
    quote: '"The best memories are still waiting to be lived."',
    story:
      'All the future coffee runs, impromptu road trips, life achievements, celebrations, and quiet victories. We have so many chapters left to write, and I cannot wait to experience every single one beside you, Kawya.',
    color: '#f43f5e',
    bg: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
    border: '#fda4af',
  },
];

export default function Section4MomentsTimeline() {
  const [activeStory, setActiveStory] = useState(null);

  const handleCardClick = (id) => {
    sounds.playChime(659.25, 0.35);
    setActiveStory(activeStory === id ? null : id);
  };

  return (
    <section
      id="moments"
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
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            <Sparkles size={16} />
            <span>Memories in Heart & Mind</span>
            <Sparkles size={16} />
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
            The Moments Etched In My Heart 💖✨
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              color: '#6b5b75',
              fontSize: '16px',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            <em>"We might not need a camera roll to prove our bond. The most genuine, beautiful memories are lived fully in the present and kept forever in the soul."</em>
          </motion.p>
        </div>

        {/* Story Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {MOMENTS.map((item, index) => {
            const isExpanded = activeStory === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => handleCardClick(item.id)}
                style={{
                  background: item.bg,
                  borderRadius: '24px',
                  padding: '28px 24px',
                  border: `1.5px solid ${item.border}`,
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.04)',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Top Bar: Icon and Badge */}
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
                        borderRadius: '14px',
                        background: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                      }}
                    >
                      {item.icon}
                    </div>

                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: item.color,
                        background: '#ffffff',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '20px',
                      color: '#831843',
                      marginBottom: '8px',
                      fontWeight: 700,
                      lineHeight: 1.35,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Quote Banner */}
                  <p
                    className="font-handwriting"
                    style={{
                      fontSize: '18px',
                      color: item.color,
                      marginBottom: '14px',
                      fontWeight: 600,
                    }}
                  >
                    {item.quote}
                  </p>

                  {/* Story Description */}
                  <p
                    style={{
                      fontSize: '14.5px',
                      color: '#4b5563',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.story}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '20px',
                    paddingTop: '14px',
                    borderTop: '1px dashed rgba(0,0,0,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#9ca3af',
                  }}
                >
                  <span>Cherished Always</span>
                  <Heart size={14} color={item.color} fill={item.color} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Emotional Quote Card at the Bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: '45px',
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            padding: '24px 32px',
            textAlign: 'center',
            border: '1px solid rgba(244, 114, 182, 0.3)',
            boxShadow: '0 8px 25px rgba(244, 114, 182, 0.12)',
          }}
        >
          <p
            className="font-serif"
            style={{
              fontSize: '18px',
              color: '#831843',
              fontStyle: 'italic',
              lineHeight: 1.6,
            }}
          >
            "The real beauty of our friendship is that it doesn’t depend on photographs or social media. It lives in our conversations, our trust, and the genuine happiness we feel for each other." 🌸✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}

