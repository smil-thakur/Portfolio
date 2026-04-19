export const heroData = {
  name: "Smil Raj Thakur",
  title: "Software Engineer",
  description:
    "Specializing in microfrontend architecture and scalable UI systems. Shipped production features across Angular and React. Enjoy owning problems end-to-end and building things that are fast, maintainable, and well-structured.",
  links: {
    github: "https://github.com/smil-thakur",
    linkedin: "https://linkedin.com/in/smil-raj-thakur",
    email: "mailto:smil.raj.thakur@gmail.com",
  },
};

export const aboutData = {
  description:
    "I am a passionate software engineer focused on building robust and scalable frontend architectures. With a strong foundation in modern web technologies, I love delving into microfrontends, AI integrations, and crafting seamless user experiences.",
  education: {
    university: "Adani Institute of Infrastructure Engineering",
    degree: "B.E., ICT",
    cgpa: "9.10 / 10",
    duration: "May 2020 – Jun 2024",
  },
  skills: [
    {
      category: "Core",
      items: ["C++", "TypeScript", "JavaScript", "Microfrontends", "Python"],
    },
    { category: "Frontend", items: ["Angular", "React.js"] },
    {
      category: "Platform & API",
      items: ["REST APIs", "Node.js services", "FastAPI"],
    },
    {
      category: "AI & Tools",
      items: ["Gemini API", "Agno", "Firebase", "Supabase", "MongoDB"],
    },
  ],
};

export const experienceData = [
  {
    company: "Zeus Learning",
    role: "Software Engineer",
    location: "Mumbai, Maharashtra",
    duration: "Jan 2024 – Present",
    details: [
      "Architected the Exit Card microfrontend using Angular and Module Federation, delivering isolated assignment creation and student execution environments.",
      "Owned the end-to-end student-teacher flow: teachers create and assign exit cards, students attempt in the player, and teachers evaluate responses.",
      "Designing scalable Item Bank system on React + OpenEdX; authors curate reusable question libraries with configurable random selection for student previews.",
      "Led Angular 16 → 18 migration across a large-scale codebase; Sass automation scripts cut upgrade effort by 10%.",
    ],
  },
];

export interface ProjectData {
  title: string;
  tech: string[];
  duration: string;
  description: string;
  github: string;
  link?: string;
  youtube?: string;
  image?: string;
  /** Raw GitHub URL to fetch the README.md content at runtime */
  readmeUrl: string;
}

export const projectsData: ProjectData[] = [
  {
    title: "Socially",
    tech: ["Angular", "Python", "Gemini API", "Firebase", "Tailwind CSS"],
    duration: "Jan 2025 – Present",
    description:
      "A modern, full-featured AI-first social profile management platform. Socially empowers users to generate and manage professional profiles, social links, analytics, resumes, and bento grids with an intuitive and responsive interface.",
    github: "https://github.com/smil-thakur/Socially",
    link: "https://smil-thakur.github.io/Socially/bento-viewer/smil.raj.thakur@gmail.com",
    image:
      "https://github.com/user-attachments/assets/cd882a06-185f-4543-895a-96e080f3adaf",
    readmeUrl:
      "https://raw.githubusercontent.com/smil-thakur/Socially/main/README.md",
  },
  {
    title: "Boardroom",
    tech: ["React", "FastAPI", "WebSockets", "Zustand", "Firebase"],
    duration: "April 2026 – Present",
    description:
      "An AI-powered startup war room where users pitch ideas to a virtual C-suite. Features an asynchronous multi-agent Conductor pattern, stateful WebSocket logic for real-time debates, and a glassmorphic React dashboard.",
    github: "https://github.com/smil-thakur/Boardroom.frontend",
    image:
      "https://raw.githubusercontent.com/smil-thakur/Boardroom.frontend/main/readme_assets/welcome-screen.png",
    readmeUrl:
      "https://raw.githubusercontent.com/smil-thakur/Boardroom.frontend/main/README.md",
  },
  {
    title: "Clippy – Smart Search Butler",
    tech: ["Python", "Flet", "Gemini API", "Agno", "Asyncio"],
    duration: "Oct 2024 – Dec 2024",
    description:
      "A cross-platform native AI assistant blending lightning-fast file search with intelligent agent capabilities. Instantly summarize local files, parse documentation, run complex terminal routines, and execute commands hands-free.",
    github:
      "https://github.com/smil-thakur/global-agent-hackathon-may-2025/tree/main/submissions/Clippy",
    youtube: "https://www.youtube.com/watch?v=D_rcu602wCc",
    image:
      "https://raw.githubusercontent.com/smil-thakur/global-agent-hackathon-may-2025/main/submissions/Clippy/src/assets/clippy-alpha3-multi-agent.gif",
    readmeUrl:
      "https://raw.githubusercontent.com/smil-thakur/global-agent-hackathon-may-2025/main/submissions/Clippy/README.md",
  },
  {
    title: "DailyFlow",
    tech: ["React 18+", "TypeScript", "Supabase", "Tailwind CSS"],
    duration: "Jul 2024 – Sep 2024",
    description:
      "Built a real-time collaborative calendar and schedule management app for teams with Supabase auth (magic link or OTP), invite-only onboarding, and live schedule syncing with distinct accessible colors for dynamic metrics.",
    github: "https://github.com/smil-thakur/DailyFlow",
    link: "https://github.com/smil-thakur/DailyFlow",
    image:
      "https://raw.githubusercontent.com/smil-thakur/DailyFlow/main/public/demo.png",
    readmeUrl:
      "https://raw.githubusercontent.com/smil-thakur/DailyFlow/main/README.md",
  },
];
