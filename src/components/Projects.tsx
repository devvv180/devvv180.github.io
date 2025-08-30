"use client";

const projects = [
  {
    title: "D’deepfake Analyzer",
    demo: "https://studio--veritas-vision-7vgtz.us-central1.hosted.app/",
    description: [
      "AI-enabled Deepfake Detection System.",
      "Processes 300+ frames/job with CV models.",
      "90%+ accuracy, 40% lower latency."
    ]
  },
  {
    title: "D’Nifty.ai",
    demo: "https://studio--stockwise-predictor-b3gny.us-central1.hosted.app/",
    description: [
      "AI-driven Stock Forecasting & Analytics Platform.",
      "Full-stack Next.js + Tailwind + React app.",
      "68% prediction accuracy on 10k+ records/sec."
    ]
  },
  {
    title: "D’NeonSpend.ai",
    demo: "https://studio--neonspend.us-central1.hosted.app/",
    description: [
      "OCR-powered Smart Expense Tracking App.",
      "92%+ parsing accuracy on 100+ receipts.",
      "Delivered instant insights via dashboards."
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="border rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm mb-4 list-disc pl-4">
              {proj.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <a
              href={proj.demo}
              target="_blank"
              rel="noreferrer"
              className="text-violet-600 hover:underline"
            >
              Live Demo →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
