import { galleryPhotos } from "../../content/gallery";

function ImageGallery() {
  if (!galleryPhotos.length) return null;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {galleryPhotos.map((img, index) => (
        <figure
          key={img.id}
          className={`glass-card group overflow-hidden animate-fade-up stagger-${(index % 4) + 1}`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="h-56 w-full object-contain bg-gray-50/80 p-3 transition duration-500 group-hover:scale-[1.02] sm:h-64"
          />
          <figcaption className="border-t border-gray-100/80 bg-white/60 px-4 py-3 text-xs font-bold uppercase text-gray-600 backdrop-blur-sm">
            {img.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default ImageGallery;
