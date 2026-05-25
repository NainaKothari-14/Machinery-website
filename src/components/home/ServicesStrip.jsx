import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { companyInfo } from "../../data/companyInfo";
import { services } from "../../data/services";

function ServicesStrip() {
  return (
    <section className="bg-black section-padding">
      <div className="container-main">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our services
          </h2>
          <p className="mt-4 text-sm text-gray-400 sm:text-base">
            Pharma packaging solutions — sealing, capping, labeling, filling &amp;
            more. Built for Indian manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.num} service={service} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
          <Link
            to="/contact"
            className="btn-accent-solid w-full max-w-md px-10 py-4 text-center text-base sm:w-auto sm:min-w-[280px]"
          >
            {companyInfo.name}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesStrip;
