import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projectsData, type ProjectData } from "../../data/portfolio";
import { ProjectModal } from "../ProjectModal";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative z-10 w-full max-w-5xl mx-auto">
      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-stone-50/60 dark:bg-stone-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-stone-200/50 dark:border-stone-800/50 shadow-sm"
      >
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Selected Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className={`group p-6 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 transition-colors hover:border-stone-400 dark:hover:border-stone-500 flex flex-col h-full cursor-pointer ${i === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
            >
              {project.image && (
                <div className="mb-6 w-full h-48 md:h-64 overflow-hidden rounded-xl bg-stone-200 dark:bg-stone-800">
                  <img 
                    src={project.image} 
                    alt={`${project.title} Screenshot`} 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <div className="flex gap-3 text-stone-500">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                      <GithubIcon />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.youtube && (
                    <a href={project.youtube} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                      <YoutubeIcon />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm font-mono text-stone-700 dark:text-stone-300 mb-4 font-medium">{project.duration}</p>
              <p className="text-stone-800 dark:text-stone-200 mb-6 flex-grow font-medium leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-stone-200 dark:bg-stone-800 rounded text-xs font-bold text-stone-800 dark:text-stone-200">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
