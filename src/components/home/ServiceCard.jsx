import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  const { num, title, description, image, link, highlightCta } = service;

  return (
    <article className="service-card overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="flex flex-col lg:flex-row lg:min-h-[220px]">
        <div className="relative order-1 h-48 w-full shrink-0 sm:h-56 lg:order-2 lg:h-auto lg:w-[42%] xl:w-[40%]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover lg:rounded-r-2xl"
          />
        </div>

        <div className="relative order-2 flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-9 lg:pr-6">
          <span
            className="pointer-events-none absolute left-4 top-2 font-display text-[5rem] font-bold leading-none text-gray-200/90 sm:left-6 sm:text-[6rem] lg:left-8"
            aria-hidden
          >
            {num}
          </span>

          <div className="relative z-10 mt-10 sm:mt-12">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-black sm:text-[1.65rem]">
              {title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-500 sm:text-[15px]">
              {description}
            </p>
          </div>

          <div className="relative z-10 mt-6 sm:mt-8">
            {highlightCta ? (
              <Link to={link} className="btn-accent-solid">
                Learn More
              </Link>
            ) : (
              <Link to={link} className="btn-accent-outline">
                Learn More
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
