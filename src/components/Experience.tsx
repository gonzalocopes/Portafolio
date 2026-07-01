"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, GraduationCap } from "lucide-react";
import { useState } from "react";

export default function Experience() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const experiences = [
    {
      company: "Workgroup",
      role: "Desarrollador Full Stack - Soporte WebServices",
      date: "Sep 2023 – Mar 2026",
      type: "work",
      achievements: [
        "Desarrollo de aplicaciones web y móviles con React, Next.js, Python (FastAPI), Java y PHP.",
        "Desarrollo e integración de APIs REST y WebServices.",
        "Migración, actualización y refactorización de aplicaciones.",
        "Automatización de procesos con Python y Selenium.",
        "Despliegues con Docker, Kubernetes y Microsoft Azure.",
        "Soporte en producción, análisis de logs y monitoreo de servicios.",
        "Guardias pasivas y resolución de incidentes.",
        "Optimización de rendimiento en frontend, backend y bases de datos."
      ]
    },
    {
      company: "Universidad Nacional Guillermo Brown",
      role: "Tecnicatura en Programación",
      date: "2022 - 2025 | Graduado",
      type: "education",
      achievements: [
        "Carrera finalizada.",
        "Formación intensiva en desarrollo de software, algoritmos, bases de datos y gestión de proyectos tecnológicos."
      ]
    },
    {
      company: "Udemy",
      role: "Desarrollo Web Completo con HTML, CSS, JavaScript y React.js",
      date: "2023",
      type: "education",
      achievements: [
        "Curso completado con éxito."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-4 mb-16 justify-end">
          <div className="flex-1 h-px bg-gradient-to-l from-[var(--color-neon-purple)]/50 to-transparent"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-right">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-l from-[var(--color-neon-purple)] to-[var(--color-neon-blue)]">& Education</span>
          </h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12 pb-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 group"
              onMouseEnter={() => setHoveredNode(idx)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Timeline Node */}
              <div className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 transition-all duration-300 ${hoveredNode === idx ? "bg-[var(--color-neon-purple)] border-[var(--color-neon-purple)] shadow-[0_0_15px_var(--color-neon-purple)] scale-125" : "bg-black border-gray-600"}`}></div>

              <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden group-hover:border-[var(--color-neon-purple)]/50 transition-colors duration-500">
                {/* Glow effect that follows mouse can be implemented here, simplified for now with CSS */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-neon-purple)]/0 to-[var(--color-neon-blue)]/0 group-hover:from-[var(--color-neon-purple)]/5 group-hover:to-[var(--color-neon-blue)]/5 transition-colors duration-500"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                      {exp.type === "education" ? (
                        <GraduationCap className="w-5 h-5 text-[var(--color-neon-blue)]" />
                      ) : (
                        <Briefcase className="w-5 h-5 text-[var(--color-neon-blue)]" />
                      )}
                      {exp.role}
                    </h3>
                    <h4 className="text-xl text-gray-400 font-mono">{exp.company}</h4>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-[var(--color-neon-purple)] font-semibold shrink-0">
                    <Calendar className="w-4 h-4" />
                    {exp.date}
                  </div>
                </div>

                <ul className="relative z-10 space-y-3">
                  {exp.achievements.map((ach, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <ChevronRight className="w-5 h-5 text-[var(--color-neon-blue)] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
