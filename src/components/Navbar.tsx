"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="#" className="text-xl font-bold tracking-tighter">
          GC<span className="text-[var(--color-neon-purple)]">.</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-[var(--color-neon-blue)] transition-colors">
            About
          </Link>
          <Link href="#experience" className="hover:text-[var(--color-neon-blue)] transition-colors">
            Experience
          </Link>
          <Link href="#skills" className="hover:text-[var(--color-neon-blue)] transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-[var(--color-neon-blue)] transition-colors">
            Projects
          </Link>
        </div>
        <Link
          href="#contact"
          className="px-4 py-2 rounded-full border border-[var(--color-neon-purple)] hover:bg-[var(--color-neon-purple)]/10 transition-colors text-sm font-semibold"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
