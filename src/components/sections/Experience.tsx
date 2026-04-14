import { motion } from "framer-motion";
import { experienceData } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10 w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-stone-50/60 dark:bg-stone-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-stone-200/50 dark:border-stone-800/50 shadow-sm"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">Experience</h2>

        <div className="space-y-12">
          {experienceData.map((exp, i) => (
            <motion.div 
              key={i}
              className="relative pl-8 md:pl-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="hidden md:block absolute left-0 top-2 w-3 h-3 bg-stone-900 dark:bg-stone-100 rounded-full" />
              <div className="md:pl-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold">{exp.company}</h3>
                  <span className="text-stone-700 dark:text-stone-300 font-mono text-sm font-medium">{exp.duration}</span>
                </div>
                <h4 className="text-lg font-bold text-stone-800 dark:text-stone-200 mb-4">
                  {exp.role} &bull; {exp.location}
                </h4>
                <ul className="space-y-3">
                  {exp.details.map((detail, j) => (
                    <li key={j} className="text-stone-800 dark:text-stone-200 relative pl-5 font-medium leading-relaxed">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-stone-500 dark:bg-stone-500 rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
