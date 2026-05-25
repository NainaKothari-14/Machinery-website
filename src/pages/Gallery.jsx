import PageMeta from "../components/common/PageMeta";
import PageBanner from "../components/common/PageBanner";
import ImageGallery from "../components/gallery/ImageGallery";
import VideoGallery from "../components/gallery/VideoGallery";
import { hasGalleryPhotos, hasGalleryVideos } from "../content/gallery";
import { pageMeta } from "../content/navigation";

function Gallery() {
  const meta = pageMeta.gallery;
  const showPhotos = hasGalleryPhotos();
  const showVideos = hasGalleryVideos();

  return (
    <>
      <PageMeta title="Gallery" />
      <PageBanner
        eyebrow={meta.eyebrow}
        title={meta.title}
        description={meta.description}
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="section-light section-padding">
        <div className="container-main space-y-16">
          {showPhotos ? (
            <div>
              <span className="eyebrow-light">Photos</span>
              <div className="yellow-bar mt-4" />
              <h2 className="heading-section mt-4 text-surface-900">Our work</h2>
              <div className="mt-8">
                <ImageGallery />
              </div>
            </div>
          ) : (
            <p className="mx-auto max-w-lg text-center text-sm text-gray-500">
              Photo gallery will appear here once images are added to{" "}
              <code className="text-xs text-brand-600">public/images/gallery/</code>{" "}
              and enabled in <code className="text-xs text-brand-600">src/content/gallery.js</code>.
            </p>
          )}

          {showVideos && (
            <div id="videos">
              <span className="eyebrow-light">Videos</span>
              <div className="yellow-bar mt-4" />
              <h2 className="heading-section mt-4 text-surface-900">Machine demos</h2>
              <div className="mt-8">
                <VideoGallery />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Gallery;
