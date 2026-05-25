import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { company } from "../../content/company";
import { getAssetSrc } from "../../content/helpers";
import { homeContent } from "../../content/home";
import MediaImage from "../common/MediaImage";

function WhyChooseUs() {
  const { whyChooseUs } = homeContent;
  const imageSrc = getAssetSrc(whyChooseUs.localImage);

  return (
    <section className="section-dark section-padding">
      <div
        className={`container-main grid items-center gap-10 ${
          imageSrc ? "lg:grid-cols-2 lg:gap-16" : "max-w-3xl"
        }`}
      >
        <div>
          <span className="eyebrow">{whyChooseUs.eyebrow}</span>
          <div className="yellow-bar mt-4" />
          <h2 className="heading-section mt-4 text-white">{whyChooseUs.title}</h2>
          <p className="mt-5 text-sm text-gray-400 sm:text-base">
            {whyChooseUs.description(company.foundedYear)}
          </p>
          <ul className="mt-8 space-y-4">
            {whyChooseUs.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-gray-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-brand-500 text-xs text-black">
                  <FaCheck />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <Link
            to={whyChooseUs.buttons.primary.link}
            className="btn-primary mt-8 w-full sm:w-auto"
          >
            {whyChooseUs.buttons.primary.label}
          </Link>
        </div>

        {imageSrc && (
          <div className="relative">
            <MediaImage
              src={imageSrc}
              alt={whyChooseUs.localImage.alt}
              className="h-72 w-full object-cover sm:h-96 lg:h-[420px]"
            />
            <div className="absolute left-0 top-0 h-24 w-2 bg-brand-500 sm:h-32" />
            <div className="absolute bottom-0 right-0 h-2 w-24 bg-brand-500 sm:w-32" />
          </div>
        )}
      </div>
    </section>
  );
}

export default WhyChooseUs;
