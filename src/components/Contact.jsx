import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-slate-200/50 dark:border-white/10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">
            Let's <span className="text-gradient">Connect.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto md:mx-0 transition-colors duration-500">
            I'm currently open to internships, research opportunities, collaborations, and product development roles.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="glass-card p-6 rounded-3xl flex items-center gap-5 group hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">Email</p>
                <a href="mailto:kpsumanth212@gmail.com" className="text-slate-900 dark:text-white font-bold hover:text-primary transition-colors">kpsumanth212@gmail.com</a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl flex items-center gap-5 group hover:border-secondary/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">Phone</p>
                <a href="tel:8660923391" className="text-slate-900 dark:text-white font-bold hover:text-secondary transition-colors">+91 8660923391</a>
              </div>
            </div>

            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <motion.a whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/kp-sumanth-9306142a3/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white dark:hover:text-white hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] hover:border-[#0A66C2] dark:hover:border-[#0A66C2] transition-all hover:-translate-y-1 shadow-sm">
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a whileTap={{ scale: 0.95 }} href="https://github.com/Sumanth069" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:bg-slate-900 dark:hover:bg-slate-700 hover:border-slate-900 dark:hover:border-slate-700 transition-all hover:-translate-y-1 shadow-sm group">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white group-hover:fill-white">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </motion.a>
            </div>
          </div>

          <div className="md:col-span-3 glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden bg-white dark:bg-[#111111]">
             {/* Background glow for form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6 relative z-10">
              {/* Web3Forms Configuration */}
              <input type="hidden" name="access_key" value="cb4f9432-c70b-480d-aef7-83bc5f632c46" />
              <input type="hidden" name="subject" value="New Submission from Portfolio" />
              <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">First Name</label>
                  <input type="text" name="First Name" required className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">Last Name</label>
                  <input type="text" name="Last Name" required className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">Email</label>
                <input type="email" name="Email" required className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">Message</label>
                <textarea rows="4" name="Message" required className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none shadow-sm" placeholder="Your message here..."></textarea>
              </div>
              <motion.button type="submit" whileTap={{ scale: 0.98 }} className="w-full py-4 px-6 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-md transform hover:-translate-y-1 mt-4">
                <Send size={18} /> Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
