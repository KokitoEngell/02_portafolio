import { motion } from 'motion/react';
import { Send, Fingerprint, Link as LinkIcon, Braces, Satellite, MapPin } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto w-full">
       <header className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <div className="flex items-center gap-2 text-primary-fixed mb-4">
              <span className="w-1.5 h-1.5 bg-primary-fixed rounded-full" />
              <span className="font-mono text-xs tracking-[0.3em] opacity-80 uppercase">SECURE_CHANNEL_OPEN</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-primary-fixed uppercase tracking-tighter">
               [ INICIAR_COMUNICACIÓN ]
            </h1>
            <div className="h-1.5 w-32 bg-primary-fixed mt-6 shadow-[0_0_15px_#c3f400]" />
          </div>
          
          <div className="md:text-right">
             <div className="flex items-center md:justify-end gap-2 text-tertiary-fixed-dim mb-4">
               <Satellite size={16} />
               <span className="font-mono text-xs tracking-[0.3em] opacity-80 uppercase">GEOLOCATION_ACTIVE</span>
             </div>
             <h2 className="font-display text-2xl md:text-4xl font-bold text-tertiary-fixed-dim opacity-70">
                [ DATOS_UBICACIÓN ]
             </h2>
          </div>
       </header>

       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-7">
             <div className="bg-surface-container/40 backdrop-blur-3xl border border-primary-fixed/30 p-10 relative clip-edges">
                <div className="absolute top-4 right-4 font-mono text-[10px] text-primary-fixed/40">SYS.REQ.77A</div>
                
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                   <div className="space-y-4 group">
                      <label className="font-display text-[10px] tracking-[0.2em] text-primary-fixed flex items-center gap-3">
                         <Fingerprint size={16} />
                         ID_USUARIO
                      </label>
                      <input 
                        type="text" 
                        placeholder="INGRESAR_IDENTIFICADOR..." 
                        className="w-full bg-transparent border-b-2 border-zinc-800 p-4 font-mono focus:border-primary-fixed focus:outline-none focus:shadow-[0_10px_20px_-15px_rgba(195,244,0,0.3)] transition-all placeholder:text-zinc-700 text-primary-fixed"
                      />
                   </div>

                   <div className="space-y-4 group">
                      <label className="font-display text-[10px] tracking-[0.2em] text-primary-fixed flex items-center gap-3">
                         <LinkIcon size={16} />
                         ENLACE_RETORNO
                      </label>
                      <input 
                        type="email" 
                        placeholder="PROTOCOLO@DOMINIO.EXT..." 
                        className="w-full bg-transparent border-b-2 border-zinc-800 p-4 font-mono focus:border-primary-fixed focus:outline-none focus:shadow-[0_10px_20px_-15px_rgba(195,244,0,0.3)] transition-all placeholder:text-zinc-700 text-primary-fixed"
                      />
                   </div>

                   <div className="space-y-4 group">
                      <label className="font-display text-[10px] tracking-[0.2em] text-primary-fixed flex items-center gap-3">
                         <Braces size={16} />
                         CARGA_DE_DATOS
                      </label>
                      <textarea 
                        rows={6}
                        placeholder="INICIAR_TRANSMISIÓN_DE_TEXTO..." 
                        className="w-full bg-transparent border-b-2 border-zinc-800 p-4 font-mono focus:border-primary-fixed focus:outline-none resize-none focus:shadow-[0_10px_20px_-15px_rgba(195,244,0,0.3)] transition-all placeholder:text-zinc-700 text-primary-fixed"
                      />
                   </div>

                   <div className="flex justify-between items-center pt-8">
                      <div className="flex gap-2">
                         <div className="w-8 h-2 bg-primary-fixed" />
                         <div className="w-4 h-2 bg-primary-fixed/40" />
                         <div className="w-2 h-2 bg-primary-fixed/10" />
                      </div>
                      
                      <button className="bg-transparent border-2 border-primary-fixed text-primary-fixed py-4 px-10 font-display font-black text-sm hover:bg-primary-fixed hover:text-black transition-all flex items-center gap-3 clip-edges shadow-[0_0_20px_rgba(195,244,0,0.1)] hover:shadow-[0_0_30px_rgba(195,244,0,0.3)] group">
                         TRANSMITIR_DATOS
                         <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                   </div>
                </form>
             </div>
          </div>

          {/* Map Side */}
          <div className="lg:col-span-5 h-full">
             <div className="bg-surface-container/40 backdrop-blur-2xl border border-tertiary-fixed-dim/30 p-1 flex flex-col h-full clip-edges shadow-2xl">
                <div className="relative flex-grow min-h-[350px] bg-zinc-950 overflow-hidden group">
                   <div className="absolute top-3 right-3 font-mono text-[10px] text-tertiary-fixed opacity-40 z-20">SAT.LOC.88B</div>
                   
                   <img 
                     src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Satellite Map" 
                     className="w-full h-full object-cover opacity-20 grayscale scale-110 group-hover:scale-100 transition-transform duration-[2000ms]"
                   />
                   
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_80%)]" />
                   
                   {/* Target Indicators */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-primary-fixed rounded-full shadow-[0_0_20px_#c3f400] animate-pulse" />
                      <div className="absolute -inset-8 border border-primary-fixed/30 rounded-full animate-ping opacity-20" />
                      <div className="absolute -inset-16 border border-zinc-800 rounded-full rotate-45" />
                   </div>

                   <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/80 backdrop-blur-md border border-zinc-800 p-4 font-mono text-xs text-tertiary-fixed">
                      <MapPin size={14} />
                      COORD: 35.6895° N, 139.6917° E
                   </div>
                </div>

                <div className="p-8 space-y-6">
                   <div className="flex justify-between border-b border-zinc-800 pb-3 font-display">
                      <span className="text-zinc-500 text-xs">SECTOR</span>
                      <span className="text-tertiary-fixed-dim tracking-[0.2em]">NEXUS_09</span>
                   </div>
                   <div className="flex justify-between border-b border-zinc-800 pb-3 font-display">
                      <span className="text-zinc-500 text-xs text-secondary-container">ESTADO_RED</span>
                      <span className="text-primary-fixed flex items-center gap-2">
                         <span className="w-2 h-2 bg-primary-fixed rounded-full animate-pulse shadow-[0_0_8px_#c3f400]" />
                         ÓPTIMO
                      </span>
                   </div>
                   <div className="flex justify-between font-display">
                      <span className="text-zinc-500 text-xs">ENCRIPTACIÓN</span>
                      <span className="text-tertiary-fixed-dim">AES-256-GCM</span>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};
