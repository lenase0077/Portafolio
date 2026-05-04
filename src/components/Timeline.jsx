import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, BookOpen, GraduationCap, Wrench, Car } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

const Timeline = ({ isCozy }) => {
  const { t } = useI18n();
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0.2, 0.7], ['0%', '100%']);

  const experience = [
    {
      role: t('jobs.freelance.role'),
      company: t('jobs.freelance.company'),
      location: 'Tigre, Buenos Aires',
      period: '2020 — Present',
      description: t('jobs.freelance.desc'),
      icon: <Wrench size={16} />,
    },
    {
      role: t('jobs.sales.role'),
      company: t('jobs.sales.company'),
      location: 'Buenos Aires',
      period: '2016 — Present',
      description: t('jobs.sales.desc'),
      icon: <Car size={16} />,
    },
  ];

  const education = [
    {
      title: t('schools.utn.title'),
      institution: 'Universidad Tecnológica Nacional (UTN)',
      location: 'Buenos Aires',
      period: '2024 — Present',
      description: t('schools.utn.desc'),
      icon: <GraduationCap size={16} />,
    },
    {
      title: t('schools.qa.title'),
      institution: 'Fundación Empujar — UTN',
      location: 'Buenos Aires',
      period: '2024',
      description: t('schools.qa.desc'),
      icon: <BookOpen size={16} />,
    },
    {
      title: t('schools.codo.title'),
      institution: 'Codo a Codo 4.0',
      location: 'Buenos Aires',
      period: '2023',
      description: t('schools.codo.desc'),
      icon: <BookOpen size={16} />,
    },
    {
      title: t('schools.coder.title'),
      institution: 'Coder House',
      location: 'Online',
      period: '2022 — 2023',
      description: t('schools.coder.desc'),
      icon: <BookOpen size={16} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const eduItemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

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
              <Briefcase size={18} style={{ color: 'var(--accent-soft)' }} />
            </div>
            <span className="mono-detail" style={{ color: 'var(--text-muted)' }}>
              {t('journeyLabel')}
            </span>
          </div>
          <h2
            className="section-heading text-3xl md:text-5xl max-w-2xl"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('journeyTitle1')}{' '}
            <span className="text-gradient">{t('journeyTitle2')}</span>{' '}
            {t('journeyTitle3')}{' '}
            <span className="text-gradient">{t('journeyTitle4')}</span>
            {t('journeyTitle5')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3
              className="text-lg font-semibold mb-6 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
            >
              <Briefcase size={18} style={{ color: 'var(--accent-soft)' }} />
              {t('experience')}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="relative pl-6 border-l"
              style={{ borderColor: isCozy ? 'rgba(230,57,70,0.2)' : 'rgba(232,93,4,0.15)' }}
            >
              <motion.div
                className="absolute left-[-1px] top-0 w-[2px] origin-top"
                style={{
                  height: lineHeight,
                  background: 'var(--accent-gradient)',
                }}
              />
              {experience.map((job, idx) => (
                <motion.div key={idx} variants={itemVariants} className="relative pb-10 last:pb-0">
                  <div
                    className="absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full border-2"
                    style={{
                      background: 'var(--bg-primary)',
                      borderColor: 'var(--accent-a)',
                      boxShadow: isCozy ? '0 0 12px rgba(230,57,70,0.3)' : '0 0 12px rgba(232,93,4,0.3)',
                    }}
                  />
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="p-1.5 rounded-md"
                      style={{
                        background: isCozy ? 'rgba(230,57,70,0.1)' : 'rgba(232,93,4,0.1)',
                        color: 'var(--accent-soft)',
                      }}
                    >
                      {job.icon}
                    </span>
                    <span className="mono-detail" style={{ color: 'var(--text-muted)' }}>
                      {job.period}
                    </span>
                  </div>
                  <h4
                    className="text-base font-semibold mb-1"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                  >
                    {job.role}
                  </h4>
                  <p className="text-sm mb-2" style={{ color: 'var(--accent-soft)' }}>
                    {job.company} — {job.location}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {job.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3
              className="text-lg font-semibold mb-6 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
            >
              <BookOpen size={18} style={{ color: 'var(--accent-b)' }} />
              {t('education')}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-4"
            >
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={eduItemVariants}
                  whileHover={{ scale: 1.01 }}
                  className="glass-card rounded-xl p-5 border-l-4"
                  style={{ borderLeftColor: 'var(--accent-a)' }}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="p-1.5 rounded-md"
                        style={{
                          background: isCozy ? 'rgba(230,57,70,0.1)' : 'rgba(232,93,4,0.1)',
                          color: 'var(--accent-soft)',
                        }}
                      >
                        {edu.icon}
                      </span>
                      <h4
                        className="text-sm font-semibold"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                      >
                        {edu.title}
                      </h4>
                    </div>
                    <span className="mono-detail shrink-0" style={{ color: 'var(--text-muted)' }}>
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm mb-2" style={{ color: 'var(--accent-soft)' }}>
                    {edu.institution} — {edu.location}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
