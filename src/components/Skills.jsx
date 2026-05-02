import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C++", "JavaScript", "HTML/CSS"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["Computer Vision", "CNNs", "Image Classification", "Model Training", "Hand Landmark Detection"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Tailwind CSS", "OpenCV", "TensorFlow/Keras", "MediaPipe"]
    },
    {
      title: "Tools & Ecosystems",
      skills: ["Git/GitHub", "VS Code", "Hugging Face", "IBM Cloud", "IoT", "Real-Time Systems"]
    }
  ];

  return (
    <section id="skills" className="py-24 border-t border-slate-200/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">
            Technical <span className="text-gradient">Arsenal.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto md:mx-0 transition-colors duration-500">A curated list of technologies I use to build scalable, intelligent software.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white transition-colors duration-500">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:border-primary/50 dark:hover:border-primary/50 hover:text-primary dark:hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
