import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface-container-lowest pt-20 pb-10 border-t border-outline-variant/20 mt-24">
      {/* Abstract Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-dim opacity-10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary-dim opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <h2 className="font-headline text-3xl font-extrabold text-on-surface mb-2 tracking-tight">
              ANKUR PAL
            </h2>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full pulse-dot"></span>
              <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">Data Analyst</span>
            </div>
            
            <p className="font-body text-on-surface-variant max-w-sm mb-8 leading-relaxed">
              Transforming complex datasets into actionable business intelligence. Discovering the hidden narratives inside raw numbers.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:ankurpalrk@gmail.com" title="Email" className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(129,236,255,0.2)] border border-outline-variant/30 text-on-surface">
                <span className="material-symbols-outlined">mail</span>
              </a>
              <a href="https://github.com/ankurpal01" target="_blank" rel="noreferrer" title="GitHub" className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center hover:bg-secondary/20 hover:text-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(196,127,255,0.2)] border border-outline-variant/30 text-on-surface">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="font-headline text-sm font-bold text-on-surface uppercase tracking-widest mb-6 border-b border-outline-variant/20 pb-2 inline-block">
              Explore
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-body flex items-center gap-2 group">
                  <span className="w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-4"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-body flex items-center gap-2 group">
                  <span className="w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-4"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-body flex items-center gap-2 group">
                  <span className="w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-4"></span>
                  Expertise
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="font-headline text-sm font-bold text-on-surface uppercase tracking-widest mb-6 border-b border-outline-variant/20 pb-2 inline-block">
              Connect
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/contact" className="text-on-surface-variant hover:text-secondary transition-colors text-sm font-body flex items-center gap-2 group">
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                  Send a Message
                </Link>
              </li>
              <li className="mt-6">
                <div className="p-4 rounded-xl bg-surface-container-high border border-outline-variant/30 mt-4 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <p className="text-xs text-on-surface-variant mb-1 font-label uppercase tracking-widest">Availability</p>
                  <p className="text-sm font-bold text-on-surface">Open for Opportunities</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-outline-variant/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant text-[10px] tracking-widest font-label uppercase">
            © {new Date().getFullYear()} Ankur Pal. All rights reserved.
          </p>
          <p className="text-on-surface-variant text-[10px] tracking-widest font-label uppercase flex items-center gap-1">
            Engineered with <span className="text-error material-symbols-outlined text-[12px] animate-pulse">favorite</span> for Data
          </p>
        </div>
      </div>
    </footer>
  );
}
