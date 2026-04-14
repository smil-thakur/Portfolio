import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { createPortal } from "react-dom";
import { useState, useEffect, useCallback } from "react";
import { cn } from "../lib/utils";
import type { ProjectData } from "../data/portfolio";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

/**
 * Resolves relative image paths in markdown to absolute GitHub raw URLs.
 * Handles both `./path` and `path` relative references.
 */
function resolveRelativeUrls(markdown: string, readmeUrl: string): string {
  // Derive the base directory from the raw readme URL
  // e.g. https://raw.githubusercontent.com/user/repo/main/README.md → https://raw.githubusercontent.com/user/repo/main/
  const baseUrl = readmeUrl.substring(0, readmeUrl.lastIndexOf("/") + 1);

  // Replace markdown image syntax: ![alt](./relative/path) or ![alt](relative/path)
  let resolved = markdown.replace(
    /!\[([^\]]*)\]\((?!https?:\/\/|data:)\.?\/?([^)]+)\)/g,
    (_, alt, path) => `![${alt}](${baseUrl}${path})`
  );

  // Replace HTML img src attributes: src="./relative/path" or src="relative/path"
  resolved = resolved.replace(
    /src="(?!https?:\/\/|data:)\.?\/?([^"]+)"/g,
    (_, path) => `src="${baseUrl}${path}"`
  );

  // Replace HTML anchor href for relative links (but not anchors starting with #)
  resolved = resolved.replace(
    /href="(?!https?:\/\/|mailto:|#|data:)\.?\/?([^"]+)"/g,
    (_, path) => `href="${baseUrl}${path}"`
  );

  return resolved;
}

function SkeletonImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-stone-200 dark:bg-stone-800", className)}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-stone-300/50 dark:bg-stone-700/50" />
      )}
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onLoad={() => setLoaded(true)}
        className={cn("w-full h-full object-cover", className)}
      />
    </div>
  );
}

interface MarkdownImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  node?: unknown;
}

const MarkdownImage = ({...props }: MarkdownImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-900 my-8">
      {!loaded && (
        <div className="aspect-video w-full animate-pulse bg-stone-200 dark:bg-stone-800" />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          {...props}
          onLoad={(e) => {
            setLoaded(true);
            props.onLoad?.(e);
          }}
          className="w-full h-auto block"
        />
      </motion.div>
    </div>
  );
};

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [readme, setReadme] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const fetchReadme = useCallback(async (url: string) => {
    setLoading(true);
    setError(false);
    setReadme(null);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      setReadme(resolveRelativeUrls(text, url));
    } catch (err) {
      console.warn("Failed to fetch README:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen && project?.readmeUrl) {
      fetchReadme(project.readmeUrl);
    }
    if (!isOpen) {
      // Reset state when modal closes
      setReadme(null);
      setError(false);
    }
  }, [isOpen, project?.readmeUrl, fetchReadme]);

  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-4xl h-[85vh] md:h-[80vh] bg-white dark:bg-stone-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-stone-200 dark:border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between py-3 px-5 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/80 shrink-0">
              <div>
                <h2 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100">
                  {project.title}
                </h2>
                <p className="text-xs text-stone-500 font-mono">{project.duration}</p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 transition shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-grow custom-scrollbar">
              {/* Thumbnail */}
              {project.image && (
                <div className="shrink-0 border-b border-stone-200 dark:border-stone-800">
                  <SkeletonImage 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 md:h-72" 
                  />
                </div>
              )}

              {/* Body */}
              <div className="p-8 md:p-10">
                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-full text-xs font-bold text-stone-700 dark:text-stone-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Loading state */}
                {loading && (
                  <div className="flex items-center gap-3 text-stone-500 py-12 justify-center">
                    <div className="w-5 h-5 border-2 border-stone-300 border-t-stone-700 rounded-full animate-spin" />
                    <span className="font-medium">Loading README...</span>
                  </div>
                )}

                {/* Error state: fallback to description */}
                {error && (
                  <div className="prose prose-stone dark:prose-invert max-w-none">
                    <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-sm text-stone-500 mt-4">
                      Could not load the full README.{" "}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-stone-900 dark:hover:text-stone-100 transition"
                      >
                        View on GitHub →
                      </a>
                    </p>
                  </div>
                )}

                {/* Readme content */}
                {readme && (
                  <div className="prose prose-stone dark:prose-invert prose-headings:font-bold prose-a:text-stone-600 dark:prose-a:text-stone-300 hover:prose-a:text-stone-900 dark:hover:prose-a:text-stone-100 prose-a:transition max-w-none">
                    <ReactMarkdown 
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        img: MarkdownImage
                      }}
                    >
                      {readme}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
