import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Calendar, PenLine } from "lucide-react";
import { sanityClient, RECENT_POSTS_QUERY } from "../../lib/sanity";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasPosts, setHasPosts] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(RECENT_POSTS_QUERY)
      .then((data) => {
        if (data && data.length > 0) {
          setPosts(data);
          setHasPosts(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="blog"
      className="py-24 px-6 relative w-full max-w-5xl mx-auto border-t border-stone-200 dark:border-stone-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-stone-50/60 dark:bg-stone-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-stone-200/50 dark:border-stone-800/50 shadow-sm"
      >
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Writing
          </h2>
          {hasPosts && (
            <Link
              to="/blog"
              className="hidden md:flex items-center gap-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors font-medium"
            >
              View all <ArrowRight size={16} />
            </Link>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="animate-pulse bg-stone-100 dark:bg-stone-800/50 h-28 rounded-xl"
              />
            ))}
          </div>
        )}

        {/* No posts */}
        {!loading && !hasPosts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-center"
          >
            <PenLine size={32} className="mx-auto text-stone-400 mb-4" />
            <p className="text-stone-600 dark:text-stone-400 font-medium">
              Posts coming soon — stay tuned.
            </p>
          </motion.div>
        )}

        {/* Posts */}
        {!loading && hasPosts && (
          <div className="space-y-6">
            {posts.map((post, i) => (
              <Link key={post._id} to={`/blog/${post.slug.current}`} className="block">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-6 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 transition-colors hover:border-stone-400 dark:hover:border-stone-500 cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <FileText size={20} className="text-stone-400 shrink-0" />
                      {post.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-stone-600 dark:text-stone-400 text-sm font-mono mt-2 md:mt-0 shrink-0">
                      <Calendar size={12} />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <p className="text-stone-700 dark:text-stone-300 pl-7 font-medium">
                    {post.excerpt}
                  </p>
                </motion.article>
              </Link>
            ))}
          </div>
        )}

        {hasPosts && (
          <Link
            to="/blog"
            className="md:hidden flex items-center justify-center gap-2 w-full mt-8 py-3 bg-stone-100 dark:bg-stone-800 rounded-lg text-stone-900 dark:text-stone-100 font-medium"
          >
            View all Writing <ArrowRight size={16} />
          </Link>
        )}
      </motion.div>
    </section>
  );
}
