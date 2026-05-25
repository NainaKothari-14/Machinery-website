import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { companyInfo } from "../../data/companyInfo";

const points = [
  "Built for pharma & Ayurvedic production",
  "Installation & training support",
  "Custom speed for your bottle size",
  "After-sales spare parts & phone help",
];

function WhyChooseUs() {
  return (
    <section className="section-dark section-padding">
      <div className="container-main grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow">Why choose us</span>
          <div className="yellow-bar mt-4" />
          <h2 className="heading-section mt-4 text-white">
            Why manufacturers trust us
          </h2>
          <p className="mt-5 text-sm text-gray-400 sm:text-base">
            Since {companyInfo.foundedYear}, we deliver reliable machines with
            clear pricing and honest support.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-gray-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-brand-500 text-xs text-black">
                  <FaCheck />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-primary mt-8 w-full sm:w-auto">
            Contact us today
          </Link>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08ad7881?w=900&q=80"
            alt="Machine in production"
            className="w-full object-cover h-72 sm:h-96 lg:h-[420px]"
          />
          <div className="absolute left-0 top-0 h-24 w-2 bg-brand-500 sm:h-32" />
          <div className="absolute bottom-0 right-0 h-2 w-24 bg-brand-500 sm:w-32" />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
