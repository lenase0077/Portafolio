import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { contentRepository } from '../../data/contentRepository.js';
import { useI18n } from '../../app/providers/I18nProvider.jsx';
import { useChapter } from '../../app/providers/ChapterProvider.jsx';
import { IconButton } from '../../shared/ui/atoms.jsx';
import { renderChapterBody } from './chapterStrategies.jsx';

const MotionAside = motion.aside;

/** Right-side paper drawer for the active chapter (Strategy → body). */
export default function StoryPanel() {
  const { lang, t } = useI18n();
  const { activeId, close } = useChapter();
  const ch = activeId ? contentRepository.getChapter(activeId) : null;

  return (
    <AnimatePresence>
      {activeId && ch ? (
        <MotionAside
          key={activeId}
          className="story-panel"
          initial={{ x: 48, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 32, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 28 }}
        >
          <header className="panel-header">
            <div>
              <div className="panel-kicker">{ch.label[lang]}</div>
              <h3 className="panel-title">{ch.title[lang]}</h3>
              <p className="panel-subtitle">{ch.subtitle[lang]}</p>
            </div>
            <IconButton label={t('close')} onClick={close}>
              <X size={18} />
            </IconButton>
          </header>
          <div className="panel-scroll">{renderChapterBody(activeId, { lang, t })}</div>
        </MotionAside>
      ) : null}
    </AnimatePresence>
  );
}
