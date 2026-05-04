import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Globe, Cpu, Database, ExternalLink, Layers, ImageOff } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

const Projects = ({ isCozy }) => {
  const { t, lang } = useI18n();
  const [activeTab, setActiveTab] = useState('all');

  const allProjects = [
    {
      title: 'Islander',
      category: 'cpp',
      tech: ['C++', 'SFML', 'Custom Engine'],
      description: '2D survival game built from scratch with a custom game engine. Manual memory management, tilemap rendering optimization, and physics/collision systems.',
      descriptionEs: 'Juego de supervivencia 2D construido desde cero con motor propio. Gestión manual de memoria, optimización de renderizado de tilemaps y sistemas de física/colisiones.',
      highlight: true,
      repoUrl: 'https://github.com/lenase0077/Islandeer',
      date: '2024-10',
      imageKey: 'islander',
    },
    {
      title: 'UTN-Pathfinder',
      category: 'web',
      tech: ['React', 'JavaScript', 'Algorithms'],
      description: '72-hour Hackathon project. Interactive pathfinding and career planning tool for university students with algorithm visualization.',
      descriptionEs: 'Proyecto de Hackathon de 72 horas. Herramienta interactiva de pathfinding y planificación de carrera para estudiantes universitarios con visualización de algoritmos.',
      highlight: true,
      repoUrl: 'https://github.com/lenase0077/Proyecto-Hackaton',
      date: '2024-11',
      imageKey: 'pathfinder',
    },
    {
      title: 'Pomodoro Logger',
      category: 'web',
      tech: ['React', 'Vite', 'Canvas'],
      description: 'Immersive pomodoro timer with galaxy visuals, productivity tracking, and GitHub-style contribution heatmap.',
      descriptionEs: 'Temporizador pomodoro inmersivo con visuales de galaxia, tracking de productividad y heatmap de contribuciones estilo GitHub.',
      highlight: true,
      repoUrl: 'https://github.com/lenase0077/Pomodoro-Logger',
      date: '2024-12',
      imageKey: 'pomodoro',
    },
    {
      title: 'TaskFlow',
      category: 'web',
      tech: ['Next.js 16', 'Turso', 'Drizzle', 'DND-Kit'],
      description: 'Modern Kanban task manager with drag & drop, subtasks with progress bars, dark mode, command palette (Ctrl+K), and instant CRUD via Server Actions. Deployed on Vercel edge.',
      descriptionEs: 'Gestor de tareas Kanban moderno con drag & drop, subtareas con barras de progreso, modo oscuro, command palette (Ctrl+K) y CRUD instantáneo vía Server Actions. Desplegado en Vercel edge.',
      highlight: true,
      repoUrl: 'https://github.com/lenase0077/crud-moderno-js',
      date: '2025-01',
      imageKey: 'taskflow',
    },
    {
      title: 'Prediction Models',
      category: 'python',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      description: 'Regression and KNN predictive models with real-world datasets. Data cleaning, accuracy metrics, and Matplotlib visualizations.',
      descriptionEs: 'Modelos predictivos de Regresión y KNN con datasets del mundo real. Limpieza de datos, métricas de precisión y visualizaciones con Matplotlib.',
      highlight: false,
      repoUrl: 'https://github.com/lenase0077/Proyectos-Machine-Learning',
      date: '2024-06',
      imageKey: 'prediction',
    },
    {
      title: 'Global Terrorism BI',
      category: 'data',
      tech: ['Power BI', 'DAX', 'Data Modeling'],
      description: 'Massive historical dataset visualization. DAX-calculated KPIs, dynamic slicers, and geopolitical trend analysis.',
      descriptionEs: 'Visualización masiva de datasets históricos. KPIs calculados con DAX, slicers dinámicos y análisis de tendencias geopolíticas.',
      highlight: false,
      repoUrl: 'https://github.com/lenase0077/Attempt-Report-PowerBI-analysis',
      date: '2024-05',
      imageKey: 'terrorism',
    },
    {
      title: 'Nuestro Café Shop',
      category: 'web',
      tech: ['Flask', 'Python', 'MVC'],
      description: 'Fullstack e-commerce deployed live. Lightweight MVC architecture with session management and product catalog.',
      descriptionEs: 'E-commerce fullstack desplegado en producción. Arquitectura MVC ligera con gestión de sesiones y catálogo de productos.',
      highlight: false,
      repoUrl: 'https://github.com/lenase0077/Coffee-style',
      date: '2024-07',
      imageKey: 'cafe',
    },
    {
      title: 'QA Testing Suite',
      category: 'qa',
      tech: ['JIRA', 'Test Cases', 'Documentation'],
      description: 'Manual test case design, bug lifecycle management, and comprehensive QA process documentation.',
      descriptionEs: 'Diseño de casos de prueba manual, gestión del ciclo de vida de bugs y documentación completa de procesos QA.',
      highlight: false,
      repoUrl: 'https://github.com/lenase0077/Proyecto-Testing-Manual',
      date: '2024-08',
      imageKey: 'qa',
    },
    {
      title: 'ENFRENTADOS',
      category: 'cpp',
      tech: ['C++', 'Algorithms', 'Math Logic'],
      description: 'Dice-based strategy simulator with complex mathematical logic and strict input validation.',
      descriptionEs: 'Simulador de estrategia basado en dados con lógica matemática compleja y validación estricta de entradas.',
      highlight: false,
      repoUrl: 'https://github.com/lenase0077/Enfrentados',
      date: '2024-09',
      imageKey: 'enfrentados',
    },
  ];

  const tabs = [
    { id: 'all', label: t('tabs.all') },
    { id: 'cpp', label: t('tabs.cpp') },
    { id: 'web', label: t('tabs.web') },
    { id: 'python', label: t('tabs.python') },
    { id: 'data', label: t('tabs.data') },
  ];

  const categoryIcons = {
    cpp: <Gamepad2 size={18} />,
    web: <Globe size={18} />,
    python: <Cpu size={18} />,
    data: <Database size={18} />,
    qa: <Layers size={18} />,
  };

  const filtered = activeTab === 'all'
    ? allProjects
    : allProjects.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-14"
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
              <Layers size={18} style={{ color: 'var(--accent-soft)' }} />
            </div>
            <span className="mono-detail" style={{ color: 'var(--text-muted)' }}>
              {t('projectsLabel')}
            </span>
          </div>
          <h2
            className="section-heading text-3xl md:text-5xl max-w-2xl"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('projectsTitle1')}{' '}
            <span className="text-gradient">{t('projectsTitle2')}</span>
            {t('projectsTitle3')}
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all z-10"
              style={{
                fontFamily: 'var(--font-heading)',
                color: activeTab === tab.id ? '#fff' : 'var(--text-secondary)',
              }}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="projectTab"
                  className="absolute inset-0 rounded-xl -z-10"
                  style={{ background: 'var(--accent-gradient)' }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                key={project.title}
                className="glass-card rounded-2xl overflow-hidden group flex flex-col"
              >
                <div
                  className="relative aspect-[16/10] overflow-hidden"
                  style={{
                    background: isCozy
                      ? 'linear-gradient(135deg, rgba(230,57,70,0.08) 0%, rgba(244,162,97,0.05) 100%)'
                      : 'linear-gradient(135deg, rgba(232,93,4,0.08) 0%, rgba(255,186,8,0.05) 100%)',
                    borderBottom: `1px solid ${isCozy ? 'rgba(230,57,70,0.1)' : 'rgba(232,93,4,0.1)'}`,
                  }}
                >
                  <img
                    src={`/projects/${project.imageKey}.jpg`}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 flex-col items-center justify-center gap-3 p-6 hidden" data-placeholder>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border"
                      style={{
                        background: isCozy ? 'rgba(230,57,70,0.1)' : 'rgba(232,93,4,0.1)',
                        borderColor: isCozy ? 'rgba(230,57,70,0.2)' : 'rgba(232,93,4,0.2)',
                        color: 'var(--accent-soft)',
                      }}
                    >
                      {categoryIcons[project.category] || <ImageOff size={22} />}
                    </div>
                    <p
                      className="text-xs text-center max-w-[180px] leading-relaxed"
                      style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                    >
                      {t(`imagePlaceholders.${project.imageKey}`)}
                    </p>
                  </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className="text-lg font-semibold group-hover:text-gradient transition-all"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                    >
                      {project.title}
                    </h3>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} repository`}
                      className="p-2 rounded-lg transition-colors"
                      style={{ color: 'var(--text-muted)', background: 'rgba(255,255,255,0.03)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-soft)';
                        e.currentTarget.style.background = isCozy ? 'rgba(230,57,70,0.1)' : 'rgba(232,93,4,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-muted)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      }}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <p className="text-sm leading-relaxed mb-5 flex-grow" style={{ color: 'var(--text-secondary)' }}>
                    {lang === 'es' && project.descriptionEs ? project.descriptionEs : project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tTag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg border"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          backgroundColor: isCozy ? 'rgba(230,57,70,0.06)' : 'rgba(232,93,4,0.06)',
                          borderColor: isCozy ? 'rgba(230,57,70,0.15)' : 'rgba(232,93,4,0.15)',
                          color: 'var(--accent-soft)',
                        }}
                      >
                        {tTag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
