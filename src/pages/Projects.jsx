import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

export default function Projects() {
  const [filter, setFilter] = useState('All Vectors');

  const filters = ['All Vectors', 'Python', 'SQL', 'Power BI', 'Machine Learning'];

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'All Vectors') return true;
    if (filter === 'Machine Learning') return project.tools.includes('ML');
    return project.tools.includes(filter);
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

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
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Data <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary-container">Trajectory</span>
        </h1>
        <p className="text-on-surface-variant font-body text-lg md:text-xl max-w-2xl">
          A structured showcase of complex data pipelines, strategic dashboards, and actionable insights extracted from raw telemetry.
        </p>
      </header>

      {/* Filter Navigation */}
      <div className="flex flex-wrap gap-4 mb-12">
        {filters.map((f) => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`font-body font-medium text-sm px-5 py-2 rounded-sm border border-outline-variant/15 transition-all ${
              filter === f 
                ? 'bg-secondary-container text-on-secondary-container shadow-[0_0_15px_rgba(129,236,255,0.1)]'
                : 'bg-surface-variant text-on-surface hover:bg-surface-container-high'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </motion.main>
  );
}
