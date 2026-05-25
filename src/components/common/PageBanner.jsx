import Breadcrumbs from "./Breadcrumbs";

function PageBanner({ eyebrow, title, description, breadcrumbs = [] }) {
  return (
    <section className="section-dark border-b border-white/10 py-14 sm:py-20 md:py-24">
      <div className="container-main">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, ...breadcrumbs]}
          dark
        />
        {eyebrow && <span className="eyebrow mt-2">{eyebrow}</span>}
        <div className="yellow-bar mt-4" />
        <h1 className="heading-section mt-4 max-w-4xl text-white">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageBanner;
