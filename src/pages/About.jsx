import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow pt-32 pb-24 px-4 sm:px-8 max-w-screen-xl mx-auto w-full relative z-10"
    >
      {/* Hero Section */}
      <section className="mb-24 relative">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-3xl">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-on-surface mb-6 leading-tight">
            <span className="gradient-text-primary">My Journey</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            A chronological map of data structures optimized, insights generated, and architectural milestones achieved.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 transform md:-translate-x-1/2 z-0 hidden md:block"></div>
        
        <div className="space-y-16 md:space-y-32 relative z-10">
          {/* Milestone 1 */}
          <div className="relative flex flex-col md:flex-row items-center group">
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full gradient-bg-primary transform -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(129,236,255,0.5)] md:block hidden"></div>
            <div className="w-full md:w-1/2 md:pr-16 flex justify-start md:justify-end mb-4 md:mb-0 pl-12 md:pl-0">
              <div className="text-left md:text-right">
                <span className="font-headline text-2xl font-bold text-primary tracking-tighter">2023 - Present</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-16 pl-12 md:pl-0">
              <div className="glass-panel p-8 rounded-xl neon-shadow-secondary hover:scale-[1.02] hover:border-outline-variant/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Lead Data Analyst</h3>
                <h4 className="font-body text-md font-medium text-secondary mb-4 uppercase tracking-widest">Nexus Dynamics</h4>
                <ul className="space-y-3 font-body text-on-surface-variant">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary text-sm mt-1 mr-3">arrow_right</span>
                    <span>Engineered a real-time data pipeline processing 50TB+ daily, reducing latency by 45%.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary text-sm mt-1 mr-3">arrow_right</span>
                    <span>Spearheaded the migration to a unified data mesh architecture across 4 global regions.</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-xs font-body rounded-sm">Apache Kafka</span>
                  <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-xs font-body rounded-sm">Snowflake</span>
                  <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-xs font-body rounded-sm">dbt</span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative flex flex-col md:flex-row-reverse items-center group">
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-surface border-2 border-primary transform -translate-x-1/2 z-20 md:block hidden group-hover:bg-primary transition-colors duration-300"></div>
            <div className="w-full md:w-1/2 md:pl-16 flex justify-start mb-4 md:mb-0 pl-12 md:pl-0">
              <div className="text-left">
                <span className="font-headline text-2xl font-bold text-secondary tracking-tighter">2020 - 2023</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pr-16 pl-12 md:pl-0">
              <div className="glass-panel p-8 rounded-xl neon-shadow-primary hover:scale-[1.02] hover:border-outline-variant/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Senior Data Analyst</h3>
                <h4 className="font-body text-md font-medium text-primary mb-4 uppercase tracking-widest">Quantico Systems</h4>
                <ul className="space-y-3 font-body text-on-surface-variant">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary text-sm mt-1 mr-3">arrow_right</span>
                    <span>Developed strategic dashboards for customer retention, resulting in a 15% decrease in churn.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary text-sm mt-1 mr-3">arrow_right</span>
                    <span>Automated reporting workflows, saving the analytics team 20+ hours weekly.</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-xs font-body rounded-sm">Python</span>
                  <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-xs font-body rounded-sm">Tableau</span>
                  <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-xs font-body rounded-sm">SQL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative flex flex-col md:flex-row items-center group">
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-surface border-2 border-primary transform -translate-x-1/2 z-20 md:block hidden group-hover:bg-primary transition-colors duration-300"></div>
            <div className="w-full md:w-1/2 md:pr-16 flex justify-start md:justify-end mb-4 md:mb-0 pl-12 md:pl-0">
              <div className="text-left md:text-right">
                <span className="font-headline text-2xl font-bold text-on-surface-variant tracking-tighter">2018 - 2020</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-16 pl-12 md:pl-0">
              <div className="glass-panel p-8 rounded-xl hover:scale-[1.02] hover:border-outline-variant/40 transition-all duration-300 relative overflow-hidden bg-surface-container-high/50">
                <div className="absolute inset-0 bg-surface-variant/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Data Analyst</h3>
                <h4 className="font-body text-md font-medium text-tertiary mb-4 uppercase tracking-widest">Synapse Core</h4>
                <ul className="space-y-3 font-body text-on-surface-variant">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-tertiary text-sm mt-1 mr-3">arrow_right</span>
                    <span>Designed interactive dashboards for executive leadership, streamlining KPI monitoring.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-tertiary text-sm mt-1 mr-3">arrow_right</span>
                    <span>Conducted A/B testing analysis that optimized conversion rates by 8%.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-32 text-center relative z-10">
        <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Initialize Next Phase?</h2>
        <button className="font-headline font-bold text-sm bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 ease-out shadow-[0_0_20px_rgba(129,236,255,0.4)] inline-flex items-center gap-2">
          Establish Connection
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </section>
    </motion.main>
  );
}
