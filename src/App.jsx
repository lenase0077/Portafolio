import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Download, 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  Globe, 
  Layout, 
  BookOpen, 
  Briefcase,
  Gamepad2,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contactInfo = {
    name: "Leandro Nahuel Serrano",
    role: "Desarrollador C++ & Python | Estudiante de Programación UTN",
    location: "Tigre, Buenos Aires",
    phone: "+54 9 11 5886 9208",
    email: "Leandroserrano777@gmail.com",
    linkedin: "linkedin.com/in/leandro-serrano",
    github: "github.com/Lenase0077",
    summary: "Desarrollador de software en formación con una sólida base técnica y una curiosidad insaciable. Apasionado por el bajo nivel (C++) y la versatilidad de Python. Cuento con una mente analítica moldeada por la experiencia en soporte técnico y ventas, lo que me permite entender tanto el código como las necesidades del usuario final. Busco mi primera oportunidad profesional para aplicar mis conocimientos en desarrollo de software, motores gráficos o análisis de datos."
  };

  const skills = [
    { name: "C++ / SFML", icon: <Cpu size={16} />, level: 80, color: "bg-blue-600" },
    { name: "Python / Data Science", icon: <Terminal size={16} />, level: 85, color: "bg-yellow-500" },
    { name: "Java / Java Script", icon: <Code2 size={16} />, level: 70, color: "bg-red-500" },
    { name: "SQL / Bases de Datos", icon: <Database size={16} />, level: 75, color: "bg-indigo-500" },
    { name: "HTML / CSS", icon: <Globe size={16} />, level: 90, color: "bg-orange-500" },
    { name: "Git / GitHub", icon: <Layout size={16} />, level: 80, color: "bg-gray-600" },
  ];

  const projects = [
    {
      title: "Motor Gráfico / Juego 2D con SFML",
      category: "cpp",
      tech: ["C++", "SFML", "POO", "Gestión de Memoria"],
      description: "Desarrollo de una aplicación gráfica interactiva utilizando la biblioteca multimedia SFML. Implementación de un bucle de juego (Game Loop) optimizado, gestión manual de memoria, colisiones, física básica y renderizado de sprites y texturas. Este proyecto demuestra el dominio de punteros, referencias y el ciclo de vida de los objetos en C++.",
      highlight: true
    },
    {
      title: "ENFRENTADOS - Juego de Estrategia",
      category: "cpp",
      tech: ["C++", "Lógica Matemática", "Algoritmos"],
      description: "Simulador de competencia de dados por turnos desarrollado para la UTN. Integra lógica compleja de rondas, sistema de puntuación acumulativa, validaciones estrictas de entrada y animaciones por consola. Enfocado en la eficiencia algorítmica y la estructuración modular del código.",
      highlight: false,
      repoUrl: "https://github.com/lenase0077/Enfrentados"

    },
    {
      title: "Algoritmos de Machine Learning",
      category: "python",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      description: "Implementación de modelos de aprendizaje supervisado y no supervisado (Regresión Lineal/Múltiple, KNN, Árboles de Decisión). Incluye limpieza de datasets reales, feature engineering y evaluación de métricas (MSE, Accuracy) en Jupyter Notebooks.",
      highlight: false,
      repoUrl: "https://github.com/lenase0077/Proyectos-Machine-Learning"
    },
    {
      title: "Dashboard de Terrorismo Global",
      category: "data",
      tech: ["Power BI", "DAX", "Power Query"],
      description: "Análisis interactivo de datos históricos (1970-2017). Visualizaciones geoespaciales dinámicas y modelado de datos complejo para identificar patrones por región y grupos. Limpieza profunda de datos crudos.",
      highlight: false,
      repoUrl: "https://github.com/lenase0077/Attempt-Report-PowerBI-analysis"

    },
    {
      title: "Nuestro Café - E-commerce",
      category: "web",
      tech: ["Python", "Flask", "HTML/CSS", "JS"],
      description: "Aplicación web Fullstack desplegada en PythonAnywhere. Frontend moderno y responsivo con backend ligero en Flask para el enrutamiento y manejo de lógica del servidor.",
      highlight: false,
      repoUrl: "https://github.com/lenase0077/Coffee-style"

    },
    {
      title: "Suite de Testing Manual",
      category: "qa",
      tech: ["JIRA", "Test Cases", "Bug Tracking"],
      description: "Diseño y ejecución de planes de prueba para aplicaciones web. Creación de casos de prueba detallados, reporte de bugs en JIRA y validación de criterios de aceptación.",
      highlight: false,
      repoUrl: "https://github.com/lenase0077/Proyecto-Testing-Manual"
    }
  ];

  const experience = [
    {
      role: "Soporte Técnico y Reparación de PC",
      company: "Freelance",
      period: "2020 - Actualidad",
      description: "Resolución de problemas complejos de hardware y software. Diagnóstico de fallas, armado de equipos a medida y optimización de sistemas operativos. Desarrollo de habilidades de troubleshooting bajo presión."
    },
    {
      role: "Vendedor Automotriz",
      company: "Negocio Familiar",
      period: "2016 - Actualidad",
      description: "Gestión de clientes y ventas de repuestos. Desarrollo de soft skills cruciales: comunicación efectiva, negociación y atención al detalle."
    }
  ];

  const education = [
    {
      degree: "Tecnicatura Universitaria en Programación",
      school: "Universidad Tecnológica Nacional (UTN)",
      period: "2024 - Actualidad",
      detail: "Foco en POO, Estructuras de Datos y C++."
    },
    {
      degree: "Fullstack Python",
      school: "Codo a Codo",
      period: "2023 - 2024",
      detail: "Desarrollo web integral con Python y Frameworks."
    },
    {
      degree: "Data Science & Analytics",
      school: "Coder House",
      period: "2022 - 2023",
      detail: "Top 10% de la clase. SQL y Python avanzado."
    },
    {
      degree: "Tester Master - QA",
      school: "Fundación Empujar - UTN",
      period: "2024",
      detail: "Metodologías de QA y Testing Manual."
    }
  ];

  const filterProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab || (activeTab === 'cpp' && p.category === 'cpp'));

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Header / Hero Section */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50 shadow-lg">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">{contactInfo.name}</h1>
            <p className="text-blue-400 font-medium">{contactInfo.role}</p>
          </div>
          <div className="flex gap-3">
            <a href={`mailto:${contactInfo.email}`} className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors" title="Email">
              <Mail size={20} />
            </a>
            <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noreferrer" className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`https://${contactInfo.github}`} target="_blank" rel="noreferrer" className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors" title="GitHub">
              <Github size={20} />
            </a>
                <a 
                  href="/Leandro_Serrano_CV.pdf" 
                  download="Leandro_Serrano_CV.pdf"
                  // Aquí usamos las clases de Tailwind que tenía el botón:
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all transform hover:scale-105 ml-2"
                >
                  <Download size={18} />
                  <span>Descargar CV</span>
                </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-16">
        
        {/* About Section */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span>
              Perfil Profesional
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              {contactInfo.summary}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" /> {contactInfo.location}
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400" /> {contactInfo.phone}
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-blue-400" /> Español (Nativo) • Inglés (B2)
              </div>
            </div>
          </div>
          
          {/* Skills Mini-Card */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Stack Tecnológico</h3>
            <div className="space-y-3">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center gap-2 text-slate-200">{skill.icon} {skill.name}</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full`} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - The Core for C++/Python */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              <Code2 className="text-blue-500" size={32} />
              Proyectos Destacados
            </h2>
            
            {/* Filter Tabs */}
            <div className="flex p-1 bg-slate-800 rounded-lg overflow-x-auto">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'cpp', label: 'C++ & Systems' },
                { id: 'python', label: 'Python & AI' },
                { id: 'web', label: 'Web & QA' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filterProjects.map((project, idx) => (
              <div 
                key={idx} 
                className={`group relative bg-slate-800 rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  project.highlight 
                    ? 'border-blue-500/50 shadow-blue-900/20 md:col-span-2 bg-gradient-to-br from-slate-800 to-slate-800/80' 
                    : 'border-slate-700 hover:border-slate-500'
                }`}
              >
                {project.highlight && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-xs font-bold px-3 py-1 rounded-bl-lg text-white">
                    DESTACADO
                  </div>
                )}
                
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-lg ${project.category === 'cpp' ? 'bg-blue-900/30 text-blue-400' : project.category === 'python' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-purple-900/30 text-purple-400'}`}>
                      {project.category === 'cpp' ? <Gamepad2 size={24} /> : project.category === 'python' ? <Cpu size={24} /> : <Globe size={24} />}
                    </div>
                    <a 
                        href={project.repoUrl || `https://${contactInfo.github}`} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-slate-500 hover:text-white transition-colors"
                    >
                        <ExternalLink size={20} />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-900 text-slate-300 text-xs font-medium rounded-full border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Experience */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-2">
              <Briefcase className="text-blue-500" /> Experiencia
            </h2>
            <div className="space-y-8 pl-2 border-l-2 border-slate-700 ml-2">
              {experience.map((job, idx) => (
                <div key={idx} className="relative pl-6">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500"></div>
                  <h3 className="text-lg font-bold text-white">{job.role}</h3>
                  <div className="text-blue-400 text-sm mb-2">{job.company} | {job.period}</div>
                  <p className="text-slate-400 text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-2">
              <BookOpen className="text-blue-500" /> Educación
            </h2>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className="flex justify-between items-start">
                    <h3 className="text-white font-semibold">{edu.degree}</h3>
                    <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">{edu.period}</span>
                  </div>
                  <div className="text-blue-400 text-sm mb-1">{edu.school}</div>
                  <p className="text-slate-400 text-xs">{edu.detail}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Leandro Serrano. Diseñado para impactar.</p>
          <p className="mt-2">Desarrollado con React & Tailwind CSS</p>
        </footer>

      </main>
    </div>
  );
};

export default Portfolio;