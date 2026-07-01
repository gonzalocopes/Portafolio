import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AIAssistant from "@/components/AIAssistant";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <AIAssistant />
    </main>
  );
}
