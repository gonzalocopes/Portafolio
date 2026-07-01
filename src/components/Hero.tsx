"use client";

import { motion } from "framer-motion";
import { Terminal, Download, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Software Engineer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-neon-purple)] rounded-full mix-blend-screen filter blur-[128px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--color-neon-blue)] rounded-full mix-blend-screen filter blur-[128px] animate-blob" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-[128px] animate-blob" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-[var(--color-neon-purple)]/30"
        >
          <Terminal size={16} className="text-[var(--color-neon-blue)]" />
          <span className="text-sm font-mono text-gray-300">System Ready. Welcome.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Gonzalo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-blue)]">Copes</span>
        </motion.h1>

        <div className="h-12 mb-8">
          <p className="text-xl md:text-3xl font-mono text-gray-400">
            &gt; {text}<span className="inline-block w-3 h-6 ml-1 bg-[var(--color-neon-blue)] animate-blink"></span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-12 font-mono"
        >
          {['React', 'Next.js', 'Python', 'Java', 'DevOps', 'AI'].map((tech, i) => (
            <span key={tech} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-4 rounded-full bg-[var(--color-neon-purple)] text-white font-bold hover:shadow-[0_0_20px_var(--color-neon-purple)] transition-all duration-300 transform hover:-translate-y-1">
            Explorar Proyectos
          </a>
          <a href="https://wa.me/5491136424020" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full glass border border-[var(--color-neon-blue)] text-white font-bold hover:bg-[var(--color-neon-blue)]/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 transform hover:-translate-y-1">
            Hablar Conmigo
          </a>
          <a href="/archivos/CV Dev Gonzalo Copes.pdf" download className="px-8 py-4 rounded-full glass border border-gray-500 text-white font-bold hover:bg-gray-800/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
            Descargar CV <Download size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center gap-6 mt-8"
        >
          <a href="https://wa.me/5491136424020" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-green-500/20 hover:text-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 text-gray-400">
            <MessageCircle size={24} />
          </a>
          <a href="https://linkedin.com/in/gonzalo-copes7a9277205" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-blue-500/20 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 text-gray-400">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/gonzalocopes" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-white/20 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 text-gray-400">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
