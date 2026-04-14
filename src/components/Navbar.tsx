import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

interface NavLink {
  name: string;
  href: string;
}

const links: NavLink[] = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-md border-stone-200 dark:border-stone-800"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          SRT
        </motion.a>

        <nav className="hidden md:flex gap-8">
          {links.map((link, i) => {
            const isRouterLink = link.href.startsWith("/") && !link.href.startsWith("/#");
            
            if (isRouterLink) {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium hover:text-stone-500 transition-colors"
                >
                  {link.name}
                </Link>
              );
            }

            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium hover:text-stone-500 transition-colors"
              >
                {link.name}
              </motion.a>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-4 z-50">
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-14 left-0 w-full bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 flex flex-col px-6 py-4 md:hidden"
            >
              {links.map((link) => {
                const isRouterLink = link.href.startsWith("/") && !link.href.startsWith("/#");
                return isRouterLink ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="py-4 text-lg font-medium border-b border-stone-200 dark:border-stone-800 last:border-0"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="py-4 text-lg font-medium border-b border-stone-200 dark:border-stone-800 last:border-0"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
