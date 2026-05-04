import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

const Contact = ({ isCozy, contactInfo }) => {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      label: 'GitHub',
      href: `https://${contactInfo.github}`,
      icon: <Github size={20} />,
      handle: '@lenase0077',
    },
    {
      label: 'LinkedIn',
      href: `https://${contactInfo.linkedin}`,
      icon: <Linkedin size={20} />,
      handle: 'leandro-serrano',
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: isCozy
                  ? 'linear-gradient(135deg, rgba(230,57,70,0.15) 0%, rgba(244,162,97,0.15) 100%)'
                  : 'linear-gradient(135deg, rgba(232,93,4,0.15) 0%, rgba(255,186,8,0.15) 100%)',
                border: `1px solid ${isCozy ? 'rgba(230,57,70,0.2)' : 'rgba(232,93,4,0.2)'}`,
              }}
            >
              <MessageSquare size={18} style={{ color: 'var(--accent-soft)' }} />
            </div>
            <span className="mono-detail" style={{ color: 'var(--text-muted)' }}>
              {t('contactLabel')}
            </span>
          </div>
          <h2
            className="section-heading text-3xl md:text-5xl max-w-2xl"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('contactTitle1')}{' '}
            <span className="text-gradient">{t('contactTitle2')}</span>
            {t('contactTitle3')}
          </h2>
          <p className="mt-4 text-base md:text-lg max-w-xl" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {t('contactDesc')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="p-2.5 rounded-xl"
                style={{
                  background: isCozy ? 'rgba(230,57,70,0.1)' : 'rgba(232,93,4,0.1)',
                  color: 'var(--accent-soft)',
                }}
              >
                <Mail size={20} />
              </div>
              <div>
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                >
                  {t('emailTitle')}
                </h3>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {t('emailSubtitle')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex-grow text-sm md:text-base font-medium truncate transition-colors hover:underline"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-soft)',
                }}
              >
                {contactInfo.email}
              </a>
              <motion.button
                onClick={copyEmail}
                whileTap={{ scale: 0.92 }}
                className="p-2.5 rounded-xl border transition-all"
                style={{
                  borderColor: isCozy ? 'rgba(230,57,70,0.2)' : 'rgba(232,93,4,0.2)',
                  background: isCozy ? 'rgba(230,57,70,0.05)' : 'rgba(232,93,4,0.05)',
                  color: 'var(--accent-soft)',
                }}
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </motion.button>
            </div>
          </motion.div>

          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
              className="glass-card rounded-2xl p-6 md:p-8 group flex items-center justify-between"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-xl"
                  style={{
                    background: isCozy ? 'rgba(230,57,70,0.1)' : 'rgba(232,93,4,0.1)',
                    color: 'var(--accent-soft)',
                  }}
                >
                  {link.icon}
                </div>
                <div>
                  <h3
                    className="text-base font-semibold"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                  >
                    {link.label}
                  </h3>
                  <p
                    className="text-xs"
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                  >
                    {link.handle}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: 'var(--text-muted)' }}
              />
            </motion.a>
          ))}
        </div>

        <footer className="mt-20 pt-10 border-t text-center" style={{ borderColor: 'var(--border-subtle)' }}>
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
          >
            {t('footer1')}
          </p>
          <p className="text-[10px] mt-2" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
            {t('footer2')}
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
