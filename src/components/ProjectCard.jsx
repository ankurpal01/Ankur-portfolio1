import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ProjectCard({ project, index }) {
  const isPrimary = index % 2 === 0;
  const hoverBorderClass = isPrimary ? 'hover:border-primary/40' : 'hover:border-secondary/40';
  const tagColorClass = isPrimary ? 'text-primary' : 'text-secondary';
  const pulseColorClass = isPrimary ? 'bg-primary shadow-[0_0_10px_rgba(129,236,255,0.5)]' : 'bg-secondary shadow-[0_0_10px_rgba(196,127,255,0.5)]';
  const titleHoverClass = isPrimary ? 'group-hover:text-primary' : 'group-hover:text-secondary';
  const linkColorClass = isPrimary ? 'text-primary' : 'text-secondary';

  return (
    <motion.article 
      variants={itemVariants}
      className={`bg-surface-container-low rounded-xl overflow-hidden group hover-lift-glow border border-outline-variant/15 ${hoverBorderClass} flex flex-col relative`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-low opacity-60 z-10"></div>
      
      <div className="h-48 overflow-hidden relative">
        {project.image ? (
          <img 
            alt={project.title} 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out z-0" 
            src={project.image} 
          />
        ) : (
          <div className="absolute inset-0 bg-surface-container-highest flex items-center justify-center opacity-80 group-hover:scale-110 transition-transform duration-700 ease-out">
            <span className="material-symbols-outlined text-6xl text-primary/20">code_blocks</span>
          </div>
        )}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {project.tools.slice(0, 2).map((tool, i) => (
             <span key={i} className={`bg-surface-container-lowest/80 backdrop-blur-md ${i===0?tagColorClass:'text-on-surface'} font-body text-xs px-2 py-1 rounded-DEFAULT border border-outline-variant/20`}>
               {tool}
             </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-20 bg-surface-container-low">
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-2 h-2 rounded-full ${project.category.includes('Live') || project.category.includes('Active') ? 'animate-pulse' : ''} ${pulseColorClass}`}></div>
          <span className="text-xs font-body text-on-surface-variant uppercase tracking-wider">{project.category}</span>
        </div>
        
        <h3 className={`font-headline text-xl font-bold mb-2 ${titleHoverClass} transition-colors`}>{project.title}</h3>
        
        <p className="text-on-surface-variant font-body text-sm mb-6 flex-grow">
           {project.approach || project.problem}
        </p>
        
        <div className="flex justify-between items-center pt-4 border-t border-outline-variant/15">
          <span className="text-xs font-body text-on-surface-variant">{project.date}</span>
          <Link to={`/projects/${project.id}`} className={`${linkColorClass} font-body text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all`}>
             View Data <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
