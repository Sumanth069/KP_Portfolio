import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const greetings = ["Namaste", "Hello", "Hola", "Bonjour", "Ciao", "Konnichiwa"];

const Hero = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const cardRef = useRef(null);

  // 3D Tilt state (Zero lag)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Direct transform for instant responsiveness
  const rotateX = useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    animate(x, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(y, 0, { type: "spring", stiffness: 300, damping: 20 });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-[70vh] flex flex-col justify-center items-start relative pt-10">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="z-10 w-full max-w-4xl"
      >
        {/* Abdur's Box with 3D Backward Tilt on Hover */}
        <div style={{ perspective: "1500px" }} className="w-full">
          <motion.div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group p-8 rounded-3xl transition-colors duration-200 cursor-default bg-white dark:bg-[#151515] shadow-sm dark:shadow-md border-[3px] border-transparent hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Static Corner Borders */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-emerald-400 dark:border-emerald-500 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-emerald-400 dark:border-emerald-500 rounded-br-3xl"></div>
            
            {/* Inner Content */}
            <div className="relative z-10 text-2xl md:text-3xl font-medium tracking-tight leading-relaxed">
              <span className="text-slate-500 dark:text-slate-400 font-bold inline-block min-w-[120px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={greetingIndex}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    {greetings[greetingIndex]},
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="text-black dark:text-white font-extrabold mx-2 transition-colors duration-500">I'm KP Sumanth.</span>
              <span className="text-slate-500 dark:text-slate-400 font-medium transition-colors duration-500">I'm a </span>
              <TypeAnimation
                sequence={[
                  'Software Engineer.', 2000,
                  'AI/ML Enthusiast.', 2000,
                  'Tech Entrepreneur.', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-slate-500 dark:text-slate-400 font-medium"
              />
              
              <div className="flex flex-wrap gap-6 items-center pt-8">
                <a 
                  href="https://github.com/Sumanth069" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-black dark:text-white hover:opacity-70 transition-opacity"
                >
                  <FaGithub size={22} />
                  <span className="text-sm font-bold">Github</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/kp-sumanth-9306142a3/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-[#0A66C2] dark:text-[#3b82f6] hover:opacity-70 transition-opacity"
                >
                  <FaLinkedin size={22} />
                  <span className="text-sm font-bold text-black dark:text-white transition-colors duration-500">Linkedin</span>
                </a>

                <a 
                  href="https://www.instagram.com/kp_sumanth.007/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-pink-600 dark:text-pink-500 hover:opacity-70 transition-opacity"
                >
                  <FaInstagram size={22} />
                  <span className="text-sm font-bold text-black dark:text-white transition-colors duration-500">Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Minimal Bio Below Box */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 max-w-3xl"
        >
          <h2 className="text-2xl font-extrabold text-black dark:text-white mb-4 transition-colors duration-500">Self!</h2>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed mb-6 transition-colors duration-500">
            A software engineering student with a passion for building purposeful technology. By day, I build scalable <span className="font-bold text-black dark:text-white">software applications</span>, and beyond the classroom, I focus on creating meaningful digital solutions in AI and Machine Learning that leave a lasting impact.
          </p>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-500">
            My mission? To build tech that matters and help ideas rise above the noise — <span className="font-bold text-black dark:text-white">one line of code at a time.</span>
          </p>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
