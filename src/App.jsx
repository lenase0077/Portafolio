import React, { useState, useEffect, useRef } from 'react';
// Importamos AnimatePresence para transiciones suaves si hiciera falta
import { motion, AnimatePresence } from 'framer-motion'; 
import { 
  Github, Linkedin, Mail, MapPin, Download, 
  Code2, Database, Terminal, Cpu, Globe, Layout, 
  Briefcase, BookOpen, Gamepad2, ExternalLink, Sparkles
} from 'lucide-react';
import CozyToggle from './CozyToggle'; // <--- 1. IMPORTAMOS EL NUEVO TOGGLE

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  // <--- 2. NUEVO ESTADO PARA EL MODO COZY
  const [isCozy, setIsCozy] = useState(false); 
  const audioRef = useRef(null);

  useEffect(() => {
    // Inicializamos el audio una sola vez
    if (!audioRef.current) {
      audioRef.current = new Audio('/lofi-beat.mp3'); // Busca en la carpeta public
      audioRef.current.loop = true; // Que se repita infinitamente
      audioRef.current.volume = 0.4; // Volumen suave (40%) para no asustar
    }

    if (isCozy) {
      // Si entramos a modo Cozy -> Play
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("El navegador bloqueó el autoplay (normal si no hubo interacción):", error);
        });
      }
    } else {
      // Si salimos de modo Cozy -> Pausa y Reiniciar
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isCozy]);

  // <--- 3. EFECTO PARA CAMBIAR EL CSS DEL BODY
  useEffect(() => {
    if (isCozy) {
        document.body.classList.add('cozy-mode');
    } else {
        document.body.classList.remove('cozy-mode');
    }
  }, [isCozy]);

  const toggleCozyMode = () => setIsCozy(!isCozy);


  const contactInfo = {
    // ... (tu información de contacto sigue igual)
    name: "Leandro N. Serrano",
    role: "C++ & Python Developer | Creative Coder",
    location: "Tigre, Buenos Aires",
    email: "Leandroserrano777@gmail.com",
    linkedin: "linkedin.com/in/leandro-serrano",
    github: "github.com/Lenase0077",
    summary: "Desarrollador de software en formación con una sólida base técnica. Apasionado por el bajo nivel (C++) y la versatilidad de Python. Busco romper los límites entre el código eficiente y las experiencias visuales."
  };

  const skills = [
    // ... (tus skills siguen igual)
    { name: "C++ / SFML", icon: <Cpu size={20} />, level: 70, color: "from-blue-600 to-cyan-400" },
    { name: "Python / AI", icon: <Terminal size={20} />, level: 75, color: "from-yellow-400 to-orange-500" },
    { name: "Java / JS", icon: <Code2 size={20} />, level: 55, color: "from-red-500 to-pink-500" },
    { name: "SQL / Data", icon: <Database size={20} />, level: 65, color: "from-indigo-500 to-purple-500" },
    { name: "Web Tech", icon: <Globe size={20} />, level: 85, color: "from-emerald-400 to-green-600" },
    { name: "Git Ops", icon: <Layout size={20} />, level: 75, color: "from-gray-400 to-slate-200" },
  ];

  const projects = [
    // ... (tus proyectos siguen igual)
     {
      title: "Pathfinder - Hackathon UTN",
      category: "web",
      tech: ["React", "Vite", "Logic 72hs"],
      description: "Desarrollado en 72hs. Herramienta interactiva para estudiantes que visualiza correlatividades y permite planificar la carrera universitaria dinámicamente.",
      highlight: true,
      repoUrl: "https://github.com/lenase0077/Proyecto-Hackaton",
      color: "border-pink-500"
    },
    {
      title: "Motor Gráfico 2D SFML",
      category: "cpp",
      tech: ["C++", "SFML", "Memory"],
      description: "Game Loop optimizado, física manual y renderizado. Gestión de memoria al límite.",
      highlight: true,
      color: "border-blue-500"
    },
    {
      title: "ENFRENTADOS - Strategy",
      category: "cpp",
      tech: ["C++", "Algoritmos"],
      description: "Simulador de dados con lógica matemática compleja y validaciones estrictas.",
      highlight: false,
      repoUrl: "https://github.com/lenase0077/Enfrentados",
      color: "border-cyan-500"
    },
    {
      title: "ML & Data Science",
      category: "python",
      tech: ["Python", "Scikit-learn"],
      description: "Modelos predictivos (Regresión, KNN) y limpieza de datos reales.",
      highlight: false,
      repoUrl: "https://github.com/lenase0077/Proyectos-Machine-Learning",
      color: "border-yellow-500"
    },
    {
      title: "Global Terrorism DB",
      category: "data",
      tech: ["Power BI", "DAX"],
      description: "Visualización masiva de datos históricos y patrones geopolíticos.",
      highlight: false,
      repoUrl: "https://github.com/lenase0077/Attempt-Report-PowerBI-analysis",
      color: "border-indigo-500"
    },
    {
      title: "Nuestro Café Shop",
      category: "web",
      tech: ["Flask", "Python"],
      description: "E-commerce fullstack desplegado. Arquitectura MVC ligera.",
      highlight: false,
      repoUrl: "https://github.com/lenase0077/Coffee-style",
      color: "border-orange-500"
    },
    {
      title: "QA Testing Suite",
      category: "qa",
      tech: ["JIRA", "Automation"],
      description: "Diseño de casos de prueba y ciclo de vida de bugs.",
      highlight: false,
      repoUrl: "https://github.com/lenase0077/Proyecto-Testing-Manual",
      color: "border-green-500"
    }
  ];

  const filterProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab || (activeTab === 'cpp' && p.category === 'cpp'));

  return (
    <div className="relative min-h-screen font-sans selection:bg-orange-500 selection:text-white overflow-hidden transition-colors duration-1000">
      
      {/* --- FONDOS --- */}
      <div className="cyber-grid" /> {/* Se oculta via CSS en modo cozy */}
      {/* Nueva capa para el fondo cozy */}
      <div className="cozy-bg-layer" /> 

      {/* --- HEADER --- */}
      {/* Usamos estilos en línea para los colores que deben cambiar dinámicamente con las variables CSS */}
      <motion.header 
        initial={{ y: -100 }} animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-700"
        style={{ 
            backgroundColor: isCozy ? 'rgba(40, 20, 10, 0.6)' : 'rgba(0, 0, 0, 0.4)',
            borderColor: isCozy ? 'rgba(249, 115, 22, 0.2)' : 'rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h1 
                className="text-3xl font-black tracking-tighter text-transparent bg-clip-text hover:scale-105 transition-transform cursor-default"
                style={{ 
                    backgroundImage: isCozy 
                        ? 'linear-gradient(to right, var(--accent-a), var(--accent-b))' // Naranja a Dorado
                        : 'linear-gradient(to right, #60a5fa, #a855f7)' // Azul a Violeta (Hardcoded para modo normal)
                }}
            >
              {contactInfo.name}
            </h1>
            <p className="text-slate-400 text-sm font-mono transition-colors" style={{ color: isCozy ? '#fdba74' : '#94a3b8' }}>
                {contactInfo.role}
            </p>
          </div>
          
          <div className="flex gap-3">
            {[
              { icon: <Mail size={18} />, href: `mailto:${contactInfo.email}` },
              { icon: <Linkedin size={18} />, href: `https://${contactInfo.linkedin}` },
              { icon: <Github size={18} />, href: `https://${contactInfo.github}` }
            ].map((social, i) => (
              <motion.a 
                key={i}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href={social.href} target="_blank" rel="noreferrer"
                className="p-3 rounded-full transition-colors border"
                style={{ 
                    backgroundColor: isCozy ? 'rgba(249, 115, 22, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                    borderColor: isCozy ? 'rgba(249, 115, 22, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    color: isCozy ? '#fdba74' : 'inherit'
                }}
              >
                {social.icon}
              </motion.a>
            ))}
            
            <motion.a 
              href="/Leandro_Serrano_CV.pdf" download
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2 text-white rounded-full font-bold shadow-lg transition-all ml-2"
              style={{
                  backgroundColor: isCozy ? 'var(--accent-a)' : '#2563eb', // Naranja vs Azul
                  boxShadow: isCozy ? '0 10px 15px -3px rgba(249, 115, 22, 0.3)' : '0 10px 15px -3px rgba(37, 99, 235, 0.3)'
              }}
            >
              <Download size={18} /> CV
            </motion.a>
          </div>
        </div>
      </motion.header>

      {/* <--- 4. ENVOLVEMOS EL MAIN EN UN MOTION.DIV PARA LA ANIMACIÓN DE FLOTAR */}
      <motion.main 
        // Si está cozy, aplicamos la animación de flotar definida en CSS
        className={`relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-24 ${isCozy ? 'animate-float' : ''}`}
        // Una transición suave al activar el modo
        animate={{ y: isCozy ? [0, -10, 0] : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        
        {/* --- HERO SECTION --- */}
        <section className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="md:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          >
            <div 
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border"
                style={{
                    color: isCozy ? 'var(--accent-a)' : '#60a5fa',
                    borderColor: isCozy ? 'var(--accent-a)' : 'rgba(96, 165, 250, 0.2)',
                    backgroundColor: isCozy ? 'rgba(249, 115, 22, 0.1)' : 'rgba(96, 165, 250, 0.1)',
                }}
            >
               Open to Work
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Código <span className="text-transparent bg-clip-text" style={{ backgroundImage: isCozy ? 'linear-gradient(to right, var(--accent-a), var(--accent-b))' : 'linear-gradient(to right, #22d3ee, #2563eb)' }}>Sólido</span>. <br />
              Impacto <span className="text-transparent bg-clip-text" style={{ backgroundImage: isCozy ? 'linear-gradient(to right, var(--accent-b), var(--accent-a))' : 'linear-gradient(to right, #c084fc, #db2777)' }}>Visual</span>.
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl border-l-4 pl-4 transition-colors"
               style={{ 
                   color: isCozy ? '#fdba74' : '#94a3b8',
                   borderColor: isCozy ? 'var(--accent-a)' : 'rgba(59, 130, 246, 0.5)'
               }}
            >
              {contactInfo.summary}
            </p>

            <div className="flex items-center gap-4 text-sm font-mono" style={{ color: isCozy ? '#fdba74' : '#64748b' }}>
              <span className="flex items-center gap-2">
                <MapPin size={14} style={{ color: isCozy ? 'var(--accent-a)' : '#06b6d4' }} /> {contactInfo.location}
              </span>
            </div>
          </motion.div>
          
          {/* Skills Card */}
          <motion.div 
            className="md:col-span-5 glass-card rounded-2xl p-6"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles style={{ color: isCozy ? 'var(--accent-b)' : '#facc15' }} size={20} /> Tech Stack
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between text-sm mb-1 transition-colors" style={{ color: isCozy ? '#fdba74' : '#cbd5e1' }}>
                    <span className="flex items-center gap-2">{skill.icon} {skill.name}</span>
                    <span className="font-mono text-xs opacity-50">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: isCozy ? 'rgba(0,0,0,0.2)' : '#1e293b' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: idx * 0.1 }}
                      className="h-full"
                      style={{ 
                          // Usamos las variables para el gradiente de las barras
                          backgroundImage: `linear-gradient(to right, var(--accent-a), var(--accent-b))`,
                          boxShadow: `0 0 10px var(--accent-a)`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <h2 className="text-3xl font-bold text-white">Proyectos Destacados</h2>
            
            {/* Filter Tabs */}
            <div className="flex p-1 rounded-xl border backdrop-blur-sm transition-colors"
                 style={{ 
                     backgroundColor: isCozy ? 'rgba(43, 24, 16, 0.8)' : 'rgba(15, 23, 42, 0.8)',
                     borderColor: isCozy ? 'rgba(249, 115, 22, 0.1)' : 'rgba(255, 255, 255, 0.05)'
                 }}>
              {[
                { id: 'all', label: 'Todos' },
                { id: 'cpp', label: 'C++ Systems' },
                { id: 'python', label: 'Python AI' },
                { id: 'web', label: 'Web & QA' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all z-10 ${
                    activeTab === tab.id ? 'text-white' : 'hover:text-slate-300'
                  }`}
                  style={{ color: activeTab !== tab.id ? (isCozy ? '#fdba74' : '#64748b') : '' }}
                >
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg -z-10 shadow-lg"
                      style={{ backgroundColor: isCozy ? 'var(--accent-a)' : 'rgba(29, 78, 216, 0.8)' }}
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filterProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={project.title}
                  className={`group relative glass-card rounded-2xl overflow-hidden transition-colors ${project.highlight ? 'md:col-span-2' : ''}`}
                  // Ajustamos el borde hover para cozy mode
                  style={isCozy ? { borderColor: 'rgba(249, 115, 22, 0.3)'} : {}}
                >
                  {/* Glow interno al hacer hover (Simplificado para que funcione en ambos modos) */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500`} 
                       style={{ backgroundColor: isCozy ? 'var(--accent-a)' : '#3b82f6' }}
                  />

                  <div className="relative p-6 h-full flex flex-col z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded-lg border transition-colors"
                           style={{
                               backgroundColor: isCozy ? 'rgba(249, 115, 22, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                               borderColor: isCozy ? 'rgba(249, 115, 22, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                               color: isCozy ? '#fdba74' : '#cbd5e1'
                           }}>
                        {project.category === 'cpp' ? <Gamepad2 size={20} /> : project.category === 'python' ? <Cpu size={20} /> : <Globe size={20} />}
                      </div>
                      <a 
                          href={project.repoUrl || `https://${contactInfo.github}`} 
                          target="_blank" rel="noreferrer" 
                          className="transition-colors"
                          style={{ color: isCozy ? '#fdba74' : '#64748b' }}
                      >
                          <ExternalLink size={20} />
                      </a>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 text-glow-hover cursor-default">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm mb-6 flex-grow leading-relaxed transition-colors" style={{ color: isCozy ? '#fdba74' : '#94a3b8' }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-mono rounded border transition-colors"
                              style={{
                                  backgroundColor: isCozy ? 'rgba(43, 24, 16, 0.8)' : 'rgba(0, 0, 0, 0.4)',
                                  borderColor: isCozy ? 'rgba(249, 115, 22, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                  color: isCozy ? '#fdba74' : '#cbd5e1'
                              }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- TIMELINE SECTION --- */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Experiencia */}
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase style={{ color: isCozy ? 'var(--accent-a)' : '#3b82f6' }} /> Experience
            </h2>
            <div className="border-l-2 ml-3 space-y-8" style={{ borderColor: isCozy ? 'rgba(249, 115, 22, 0.3)' : '#1e293b' }}>
              {[
                { role: "Soporte Técnico", company: "Freelance", year: "2020+", desc: "Resolución crítica de problemas y hardware." },
                { role: "Ventas & Gestión", company: "Familiar", year: "2016+", desc: "Negociación y gestión de clientes." }
              ].map((job, idx) => (
                <motion.div 
                  key={idx} 
                  variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                  className="relative pl-8"
                >
                  {/* Bolita del timeline */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2"
                       style={{
                           backgroundColor: isCozy ? 'var(--bg-primary)' : '#0f172a',
                           borderColor: isCozy ? 'var(--accent-a)' : '#3b82f6',
                           boxShadow: isCozy ? '0 0 10px var(--accent-a)' : '0 0 10px #3b82f6'
                       }}></div>
                  <h3 className="text-lg font-bold text-slate-100">{job.role}</h3>
                  <div className="text-xs font-mono mb-1" style={{ color: isCozy ? 'var(--accent-a)' : '#60a5fa' }}>{job.company} | {job.year}</div>
                  <p className="text-sm" style={{ color: isCozy ? '#fdba74' : '#94a3b8' }}>{job.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Educación */}
          <motion.section 
             initial="hidden" whileInView="visible" viewport={{ once: true }}
             variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
             <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen style={{ color: isCozy ? 'var(--accent-b)' : '#a855f7' }} /> Education
            </h2>
            <div className="grid gap-4">
              {[
                { title: "Tecnicatura Programación", place: "UTN", year: "Current" },
                { title: "Fullstack Python", place: "Codo a Codo", year: "2024" },
                { title: "Data Science", place: "Coder House", year: "2023" },
                { title: "QA Tester", place: "Fundación Empujar", year: "2024" }
              ].map((edu, idx) => (
                <motion.div 
                  key={idx}
                  variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4 rounded-xl border-l-4"
                  style={{ borderLeftColor: isCozy ? 'var(--accent-b)' : 'rgba(168, 85, 247, 0.5)' }}
                >
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-sm" style={{ color: isCozy ? '#fff' : '#e2e8f0' }}>{edu.title}</h3>
                    <span className="text-xs font-mono" style={{ color: isCozy ? '#fdba74' : '#64748b' }}>{edu.year}</span>
                  </div>
                  <div className="text-xs mt-1" style={{ color: isCozy ? '#fdba74' : '#94a3b8' }}>{edu.place}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>

        {/* --- FOOTER --- */}
        <footer className="pt-10 border-t text-center pb-4" style={{ borderColor: isCozy ? 'rgba(249, 115, 22, 0.2)' : 'rgba(30, 41, 59, 0.5)' }}>
          <p className="text-xs font-mono uppercase tracking-widest transition-colors" style={{ color: isCozy ? '#fdba74' : '#475569' }}>
            React • Tailwind • Framer Motion
          </p>
        </footer>

      </motion.main>
      
      {/* <--- 5. INSERTAMOS EL NUEVO TOGGLE Y LE PASAMOS EL ESTADO Y LA FUNCIÓN */}
      <CozyToggle isCozy={isCozy} toggleCozy={toggleCozyMode} />

    </div>
  );
};

export default Portfolio;