import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SwachBandhu",
      description: "A next-generation civic social network bridging the gap between citizens and municipal authorities for a cleaner city.",
      tags: ["Civic Tech", "Social Network", "Web Platform"],
      github: "https://github.com/Sumanth069/SwachBandhu_Preview",
      colSpan: "md:col-span-2",
      gradient: "from-amber-100 to-orange-50"
    },
    {
      title: "SameYaar",
      description: "AI Social Platform with intelligent matchmaking system using recommendation logic and scalable frontend.",
      tags: ["React", "AI Matching", "Recommendation System"],
      github: "https://github.com/Sumanth069/SameYaar-Preview",
      colSpan: "md:col-span-1",
      gradient: "from-indigo-100 to-purple-50"
    },
    {
      title: "Samudra Sutra",
      description: "Fisheries Intelligence System for marine ecosystem tracking with real-time data flow.",
      tags: ["Real-time Data", "Dashboard", "AI"],
      github: "https://github.com/Sumanth069/Samudra-Sutra",
      colSpan: "md:col-span-1",
      gradient: "from-sky-100 to-blue-50"
    },
    {
      title: "AEGIS",
      description: "AI Surveillance System implementing real-time threat detection and automated alert system.",
      tags: ["Computer Vision", "Real-time Inference", "Alerts"],
      github: "https://github.com/Sumanth069/AEGIS",
      colSpan: "md:col-span-2",
      gradient: "from-rose-100 to-orange-50"
    },
    {
      title: "Sign Language Recognition",
      description: "Real-time gesture recognition using hand landmark detection (MediaPipe) and OpenCV.",
      tags: ["Python", "MediaPipe", "OpenCV"],
      github: "https://github.com/Sumanth069/Real-Time-Sign-Language-Recognition-using-HandLandmarks",
      colSpan: "md:col-span-3",
      gradient: "from-emerald-100 to-teal-50"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">
            Selected <span className="text-gradient">Projects.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl transition-colors duration-500">A showcase of my recent work in AI, Full-Stack Development, and intelligent systems.</p>
        </div>

        <div className="bento-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card rounded-3xl overflow-hidden group flex flex-col relative h-full min-h-[250px] ${project.colSpan}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:opacity-10 dark:group-hover:opacity-20`}></div>
              
              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <motion.a 
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-900 transition-all border border-slate-200 group"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white group-hover:fill-white">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </motion.a>
                </div>
                
                <p className="text-slate-500 dark:text-slate-400 mb-8 flex-grow leading-relaxed transition-colors duration-500">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm transition-colors duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Sumanth069"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all flex items-center gap-3 shadow-md"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            View More on GitHub
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
