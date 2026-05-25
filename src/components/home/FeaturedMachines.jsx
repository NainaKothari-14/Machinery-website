import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { homeContent } from "../../content/home";
import { getFeaturedMachines } from "../../content/machines";
import MachineGrid from "../machine/MachineGrid";

function FeaturedMachines() {
  const { featuredMachines } = homeContent;

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">{featuredMachines.eyebrow}</span>
            <div className="yellow-bar mt-4" />
            <h2 className="heading-section mt-4 text-white">
              {featuredMachines.title}
            </h2>
          </div>
          <Link
            to={featuredMachines.button.link}
            className="btn-outline-dark shrink-0 self-start sm:self-auto"
          >
            {featuredMachines.button.label}
            <FaArrowRight />
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-gray-500">
          {featuredMachines.description}
        </p>
        <div className="mt-10 sm:mt-12">
          <MachineGrid machines={getFeaturedMachines()} variant="dark" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedMachines;
