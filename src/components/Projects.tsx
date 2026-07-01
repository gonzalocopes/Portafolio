"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import React, { useRef } from "react";

const ProjectCard = ({ project, idx }: { project: any; idx: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
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
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative glass-panel rounded-2xl overflow-hidden h-full flex flex-col group cursor-pointer border border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-purple)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: "translateZ(0)" }}></div>
        
        {/* Image Placeholder */}
        <div className="h-48 bg-black/50 relative overflow-hidden flex items-center justify-center border-b border-white/5" style={{ transform: "translateZ(20px)" }}>
          <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${project.img || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] to-transparent"></div>
        </div>

        <div className="p-6 flex flex-col flex-grow" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--color-neon-blue)] transition-colors">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 flex-grow">{project.desc}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t: string, i: number) => (
              <span key={i} className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-[var(--color-neon-purple)] border border-[var(--color-neon-purple)]/20">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
              <Code className="w-4 h-4" /> Code
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-[var(--color-neon-blue)] transition-colors" onClick={(e) => e.stopPropagation()}>
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "IA Documentos (RAG)",
      desc: "Sistema inteligente para consulta y análisis de documentos utilizando Inteligencia Artificial (LLMs, RAG) permitiendo búsquedas semánticas.",
      tech: ["Python", "LangChain", "OpenAI", "Vector DB"],
      github: "#",
      demo: "#",
      img: ""
    },
    {
      title: "Gestión de Ventas - Saphirus",
      desc: "Sistema integral de punto de venta y gestión de stock desarrollado a medida para un local Saphirus.",
      tech: ["React", "Node.js", "Express", "SQL"],
      github: "#",
      demo: "#",
      img: ""
    },
    {
      title: "Stockeate",
      desc: "App mobile de stock que escanea productos directamente en el celular, lee y genera remitos en tiempo real conectado a múltiples sucursales.",
      tech: ["Next.js", "React Native", "Tailwind"],
      github: "#",
      demo: "https://stockeate-mocha.vercel.app/",
      img: "/imagenes/stockeate.png"
    },
    {
      title: "Gomesama – E‑commerce",
      desc: "Tienda online de snacks y bebidas importadas con carrito, categorías, stock en tiempo real y pedidos directos por WhatsApp.",
      tech: ["React", "Node.js", "WhatsApp API"],
      github: "#",
      demo: "https://gomesama.com/",
      img: "/imagenes/gomesama.png"
    },
    {
      title: "GoPedidos",
      desc: "Gestiona tus pedidos directo al WhatsApp. Solución ideal para locales gastronómicos.",
      tech: ["React", "WhatsApp API"],
      github: "#",
      demo: "https://gopedidos-psi.vercel.app/",
      img: "/imagenes/gopedidos.png"
    },
    {
      title: "Farmacias de Turno Alte Brown",
      desc: "Buscador simple y rápido de farmacias de turno por localidad y fecha. Disponible como web app y app Android.",
      tech: ["React", "React Native", "API"],
      github: "#",
      demo: "https://farmaturno.com/",
      img: "/imagenes/farmacia.png"
    },
    {
      title: "Servicios Papelera",
      desc: "E-commerce desarrollado con TiendaNube para una papelera. Diseño optimizado con integración de Mercado Pago y Andreani.",
      tech: ["TiendaNube", "Integraciones API"],
      github: "#",
      demo: "https://serviciospapelera.mitiendanube.com/",
      img: "/imagenes/serviciospapelera.png"
    },
    {
      title: "CrunchyBurger",
      desc: "Plantilla de sistema de pedidos para WhatsApp para comercios y locales gastronómicos.",
      tech: ["HTML", "CSS", "JS"],
      github: "#",
      demo: "https://magozitsolutions.com/gopedidos/crunchyburger",
      img: "/imagenes/crunchyburger.png"
    },
    {
      title: "Inmobiliaria Ventas",
      desc: "Plataforma moderna para la compra y venta de propiedades exclusivas.",
      tech: ["React", "CSS", "Frontend"],
      github: "#",
      demo: "https://inmobiliaria-ventas.netlify.app/",
      img: "/imagenes/inmobiliaria.png"
    },
    {
      title: "Dulce Coquitas",
      desc: "Tienda online de pastelería con catálogo visual y pedidos vía WhatsApp.",
      tech: ["HTML", "CSS", "JS"],
      github: "#",
      demo: "https://dulcecoquitas.netlify.app/",
      img: "/imagenes/dulce_new.png"
    },
    {
      title: "Web Publicitaria",
      desc: "Landing page moderna para un plomero con contacto directo por WhatsApp.",
      tech: ["Landing Page", "CSS"],
      github: "#",
      demo: "https://hernan-heredia-plomero-gasista.netlify.app/",
      img: "/imagenes/tarjeta_presentacion.png"
    },
    {
      title: "Automatización de Tickets",
      desc: "Script en Python para agilizar la gestión de tickets técnicos y reducir errores manuales.",
      tech: ["Python", "Selenium"],
      github: "https://github.com/gonzalocopes/automizacion",
      demo: "#",
      img: "/imagenes/automatizacion.png"
    },
    {
      title: "Punto de Venta",
      desc: "App en Java para registrar productos y ventas en un comercio con control local de stock.",
      tech: ["Java", "Desktop App"],
      github: "https://github.com/gonzalocopes/puntodeventa",
      demo: "#",
      img: "/imagenes/java.png"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-blue)]">Projects</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-neon-blue)]/50 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
