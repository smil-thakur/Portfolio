import { createClient } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "3anyxr1p",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-14",
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Queries
export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  coverImage,
  publishedAt,
  excerpt,
  tags
}`;

export const RECENT_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  coverImage,
  publishedAt,
  excerpt
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  coverImage,
  publishedAt,
  excerpt,
  body,
  tags
}`;
