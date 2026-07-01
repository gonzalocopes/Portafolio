"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, BrainCircuit, Rocket } from "lucide-react";

export default function AboutMe() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  const cards = [
    {
      icon: <Code2 className="w-8 h-8 text-[var(--color-neon-blue)]" />,
      title: "Frontend",
      desc: "React, Next.js, creando UIs modernas y performantes."
    },
    {
      icon: <Database className="w-8 h-8 text-[var(--color-neon-purple)]" />,
      title: "Backend & Cloud",
      desc: "Python, Java, PHP con despliegues en Azure usando Docker y Kubernetes."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-pink-500" />,
      title: "AI Integration",
      desc: "LLMs, RAG, LangChain, agentes e integraciones de IA generativa."
    },
    {
      icon: <Rocket className="w-8 h-8 text-emerald-400" />,
      title: "Automatización",
      desc: "Scripting con Python, Selenium y bots para optimizar procesos."
    }
  ];

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div style={{ opacity, y }} className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)]">Me</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-neon-blue)]/50 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Soy un Desarrollador Full Stack con <span className="text-white font-semibold glow-text">3 años de experiencia</span> desarrollando aplicaciones web y móviles para empresas y clientes particulares.
              </p>
              <p>
                Mi enfoque se centra en crear software escalable, integrando <span className="text-[var(--color-neon-blue)] font-mono">tecnologías modernas</span> y <span className="text-[var(--color-neon-purple)] font-mono">sistemas de IA</span> que aportan valor real.
              </p>
              <p>
                Tengo experiencia sólida en el desarrollo de APIs REST, WebServices, automatización de procesos complejos y despliegue de infraestructura cloud mediante metodologías ágiles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-[var(--color-neon-blue)]/50 group"
                >
                  <div className="mb-4 p-3 rounded-xl bg-white/5 inline-block group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-white font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-400">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
