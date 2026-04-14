import { motion } from "framer-motion";
import { aboutData } from "../../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-stone-50/60 dark:bg-stone-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-stone-200/50 dark:border-stone-800/50 shadow-sm"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">About & Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-stone-800 dark:text-stone-200 leading-relaxed mb-6 font-medium">
                {aboutData.description}
              </p>
              <div className="space-y-4">
                <h3 className="font-semibold text-xl">Education</h3>
                <div>
                  <p className="font-bold">{aboutData.education.university}</p>
                  <p className="text-stone-700 dark:text-stone-300 text-sm font-medium">{aboutData.education.degree} • CGPA: {aboutData.education.cgpa}</p>
                  <p className="text-stone-600 dark:text-stone-400 text-sm font-medium">{aboutData.education.duration}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutData.skills.map((skillGroup, i) => (
                <motion.div 
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="font-bold mb-3 border-b border-stone-200 dark:border-stone-800 pb-2">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((item) => (
                      <li key={item} className="text-stone-800 dark:text-stone-200 text-sm font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
