import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import { I18nProvider } from './i18n/I18nContext';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import AIWorkstation from './components/AIWorkstation';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import CozyToggle from './components/CozyToggle';
import ParticleField from './components/ParticleField';
import ScrollProgress from './components/ScrollProgress';

const contactInfo = {
  name: 'Leandro N. Serrano',
  role: 'C++ & Python Developer | AI-First Builder',
  location: 'Tigre, Buenos Aires, Argentina',
  email: 'Leandroserrano777@gmail.com',
  linkedin: 'linkedin.com/in/leandro-serrano',
  github: 'github.com/Lenase0077',
};

function AppContent() {
  const [isCozy, setIsCozy] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/lofi-beat.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }

    if (isCozy) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isCozy]);

  useEffect(() => {
    if (isCozy) {
      document.body.classList.add('cozy-mode');
    } else {
      document.body.classList.remove('cozy-mode');
    }
  }, [isCozy]);

  const toggleCozy = () => setIsCozy((prev) => !prev);

  return (
    <div className="relative min-h-screen overflow-hidden transition-colors duration-1000">
      {/* Backgrounds */}
      <div className="cyber-grid" />
      <div className="cozy-bg-layer" />
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />

      {/* Particle Network */}
      <ParticleField isCozy={isCozy} />

      {/* Scroll Progress Bar */}
      <ScrollProgress isCozy={isCozy} />

      {/* Custom Cursor */}
      <CustomCursor isCozy={isCozy} />

      {/* Header */}
      <Header isCozy={isCozy} contactInfo={contactInfo} />

      {/* Main Content */}
      <motion.main
        className="relative z-10"
        animate={{ y: isCozy ? [0, -6, 0] : 0 }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
      >
        <Hero isCozy={isCozy} contactInfo={contactInfo} />
        <AIWorkstation isCozy={isCozy} />
        <TechStack isCozy={isCozy} />
        <Projects isCozy={isCozy} />
        <Timeline isCozy={isCozy} />
        <Contact isCozy={isCozy} contactInfo={contactInfo} />
      </motion.main>

      {/* Cozy Toggle */}
      <CozyToggle isCozy={isCozy} toggleCozy={toggleCozy} />
    </div>
  );
}

function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}

export default App;
