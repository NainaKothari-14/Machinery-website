import { FaExternalLinkAlt, FaInstagram, FaYoutube } from "react-icons/fa";
import { getPostImageSrc } from "../../content/posts";

function PostsGrid({ posts, variant = "light", columns = 3 }) {
  if (!posts?.length) return null;

  const isDark = variant === "dark";
  const gridClass =
    columns === 2
      ? "grid gap-6 sm:grid-cols-2"
      : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={gridClass}>
      {posts.map((post) => {
        const src = getPostImageSrc(post);
        if (!src) return null;
        const Icon = post.source === "YouTube" ? FaYoutube : FaInstagram;

        return (
          <article
            key={post.id}
            className={`group overflow-hidden border ${
              isDark
                ? "border-white/10 bg-surface-800"
                : "border-gray-200 bg-white shadow-sm"
            }`}
          >
            <a
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden"
            >
              <img
                src={src}
                alt={post.image?.alt || post.caption}
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </a>
            <div className="border-t-2 border-brand-500 p-4">
              <p
                className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${
                  isDark ? "text-brand-500" : "text-brand-600"
                }`}
              >
                <Icon />
                {post.source}
              </p>
              <p
                className={`mt-2 line-clamp-3 text-sm leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {post.caption}
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className={`mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition ${
                  isDark ? "text-gray-500 hover:text-brand-500" : "text-gray-500 hover:text-brand-600"
                }`}
              >
                View post <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default PostsGrid;
