/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout } from './components/Layout';
import { TopNav, SideNav } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ContactSection } from './sections/ContactSection';
import { AdminSection } from './sections/AdminSection';

export default function App() {
  const [currentTab, setTab] = useState('home');

  return (
    <Layout>
      <TopNav currentTab={currentTab} setTab={setTab} />
      <SideNav currentTab={currentTab} setTab={setTab} />

      <main className="flex-grow pt-24 lg:pl-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full"
          >
            {currentTab === 'home' && <HeroSection />}
            {currentTab === 'skills' && <SkillsSection />}
            {currentTab === 'experience' && <ExperienceSection />}
            {currentTab === 'contact' && <ContactSection />}
            {currentTab === 'admin' && <AdminSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="w-full py-10 px-10 flex flex-col md:flex-row justify-between items-center gap-6 bg-black/95 border-t border-primary-fixed/10 z-50 lg:pl-32">
        <div className="font-display text-[10px] tracking-[0.4em] uppercase text-zinc-600 font-black">
          © 2024 VICTOR_ROBLES_WEB // ALL_RIGHTS_RESERVED
        </div>
        <div className="flex gap-8">
          {['GITHUB', 'LINKEDIN', 'STACK_OVERFLOW', 'X_CORP'].map(social => (
            <a 
              key={social}
              href="#" 
              className="font-display text-[10px] tracking-[0.3em] uppercase text-zinc-600 hover:text-primary-fixed underline decoration-dotted decoration-zinc-800 hover:decoration-primary-fixed transition-all"
            >
              {social}
            </a>
          ))}
        </div>
      </footer>
    </Layout>
  );
}

