import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import { type SanityImageSource } from "@sanity/image-url";
import { sanityClient, POSTS_QUERY, urlFor } from "../lib/sanity";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage?: SanityImageSource;
  publishedAt: string;
  excerpt: string;
  tags?: string[];
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(POSTS_QUERY)
      .then((data) => {
        setPosts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Failed to fetch posts:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative min-h-screen text-stone-900 dark:text-stone-100 overflow-x-hidden">
      <Background />
      <Navbar />

      <main className="relative pt-24 pb-16 px-6 max-w-5xl mx-auto">
        <div className="bg-stone-50/60 dark:bg-stone-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-stone-200/50 dark:border-stone-800/50 shadow-sm">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors mb-8 font-medium"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            Blog
          </h1>
          <p className="text-stone-600 dark:text-stone-400 mt-4 text-lg max-w-2xl font-medium">
            Thoughts on software engineering, frontend architecture, AI integrations, and building things that matter.
          </p>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="animate-pulse bg-stone-100 dark:bg-stone-800/50 h-80 rounded-2xl"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-stone-500 text-lg mb-2 font-medium">
              Could not connect to the blog backend.
            </p>
            <p className="text-stone-400 text-sm">
              Make sure CORS is configured for your Sanity project.
            </p>
          </motion.div>
        )}

        {/* Empty state */}
        {!loading && !error && posts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-stone-500 text-lg mb-2 font-medium">
              No posts yet.
            </p>
            <p className="text-stone-400 text-sm">
              Posts published in Sanity Studio will appear here automatically.
            </p>
          </motion.div>
        )}

        {/* Posts grid */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="group block h-full"
                >
                  <article className="h-full rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden transition-all hover:border-stone-400 dark:hover:border-stone-500 hover:shadow-lg flex flex-col">
                    {/* Cover image */}
                    {post.coverImage && (
                      <div className="w-full h-48 overflow-hidden bg-stone-200 dark:bg-stone-800">
                        <img
                          src={urlFor(post.coverImage).width(600).height(400).url()}
                          alt={post.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-grow">
                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 px-2 py-0.5 bg-stone-100 dark:bg-stone-800 rounded text-xs font-bold text-stone-600 dark:text-stone-400"
                            >
                              <Tag size={10} />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <h2 className="text-xl font-bold mb-2 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors leading-tight">
                        {post.title}
                      </h2>

                      <p className="text-stone-600 dark:text-stone-400 text-sm flex-grow leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 mt-4 text-xs text-stone-500 font-mono">
                        <Calendar size={12} />
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric", year: "numeric" }
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
        </div>
      </main>

      <footer className="py-12 text-center text-stone-500 font-mono text-sm relative">
        <p>
          &copy; {new Date().getFullYear()} Smil Raj Thakur. Built with React &
          Tailwind.
        </p>
      </footer>
    </div>
  );
}
