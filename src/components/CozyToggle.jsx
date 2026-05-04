import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Zap } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

const CozyToggle = ({ isCozy, toggleCozy }) => {
  const { t } = useI18n();

  return (
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50">
      <motion.button
        onClick={toggleCozy}
        initial={false}
        animate={{
          backgroundColor: isCozy ? "rgba(230, 57, 70, 0.15)" : "rgba(232, 93, 4, 0.1)",
          borderColor: isCozy ? "rgba(230, 57, 70, 0.4)" : "rgba(232, 93, 4, 0.3)",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-2.5 md:gap-3 px-5 py-3 md:px-6 md:py-3.5 font-semibold tracking-wide rounded-2xl border backdrop-blur-xl transition-colors shadow-lg"
        style={{
          color: 'var(--accent-soft)',
          fontFamily: 'var(--font-heading)',
        }}
      >
        <motion.div
          animate={{ rotate: isCozy ? 360 : 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          {isCozy ? (
            <Coffee size={18} className="md:w-5 md:h-5" />
          ) : (
            <Zap size={18} className="md:w-5 md:h-5 animate-pulse-soft" />
          )}
        </motion.div>
        <motion.span
          key={isCozy ? 'cozy' : 'cyber'}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative z-10 text-xs md:text-sm"
        >
          {isCozy ? t('cozyMode') : t('cyberMode')}
        </motion.span>
      </motion.button>
    </div>
  );
};

export default CozyToggle;
