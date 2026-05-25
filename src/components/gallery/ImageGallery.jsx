import { useState } from "react";
import { galleryCategories, galleryImages } from "../../content/gallery";

function ImageGallery() {
  const [filter, setFilter] = useState("All");
  const categories = galleryCategories;

  const filtered =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  if (!galleryImages.length) return null;

  return (
    <div>
      <div className="-mx-1 mb-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-wider ${
              filter === cat
                ? "bg-brand-500 text-black"
                : "border border-gray-300 text-gray-500 hover:border-brand-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((img) => (
          <figure
            key={img.id}
            className="group overflow-hidden border border-gray-200 bg-white"
          >
            {img.link ? (
              <a href={img.link} target="_blank" rel="noreferrer" className="block">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </a>
            ) : (
              <img
                src={img.src}
                alt={img.alt}
                className="h-56 w-full object-cover"
              />
            )}
            <figcaption className="border-t-2 border-brand-500 p-3 text-xs font-bold uppercase text-gray-600">
              {img.alt}
              <span className="mt-1 block text-[10px] font-normal text-gray-400">
                {img.category}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
