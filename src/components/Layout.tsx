import { ReactNode } from 'react';
import { motion } from 'motion/react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-background text-on-background font-sans selection:bg-primary-fixed selection:text-black">
      {/* Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-10 scanlines mix-blend-overlay" />
      
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary-fixed/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-secondary-container/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 crt-flicker min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
};
