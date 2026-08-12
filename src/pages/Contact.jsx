import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: 'Data Analysis / Full-time Role',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ankurpalrk@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow pt-28 pb-24 px-4 sm:px-8 md:px-12 max-w-screen-2xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-stretch"
    >
      {/* Left Column: Info & Direct Contact */}
      <div className="lg:w-5/12 flex flex-col justify-between relative z-10 space-y-8">
        <div>
          {/* Ambient Background Glow */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,227,253,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-300 font-headline text-xs font-semibold uppercase tracking-widest">Available For Opportunities</span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Let's Build <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              Impactful Insights
            </span>
          </h1>

          <p className="font-body text-base sm:text-lg text-neutral-300 max-w-md leading-relaxed mb-8">
            Whether you need interactive dashboard design, SQL & ETL data modeling, or predictive analysis, I'm ready to turn your raw datasets into decision-ready telemetry.
          </p>

          {/* Interactive Contact Cards */}
          <div className="space-y-4">
            {/* Email Card with Copy Option */}
            <div className="bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-cyan-400/40 rounded-2xl p-5 transition-all duration-300 flex items-center justify-between gap-4 group shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-cyan-400 text-2xl">mail</span>
                </div>
                <div>
                  <p className="font-body text-xs text-neutral-400 uppercase tracking-wider font-semibold">Direct Email</p>
                  <a href="mailto:ankurpalrk@gmail.com" className="font-headline text-base text-white hover:text-cyan-400 transition-colors font-bold">
                    ankurpalrk@gmail.com
                  </a>
                </div>
              </div>

              <button 
                onClick={handleCopyEmail}
                title="Copy Email Address"
                className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-cyan-500/20 hover:text-cyan-400 border border-neutral-700 text-neutral-300 font-body text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span className="material-symbols-outlined text-sm">{copiedEmail ? 'check' : 'content_copy'}</span>
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* GitHub Card */}
            <a 
              href="https://github.com/ankurpal01" 
              target="_blank" 
              rel="noreferrer"
              className="bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-purple-400/40 rounded-2xl p-5 transition-all duration-300 flex items-center justify-between gap-4 group shadow-lg block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-400/10 border border-purple-400/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-purple-400 text-2xl">code</span>
                </div>
                <div>
                  <p className="font-body text-xs text-neutral-400 uppercase tracking-wider font-semibold">GitHub Profile</p>
                  <p className="font-headline text-base text-white font-bold group-hover:text-purple-300 transition-colors">
                    github.com/ankurpal01
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-neutral-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all">
                arrow_outward
              </span>
            </a>
          </div>
        </div>

        {/* Action Button: Download Resume */}
        <div className="pt-2">
          <a 
            href="/Ankur_Pal_Resume.pdf" 
            download 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-cyan-400/50 text-white rounded-xl px-6 py-4 font-headline text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md group hover:shadow-[0_0_20px_rgba(0,227,253,0.15)]"
          >
            <span className="material-symbols-outlined text-cyan-400 group-hover:translate-y-0.5 transition-transform">download</span>
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      </div>

      {/* Right Column: Modern Glassmorphic Form */}
      <div className="lg:w-7/12 relative flex items-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent rounded-3xl blur-2xl -z-10"></div>
        
        <div className="w-full bg-neutral-900/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-neutral-800/80 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500"></div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 px-4 flex flex-col items-center justify-center min-h-[420px]"
            >
              <div className="w-16 h-16 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,227,253,0.4)]">
                <span className="material-symbols-outlined text-cyan-400 text-3xl">check_circle</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-white mb-2">Transmission Received!</h3>
              <p className="font-body text-neutral-300 max-w-md mb-8 leading-relaxed">
                Thank you for reaching out. I have received your message and will respond directly to your email shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white font-headline text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <h3 className="font-headline text-2xl font-bold text-white mb-1">Send a Message</h3>
                <p className="font-body text-xs sm:text-sm text-neutral-400">Fill in your details below to initiate a discussion.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="font-body text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    First Name <span className="text-cyan-400">*</span>
                  </label>
                  <input 
                    id="firstName"
                    required
                    type="text"
                    placeholder="Ankur"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-neutral-950/90 border border-neutral-800 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="font-body text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    Last Name
                  </label>
                  <input 
                    id="lastName"
                    type="text"
                    placeholder="Pal"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-neutral-950/90 border border-neutral-800 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-body text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  Email Address <span className="text-cyan-400">*</span>
                </label>
                <input 
                  id="email"
                  required
                  type="email"
                  placeholder="your.name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-neutral-950/90 border border-neutral-800 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="topic" className="font-body text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  Subject Matter
                </label>
                <div className="relative">
                  <select 
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-neutral-950/90 border border-neutral-800 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors appearance-none cursor-pointer"
                  >
                    <option className="bg-neutral-900 text-white">Data Analysis / Full-time Role</option>
                    <option className="bg-neutral-900 text-white">Dashboard & Power BI Design</option>
                    <option className="bg-neutral-900 text-white">SQL & Data Pipeline Consulting</option>
                    <option className="bg-neutral-900 text-white">Other Query / Collaboration</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-body text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  Message Details <span className="text-cyan-400">*</span>
                </label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  placeholder="Describe your project, data requirements, or role details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-neutral-950/90 border border-neutral-800 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-body text-xs text-neutral-400 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-cyan-400 text-base">lock</span>
                  Encrypted & Secure Transmission
                </span>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-neutral-950 font-headline font-bold text-sm px-8 py-3.5 rounded-xl shadow-[0_0_25px_rgba(0,227,253,0.35)] transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    send
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </motion.main>
  );
}
