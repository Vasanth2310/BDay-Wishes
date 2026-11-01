import React, { useState } from 'react';
import SparkleCursor from './components/SparkleCursor';
import BackgroundParticles from './components/BackgroundParticles';
import IntroOverlay from './components/IntroOverlay';
import Navbar from './components/Navbar';
import Section1Hero from './components/Section1Hero';
import Section2CakeCelebration from './components/Section2CakeCelebration';
import Section3BirthdayLetter from './components/Section3BirthdayLetter';
import Section4MomentsTimeline from './components/Section4MomentsTimeline';
import Section5BestFriendReasons from './components/Section5BestFriendReasons';
import SurpriseGiftBoxes from './components/SurpriseGiftBoxes';
import Section6WishesBubbles from './components/Section6WishesBubbles';
import Section7FinalSurprise from './components/Section7FinalSurprise';
import BackToTop from './components/BackToTop';
import { sounds } from './utils/soundEffects';

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggleMusic = () => {
    const newState = sounds.toggleMusic();
    setIsMusicPlaying(newState);
  };

  const handleEnterFromIntro = () => {
    // Start gentle birthday music on user interaction
    if (!isMusicPlaying) {
      sounds.startSynthesizedLofiMusic();
      setIsMusicPlaying(true);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Sparkle cursor trail for desktop */}
      <SparkleCursor />

      {/* Floating dream ambient particles, balloons, and floating hearts */}
      <BackgroundParticles />

      {/* Interactive Unboxing Intro Screen */}
      <IntroOverlay onEnter={handleEnterFromIntro} />

      {/* Top Navbar with Music Controls & Heart Scroll Indicator */}
      <Navbar isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Magical Birthday Welcome */}
        <Section1Hero isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} />

        {/* Section 2: Birthday Cake & Blowing out candles */}
        <Section2CakeCelebration />

        {/* Section 3: A Long Birthday Letter for Kawya */}
        <Section3BirthdayLetter />

        {/* Section 4: Friendship Moments & Memories in Words */}
        <Section4MomentsTimeline />

        {/* Section 5: Reasons Why You're My Best Friend */}
        <Section5BestFriendReasons />

        {/* Interactive Mystery Gift Boxes */}
        <SurpriseGiftBoxes />

        {/* Section 6: Interactive Birthday Wishes Bubbles */}
        <Section6WishesBubbles />

        {/* Section 7: Final Surprise (Night sky, Fireworks, Emotional tribute) */}
        <Section7FinalSurprise />
      </main>

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

