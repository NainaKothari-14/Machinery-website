import { Link } from "react-router-dom";
import { homeContent } from "../../content/home";
import { services } from "../../content/services";
import ServiceCard from "./ServiceCard";

function ServicesStrip() {
  const { services: copy } = homeContent;

  return (
    <section className="bg-black section-padding">
      <div className="container-main">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-sm text-gray-400 sm:text-base">{copy.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.num} service={service} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
          <Link
            to={copy.bottomButton.link}
            className="btn-accent-solid w-full max-w-md px-10 py-4 text-center text-base sm:w-auto sm:min-w-[280px]"
          >
            {copy.bottomButton.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesStrip;
