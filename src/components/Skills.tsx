"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 90 },
  { name: "FastAPI", level: 80 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "TensorFlow", level: 70 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Git/GitHub", level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <motion.div
                className="bg-violet-600 h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
