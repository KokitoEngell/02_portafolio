import { motion } from 'motion/react';
import { Code2, Palette, Cpu, Terminal as TerminalIcon } from 'lucide-react';

export const SkillsSection = () => {
  const skills = [
    { 
      id: 'MOD-DW-01',
      title: 'DESARROLLO WEB FULL-STACK',
      icon: Code2,
      color: 'text-tertiary-fixed-dim',
      barColor: 'bg-tertiary-fixed-dim',
      items: [
        { name: 'FRONTEND_ARCHITECTURE', value: '95%', tags: ['REACT', 'NEXT.JS', 'TAILWIND'] },
        { name: 'BACKEND_SYSTEMS', value: '88%', tags: ['NODE.JS', 'PYTHON', 'SUPABASE'] }
      ]
    },
    {
      id: 'MOD-UI-02',
      title: 'DISEÑO UI/UX AVANZADO',
      icon: Palette,
      color: 'text-secondary-container',
      barColor: 'bg-secondary-container',
      items: [
        { name: 'SISTEMAS_DE_DISEÑO', value: '92%', tags: ['FIGMA', 'TOKENS'] },
        { name: 'INTERFACES_FUTURISTAS', value: '85%', tags: ['FUI', 'BRUTALISMO'] }
      ]
    },
    {
      id: 'MOD-IA-03',
      title: 'IA & MACHINE LEARNING',
      icon: Cpu,
      color: 'text-primary-fixed',
      barColor: 'bg-primary-fixed',
      items: [
        { name: 'INTEGRACIÓN_LLM', value: '80%', tags: ['GEMINI API', 'LANGCHAIN'] }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto w-full">
      <header className="mb-16 border-l-4 border-primary-fixed pl-6 py-2 relative">
        <div className="absolute -left-[6px] top-0 w-2 h-2 bg-primary-fixed" />
        <div className="absolute -left-[6px] bottom-0 w-2 h-2 bg-primary-fixed" />
        <h2 className="font-display text-5xl md:text-6xl font-black text-white italic">HABILIDADES</h2>
        <div className="font-mono text-xs text-zinc-500 mt-2 flex items-center gap-2">
           <TerminalIcon size={14} className="text-primary-fixed" />
           SYS.MATRIZ_COMPETENCIAS_V2.4 // STATUS: OPTIMIZADO
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-8">
          {skills.slice(0, 1).map((cat) => (
            <div key={cat.id} className="bg-surface-container/60 backdrop-blur-xl border border-tertiary-fixed-dim/20 p-8 clip-edges relative group transition-all hover:border-tertiary-fixed-dim/50">
              <div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-600">{cat.id}</div>
              <h3 className={`font-display text-2xl ${cat.color} mb-8 flex items-center gap-3`}>
                <cat.icon size={24} />
                {cat.title}
              </h3>
              <div className="space-y-10">
                {cat.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-3 font-display text-sm">
                      <span className="text-zinc-400">{item.name}</span>
                      <span className={cat.color}>{item.value}</span>
                    </div>
                    <div className="h-3 w-full bg-zinc-900 border border-zinc-800 flex gap-0.5 p-0.5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.value }}
                        className={`h-full ${cat.barColor} shadow-[0_0_10px_currentColor]`} 
                      />
                    </div>
                    <div className="flex gap-2 mt-4">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-2 py-0.5 text-zinc-500">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 h-full">
           <div className="bg-surface-container/60 border border-primary-fixed/20 h-full relative overflow-hidden group clip-edges">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCakYw26TMWn-WsTanER24bNjw4bG7F2aBWIVWUqrYGt3ExkBbI9iA4iTtvhJaFP54PKxoEJ4_qYR3oD_YtCbiTgtN2U_2ELEPO4rR8S2aREElrYuHG1AocbAJwirFeffLJKp8nPCVFAe_EKyaQD1zKCRmgocVMxfWlQYifRFjMJwfwnI7xQ4vpRXH8z2jLzcb4p-PsUHj-l8q5uT9uPdreTMio_Z18pR5Y5wN7y2prrZdkA6SPW64V-OjWv0XCr1St0aW2AiQR12SY" 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-80 transition-all duration-700" 
                alt="Cyber workspace"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="font-mono text-primary-fixed text-xs mb-1">[ EXEC. PROTOCOL ]</div>
                <div className="font-display text-2xl text-white font-black">CÓDIGO LÍQUIDO</div>
              </div>
           </div>
        </div>

        <div className="lg:col-span-6">
          {skills.slice(1, 2).map((cat) => (
             <div key={cat.id} className="bg-surface-container/60 backdrop-blur-xl border border-secondary-container/20 p-8 clip-edges relative group transition-all hover:border-secondary-container/50">
               <div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-600">{cat.id}</div>
               <h3 className={`font-display text-2xl ${cat.color} mb-8 flex items-center gap-3`}>
                 <cat.icon size={24} />
                 {cat.title}
               </h3>
               <div className="space-y-10">
                 {cat.items.map((item) => (
                   <div key={item.name}>
                     <div className="flex justify-between mb-3 font-display text-sm">
                       <span className="text-zinc-400">{item.name}</span>
                       <span className={cat.color}>{item.value}</span>
                     </div>
                     <div className="h-3 w-full bg-zinc-900 border border-zinc-800 flex gap-2 p-0.5">
                       {[...Array(5)].map((_, i) => (
                         <div 
                           key={i} 
                           className={`h-full flex-1 transition-all ${
                             i < (parseInt(item.value)/20) ? cat.barColor : 'bg-white/5'
                           }`} 
                         />
                       ))}
                     </div>
                     <div className="flex gap-2 mt-4">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-2 py-0.5 text-zinc-500">{tag}</span>
                        ))}
                      </div>
                   </div>
                 ))}
               </div>
             </div>
          ))}
        </div>

        <div className="lg:col-span-6">
           <div className="bg-surface-container-high/60 backdrop-blur-xl border border-primary-fixed/20 p-8 clip-edges relative h-full">
              <div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-600">MOD-IA-03</div>
              <h3 className="font-display text-2xl text-primary-fixed mb-8 flex items-center gap-3">
                <Cpu size={24} />
                IA & MACHINE LEARNING
              </h3>
              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between mb-2 text-primary-fixed font-display text-sm">
                       <span>INTEGRACIÓN_LLM</span>
                       <span>80%</span>
                    </div>
                    <div className="h-3 w-full bg-zinc-900 border border-zinc-800 p-0.5 flex">
                       <div className="h-full w-[80%] bg-primary-fixed shadow-[0_0_10px_#c3f400]" />
                    </div>
                 </div>
                 <div className="bg-black/50 p-4 border border-zinc-800 font-mono text-xs">
                    <div className="text-zinc-600 mb-2">&gt;&gt; TERMINAL_OUTPUT</div>
                    <div className="text-primary-fixed space-y-1">
                       <div>&gt; Cargando pesos neurales... [OK]</div>
                       <div>&gt; Entrenando modelo predictivo UI... [ACTIVO]</div>
                       <div className="animate-pulse">_</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
