import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useI18n } from '../i18n/I18nContext';

const Header = ({ isCozy, contactInfo }) => {
  const { t } = useI18n();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-colors duration-700"
      style={{
        backgroundColor: isCozy ? 'rgba(28, 16, 16, 0.75)' : 'rgba(10, 10, 10, 0.75)',
        borderColor: isCozy ? 'rgba(230, 57, 70, 0.1)' : 'rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 md:py-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="text-center md:text-left">
          <h1
            className="text-xl md:text-2xl font-bold tracking-tight text-gradient hover:scale-[1.02] transition-transform cursor-default inline-block"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {contactInfo.name}
          </h1>
          <p
            className="text-xs md:text-sm mt-0.5 transition-colors"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
          >
            {contactInfo.role}
          </p>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden md:flex items-center gap-1.5 mr-2 text-xs" style={{ color: 'var(--text-muted)' }}>
            <MapPin size={12} />
            <span style={{ fontFamily: 'var(--font-mono)' }}>{contactInfo.location}</span>
          </div>

          {[
            { icon: <Mail size={16} />, href: `mailto:${contactInfo.email}`, label: 'Email' },
            { icon: <Linkedin size={16} />, href: `https://${contactInfo.linkedin}`, label: 'LinkedIn' },
            { icon: <Github size={16} />, href: `https://${contactInfo.github}`, label: 'GitHub' },
          ].map((social, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.1, y: -1 }}
              whileTap={{ scale: 0.95 }}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="p-2.5 rounded-xl transition-all border"
              style={{
                backgroundColor: isCozy ? 'rgba(230, 57, 70, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                borderColor: isCozy ? 'rgba(230, 57, 70, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                color: 'var(--text-secondary)',
              }}
            >
              {social.icon}
            </motion.a>
          ))}

          <LanguageToggle isCozy={isCozy} />

          <motion.a
            href="/Leandro_Serrano_CV.pdf"
            download
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-xl shadow-lg transition-all ml-1"
            style={{
              background: 'var(--accent-gradient)',
              fontFamily: 'var(--font-heading)',
              boxShadow: isCozy
                ? '0 4px 14px rgba(230, 57, 70, 0.3)'
                : '0 4px 14px rgba(232, 93, 4, 0.3)',
            }}
          >
            <Download size={14} />
            <span className="hidden sm:inline">{t('cv')}</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
