import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Heart, Sparkles, Cake, Mail, MessageSquareHeart, Star, UserCheck } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function Navbar({ isMusicPlaying, toggleMusic }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setIsScrolled(currentScroll > 60);

      // Determine active section for mobile tab indicator
      const sections = ['hero', 'cake', 'letter', 'moments', 'reasons', 'wishes', 'final-surprise'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          setActiveTab(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    sounds.playChime(659.25, 0.35);
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top glowing progress line with moving heart */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'rgba(255, 182, 193, 0.25)',
          zIndex: 1001,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #ff6b9d, #c084fc, #fbbf24)',
            boxShadow: '0 0 10px #ff6b9d',
            transition: 'width 0.1s linear',
            position: 'relative',
          }}
        >
          {/* Heart indicator at leading edge */}
          <div
            style={{
              position: 'absolute',
              right: '-8px',
              top: '-7px',
              color: '#ff4d88',
              fontSize: '15px',
              filter: 'drop-shadow(0 0 4px #ff4d88)',
              transform: 'scale(1.1)',
            }}
          >
            💖
          </div>
        </div>
      </div>

      {/* Top Floating Navigation Bar */}
      <nav
        style={{
          position: 'fixed',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 900,
          width: '94%',
          maxWidth: '840px',
          padding: '8px 16px',
          borderRadius: '999px',
          background: isScrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.85)',
          boxShadow: isScrolled
            ? '0 10px 30px rgba(244, 114, 182, 0.22), 0 2px 8px rgba(0,0,0,0.04)'
            : '0 4px 20px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo / Title */}
        <div
          onClick={() => scrollTo('hero')}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            userSelect: 'none',
          }}
        >
          <span style={{ fontSize: '18px' }}>👑</span>
          <span
            className="font-handwriting glow-text-pink"
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#d946ef',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap',
            }}
          >
            Kawya's Day ✨
          </span>
        </div>

        {/* Quick links (Visible on desktop/tablet) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
          className="nav-links-desktop"
        >
          <button
            onClick={() => scrollTo('cake')}
            style={{ ...navBtnStyle, color: activeTab === 'cake' ? '#db2777' : '#6b21a8' }}
            title="Make a Wish"
          >
            🎂 Cake
          </button>
          <button
            onClick={() => scrollTo('letter')}
            style={{ ...navBtnStyle, color: activeTab === 'letter' ? '#db2777' : '#6b21a8' }}
            title="Birthday Letter"
          >
            💌 Letter
          </button>
          <button
            onClick={() => scrollTo('moments')}
            style={{ ...navBtnStyle, color: activeTab === 'moments' ? '#db2777' : '#6b21a8' }}
            title="Special Moments"
          >
            ✨ Moments
          </button>
          <button
            onClick={() => scrollTo('reasons')}
            style={{ ...navBtnStyle, color: activeTab === 'reasons' ? '#db2777' : '#6b21a8' }}
            title="Why Bestie"
          >
            💖 Bestie
          </button>
          <button
            onClick={() => scrollTo('wishes')}
            style={{ ...navBtnStyle, color: activeTab === 'wishes' ? '#db2777' : '#6b21a8' }}
            title="Birthday Wishes"
          >
            🌟 Wishes
          </button>
        </div>

        {/* Music & Sound Widget */}
        <button
          onClick={toggleMusic}
          style={{
            background: isMusicPlaying
              ? 'linear-gradient(135deg, #ec4899, #a855f7)'
              : 'rgba(255, 255, 255, 0.9)',
            color: isMusicPlaying ? '#fff' : '#831843',
            border: isMusicPlaying ? 'none' : '1px solid #fbcfe8',
            padding: '6px 12px',
            borderRadius: '999px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12.5px',
            fontWeight: 600,
            boxShadow: isMusicPlaying ? '0 4px 14px rgba(236, 72, 153, 0.4)' : 'none',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
          }}
        >
          <Music size={14} className={isMusicPlaying ? 'animate-bounce' : ''} />
          <span>{isMusicPlaying ? 'Playing 🎵' : 'Music 🎵'}</span>
          {isMusicPlaying && (
            <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '10px' }}>
              <span className="equalizer-bar" style={{ animationDelay: '0s' }} />
              <span className="equalizer-bar" style={{ animationDelay: '0.2s' }} />
              <span className="equalizer-bar" style={{ animationDelay: '0.4s' }} />
            </div>
          )}
        </button>
      </nav>

      {/* Floating Mobile Bottom Navigation Bar (Visible only on mobile screens) */}
      <div className="mobile-bottom-nav">
        <button
          className={`mobile-nav-item ${activeTab === 'cake' ? 'active' : ''}`}
          onClick={() => scrollTo('cake')}
        >
          <span className="mobile-nav-icon">🎂</span>
          <span className="mobile-nav-label">Cake</span>
        </button>

        <button
          className={`mobile-nav-item ${activeTab === 'letter' ? 'active' : ''}`}
          onClick={() => scrollTo('letter')}
        >
          <span className="mobile-nav-icon">💌</span>
          <span className="mobile-nav-label">Letter</span>
        </button>

        <button
          className={`mobile-nav-item ${activeTab === 'moments' ? 'active' : ''}`}
          onClick={() => scrollTo('moments')}
        >
          <span className="mobile-nav-icon">✨</span>
          <span className="mobile-nav-label">Moments</span>
        </button>

        <button
          className={`mobile-nav-item ${activeTab === 'reasons' ? 'active' : ''}`}
          onClick={() => scrollTo('reasons')}
        >
          <span className="mobile-nav-icon">💖</span>
          <span className="mobile-nav-label">Bestie</span>
        </button>

        <button
          className={`mobile-nav-item ${activeTab === 'wishes' ? 'active' : ''}`}
          onClick={() => scrollTo('wishes')}
        >
          <span className="mobile-nav-icon">🌟</span>
          <span className="mobile-nav-label">Wishes</span>
        </button>
      </div>

      <style>{`
        .equalizer-bar {
          width: 2.5px;
          height: 100%;
          background: #ffffff;
          border-radius: 2px;
          animation: eqAnim 0.7s infinite alternate ease-in-out;
        }
        @keyframes eqAnim {
          0% { height: 2px; }
          100% { height: 10px; }
        }

        /* Mobile bottom nav */
        .mobile-bottom-nav {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }

          .mobile-bottom-nav {
            display: flex;
            position: fixed;
            bottom: 12px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 899;
            width: 90%;
            max-width: 380px;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.9);
            border-radius: 999px;
            padding: 6px 12px;
            box-shadow: 0 10px 30px rgba(236, 72, 153, 0.25), 0 2px 10px rgba(0, 0, 0, 0.05);
            justify-content: space-around;
            align-items: center;
          }

          .mobile-nav-item {
            background: transparent;
            border: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justifyContent: center;
            padding: 4px 8px;
            cursor: pointer;
            border-radius: 12px;
            transition: all 0.2s ease;
            -webkit-tap-highlight-color: transparent;
          }

          .mobile-nav-item.active {
            background: rgba(253, 231, 243, 0.85);
            transform: scale(1.06);
          }

          .mobile-nav-icon {
            font-size: 16px;
            line-height: 1;
            margin-bottom: 2px;
          }

          .mobile-nav-label {
            font-size: 10px;
            font-weight: 600;
            color: #831843;
          }
        }
      `}</style>
    </>
  );
}

const navBtnStyle = {
  background: 'transparent',
  border: 'none',
  fontSize: '13px',
  fontWeight: 600,
  cursor: 'pointer',
  padding: '4px 8px',
  borderRadius: '8px',
  transition: 'all 0.2s ease',
};
