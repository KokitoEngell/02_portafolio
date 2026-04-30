import { motion } from 'motion/react';
import { Briefcase, Building2, Terminal } from 'lucide-react';

export const ExperienceSection = () => {
  const experiences = [
    {
      year: '2020 - PRESENTE',
      role: 'Arquitecto Web & Tech Lead',
      company: 'GLOBAL_TECH_SOLUTIONS_SA',
      description: 'Diseño e implementación de arquitecturas escalables basadas en microservicios para plataformas de alto tráfico. Liderazgo técnico de un equipo de 15 desarrolladores.',
      tags: ['Node.js', 'React', 'AWS / Docker', 'GraphQL'],
      id: 'CRNT-001',
      color: 'border-primary-fixed',
      indicator: 'bg-primary-fixed'
    },
    {
      year: '2016 - 2020',
      role: 'Senior Full Stack Developer',
      company: 'CYBER_DYNAMICS_INC',
      description: 'Desarrollo end-to-end de aplicaciones SaaS empresariales. Optimización de bases de datos relacionales reduciendo el tiempo de consulta en un 40%.',
      tags: ['Vue.js', 'PHP / Laravel', 'PostgreSQL', 'Redis'],
      id: 'PAST-002',
      color: 'border-tertiary-fixed-dim',
      indicator: 'bg-tertiary-fixed-dim'
    },
    {
      year: '2012 - 2016',
      role: 'Desarrollador Web Mid-Level',
      company: 'INNOVA_DIGITAL_AGENCY',
      description: 'Creación de interfaces de usuario interactivas y robustas para e-commerce. Integración de pasarelas de pago y APIs de terceros.',
      tags: ['JavaScript (ES6)', 'CSS3 / SASS', 'MySQL'],
      id: 'PAST-003',
      color: 'border-zinc-700',
      indicator: 'bg-zinc-700'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto w-full relative">
      <header className="mb-20">
        <div className="font-mono text-tertiary-fixed-dim text-xs tracking-widest mb-2 uppercase">&gt;&gt; MODULO_ACTIVO</div>
        <h2 className="font-display text-5xl md:text-7xl font-black text-primary-fixed italic uppercase flex items-center gap-4">
           <span className="text-zinc-800 font-light">[</span>
           EXPERIENCIA_LABORAL
           <span className="text-zinc-800 font-light">]</span>
        </h2>
        <p className="font-mono text-sm text-zinc-500 max-w-2xl mt-6 border-l-2 border-secondary-container pl-6">
           Extrayendo registros de trayectoria operativa. 12 años de ciclos de desarrollo, arquitectura de sistemas y despliegue de soluciones escalables.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4">
           <div className="sticky top-24 bg-surface-container/60 backdrop-blur-xl border border-zinc-800 p-8 clip-edges">
              <div className="text-[10px] font-mono text-zinc-600 absolute top-4 right-4">SR.STA.01</div>
              <h3 className="font-display text-sm tracking-widest text-white border-b border-zinc-800 pb-4 mb-8 flex justify-between">
                <span>ESTADO_DEL_SISTEMA</span>
                <span className="text-primary-fixed animate-pulse">EN LINEA</span>
              </h3>
              
              <div className="space-y-10">
                 <div>
                    <div className="flex justify-between font-mono text-[10px] text-zinc-500 mb-2">
                       <span>TIEMPO_OPERATIVO</span>
                       <span className="text-primary-fixed">12 AÑOS</span>
                    </div>
                    <div className="flex gap-1">
                       {[...Array(12)].map((_, i) => (
                         <div key={i} className={`h-3 w-2 ${i < 11 ? 'bg-primary-fixed' : 'bg-primary-fixed/30 animate-pulse'}`} />
                       ))}
                    </div>
                 </div>
                 
                 <div>
                    <div className="flex justify-between font-mono text-[10px] text-zinc-500 mb-2">
                       <span>ROL_PRINCIPAL</span>
                       <span className="text-secondary-fixed">ARQUITECTO_WEB</span>
                    </div>
                    <div className="flex gap-1 h-3">
                       <div className="flex-[3] bg-secondary-fixed" />
                       <div className="flex-1 bg-zinc-800" />
                    </div>
                 </div>
              </div>

              <div className="mt-12 h-40 border border-zinc-800 relative group overflow-hidden">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnP3LkLUv5VPqtjG4K-fta9X0QqbLtC-Cfz1POQbzvUipens7KANHCxdcO0n-hlAuC4hvHOaR2unl0VsxBkhu89Ya4pAtj-Etpqj3PXsM2HFiXOxyjGFV7x50NMwtM-UCcjCS8M58fFX2TQ4av5MIyNoO2q8MzHBTtQa-UQ0fsV4e2MbxFRs0xikeISNDhdvi4IBZvPRcybg5L9nJ6PME4qWPva5cyBqQnvVlPFQNGA_j7NLuEw35xICx_mDlvZZcLG-DxTpXHrI4k" alt="Abstract wireframe" className="w-full h-full object-cover opacity-30 grayscale invert" />
                 <div className="absolute inset-x-0 bottom-4 text-center">
                    <span className="font-mono text-[8px] tracking-[0.3em] bg-black/80 px-2 py-1 text-tertiary-fixed-dim border border-tertiary-fixed-dim/30 backdrop-blur-sm">VISUALIZACION_MALLA_DEDATOS</span>
                 </div>
              </div>
           </div>
        </aside>

        <div className="lg:col-span-8 relative">
           <div className="absolute left-4 md:left-10 top-2 bottom-0 w-[2px] bg-zinc-800" />
           <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.article 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-8 relative group"
                >
                   <div className="shrink-0 w-8 md:w-20 flex justify-center relative mt-6">
                      <div className={`w-4 h-4 rotate-45 border-2 ${exp.indicator} bg-background group-hover:scale-125 transition-transform shadow-[0_0_10px_currentColor]`} />
                   </div>
                   
                   <div className={`flex-1 bg-surface-container/60 backdrop-blur-xl border ${exp.color} p-8 clip-edges group-hover:bg-surface-container-high/80 transition-all`}>
                      <div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-600">#LOG: {exp.id}</div>
                      
                      <div className="mb-6">
                         <span className="font-display text-xs text-secondary-container bg-secondary-container/10 px-2 py-1 uppercase tracking-widest mb-3 inline-block">{exp.year}</span>
                         <h3 className="font-display text-3xl font-bold text-white uppercase mt-2">{exp.role}</h3>
                         <div className="font-mono text-sm text-primary-fixed flex items-center gap-2 mt-2">
                            <Building2 size={16} />
                            {exp.company}
                         </div>
                      </div>

                      <p className="text-zinc-400 mb-8 max-w-2xl border-l border-zinc-800 pl-6 leading-relaxed">
                         {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                         {exp.tags.map(tag => (
                           <span key={tag} className="font-mono text-[10px] px-3 py-1 bg-black border border-zinc-800 text-zinc-300 uppercase tracking-tighter">
                              {tag}
                           </span>
                         ))}
                      </div>
                   </div>
                </motion.article>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
