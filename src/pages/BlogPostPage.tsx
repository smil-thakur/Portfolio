import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { type SanityImageSource } from "@sanity/image-url";
import { 
  PortableText, 
  type PortableTextComponents, 
  type PortableTextBlock,
  type PortableTextComponentProps,
  type PortableTextMarkComponentProps 
} from "@portabletext/react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import { sanityClient, POST_BY_SLUG_QUERY, urlFor } from "../lib/sanity";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage?: SanityImageSource;
  publishedAt: string;
  excerpt: string;
  body: PortableTextBlock[];
  tags?: string[];
}

type ImageValue = SanityImageSource & {
  asset?: { _ref: string };
  alt?: string;
};

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) return null;
      return (
        <img
          src={urlFor(value).width(900).url()}
          alt={value.alt || ""}
          className="rounded-xl shadow-lg my-8 w-full"
        />
      );
    },
  },
  marks: {
    link: ({ children, value }: PortableTextMarkComponentProps<{ _type: string; href: string }>) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
      >
        {children}
      </a>
    ),
    code: ({ children }: { children: React.ReactNode }) => (
      <code className="bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  block: {
    h1: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h1 className="text-3xl font-black tracking-tight mt-10 mb-4">{children}</h1>
    ),
    h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h2 className="text-2xl font-bold tracking-tight mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h3 className="text-xl font-bold mt-6 mb-2">{children}</h3>
    ),
    normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <blockquote className="border-l-4 border-stone-300 dark:border-stone-700 pl-4 italic text-stone-600 dark:text-stone-400 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc pl-6 space-y-2 text-stone-700 dark:text-stone-300 mb-4">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal pl-6 space-y-2 text-stone-700 dark:text-stone-300 mb-4">{children}</ol>
    ),
  },
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    sanityClient
      .fetch(POST_BY_SLUG_QUERY, { slug })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Failed to fetch post:", err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="relative min-h-screen text-stone-900 dark:text-stone-100 overflow-x-hidden">
      <Background />
      <Navbar />

      <main className="relative pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-stone-50/60 dark:bg-stone-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-stone-200/50 dark:border-stone-800/50 shadow-sm"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors mb-8 font-medium"
          >
            <ArrowLeft size={16} /> All Posts
          </Link>

          {/* Loading */}
          {loading && (
            <div className="space-y-4 mt-8">
              <div className="animate-pulse bg-stone-100 dark:bg-stone-800/50 h-10 w-3/4 rounded-lg" />
              <div className="animate-pulse bg-stone-100 dark:bg-stone-800/50 h-6 w-1/3 rounded-lg" />
              <div className="animate-pulse bg-stone-100 dark:bg-stone-800/50 h-64 rounded-2xl mt-8" />
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-20">
              <p className="text-stone-500 text-lg font-medium">
                Could not load this post.
              </p>
            </div>
          )}

          {/* Not found */}
          {!loading && !error && !post && (
            <div className="text-center py-20">
              <p className="text-stone-500 text-lg font-medium">Post not found.</p>
            </div>
          )}

          {/* Post */}
          {post && (
            <article>
              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-4">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-stone-500">
                <span className="inline-flex items-center gap-1.5 font-mono">
                  <Calendar size={14} />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                {post.tags &&
                  post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-stone-100 dark:bg-stone-800 rounded text-xs font-bold"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
              </div>

              {/* Cover */}
              {post.coverImage && (
                <div className="w-full rounded-2xl overflow-hidden mb-10 bg-stone-100 dark:bg-stone-800">
                  <img
                    src={urlFor(post.coverImage).width(1200).url()}
                    alt={post.title}
                    className="w-full object-cover"
                  />
                </div>
              )}

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-lg text-stone-600 dark:text-stone-400 font-medium leading-relaxed mb-10 border-l-4 border-stone-200 dark:border-stone-700 pl-4">
                  {post.excerpt}
                </p>
              )}

              {/* Body */}
              {post.body && (
                <div className="prose-equivalent">
                  <PortableText
                    value={post.body}
                    components={portableTextComponents}
                  />
                </div>
              )}
            </article>
          )}
        </motion.div>
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
