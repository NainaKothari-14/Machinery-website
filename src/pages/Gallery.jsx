import PageMeta from "../components/common/PageMeta";
import PageBanner from "../components/common/PageBanner";
import ImageGallery from "../components/gallery/ImageGallery";
import VideoGallery from "../components/gallery/VideoGallery";
import { galleryImages } from "../data/gallery";

function Gallery() {
  return (
    <>
      <PageMeta title="Gallery" />
      <PageBanner
        eyebrow="Portfolio"
        title="Gallery"
        description="Factory photos and machine demonstration videos."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="section-light section-padding">
        <div className="container-main">
          <ImageGallery images={galleryImages} />
          <div className="mt-16">
            <span className="eyebrow-light">Videos</span>
            <div className="yellow-bar mt-4" />
            <h2 className="heading-section mt-4 text-surface-900">Demos</h2>
            <div className="mt-8">
              <VideoGallery />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
