/**
 * Domain entities for the portfolio.
 * Pure data — no React, no Three.js, no I/O.
 */

export const contact = Object.freeze({
  name: 'Leandro Serrano',
  role: Object.freeze({
    es: 'Desarrollador de Software · Estudiante UTN',
    en: 'Software Developer · UTN Student',
  }),
  location: Object.freeze({
    es: 'Tigre, Buenos Aires, Argentina',
    en: 'Tigre, Buenos Aires, Argentina',
  }),
  email: 'leandroserrano777@gmail.com',
  github: 'https://github.com/Lenase0077',
  linkedin: 'https://www.linkedin.com/in/leandro-serrano',
  phone: '+54 11 5886-9208',
  cv: Object.freeze({
    es: '/Leandro_Serrano_CV_ES.pdf',
    en: '/Leandro_Serrano_CV_EN.pdf',
  }),
});

export const CHAPTER_IDS = Object.freeze([
  'arrival',
  'story',
  'work',
  'tools',
  'path',
  'hello',
]);

export const chapters = Object.freeze({
  arrival: Object.freeze({
    id: 'arrival',
    hotspot: 'lamp',
    label: { es: 'Inicio', en: 'Start' },
    title: { es: 'Buenas noches.', en: 'Good evening.' },
    subtitle: {
      es: 'Pasá, dejá el abrigo. Hay café.',
      en: 'Come in, leave your coat. There’s coffee.',
    },
    body: {
      es: 'Soy Leandro. Escribo software con cuidado: motores, editores, dashboards y mods que la gente usa de verdad. Este estudio es mi forma de mostrar de dónde vengo, qué construyo y hacia dónde voy.',
      en: 'I’m Leandro. I write software with care: engines, editors, dashboards, and mods people actually use. This study is how I show where I come from, what I build, and where I’m headed.',
    },
  }),
  story: Object.freeze({
    id: 'story',
    hotspot: 'notebook',
    label: { es: 'Historia', en: 'Story' },
    title: { es: 'Mi historia', en: 'My story' },
    subtitle: {
      es: 'De Tigre al código — y de vuelta a casa',
      en: 'From Tigre to code — and back home',
    },
    body: {
      es: 'Empecé arreglando PCs y haciendo mods en Java para Minecraft. Con el tiempo eso se convirtió en una carrera real: estructuras de datos, C++, Python, bases de datos, y un día la práctica profesional con Volkswagen Argentina. Sigo estudiando en la UTN, sigo publicando mods, y sigo buscando problemas que valgan la pena resolver.',
      en: 'I started by fixing PCs and writing Java mods for Minecraft. Over time that became a real craft: data structures, C++, Python, databases — and one day a professional internship with Volkswagen Argentina. I’m still studying at UTN, still shipping mods, and still looking for problems worth solving.',
    },
    highlights: Object.freeze({
      es: [
        {
          title: 'Raíces',
          text: 'Tigre, Buenos Aires. Curiosidad por cómo funcionan las cosas, desde el hardware hasta los sistemas.',
        },
        {
          title: 'Comunidades reales',
          text: 'Más de 300.000 descargas acumuladas de mods en CurseForge desde 2019. Feedback de usuarios como brújula.',
        },
        {
          title: 'Entorno industrial',
          text: 'Práctica profesional supervisada con Volkswagen Argentina: control de calidad, SPC y dashboards.',
        },
        {
          title: 'Formación constante',
          text: 'UTN, QA, Fullstack Python, Data Science. Aprender es parte del trabajo, no un paréntesis.',
        },
      ],
      en: [
        {
          title: 'Roots',
          text: 'Tigre, Buenos Aires. Curiosity about how things work — from hardware to systems.',
        },
        {
          title: 'Real communities',
          text: '300,000+ cumulative CurseForge mod downloads since 2019. User feedback as a compass.',
        },
        {
          title: 'Industrial stage',
          text: 'Supervised internship with Volkswagen Argentina: quality control, SPC, and dashboards.',
        },
        {
          title: 'Constant formation',
          text: 'UTN, QA, Fullstack Python, Data Science. Learning is part of the job, not a pause.',
        },
      ],
    }),
  }),
  work: Object.freeze({
    id: 'work',
    hotspot: 'corkboard',
    label: { es: 'Proyectos', en: 'Work' },
    title: { es: 'Proyectos', en: 'Projects' },
    subtitle: {
      es: 'Cosas que forjaron mi oficio',
      en: 'Things that shaped my craft',
    },
    body: {
      es: 'De motores 2D a editores con OpenGL, pasando por Kanban full-stack y herramientas de escritorio. Cada proyecto enseñó algo distinto.',
      en: 'From 2D engines to OpenGL editors, full-stack Kanban and desktop tools. Each project taught something different.',
    },
    projects: Object.freeze([
      {
        id: 'fasteditor',
        name: 'FastEditor',
        stack: ['C++', 'OpenGL', 'Dear ImGui'],
        image: '/projects/taskflow.jpg',
        blurb: {
          es: 'Editor de texto experimental de escritorio con interfaz Dear ImGui y renderizado OpenGL. Gap Buffer para edición incremental, navegación por teclado/mouse, pestañas múltiples, resaltado C/C++ y temas claro/oscuro.',
          en: 'Experimental desktop text editor with Dear ImGui UI and OpenGL rendering. Gap Buffer for incremental editing, keyboard/mouse navigation, multi-tab handling, C/C++ syntax highlighting, and light/dark themes.',
        },
      },
      {
        id: 'gamestorage',
        name: 'GameStorageManager',
        stack: ['C++', 'CMake', 'Qt 6'],
        image: '/projects/terrorism.jpg',
        blurb: {
          es: 'Utilidad Windows para aplicar y revertir compresión NTFS sobre directorios de juegos vía compact.exe. Capas UI / lógica / sistema, validaciones previas y rollback.',
          en: 'Windows utility to apply and revert NTFS compression on game folders via compact.exe. UI / logic / system layers, pre-checks, and rollback.',
        },
      },
      {
        id: 'taskflow',
        name: 'TaskFlow',
        stack: ['Next.js', 'TypeScript', 'Turso', 'Drizzle'],
        image: '/projects/taskflow.jpg',
        blurb: {
          es: 'Kanban full-stack en Vercel con persistencia, drag & drop, subtareas y validación con Zod. Next.js App Router y Server Actions.',
          en: 'Full-stack Kanban on Vercel with persistence, drag & drop, subtasks, and Zod validation. Next.js App Router and Server Actions.',
        },
      },
      {
        id: 'islander',
        name: 'ISLANDER',
        stack: ['C++', 'SFML'],
        image: '/projects/islander.jpg',
        blurb: {
          es: 'Motor / juego 2D con game loop, gestión de recursos, tilemaps, colisiones y smart pointers para memoria más segura.',
          en: '2D game/engine with game loop, resource management, tilemaps, collisions, and smart pointers for safer memory.',
        },
      },
      {
        id: 'mods',
        name: 'Java Mods · Minecraft / Hytale',
        stack: ['Java', 'Gradle', 'Forge/Fabric'],
        image: '/projects/pomodoro.jpg',
        blurb: {
          es: 'Mods en Java publicados en CurseForge con más de 300.000 descargas acumuladas. Mantenimiento entre versiones, bugs y mejoras con feedback de usuarios.',
          en: 'Java mods on CurseForge with 300,000+ cumulative downloads. Cross-version maintenance, bug fixes, and improvements from user feedback.',
        },
      },
      {
        id: 'vw',
        name: 'Volkswagen · Quality Dashboard',
        stack: ['Node.js', 'React', 'PostgreSQL', 'Docker'],
        image: '/projects/prediction.jpg',
        blurb: {
          es: 'Sistema de apoyo al control de calidad en línea de producción automotriz. SPC, Cpk y regresión lineal; dashboard para variables y simulación de escenarios.',
          en: 'Quality-control support for an automotive production line. SPC, Cpk, and linear regression; dashboard for variables and scenario simulation.',
        },
      },
    ]),
    more: {
      es: 'También: UTN-Pathfinder (hackathon 72h), Pomodoro Logger, Modelos de Predicción, Análisis Power BI & DAX, Testing Manual.',
      en: 'Also: UTN-Pathfinder (72h hackathon), Pomodoro Logger, Predictive Models, Power BI & DAX analysis, Manual Testing.',
    },
  }),
  tools: Object.freeze({
    id: 'tools',
    hotspot: 'shelf',
    label: { es: 'Herramientas', en: 'Tools' },
    title: { es: 'Herramientas', en: 'Tools' },
    subtitle: {
      es: 'Lo que hay en el estante',
      en: 'What’s on the shelf',
    },
    body: {
      es: 'Un estante curado: lo que uso de verdad, no una lista de logos.',
      en: 'A curated shelf: what I actually use, not a logo wall.',
    },
    groups: Object.freeze([
      {
        id: 'languages',
        title: { es: 'Lenguajes', en: 'Languages' },
        items: ['C++', 'Java', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS', 'C# · .NET'],
      },
      {
        id: 'dev',
        title: { es: 'Desarrollo', en: 'Development' },
        items: [
          'OOP',
          'STL',
          'Estructuras de datos',
          'Memoria',
          'Patrones',
          'REST',
          'React',
          'Next.js',
          'Node.js',
          'Express',
          'Qt 6',
          'SFML',
          'OpenGL',
          'Dear ImGui',
        ],
      },
      {
        id: 'data',
        title: { es: 'Datos y tools', en: 'Data & tools' },
        items: [
          'PostgreSQL',
          'SQLite/Turso',
          'Pandas',
          'Scikit-learn',
          'Matplotlib',
          'Power BI/DAX',
          'Git',
          'CMake',
          'Gradle',
          'Docker',
          'Jira',
        ],
      },
      {
        id: 'ai',
        title: { es: 'IA y automatización', en: 'AI & automation' },
        items: ['AI coding assistants', 'LLM APIs', 'Scripting', 'Code review', 'Workflow automation'],
      },
      {
        id: 'human',
        title: { es: 'Idiomas', en: 'Human languages' },
        items: ['Español · nativo', 'English · C1'],
      },
    ]),
  }),
  path: Object.freeze({
    id: 'path',
    hotspot: 'window',
    label: { es: 'Camino', en: 'Path' },
    title: { es: 'Camino', en: 'Path' },
    subtitle: {
      es: 'Por dónde pasé — y para dónde voy',
      en: 'Where I’ve been — and where I’m going',
    },
    body: {
      es: 'Un mapa con marcas de tiempo. Cada una abrió una puerta.',
      en: 'A map with time marks. Each one opened a door.',
    },
    timeline: Object.freeze([
      {
        year: '2019',
        title: { es: 'Modder Java independiente', en: 'Independent Java Modder' },
        place: 'Minecraft / Hytale',
        desc: {
          es: 'Publicación y mantenimiento de mods en CurseForge. +300.000 descargas. Gradle, APIs de modding, feedback de usuarios.',
          en: 'Publishing and maintaining CurseForge mods. 300k+ downloads. Gradle, modding APIs, user feedback.',
        },
      },
      {
        year: '2020',
        title: { es: 'Soporte técnico freelance', en: 'Freelance Technical Support' },
        place: 'Tigre, Buenos Aires',
        desc: {
          es: 'Hardware, software, armado de PC y soporte a usuarios. Troubleshooting real todos los días.',
          en: 'Hardware, software, PC builds, and user support. Real troubleshooting every day.',
        },
      },
      {
        year: '2022',
        title: { es: 'Data Science & Analytics', en: 'Data Science & Analytics' },
        place: 'Coder House',
        desc: {
          es: 'Python, Pandas, Matplotlib, estadística, intro a ML con Scikit-learn y reporting con Power BI.',
          en: 'Python, Pandas, Matplotlib, statistics, intro ML with Scikit-learn, and Power BI reporting.',
        },
      },
      {
        year: '2023',
        title: { es: 'Fullstack Python', en: 'Fullstack Python' },
        place: 'Codo a Codo · Buenos Aires',
        desc: {
          es: 'Web con Python/Flask, HTML, CSS, JavaScript, bases de datos relacionales y despliegue.',
          en: 'Web with Python/Flask, HTML, CSS, JavaScript, relational databases, and deployment.',
        },
      },
      {
        year: '2024',
        title: {
          es: 'Tecnicatura en Programación',
          en: 'University Technician in Programming',
        },
        place: 'UTN · Buenos Aires',
        desc: {
          es: 'Lógica, POO, estructuras de datos, arquitectura de software y bases de datos. En curso.',
          en: 'Logic, OOP, data structures, software architecture, and databases. In progress.',
        },
      },
      {
        year: '2024',
        title: { es: 'Tester Master QA', en: 'Tester Master QA' },
        place: 'Fundación Empujar · UTN',
        desc: {
          es: 'Casos de prueba, reporte de bugs, documentación y fundamentos de testing manual y automatizado.',
          en: 'Test cases, bug reporting, documentation, and fundamentals of manual and automated testing.',
        },
      },
      {
        year: '2025',
        title: {
          es: 'Práctica Profesional · Volkswagen Argentina',
          en: 'Professional Internship · Volkswagen Argentina',
        },
        place: 'UTN × VW',
        desc: {
          es: 'Control de calidad en línea automotriz: SPC, Cpk, regresión lineal. Dashboard Node/React/PostgreSQL/Docker. 2025–2026.',
          en: 'Quality control on an automotive line: SPC, Cpk, linear regression. Node/React/PostgreSQL/Docker dashboard. 2025–2026.',
        },
      },
    ]),
    goal: Object.freeze({
      title: { es: 'Objetivo', en: 'Objective' },
      text: {
        es: 'Incorporarme a un equipo donde pueda seguir creciendo como desarrollador y aportar capacidad de resolución, aprendizaje autónomo y criterio técnico. Me interesan el software con sustancia: sistemas, tools, datos e interfaces que se sientan sólidas.',
        en: 'Join a team where I can keep growing as a developer and contribute problem-solving, self-directed learning, and solid technical judgment. I care about software with substance: systems, tools, data, and interfaces that feel solid.',
      },
    }),
  }),
  hello: Object.freeze({
    id: 'hello',
    hotspot: 'radio',
    label: { es: 'Hola', en: 'Hello' },
    title: { es: 'Escribime', en: 'Say hello' },
    subtitle: {
      es: 'Abierto a laburo, colaboraciones y charlas técnicas',
      en: 'Open to work, collaborations, and tech talks',
    },
    body: {
      es: 'Si tenés un problema interesante, un equipo piola o una idea rara — este radio siempre está encendido.',
      en: 'If you have an interesting problem, a solid team, or a weird idea — this radio is always on.',
    },
    links: Object.freeze({
      email: { es: 'Email', en: 'Email' },
      github: { es: 'GitHub', en: 'GitHub' },
      linkedin: { es: 'LinkedIn', en: 'LinkedIn' },
      cv: { es: 'Descargar CV', en: 'Download CV' },
    }),
  }),
});
