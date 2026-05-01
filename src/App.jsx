import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Scroll to top on refresh/mount
    window.scrollTo(0, 0);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden transition-colors duration-500 selection:bg-emerald-200 selection:text-emerald-900 dark:selection:bg-emerald-500/30 dark:selection:text-emerald-200">
      
      <ParticlesBackground />

      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="text-center py-10 text-slate-500 text-sm border-t border-slate-200 mt-20 bg-white/50 backdrop-blur-md">
        <p>© {new Date().getFullYear()} KP Sumanth. Built with React & Tailwind.</p>
      </footer>
    </div>
  )
}

export default App
