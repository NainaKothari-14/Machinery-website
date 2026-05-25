import { Link } from "react-router-dom";
import {
  FaBox,
  FaCapsules,
  FaIndustry,
  FaTags,
} from "react-icons/fa";

const services = [
  {
    num: "01",
    icon: FaIndustry,
    title: "Bottle sealing",
    description: "Induction & automatic sealers for pharma bottles.",
    link: "/machines?category=Sealing",
  },
  {
    num: "02",
    icon: FaCapsules,
    title: "Capping systems",
    description: "ROPP and screw capping with torque control.",
    link: "/machines?category=Capping",
  },
  {
    num: "03",
    icon: FaTags,
    title: "Labeling",
    description: "Round bottle wrap-around sticker labeling.",
    link: "/machines?category=Labeling",
  },
  {
    num: "04",
    icon: FaBox,
    title: "Filling & packaging",
    description: "Liquid fill and blister pack solutions.",
    link: "/machines",
  },
];

function ServicesStrip() {
  return (
    <section className="section-muted section-padding">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-light mx-auto">Our services</span>
          <div className="yellow-bar mx-auto mt-4" />
          <h2 className="heading-section mt-4 text-surface-900">
            Core manufacturing solutions
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            End-to-end pharma packaging equipment — contact us for custom output
            and bottle size.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:mt-14">
          {services.map((service) => (
            <Link
              key={service.num}
              to={service.link}
              className="card-light group p-6 sm:p-8"
            >
              <span className="font-display text-4xl font-bold text-gray-200 transition group-hover:text-brand-500/40">
                {service.num}
              </span>
              <span className="mt-4 inline-flex h-12 w-12 items-center justify-center bg-brand-500 text-xl text-black">
                <service.icon />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold uppercase text-surface-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesStrip;
