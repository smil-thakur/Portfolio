import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for React to render the homepage before scrolling
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // We are already on the homepage
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    } else if (!href.startsWith("http")) {
      setMobileMenuOpen(false);
    }
  };

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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold tracking-tighter"
          >
            SRT
          </Link>
        </motion.div>

        <nav className="hidden md:flex gap-8">
          {links.map((link, i) => {
            const isExternal = link.href.startsWith("http");

            if (isExternal) {
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-sm font-medium hover:text-stone-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.href.startsWith("/#") ? "/" : link.href}
                  className="text-sm font-medium hover:text-stone-500 transition-colors"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </Link>
              </motion.div>
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
                const isExternal = link.href.startsWith("http");

                if (isExternal) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-4 text-lg font-medium border-b border-stone-200 dark:border-stone-800 last:border-0"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.href.startsWith("/#") ? "/" : link.href}
                    className="py-4 text-lg font-medium border-b border-stone-200 dark:border-stone-800 last:border-0"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
