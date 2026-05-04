import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Sparkles, Cpu, Terminal, ArrowDown } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

const Hero = ({ isCozy, contactInfo }) => {
  const { t } = useI18n();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const skills = [
    { name: 'C++ / SFML', level: 75, icon: <Cpu size={16} /> },
    { name: 'Python / AI', level: 80, icon: <Terminal size={16} /> },
    { name: 'Web Stack', level: 85, icon: <Sparkles size={16} /> },
    { name: 'Data & BI', level: 70, icon: <Terminal size={16} /> },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 md:pt-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left Column — Text */}
          <motion.div
            className="md:col-span-7 space-y-6 md:space-y-8"
            style={{ y: y1, opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 md:space-y-8"
            >
              {/* Badge Stack */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border"
                  style={{
                    color: 'var(--accent-soft)',
                    borderColor: isCozy ? 'rgba(244, 162, 97, 0.25)' : 'rgba(217, 119, 6, 0.25)',
                    backgroundColor: isCozy ? 'rgba(244, 162, 97, 0.08)' : 'rgba(217, 119, 6, 0.08)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-a)' }} />
                  {t('openToWork')}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border"
                  style={{
                    color: 'var(--accent-b)',
                    borderColor: isCozy ? 'rgba(244, 162, 97, 0.25)' : 'rgba(255, 186, 8, 0.25)',
                    backgroundColor: isCozy ? 'rgba(244, 162, 97, 0.08)' : 'rgba(255, 186, 8, 0.08)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <Sparkles size={10} />
                  {t('aiFirstDev')}
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h2
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                >
                  {t('heroTitle1')}{' '}
                  <span className="text-gradient">{t('heroTitle2')}</span>
                  <br />
                  {t('heroTitle3')}{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">{t('heroTitle4')}</span>
                    <span
                      className="absolute bottom-1 left-0 w-full h-3 -z-0 opacity-40"
                      style={{ background: 'var(--accent-a)' }}
                    />
                  </span>
                  .
                </h2>
              </div>

              {/* Summary */}
              <p
                className="text-base md:text-lg leading-relaxed max-w-xl"
                style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
              >
                {t('heroSummary')}
              </p>

              {/* Location + CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                >
                  <MapPin size={14} style={{ color: 'var(--accent-soft)' }} />
                  {contactInfo.location}
                </div>

                <motion.a
                  href="#workstation"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all"
                  style={{
                    borderColor: isCozy ? 'rgba(244, 162, 97, 0.3)' : 'rgba(217, 119, 6, 0.3)',
                    color: 'var(--accent-soft)',
                    backgroundColor: isCozy ? 'rgba(244, 162, 97, 0.05)' : 'rgba(217, 119, 6, 0.05)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {t('heroCta')}
                  <ArrowDown size={14} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Card + Avatar Placeholder */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden">
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: 'var(--accent-a)' }}
              />

              {/* Avatar Placeholder */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className="w-24 h-24 md:w-28 md:h-28 rounded-2xl border-2 flex items-center justify-center relative overflow-hidden"
                  style={{
                    borderColor: isCozy ? 'rgba(230, 57, 70, 0.3)' : 'rgba(232, 93, 4, 0.3)',
                    background: isCozy
                      ? 'linear-gradient(135deg, rgba(230,57,70,0.1) 0%, rgba(244,162,97,0.1) 100%)'
                      : 'linear-gradient(135deg, rgba(232,93,4,0.1) 0%, rgba(255,186,8,0.1) 100%)',
                  }}
                >
                  <span
                    className="text-3xl font-bold"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-soft)' }}
                  >
                    LS
                  </span>
                  <div
                    className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider"
                    style={{
                      background: isCozy ? 'rgba(230,57,70,0.2)' : 'rgba(232,93,4,0.2)',
                      color: 'var(--accent-soft)',
                    }}
                  >
                    IMG
                  </div>
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {t('addYourPhoto')}
                  </p>
                </div>
              </div>

              {/* Skills Mini */}
              <div className="space-y-3">
                <h3
                  className="text-sm font-semibold flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                >
                  <Sparkles size={14} style={{ color: 'var(--accent-soft)' }} />
                  {t('coreStack')}
                </h3>
                <div className="space-y-3">
                  {skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        <span className="flex items-center gap-2">{skill.icon} {skill.name}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          viewport={{ once: true }}
                          className="h-full rounded-full"
                          style={{ background: 'var(--accent-gradient)' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
