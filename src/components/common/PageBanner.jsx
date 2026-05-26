import Breadcrumbs from "./Breadcrumbs";

function PageBanner({ eyebrow, title, description, breadcrumbs = [], compact = false }) {
  return (
    <section
      className={`section-light border-b border-gray-200/80 bg-white ${
        compact ? "py-8 sm:py-10" : "py-12 sm:py-16"
      }`}
    >
      <div className="container-main">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, ...breadcrumbs]} />
        {eyebrow && (
          <>
            <span className="eyebrow-light mt-4">{eyebrow}</span>
            <div className="yellow-bar mt-4" />
          </>
        )}
        <h1
          className={`heading-section max-w-4xl text-surface-900 ${eyebrow ? "mt-4" : "mt-6"}`}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageBanner;
