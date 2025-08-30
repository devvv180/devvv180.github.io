"use client";

import { Briefcase } from "lucide-react";

const experiences = [
  {
    year: "Jun 2025 – Aug 2025",
    title: "Software and Data Intern",
    company: "HOTBIT Infotech Pvt Ltd (Indore, On-site)",
    description: [
      "Automated validation of 10k+ records with Python, cutting errors 85%.",
      "Built log utility for 1,500+ entries, reducing detection time 20%.",
      "Created 6 dashboards (Matplotlib/Excel) to track weekly performance trends."
    ],
  },
  {
    year: "Mar 2022 – Apr 2023",
    title: "Head of Software & IT Domain",
    company: "IMUN – International Model United Nations (Remote)",
    description: [
      "Built responsive website (HTML/CSS/JS), boosting event engagement by 30%.",
      "Deployed optimized site with faster load time, improving participant satisfaction.",
      "Led outreach & coordination, driving 20% higher registrations."
    ],
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
      <div className="relative border-l-2 border-violet-500 dark:border-violet-400">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-violet-500 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              <Briefcase className="w-4 h-4 text-white" />
            </span>
            <h3 className="text-lg font-semibold">
              {exp.title}{" "}
              <span className="text-violet-600">@ {exp.company}</span>
            </h3>
            <time className="block text-sm text-gray-500">{exp.year}</time>
            <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc pl-4">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
