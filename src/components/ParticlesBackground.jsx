import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParticlesBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
      
      {/* Light Mode Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-0 transition-opacity duration-1000"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>

      {/* Dark Mode Grid */}
      <div 
        className="absolute inset-0 opacity-0 dark:opacity-[0.05] transition-opacity duration-1000"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>

      {/* Animated Wave Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-30 dark:opacity-20 bg-emerald-300 dark:bg-emerald-900/50"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-30 dark:opacity-20 bg-sky-300 dark:bg-sky-900/50"
      />

      {/* Mouse Follower */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full filter blur-[80px] opacity-100 dark:opacity-80"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 25, mass: 0.5 }}
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(14,165,233,0.15) 40%, rgba(255,255,255,0) 70%)"
        }}
      />

      {/* Floating Particles/Dust */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticlesBackground;
