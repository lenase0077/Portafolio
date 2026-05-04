import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

const LanguageToggle = ({ isCozy }) => {
  const { lang, toggleLang } = useI18n();

  return (
    <motion.button
      onClick={toggleLang}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all"
      style={{
        fontFamily: 'var(--font-mono)',
        backgroundColor: isCozy ? 'rgba(230, 57, 70, 0.08)' : 'rgba(232, 93, 4, 0.08)',
        borderColor: isCozy ? 'rgba(230, 57, 70, 0.2)' : 'rgba(232, 93, 4, 0.2)',
        color: 'var(--accent-soft)',
      }}
      aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
    >
      <Globe size={14} />
      <span>{lang === 'en' ? 'ES' : 'EN'}</span>
    </motion.button>
  );
};

export default LanguageToggle;
