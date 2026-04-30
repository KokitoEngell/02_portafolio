import { motion } from 'motion/react';
import { Download, Mail } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-[819px] flex flex-col justify-center relative px-6 md:px-20 max-w-7xl mx-auto w-full">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full border border-primary-fixed/20 grid grid-cols-12 gap-8">
          <div className="border-r border-primary-fixed/10 h-full" />
          <div className="border-r border-primary-fixed/10 h-full hidden md:block" />
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-4xl relative z-10"
      >
        <div className="absolute -left-6 top-0 bottom-0 w-1 bg-primary-fixed shadow-[0_0_10px_#c3f400]" />
        <div className="pl-6 md:pl-10">
          <div className="font-mono text-primary-fixed mb-4 tracking-widest uppercase flex items-center gap-3">
            <span className="w-2 h-2 bg-primary-fixed animate-pulse" />
            INIT_SEQUENCE: ACCESSED
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 uppercase tracking-tighter">
            SOBRE_MÍ <span className="text-primary-fixed animate-pulse">_</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed border-l-2 border-zinc-800 pl-6">
            Desarrollador full-stack con mentalidad arquitectónica. Especializado en la construcción de sistemas robustos, 
            escalables y visualmente impactantes. Mi código es mi interfaz con el mundo físico.
          </p>

          <div className="flex flex-wrap gap-6">
            <button className="bg-primary-fixed text-black font-display font-bold py-4 px-8 flex items-center gap-3 hover:shadow-[0_0_20px_#c3f400] transition-all clip-edges group">
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              DESCARGAR_CV
            </button>
            <button className="border-2 border-zinc-700 text-zinc-400 font-display font-bold py-4 px-8 flex items-center gap-3 hover:border-primary-fixed hover:text-primary-fixed transition-all clip-edges">
              <Mail size={18} />
              CONTACTO_SYS
            </button>
          </div>
        </div>
      </motion.div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="font-mono text-[10px] text-zinc-600 space-y-1 leading-none text-right">
          <div>SYS.OP: VR_CORE_V9</div>
          <div>MEM_ALLOC: 4096TB</div>
          <div>NET_STAT: SECURE</div>
          <div className="pt-4">[DATABLOCK_A1]</div>
          <div>0x00FF 0x11AA</div>
          <div>0x22BB 0x33CC</div>
        </div>
      </div>
    </section>
  );
};
