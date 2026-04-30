import { motion } from 'motion/react';
import { LayoutGrid, Folder, History, Plus, Edit3, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

export const AdminSection = () => {
  const projects = [
    {
      id: 'SYS-8X9A',
      title: 'E-Commerce API',
      status: 'ACTIVO',
      description: 'Microservicio de carrito de compras construido en Node.js con pasarela de pago integrada.',
      stack: ['NODE.JS', 'MONGODB', 'DOCKER'],
      statusColor: 'bg-primary-container text-black'
    },
    {
      id: 'SYS-4B2C',
      title: 'Portfolio v3',
      status: 'EN DESARROLLO',
      description: 'Rediseño completo de la marca personal utilizando el nuevo sistema de diseño Cyber Oasis.',
      stack: ['REACT', 'TAILWIND', 'THREE.JS'],
      statusColor: 'border border-zinc-700 text-zinc-400'
    },
    {
      id: 'SYS-9F1Z',
      title: 'Legacy CRM System',
      status: 'ARCHIVADO',
      description: 'Sistema de gestión de clientes construido para la inmobiliaria local en 2021.',
      stack: ['PHP', 'MYSQL'],
      statusColor: 'bg-zinc-900 text-zinc-600 opacity-50'
    }
  ];

  return (
    <div className="flex h-full w-full">
       <main className="flex-1 p-10 lg:p-16 w-full max-w-7xl mx-auto">
          <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-zinc-900 pb-10">
             <div>
                <div className="font-mono text-xs text-zinc-600 mb-4 flex items-center gap-2">
                   <span className="text-primary-fixed">root@victor-robles</span>:<span className="text-tertiary-fixed-dim">~/admin/proyectos</span>$ <span className="terminal-cursor" />
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
                   <span className="text-zinc-800 not-italic mr-4 opacity-50">[</span>
                   REGISTRO_DE_PROYECTOS
                   <span className="text-zinc-800 not-italic ml-4 opacity-50">]</span>
                </h1>
             </div>

             <button className="border-2 border-primary-fixed text-primary-fixed py-4 px-10 font-display font-black text-sm hover:bg-primary-fixed hover:text-black transition-all flex items-center gap-3 clip-edges group">
                <Plus size={18} />
                NUEVO_PROYECTO
             </button>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
             {projects.map((proj, i) => (
                <motion.div 
                   key={proj.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-surface-container/30 backdrop-blur-xl border border-zinc-800 p-8 relative flex flex-col clip-edges group hover:bg-surface-container/60 transition-all border-l-4 border-l-transparent hover:border-l-primary-fixed"
                >
                   <div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-700">{proj.id}</div>
                   
                   <div className="mb-8">
                      <span className={`inline-block font-display text-[10px] tracking-widest px-2 py-1 mb-4 ${proj.statusColor}`}>
                         {proj.status}
                      </span>
                      <h2 className="font-display text-2xl font-bold text-white mb-4 uppercase">{proj.title}</h2>
                      <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                         {proj.description}
                      </p>
                   </div>

                   <div className="flex flex-wrap gap-2 mb-10 pt-6 border-t border-zinc-800/50">
                      {proj.stack.map(s => (
                        <span key={s} className="font-mono text-[10px] border border-zinc-800 px-2 py-1 text-zinc-600 uppercase">
                          {s}
                        </span>
                      ))}
                   </div>

                   <div className="mt-auto flex justify-end gap-6 pt-6 border-t border-zinc-800/20">
                      <button className="font-display text-[11px] tracking-widest text-zinc-500 hover:text-primary-fixed transition-colors flex items-center gap-2">
                         <Edit3 size={14} /> EDITAR
                      </button>
                      <button className="font-display text-[11px] tracking-widest text-zinc-700 hover:text-red-500 transition-colors flex items-center gap-2">
                         <Trash2 size={14} /> ELIMINAR
                      </button>
                   </div>
                </motion.div>
             ))}
          </div>

          <footer className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="font-mono text-[11px] text-zinc-600 tracking-widest uppercase">
                MOSTRANDO: 1-3 DE 24 REGISTROS
             </div>
             
             <div className="flex gap-8">
                <button className="font-display text-[11px] tracking-[0.3em] text-zinc-500 hover:text-primary-fixed hover:underline flex items-center gap-2">
                   <ChevronLeft size={16} /> [ ANTERIOR ]
                </button>
                <button className="font-display text-[11px] tracking-[0.3em] text-primary-fixed hover:bg-primary-fixed/10 px-4 py-2 transition-all flex items-center gap-2 outline outline-1 outline-primary-fixed/20">
                   [ SIGUIENTE ] <ChevronRight size={16} />
                </button>
             </div>
          </footer>
       </main>
    </div>
  );
};
