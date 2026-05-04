import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, GitBranch, BarChart3, FlaskConical, Layout } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

const TechStack = ({ isCozy }) => {
  const { t } = useI18n();

  const categories = [
    {
      title: t('categories.systems'),
      icon: <Cpu size={18} />,
      skills: [
        { name: 'C++', level: 80 },
        { name: 'SFML', level: 75 },
        { name: 'STL & Smart Pointers', level: 70 },
        { name: 'Memory Management', level: 65 },
        { name: 'Design Patterns', level: 60 },
      ],
    },
    {
      title: t('categories.python'),
      icon: <Terminal size={18} />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Pandas / NumPy', level: 75 },
        { name: 'Scikit-learn', level: 70 },
        { name: 'Matplotlib', level: 70 },
        { name: 'Flask', level: 55 },
      ],
    },
    {
      title: t('categories.web'),
      icon: <Layout size={18} />,
      skills: [
        { name: 'JavaScript / ES6+', level: 80 },
        { name: 'React', level: 85 },
        { name: 'HTML / CSS / Tailwind', level: 90 },
        { name: 'Vite', level: 80 },
      ],
    },
    {
      title: t('categories.data'),
      icon: <BarChart3 size={18} />,
      skills: [
        { name: 'SQL', level: 75 },
        { name: 'Power BI / DAX', level: 70 },
        { name: 'Data Modeling', level: 65 },
      ],
    },
    {
      title: t('categories.tools'),
      icon: <GitBranch size={18} />,
      skills: [
        { name: 'Git / GitHub', level: 85 },
        { name: 'Jira / Agile', level: 75 },
        { name: 'VS Code / Code::Blocks', level: 90 },
      ],
    },
    {
      title: t('categories.ai'),
      icon: <FlaskConical size={18} />,
      skills: [
        { name: 'LLM API Integration', level: 80 },
        { name: 'Prompt Engineering', level: 85 },
        { name: 'AI IDEs (Copilot, etc.)', level: 90 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
              <Layout size={18} style={{ color: 'var(--accent-soft)' }} />
            </div>
            <span className="mono-detail" style={{ color: 'var(--text-muted)' }}>
              {t('techLabel')}
            </span>
          </div>
          <h2
            className="section-heading text-3xl md:text-5xl max-w-2xl"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('techTitle1')}{' '}
            <span className="text-gradient">{t('techTitle2')}</span>{' '}
            {t('techTitle3')}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {categories.map((cat, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-card rounded-2xl p-5 md:p-6">
              <div className="flex items-center gap-2.5 mb-5">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    background: isCozy ? 'rgba(230,57,70,0.1)' : 'rgba(232,93,4,0.1)',
                    color: 'var(--accent-soft)',
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  className="text-sm font-semibold"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                >
                  {cat.title}
                </h3>
              </div>
              <div className="space-y-3.5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-xs mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      <span>{skill.name}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{skill.level}%</span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9, delay: 0.2 + sIdx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ background: 'var(--accent-gradient)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
