import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-slate-200/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">
            About <span className="text-gradient">Me.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-10 rounded-3xl group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 dark:from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3 relative z-10 transition-colors duration-500">
              <Award className="text-primary" /> Career Objective
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed relative z-10 transition-colors duration-500">
              Highly motivated Computer Science Engineering student with strong foundations in Java, Python, and Machine Learning. I have hands-on experience building AI models, dynamic web applications, and real-time inference systems. Aspiring to build scalable, intelligent software solutions while continuously learning and contributing to innovative, technology-driven teams.
            </p>
          </div>

          <div className="glass-card p-10 rounded-3xl group relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-sky-50 dark:from-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3 relative z-10 transition-colors duration-500">
              <GraduationCap className="text-secondary" /> Education
            </h3>
            <div className="space-y-6 relative z-10">
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-500">Bachelor of Engineering</h4>
                <p className="text-primary font-medium">Computer Science and Engineering</p>
                <p className="text-slate-500 dark:text-slate-400 mt-2 transition-colors duration-500">Sai Vidya Institute of Technology, Bangalore</p>
              </div>
              <div className="flex justify-between items-center bg-white dark:bg-white/5 p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm transition-colors duration-500">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold mb-1 transition-colors duration-500">Status</p>
                  <p className="font-bold text-slate-900 dark:text-white transition-colors duration-500">6th Semester</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold mb-1 transition-colors duration-500">CGPA</p>
                  <p className="font-bold text-secondary text-2xl">8.9</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 text-right">Class of 2027</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
