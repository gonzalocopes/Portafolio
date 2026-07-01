"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "React Native", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Bootstrap", "WordPress", "Expo"],
      color: "var(--color-neon-blue)"
    },
    {
      title: "Backend",
      skills: ["Python", "FastAPI", "Django", "Java", "Spring Boot", "Node.js", "NestJS", "PHP", "Express", "REST APIs", "WebServices"],
      color: "var(--color-neon-purple)"
    },
    {
      title: "IA",
      skills: ["LLMs", "OpenAI API", "RAG", "LangChain", "LangGraph", "Embeddings", "Qdrant", "AI Agents", "n8n", "Prompt Engineering", "Semantic Search", "Document Processing"],
      color: "#ec4899" // pink-500
    },
    {
      title: "DevOps",
      skills: ["Docker", "Docker Compose", "Kubernetes", "Azure", "AWS (EC2, S3)", "Git", "GitHub", "CI/CD", "Linux"],
      color: "#34d399" // emerald-400
    },
    {
      title: "Databases",
      skills: ["SQL Server", "MySQL", "PostgreSQL", "SQLite"],
      color: "#fbbf24" // amber-400
    },
    {
      title: "Tools",
      skills: ["Postman", "SoapUI", "Selenium", "VS Code", "antigravity", "Eclipse"],
      color: "#9ca3af" // gray-400
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)]">Arsenal</span>
          </h2>
          <p className="text-gray-400 font-mono">My toolkit for building scalable software and AI solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl border-t-[3px] group hover:bg-white/[0.02] transition-colors"
              style={{ borderTopColor: cat.color }}
            >
              <h3 className="text-2xl font-bold text-white mb-6" style={{ color: cat.color }}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 transition-all duration-300 hover:scale-105 cursor-default group-hover:border-white/20"
                    style={{
                      '--hover-color': cat.color,
                    } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = cat.color;
                      e.currentTarget.style.boxShadow = `0 0 10px ${cat.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
