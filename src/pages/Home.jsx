import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedChart from '../components/AnimatedChart';
import heroImg from '../assets/Ankur-pic.jpeg';

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow pt-24 relative z-10"
    >
      {/* Hero Section */}
      <section className="min-h-[819px] flex items-center justify-center relative px-4 md:px-8 py-12 md:py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-secondary-dim opacity-10 blur-[100px] animate-float"></div>
          <div className="absolute top-[30%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-primary-dim opacity-10 blur-[120px] animate-float-delayed"></div>
        </div>
        
        <div className="max-w-screen-xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-surface-variant/40 backdrop-blur-md px-4 py-2 rounded-full ghost-border">
              <span className="pulse-dot"></span>
              <span className="text-primary font-label text-sm uppercase tracking-widest font-medium">System Online • Ready for Queries</span>
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-on-surface">
              Transforming Raw Data into <br/>
              <span className="gradient-text">Business Decisions.</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              I am Ankur Pal, a Data Analyst specializing in deep-dive analytics, dashboard design, and synthesizing complex datasets into clear, actionable, cinematic insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link to="/projects">
                <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(129,236,255,0.2)]">
                   View Projects
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-transparent border border-outline-variant/30 text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-variant/50 transition-colors duration-300 ghost-border flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(129,236,255,0.15)] hover:-translate-y-1">
                  <span>Let's Connect</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </Link>
            </div>
          </div>
          
          {/* Glassmorphic Visual/Photo Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-variant/40 backdrop-blur-3xl rounded-3xl ghost-border overflow-hidden relative shadow-[0_0_60px_rgba(165,51,255,0.1)] group">
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-error/50"></div>
                  <div className="w-2 h-2 rounded-full bg-tertiary-container/50"></div>
                  <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                </div>
                <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest">ANKUR_PAL.RAW</span>
              </div>
              
              <div className="absolute inset-4 mt-12 rounded-2xl overflow-hidden bg-surface-container-lowest ghost-border">
                <img 
                  alt="Ankur Pal" 
                  className="w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 filter grayscale hover:grayscale-0" 
                  src={heroImg} 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-surface-container-lowest to-transparent h-32 z-10 pointer-events-none"></div>
              </div>
            </div>
            
            <div className="absolute -right-8 top-1/4 bg-surface-container-high/80 backdrop-blur-md p-4 rounded-xl ghost-border animate-float shadow-lg">
              <span className="material-symbols-outlined text-primary text-3xl">query_stats</span>
            </div>
            <div className="absolute -left-4 bottom-1/4 bg-surface-container-high/80 backdrop-blur-md p-4 rounded-xl ghost-border animate-float-delayed shadow-lg">
              <span className="material-symbols-outlined text-secondary text-3xl">database</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Data Visual Section - Hidden on Mobile */}
      <section className="hidden md:block py-12 md:py-16 relative">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative z-10">
          <div className="bg-surface-container-low rounded-3xl p-2 md:p-8 ghost-border shadow-[0_0_40px_rgba(165,51,255,0.05)]">
             <div className="min-h-[600px] h-auto lg:h-[700px] w-full rounded-2xl overflow-hidden">
               <AnimatedChart />
             </div>
          </div>
        </div>
      </section>

      {/* Tools / Tech Stack Section */}
      <section className="py-16 md:py-24 bg-surface-container relative">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface mb-4">Core Competencies</h2>
            <p className="font-body text-on-surface-variant max-w-2xl mx-auto">The ecosystem of tools powering my data analysis.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Tool 1 */}
            <div className="bg-surface-container-high p-8 rounded-2xl ghost-border flex flex-col items-center justify-center gap-4 hover-lift-glow group cursor-default shadow-[0_0_20px_rgba(0,0,0,0.2)]">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(129,236,255,0.2)] transition-shadow">
                <span className="material-symbols-outlined text-primary text-4xl">code</span>
              </div>
              <span className="font-headline font-bold text-on-surface tracking-wide">Python</span>
            </div>
            {/* Tool 2 */}
            <div className="bg-surface-container-high p-8 rounded-2xl ghost-border flex flex-col items-center justify-center gap-4 hover-lift-glow group cursor-default shadow-[0_0_20px_rgba(0,0,0,0.2)]">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(196,127,255,0.2)] transition-shadow">
                <span className="material-symbols-outlined text-secondary text-4xl">storage</span>
              </div>
              <span className="font-headline font-bold text-on-surface tracking-wide">SQL</span>
            </div>
            {/* Tool 3 */}
            <div className="bg-surface-container-high p-8 rounded-2xl ghost-border flex flex-col items-center justify-center gap-4 hover-lift-glow group cursor-default shadow-[0_0_20px_rgba(0,0,0,0.2)]">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(129,236,255,0.2)] transition-shadow">
                <span className="material-symbols-outlined text-primary text-4xl">table_chart</span>
              </div>
              <span className="font-headline font-bold text-on-surface tracking-wide">Excel</span>
            </div>
            {/* Tool 4 */}
            <div className="bg-surface-container-high p-8 rounded-2xl ghost-border flex flex-col items-center justify-center gap-4 hover-lift-glow group cursor-default shadow-[0_0_20px_rgba(0,0,0,0.2)]">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(196,127,255,0.2)] transition-shadow">
                <span className="material-symbols-outlined text-secondary text-4xl">insert_chart</span>
              </div>
              <span className="font-headline font-bold text-on-surface tracking-wide">Power BI</span>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
