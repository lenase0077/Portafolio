import React, { createContext, useContext, useState, useCallback } from 'react';

export const translations = {
  en: {
    // Header
    openToWork: 'Open to Work',
    aiFirstDev: 'AI-First Dev',
    cv: 'CV',

    // Hero
    heroTitle1: 'Building',
    heroTitle2: 'systems',
    heroTitle3: 'with',
    heroTitle4: 'soul',
    heroCta: 'Explore my stack',
    coreStack: 'Core Stack',
    addYourPhoto: 'Add your photo here',
    heroSummary:
      'Computer Programming student at UTN with a strong foundation in C++, Python, and systems design. I build software that sits at the intersection of performance and intelligence — from custom game engines to AI-augmented workflows. Self-taught, detail-obsessed, and always shipping.',

    // AI Workstation
    aiSectionLabel: 'AI Workstation',
    aiTitle1: "I don't just write code.",
    aiTitle2: 'I',
    aiTitle3: 'orchestrate intelligence',
    aiTitle4: '.',
    aiDesc:
      'My development workflow is augmented with modern AI tools. From autonomous agents to LLM APIs, I leverage artificial intelligence to ship faster, review smarter, and prototype at the speed of thought.',
    aiCards: {
      agentIdes: {
        title: 'Agent-First IDEs',
        desc: 'Google Antigravity (Gemini-powered) & GitHub Copilot for rapid prototyping and code generation.',
        tag: 'Workflow',
      },
      llmApi: {
        title: 'LLM API Integration',
        desc: 'Building custom tools and automations by consuming Large Language Model APIs directly.',
        tag: 'Backend',
      },
      aiCli: {
        title: 'AI-Assisted CLI',
        desc: 'Using OpenCode and terminal agents to automate workflows, scripting, and devops tasks.',
        tag: 'Automation',
      },
      rag: {
        title: 'RAG & Embeddings',
        desc: 'Following and experimenting with Retrieval-Augmented Generation and vector-based search.',
        tag: 'Architecture',
      },
      codeReview: {
        title: 'Code Review AI',
        desc: 'Automated code review and optimization pipelines integrated into the development cycle.',
        tag: 'QA',
      },
      promptEng: {
        title: 'Prompt Engineering',
        desc: 'Crafting precise prompts for code generation, documentation, and system design.',
        tag: 'Skill',
      },
    },

    // Tech Stack
    techLabel: 'Tech Stack',
    techTitle1: 'Tools I use to',
    techTitle2: 'build & break',
    techTitle3: 'things.',
    categories: {
      systems: 'Systems & Low Level',
      python: 'Python & Data',
      web: 'Web Frontend',
      data: 'Data & BI',
      tools: 'Tools & Ops',
      ai: 'AI & Automation',
    },

    // Projects
    projectsLabel: 'Selected Work',
    projectsTitle1: 'Projects that shaped my',
    projectsTitle2: 'craft',
    projectsTitle3: '.',
    tabs: {
      all: 'All Projects',
      cpp: 'C++ / Systems',
      web: 'Web Apps',
      python: 'Python / AI',
      data: 'Data / BI',
    },
    hoverPreview: 'Hover to preview',
    imagePlaceholders: {
      islander: 'Add gameplay screenshot',
      pathfinder: 'Add app screenshot',
      pomodoro: 'Add UI screenshot',
      prediction: 'Add chart screenshot',
      terrorism: 'Add dashboard screenshot',
      cafe: 'Add store screenshot',
      qa: 'Add test doc screenshot',
      enfrentados: 'Add game screenshot',
    },

    // Timeline
    journeyLabel: 'Journey',
    journeyTitle1: "Where I've",
    journeyTitle2: 'been',
    journeyTitle3: '& what I’ve',
    journeyTitle4: 'learned',
    journeyTitle5: '.',
    experience: 'Experience',
    education: 'Education',
    jobs: {
      freelance: {
        role: 'Freelance Technical Support',
        company: 'Self-employed',
        desc: 'Hardware & software diagnosis, PC assembly, and critical failure resolution. Developed strong troubleshooting skills and meticulous attention to detail.',
      },
      sales: {
        role: 'Automotive Sales Representative',
        company: 'Family Business',
        desc: 'Customer relationship management, negotiation, and sales process optimization. Consistent target achievement and process organization.',
      },
    },
    schools: {
      utn: {
        title: 'University Technician in Programming',
        desc: 'Programming logic, software architectures, OOP, data structures, and systems design.',
      },
      qa: {
        title: 'Tester Master QA',
        desc: 'Manual testing, test case design, bug reporting, and software quality lifecycle.',
      },
      codo: {
        title: 'Fullstack Python',
        desc: 'Fullstack web development with Python, Flask, HTML/CSS, JavaScript, and databases.',
      },
      coder: {
        title: 'Data Science & Analytics',
        desc: 'Data analysis, visualization, machine learning basics, and business intelligence.',
      },
    },

    // Contact
    contactLabel: 'Contact',
    contactTitle1: "Let's build something",
    contactTitle2: 'extraordinary',
    contactTitle3: '.',
    contactDesc:
      "I'm open to freelance projects, collaborations, and full-time opportunities. If you have an idea or just want to talk tech, my inbox is always open.",
    emailTitle: 'Email me',
    emailSubtitle: 'Fastest way to reach me',
    footer1: 'Designed & built by Leandro Serrano',
    footer2: 'React • Vite • Tailwind CSS • Framer Motion',

    // CozyToggle
    cozyMode: 'Cozy Mode',
    cyberMode: 'Cyber Mode',
  },

  es: {
    // Header
    openToWork: 'Disponible',
    aiFirstDev: 'Dev con IA',
    cv: 'CV',

    // Hero
    heroTitle1: 'Construyendo',
    heroTitle2: 'sistemas',
    heroTitle3: 'con',
    heroTitle4: 'alma',
    heroCta: 'Explorar mi stack',
    coreStack: 'Stack Principal',
    addYourPhoto: 'Agregá tu foto acá',
    heroSummary:
      'Estudiante de Programación en la UTN con sólidas bases en C++, Python y diseño de sistemas. Construyo software que se sienta en la intersección entre rendimiento e inteligencia — desde motores de juegos propios hasta flujos de trabajo potenciados por IA. Autodidacta, obsesionado con los detalles y siempre entregando.',

    // AI Workstation
    aiSectionLabel: 'Estación de IA',
    aiTitle1: 'No solo escribo código.',
    aiTitle2: '',
    aiTitle3: 'Orquesto inteligencia',
    aiTitle4: '.',
    aiDesc:
      'Mi flujo de trabajo está potenciado por herramientas de IA modernas. Desde agentes autónomos hasta APIs de LLMs, aprovecho la inteligencia artificial para desarrollar más rápido, revisar mejor y prototipar a la velocidad del pensamiento.',
    aiCards: {
      agentIdes: {
        title: 'IDEs Agent-First',
        desc: 'Google Antigravity (con Gemini) y GitHub Copilot para prototipado rápido y generación de código.',
        tag: 'Workflow',
      },
      llmApi: {
        title: 'Integración de APIs LLM',
        desc: 'Construyendo herramientas y automatizaciones consumiendo APIs de Modelos de Lenguaje directamente.',
        tag: 'Backend',
      },
      aiCli: {
        title: 'CLI Asistido por IA',
        desc: 'Uso de OpenCode y agentes de terminal para automatizar workflows, scripting y tareas de devops.',
        tag: 'Automatización',
      },
      rag: {
        title: 'RAG & Embeddings',
        desc: 'Experimentando con Retrieval-Augmented Generation y búsqueda basada en vectores.',
        tag: 'Arquitectura',
      },
      codeReview: {
        title: 'Revisión de Código con IA',
        desc: 'Pipelines de revisión y optimización de código automatizadas integradas al ciclo de desarrollo.',
        tag: 'QA',
      },
      promptEng: {
        title: 'Prompt Engineering',
        desc: 'Diseño de prompts precisos para generación de código, documentación y diseño de sistemas.',
        tag: 'Habilidad',
      },
    },

    // Tech Stack
    techLabel: 'Stack Tecnológico',
    techTitle1: 'Herramientas que uso para',
    techTitle2: 'construir y romper',
    techTitle3: 'cosas.',
    categories: {
      systems: 'Sistemas & Bajo Nivel',
      python: 'Python & Datos',
      web: 'Web Frontend',
      data: 'Datos & BI',
      tools: 'Herramientas & Ops',
      ai: 'IA & Automatización',
    },

    // Projects
    projectsLabel: 'Trabajos Destacados',
    projectsTitle1: 'Proyectos que forjaron mi',
    projectsTitle2: 'craft',
    projectsTitle3: '.',
    tabs: {
      all: 'Todos los Proyectos',
      cpp: 'C++ / Sistemas',
      web: 'Web Apps',
      python: 'Python / IA',
      data: 'Datos / BI',
    },
    hoverPreview: 'Pasa el mouse para previsualizar',
    imagePlaceholders: {
      islander: 'Agregar screenshot de gameplay',
      pathfinder: 'Agregar screenshot de la app',
      pomodoro: 'Agregar screenshot de la UI',
      prediction: 'Agregar screenshot de gráficos',
      terrorism: 'Agregar screenshot del dashboard',
      cafe: 'Agregar screenshot de la tienda',
      qa: 'Agregar screenshot de tests',
      enfrentados: 'Agregar screenshot del juego',
    },

    // Timeline
    journeyLabel: 'Recorrido',
    journeyTitle1: 'Dónde he',
    journeyTitle2: 'estado',
    journeyTitle3: 'y qué he',
    journeyTitle4: 'aprendido',
    journeyTitle5: '.',
    experience: 'Experiencia',
    education: 'Educación',
    jobs: {
      freelance: {
        role: 'Soporte Técnico Freelance',
        company: 'Autónomo',
        desc: 'Diagnóstico de hardware y software, armado de PCs y resolución de fallas críticas. Desarrollé sólidas habilidades de troubleshooting y atención al detalle.',
      },
      sales: {
        role: 'Representante de Ventas Automotor',
        company: 'Negocio Familiar',
        desc: 'Gestión de relaciones con clientes, negociación y optimización de procesos de venta. Cumplimiento consistente de objetivos y organización.',
      },
    },
    schools: {
      utn: {
        title: 'Tecnicatura en Programación',
        desc: 'Lógica de programación, arquitecturas de software, POO, estructuras de datos y diseño de sistemas.',
      },
      qa: {
        title: 'Tester Master QA',
        desc: 'Testing manual, diseño de casos de prueba, reporte de bugs y ciclo de vida de calidad de software.',
      },
      codo: {
        title: 'Fullstack Python',
        desc: 'Desarrollo web fullstack con Python, Flask, HTML/CSS, JavaScript y bases de datos.',
      },
      coder: {
        title: 'Data Science & Analytics',
        desc: 'Análisis de datos, visualización, fundamentos de machine learning y business intelligence.',
      },
    },

    // Contact
    contactLabel: 'Contacto',
    contactTitle1: 'Construyamos algo',
    contactTitle2: 'extraordinario',
    contactTitle3: '.',
    contactDesc:
      'Estoy abierto a proyectos freelance, colaboraciones y oportunidades full-time. Si tenés una idea o simplemente querés charlar de tech, mi inbox siempre está abierto.',
    emailTitle: 'Escribime',
    emailSubtitle: 'La forma más rápida de contactarme',
    footer1: 'Diseñado y construido por Leandro Serrano',
    footer2: 'React • Vite • Tailwind CSS • Framer Motion',

    // CozyToggle
    cozyMode: 'Modo Cozy',
    cyberMode: 'Modo Cyber',
  },
};

const I18nContext = createContext({
  lang: 'en',
  t: () => '',
  toggleLang: () => {},
});

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const t = useCallback(
    (key, fallback = '') => {
      const keys = key.split('.');
      let val = translations[lang];
      for (const k of keys) {
        if (val && typeof val === 'object' && k in val) {
          val = val[k];
        } else {
          return fallback || key;
        }
      }
      return val || fallback || key;
    },
    [lang]
  );

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'));
  }, []);

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
