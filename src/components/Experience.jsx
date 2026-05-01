import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI & Machine Learning Intern",
      company: "Elevate Labs",
      date: "Jan 2026 – Apr 2026",
      details: [
        "Developing real-time AI & ML projects aligned with current industry standards.",
        "Executing data preprocessing, feature engineering, and model training pipelines.",
        "Designing and optimizing intelligent systems under expert mentorship."
      ]
    },
    {
      title: "Java Programming Intern",
      company: "CODTECH IT Solutions",
      date: "Nov 2025 – Jan 2026",
      details: [
        "Completed a 12-week intensive Java Programming internship focusing on hands-on development.",
        "Strengthened core Object-Oriented Programming (OOP) and control structure architectures.",
        "Delivered real-world programming assignments to improve algorithmic logic and debugging."
      ]
    },
    {
      title: "Co-Founder & CTO",
      company: "Naandi",
      date: "2024 - Present",
      details: [
        "Leading the technical strategy for a startup focused on community-driven sustainability solutions.",
        "Represented the startup and showcased technical products at Startup Mahakumbh 2025."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 border-t border-slate-200/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">
            Work <span className="text-gradient">Experience.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 transition-colors duration-500 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 top-8 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-primary z-10 hidden md:flex items-center justify-center shadow-md transition-colors duration-500">
                <Briefcase size={16} className="text-primary" />
              </div>

              <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16'}`}>
                <div className="glass-card p-8 rounded-3xl relative">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-500">{exp.title}</h3>
                  <div className={`flex flex-col md:flex-row md:items-center gap-3 mb-6 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="text-secondary font-medium">{exp.company}</span>
                    <span className="text-xs font-bold tracking-wider uppercase bg-white dark:bg-white/10 text-slate-500 dark:text-slate-300 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 shadow-sm transition-colors duration-500">
                      {exp.date}
                    </span>
                  </div>
                  <ul className={`text-slate-500 dark:text-slate-400 text-sm space-y-3 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left transition-colors duration-500`}>
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 items-start md:inline-flex md:text-left w-full">
                        <span className="text-primary mt-0.5 shrink-0">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
