import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Terminal, Layers, Bot, Code2 } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

const AIWorkstation = ({ isCozy }) => {
  const { t } = useI18n();

  const aiItems = [
    {
      icon: <Bot size={22} />,
      title: t('aiCards.agentIdes.title'),
      desc: t('aiCards.agentIdes.desc'),
      tag: t('aiCards.agentIdes.tag'),
    },
    {
      icon: <Brain size={22} />,
      title: t('aiCards.llmApi.title'),
      desc: t('aiCards.llmApi.desc'),
      tag: t('aiCards.llmApi.tag'),
    },
    {
      icon: <Terminal size={22} />,
      title: t('aiCards.aiCli.title'),
      desc: t('aiCards.aiCli.desc'),
      tag: t('aiCards.aiCli.tag'),
    },
    {
      icon: <Layers size={22} />,
      title: t('aiCards.rag.title'),
      desc: t('aiCards.rag.desc'),
      tag: t('aiCards.rag.tag'),
    },
    {
      icon: <Zap size={22} />,
      title: t('aiCards.codeReview.title'),
      desc: t('aiCards.codeReview.desc'),
      tag: t('aiCards.codeReview.tag'),
    },
    {
      icon: <Code2 size={22} />,
      title: t('aiCards.promptEng.title'),
      desc: t('aiCards.promptEng.desc'),
      tag: t('aiCards.promptEng.tag'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="workstation" className="py-20 md:py-28">
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
              <Brain size={18} style={{ color: 'var(--accent-soft)' }} />
            </div>
            <span className="mono-detail" style={{ color: 'var(--text-muted)' }}>
              {t('aiSectionLabel')}
            </span>
          </div>
          <h2
            className="section-heading text-3xl md:text-5xl max-w-2xl"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('aiTitle1')}
            <br />
            {t('aiTitle2')}{' '}
            <span className="text-gradient">{t('aiTitle3')}</span>
            {t('aiTitle4')}
          </h2>
          <p className="mt-4 text-base md:text-lg max-w-xl" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {t('aiDesc')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {aiItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card rounded-2xl p-5 md:p-6 group relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: isCozy
                    ? 'radial-gradient(circle at 50% 0%, rgba(230,57,70,0.08) 0%, transparent 60%)'
                    : 'radial-gradient(circle at 50% 0%, rgba(232,93,4,0.08) 0%, transparent 60%)',
                }}
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="p-2.5 rounded-xl transition-colors"
                    style={{
                      background: isCozy ? 'rgba(230,57,70,0.1)' : 'rgba(232,93,4,0.1)',
                      color: 'var(--accent-soft)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    className="mono-detail px-2 py-1 rounded-md"
                    style={{
                      background: isCozy ? 'rgba(230,57,70,0.08)' : 'rgba(232,93,4,0.08)',
                      color: 'var(--accent-soft)',
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AIWorkstation;
