import Navbar from '../components/Navbar';
import Background from '../components/Background';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import BlogTeaser from '../components/sections/Blog';

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-stone-900 dark:text-stone-100 overflow-x-hidden">
      <Background />
      <Navbar />

      <main className="relative flex flex-col items-center">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <BlogTeaser />
      </main>

      <footer className="py-12 text-center text-stone-500 font-mono text-sm relative">
        <p>&copy; {new Date().getFullYear()} Smil Raj Thakur. Built with React, Tailwind & Sanity.</p>
      </footer>
    </div>
  );
}
