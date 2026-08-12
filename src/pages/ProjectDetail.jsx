import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="flex-grow pt-32 pb-24 px-8 max-w-screen-xl mx-auto w-full text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-cyan-400 font-semibold hover:underline">← Return to Projects</Link>
      </div>
    );
  }

  const hasLiveLink = project.liveLink && project.liveLink !== '#' && project.liveLink !== 'https://github.com/ankurpal01';
  const isLookerStudio = project.embedLink || (project.liveLink && (project.liveLink.includes('datastudio.google.com') || project.liveLink.includes('lookerstudio.google.com')));

  return (
    <motion.main 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="flex-grow pt-28 pb-20 px-4 sm:px-8 max-w-screen-xl mx-auto w-full"
    >
      {/* Back Button */}
      <Link 
        to="/projects" 
        className="inline-flex items-center gap-2 text-neutral-400 hover:text-cyan-400 font-body text-sm font-semibold mb-8 transition-colors group"
      >
        <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">arrow_back</span>
        <span>Back to Projects</span>
      </Link>

      {/* Clean Header */}
      <header className="mb-10 bg-neutral-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-neutral-800 shadow-xl">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-md text-xs font-semibold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 uppercase tracking-wider">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-md text-xs font-semibold bg-neutral-800 text-neutral-400 border border-neutral-700">
            {project.date}
          </span>
          {project.role && (
            <span className="px-3 py-1 rounded-md text-xs font-semibold bg-neutral-800 text-neutral-300 border border-neutral-700">
              Role: {project.role}
            </span>
          )}
        </div>

        <h1 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4 leading-tight">
          {project.title}
        </h1>

        <p className="font-body text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mb-8">
          {project.approach || project.problem}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pt-2 border-t border-neutral-800">
          <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mr-2">Tools Used:</span>
          {project.tools.map((tool, index) => (
            <span key={index} className="px-3 py-1 rounded-lg text-xs font-medium bg-neutral-800 text-neutral-200 border border-neutral-700">
              {tool}
            </span>
          ))}
        </div>

        {/* Links / Action Buttons */}
        <div className="flex flex-wrap gap-4">
          {project.liveLink && project.liveLink !== '#' && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noreferrer"
              className="bg-cyan-400 hover:bg-cyan-300 text-neutral-950 font-headline text-sm font-bold px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(0,227,253,0.3)] transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">open_in_new</span>
              <span>Open Live App</span>
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noreferrer"
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-headline text-sm font-bold px-6 py-3 rounded-xl border border-neutral-700 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">code</span>
              <span>GitHub Repository</span>
            </a>
          )}
        </div>
      </header>

      {/* Embedded Live Web App or Looker Studio Preview */}
      {hasLiveLink && (
        <section className="mb-12">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h2 className="font-headline font-bold text-xl text-white">
              {isLookerStudio ? "Live Interactive Dashboard" : "Live Application Preview"}
            </h2>
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noreferrer" 
              className="text-cyan-400 hover:underline text-xs font-bold uppercase tracking-wider flex items-center gap-1"
            >
              <span>Launch Fullscreen App</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>

          <div className="w-full h-[600px] sm:h-[700px] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl">
            <iframe
              src={project.embedLink || (isLookerStudio ? project.liveLink.replace('/reporting/', '/embed/reporting/') : project.liveLink)}
              title={project.title}
              className="w-full h-full border-0"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {/* Simple Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Problem & Objectives */}
        <div className="bg-neutral-900/60 rounded-2xl p-6 sm:p-8 border border-neutral-800 flex flex-col justify-between">
          <div>
            <h3 className="font-headline font-bold text-lg text-white mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-cyan-400">help_outline</span>
              Problem & Objective
            </h3>
            <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed">
              {project.problem}
            </p>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-neutral-900/60 rounded-2xl p-6 sm:p-8 border border-neutral-800 flex flex-col justify-between">
          <div>
            <h3 className="font-headline font-bold text-lg text-white mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-purple-400">insights</span>
              Key Insights & Outcome
            </h3>
            <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed">
              {project.insights}
            </p>
          </div>
        </div>
      </div>

      {/* Clean Impact Cards */}
      {project.impact && (
        <section className="bg-neutral-900/60 rounded-2xl p-6 sm:p-8 border border-neutral-800">
          <h3 className="font-headline font-bold text-lg text-white mb-6">Key Results & Impact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-neutral-950/80 rounded-xl p-5 border border-neutral-800 text-center">
              <p className="font-headline font-extrabold text-3xl text-cyan-400 mb-1">{project.impact.efficiency}</p>
              <p className="font-body text-xs text-neutral-400 font-semibold uppercase tracking-wider">Efficiency Gain</p>
            </div>
            <div className="bg-neutral-950/80 rounded-xl p-5 border border-neutral-800 text-center">
              <p className="font-headline font-extrabold text-3xl text-purple-400 mb-1">{project.impact.costAvoided}</p>
              <p className="font-body text-xs text-neutral-400 font-semibold uppercase tracking-wider">Outcome</p>
            </div>
            <div className="bg-neutral-950/80 rounded-xl p-5 border border-neutral-800 text-center">
              <p className="font-headline font-extrabold text-3xl text-white mb-1">{project.impact.uptime}</p>
              <p className="font-body text-xs text-neutral-400 font-semibold uppercase tracking-wider">Uptime / Reliability</p>
            </div>
          </div>
        </section>
      )}
    </motion.main>
  );
}
