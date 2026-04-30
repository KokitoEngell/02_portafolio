import { motion } from 'motion/react';
import { Terminal, Settings, Menu, LogOut, Code, User, BookOpen, Cpu, Power } from 'lucide-react';

interface NavProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

export const TopNav = ({ currentTab, setTab }: NavProps) => {
  const tabs = [
    { id: 'home', label: 'INICIO' },
    { id: 'skills', label: 'HABILIDADES' },
    { id: 'experience', label: 'EXPERIENCIA' },
    { id: 'contact', label: 'CONTACTO' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-black/90 backdrop-blur-xl border-b border-primary-fixed/30 shadow-[0_0_15px_rgba(195,244,0,0.1)]">
      <div className="text-xl font-black text-primary-fixed drop-shadow-[0_0_8px_rgba(204,255,0,0.6)] font-display tracking-tight">
        VICTOR_ROBLES.SYS
      </div>

      <div className="hidden md:flex items-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setTab(tab.id)}
            className={`font-display text-sm tracking-tighter px-3 py-1 transition-all duration-300 relative ${
              currentTab === tab.id
                ? 'text-primary-fixed border-b-2 border-primary-fixed'
                : 'text-zinc-500 hover:text-primary-fixed hover:bg-primary-fixed/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-4 text-primary-fixed mr-4 opacity-70">
          <Terminal size={18} className="cursor-pointer hover:text-white" />
          <Settings size={18} className="cursor-pointer hover:text-white" />
        </div>
        <button 
           onClick={() => setTab('admin')}
           className="border border-primary-fixed text-primary-fixed px-4 py-1 text-sm font-display hover:bg-primary-fixed hover:text-black transition-all clip-edges"
        >
          ACCESO_ADMIN
        </button>
      </div>
    </nav>
  );
};

export const SideNav = ({ currentTab, setTab }: NavProps) => {
  const items = [
    { id: 'home', icon: User },
    { id: 'skills', icon: BookOpen },
    { id: 'experience', icon: Cpu },
    { id: 'contact', icon: Terminal },
    { id: 'admin', icon: Code },
  ];

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-full w-20 bg-black/95 border-r border-primary-fixed/20 flex-col items-center py-20 z-40">
      <div className="mb-12 font-display text-primary-fixed font-black -rotate-90 whitespace-nowrap tracking-widest text-[10px] opacity-70 uppercase">
        V_ROBLES.SYS
      </div>
      <div className="flex flex-col gap-8 flex-grow justify-center w-full">
        {items.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`w-full py-4 flex justify-center transition-all ${
              currentTab === id
                ? 'bg-primary-fixed text-black'
                : 'text-primary-fixed/40 hover:text-primary-fixed hover:bg-primary-fixed/5'
            }`}
          >
            <Icon size={24} />
          </button>
        ))}
      </div>
      <button className="mt-auto py-4 text-primary-fixed/40 hover:text-red-500">
        <Power size={24} />
      </button>
    </aside>
  );
};
