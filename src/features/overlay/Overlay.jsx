import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Languages, Volume2, VolumeX } from 'lucide-react';
import { contentRepository } from '../../data/contentRepository.js';
import { useI18n } from '../../app/providers/I18nProvider.jsx';
import { useAudio } from '../../app/providers/AudioProvider.jsx';
import { useChapter } from '../../app/providers/ChapterProvider.jsx';
import { GhostButton, IconSlot, PrimaryButton } from '../../shared/ui/atoms.jsx';
import { DOCK_ITEMS } from './dockItems.js';

const MotionDiv = motion.div;
const contact = contentRepository.getContact();

function ArrivalVeil() {
  const { lang, t } = useI18n();
  const { arrive } = useChapter();
  const ch = contentRepository.getChapter('arrival');

  return (
    <MotionDiv
      className="arrival-veil"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <div className="arrival-card">
        <div className="arrival-kicker">{contact.role[lang]}</div>
        <h1 className="arrival-title">{ch.title[lang]}</h1>
        <p className="arrival-sub">{ch.subtitle[lang]}</p>
        <p className="arrival-body">{ch.body[lang]}</p>
        <PrimaryButton onClick={arrive}>{t('explore')}</PrimaryButton>
      </div>
    </MotionDiv>
  );
}

function TopBar() {
  const { lang, t, toggleLang } = useI18n();
  const audio = useAudio();

  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark" />
        <div>
          <div className="brand-name">{contact.name}</div>
          <div className="brand-role">{contact.role[lang]}</div>
        </div>
      </div>
      <div className="topbar-actions">
        <span className="badge-open">{t('openToWork')}</span>
        <GhostButton onClick={audio.toggle} title={audio.playing ? t('soundOff') : t('soundOn')}>
          {audio.playing ? <Volume2 size={16} /> : <VolumeX size={16} />}
          <span>{audio.playing ? t('soundOn') : t('soundOff')}</span>
        </GhostButton>
        <GhostButton onClick={toggleLang} title="Language">
          <Languages size={16} />
          <span>{t('langToggle')}</span>
        </GhostButton>
      </div>
    </header>
  );
}

function ChapterDock() {
  const { lang, t } = useI18n();
  const { activeId, select } = useChapter();

  return (
    <nav className="dock" aria-label={t('chapters')}>
      {DOCK_ITEMS.map(({ id, Icon }) => {
        const chapter = contentRepository.getChapter(id);
        const isActive = activeId === id;
        return (
          <button
            key={id}
            type="button"
            className={`dock-btn ${isActive ? 'active' : ''}`}
            onClick={() => select(isActive ? null : id)}
          >
            <IconSlot as={Icon} size={16} />
            <span>{chapter.label[lang]}</span>
          </button>
        );
      })}
    </nav>
  );
}

/** Chrome overlay: brand, controls, arrival veil, chapter dock. */
export default function Overlay() {
  const { arrived } = useChapter();

  return (
    <div className="overlay">
      <TopBar />
      <AnimatePresence>{!arrived ? <ArrivalVeil key="veil" /> : null}</AnimatePresence>
      <ChapterDock />
    </div>
  );
}
