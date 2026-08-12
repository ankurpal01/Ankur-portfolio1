import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-2xl transition-all duration-500 shadow-[0_0_40px_rgba(165,51,255,0.05)] border-none">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-primary-container flex items-center justify-center neon-shadow">
            <span className="material-symbols-outlined text-on-primary-fixed text-lg">data_usage</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-headline font-bold text-on-surface tracking-widest leading-none">ANKUR PAL</span>
            <span className="text-[10px] font-body text-primary uppercase tracking-widest mt-1">Data Analyst</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => {
            const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`font-headline tracking-tighter uppercase font-bold text-sm hover:text-white transition-colors hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] px-3 py-2 rounded-lg scale-105 transition-transform duration-300 ease-out ${
                    isActive ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-neutral-400'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a href="/Ankur_Pal_Resume.pdf" download>
             <button className="border border-outline-variant/30 text-on-surface px-6 py-2.5 rounded-full font-headline font-bold text-sm tracking-wide hover:bg-surface-variant/40 hover:border-primary/50 transition-all duration-300 ease-out flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">download</span>
                Resume
             </button>
          </a>
          <Link to="/contact">
             <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed px-6 py-2.5 rounded-full font-headline font-bold text-sm tracking-wide hover:shadow-[0_0_15px_rgba(129,236,255,0.3)] hover:scale-105 transition-all duration-300 ease-out">
                Let's Connect
             </button>
          </Link>
        </div>

        {/* Mobile Header Right Actions */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button 
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-outline-variant/20 shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-6">
              {navLinks.map((link) => {
                const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
                return (
                  <li key={link.name} className="py-3 border-b border-outline-variant/10 last:border-0">
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block font-headline tracking-widest uppercase font-bold text-sm ${isActive ? 'text-cyan-400' : 'text-neutral-400'}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-6 pb-2 flex flex-col gap-4">
                 <a href="/Ankur_Pal_Resume.pdf" download onClick={() => setIsMobileMenuOpen(false)}>
                   <button className="w-full border border-outline-variant/30 text-on-surface px-6 py-3 rounded-full font-headline font-bold text-sm tracking-wide flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">download</span> Resume
                   </button>
                 </a>
                 <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                   <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed px-6 py-3 rounded-full font-headline font-bold text-sm tracking-wide">
                      Let's Connect
                   </button>
                 </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
