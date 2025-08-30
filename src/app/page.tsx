"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";

// 👉 Update with your real links
const LINKS = {
  github: "https://github.com/devvv180",
  linkedin: "https://www.linkedin.com/in/YOUR-HANDLE",
  email: "mailto:hello@devjain.xyz",
  resume: "/assets/Dev_Jain_Resume.pdf",
};

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-white/70 dark:bg-gray-900/70 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">Dev Jain</h1>
          <nav className="flex gap-4 text-sm font-medium">
            <a href="#projects" className="hover:text-violet-600">Projects</a>
            <a href="#about" className="hover:text-violet-600">About</a>
            <a href="#skills" className="hover:text-violet-600">Skills</a>
            <a href="#experience" className="hover:text-violet-600">Experience</a>
            <a href="#contact" className="hover:text-violet-600">Contact</a>
          </nav>
          <div className="flex gap-3">
            <a href={LINKS.github} target="_blank" rel="noreferrer">
              <Github className="w-5 h-5 hover:text-violet-600" />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5 hover:text-violet-600" />
            </a>
            <a href={LINKS.email}>
              <Mail className="w-5 h-5 hover:text-violet-600" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="top"
        className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10"
      >
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold"
          >
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
              Dev Jain
            </span>
          </motion.h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Fresher software engineer building AI + web projects. I love clean
            UIs, fast backends, and shipping.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-violet-600 text-white flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <img
            src="/assets/images/profile-placeholder.png"
            alt="Dev Jain"
            className="rounded-2xl border shadow-lg w-full max-w-sm mx-auto"
          />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300">
          I’m a fresher focused on AI + web. I enjoy building projects that
          combine clean design with practical use. Currently exploring
          real-time inference, content authenticity, and LLM tooling.
        </p>
      </section>

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Experience */}
      <Timeline />

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>
          Email me at{" "}
          <a href={LINKS.email} className="text-violet-600">
            hello@devjain.xyz
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Dev Jain
      </footer>
    </div>
  );
}
