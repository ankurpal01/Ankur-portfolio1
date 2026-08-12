import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Skills() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow pt-32 pb-24 px-8 max-w-screen-2xl mx-auto w-full"
    >
      {/* Header Section */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary pulse-dot"></div>
          <span className="text-primary font-headline text-sm tracking-widest uppercase">System Capabilities</span>
        </div>
        <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
          Technical <br/> <span className="neon-gradient-text">Expertise.</span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl font-body leading-relaxed">
          An orchestrated collection of analytical instruments and computational languages. Designed for high-fidelity data extraction, transformation, and visualization.
        </p>
      </header>

      {/* Professional Skill Matrix Layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        
        {/* Core Syntax */}
        <motion.section variants={itemVariants} className="bg-surface-container-low rounded-xl p-8 ambient-glow relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
          <div className="absolute inset-0 border border-outline-variant/15 rounded-xl group-hover:border-outline-variant/40 transition-colors"></div>
          <h2 className="font-headline text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">terminal</span>
            Core Syntax
          </h2>
          <div className="space-y-4">
            <div className="bg-surface-container-highest p-4 rounded-lg flex justify-between items-center border border-outline-variant/10">
              <div className="flex items-center gap-3">
                <span className="font-headline font-bold text-on-surface">Python</span>
              </div>
              <span className="text-xs font-label text-primary uppercase tracking-widest">Advanced</span>
            </div>
            <div className="bg-surface-container-highest p-4 rounded-lg flex justify-between items-center border border-outline-variant/10">
              <div className="flex items-center gap-3">
                <span className="font-headline font-bold text-on-surface">SQL</span>
              </div>
              <span className="text-xs font-label text-secondary uppercase tracking-widest">Advanced</span>
            </div>
            <div className="bg-surface-container-highest p-4 rounded-lg flex justify-between items-center border border-outline-variant/10">
              <div className="flex items-center gap-3">
                <span className="font-headline font-bold text-on-surface">R</span>
              </div>
              <span className="text-xs font-label text-primary-dim uppercase tracking-widest">Proficient</span>
            </div>
            <div className="bg-surface-container-highest p-4 rounded-lg flex justify-between items-center border border-outline-variant/10">
              <div className="flex items-center gap-3">
                <span className="font-headline font-bold text-on-surface">Bash</span>
              </div>
              <span className="text-xs font-label text-tertiary uppercase tracking-widest">Familiar</span>
            </div>
          </div>
        </motion.section>

        {/* Visualization & BI */}
        <motion.section variants={itemVariants} className="bg-surface-container rounded-xl p-8 ambient-glow relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
          <div className="absolute inset-0 border border-outline-variant/15 rounded-xl group-hover:border-outline-variant/40 transition-colors"></div>
          <h2 className="font-headline text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">monitoring</span>
            Visualization
          </h2>
          <div className="space-y-4">
            <div className="bg-surface-container-highest p-4 rounded-lg flex justify-between items-center border border-outline-variant/10">
              <span className="font-headline font-bold text-on-surface">Tableau</span>
              <span className="text-xs font-label text-primary uppercase tracking-widest">Expert</span>
            </div>
            <div className="bg-surface-container-highest p-4 rounded-lg flex justify-between items-center border border-outline-variant/10">
              <span className="font-headline font-bold text-on-surface">Power BI</span>
              <span className="text-xs font-label text-secondary uppercase tracking-widest">Advanced</span>
            </div>
            <div className="bg-surface-container-highest p-4 rounded-lg flex justify-between items-center border border-outline-variant/10">
              <span className="font-headline font-bold text-on-surface">Looker</span>
              <span className="text-xs font-label text-tertiary uppercase tracking-widest">Proficient</span>
            </div>
            <div className="bg-surface-container-highest p-4 rounded-lg flex justify-between items-center border border-outline-variant/10">
              <span className="font-headline font-bold text-on-surface">D3.js</span>
              <span className="text-xs font-label text-primary-dim uppercase tracking-widest">Familiar</span>
            </div>
          </div>
        </motion.section>

        {/* Analytics Stack & Libraries */}
        <motion.section variants={itemVariants} className="bg-surface-container-highest rounded-xl p-8 relative overflow-hidden group">
          <div className="absolute inset-0 border border-outline-variant/15 rounded-xl group-hover:border-outline-variant/40 transition-colors"></div>
          <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary">category</span>
            Libraries &amp; Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-surface-variant rounded-md text-on-surface font-body text-sm border border-outline-variant/30 hover:border-primary/50 transition-colors">Pandas</span>
            <span className="px-3 py-1.5 bg-surface-variant rounded-md text-on-surface font-body text-sm border border-outline-variant/30 hover:border-primary/50 transition-colors">Matplotlib</span>
            <span className="px-3 py-1.5 bg-surface-variant rounded-md text-on-surface font-body text-sm border border-outline-variant/30 hover:border-primary/50 transition-colors">DAX</span>
            <span className="px-3 py-1.5 bg-surface-variant rounded-md text-on-surface font-body text-sm border border-outline-variant/30 hover:border-primary/50 transition-colors">Power Query</span>
            <span className="px-3 py-1.5 bg-surface-variant rounded-md text-on-surface font-body text-sm border border-outline-variant/30 hover:border-primary/50 transition-colors">Jupyter Notebooks</span>
            <span className="px-3 py-1.5 bg-surface-variant rounded-md text-on-surface font-body text-sm border border-outline-variant/30 hover:border-primary/50 transition-colors">Advanced Excel</span>
            <span className="px-3 py-1.5 bg-surface-variant rounded-md text-on-surface font-body text-sm border border-outline-variant/30 hover:border-primary/50 transition-colors">Git / GitHub</span>
            <span className="px-3 py-1.5 bg-surface-variant rounded-md text-on-surface font-body text-sm border border-outline-variant/30 hover:border-primary/50 transition-colors">Data Warehousing</span>
          </div>
          
          <div className="mt-8 pt-6 border-t border-outline-variant/20">
            <p className="font-body text-sm text-on-surface-variant italic">
              "Focusing on data cleaning, statistical analysis, and generating actionable business insights."
            </p>
          </div>
        </motion.section>
      </motion.div>
    </motion.main>
  );
}
