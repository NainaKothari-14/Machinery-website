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
      <PageBanner title={meta.title} breadcrumbs={[{ label: "Gallery" }]} />

      <section className="section-light section-padding">
        <div className="container-main space-y-12">
          {showPhotos && <ImageGallery />}
          {showVideos && (
            <div
              id="videos"
              className={showPhotos ? "border-t border-gray-200 pt-12" : undefined}
            >
              <VideoGallery />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Gallery;
