import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { homeContent } from "../../content/home";
import { getFeaturedMachines } from "../../content/machines";
import MachineGrid from "../machine/MachineGrid";

function FeaturedMachines() {
  const { featuredMachines } = homeContent;

  return (
    <section className="section-light section-padding border-t border-gray-200/60">
      <div className="container-main">
        <div className="glass-panel flex flex-col gap-6 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
          <div>
            <span className="eyebrow-light">{featuredMachines.eyebrow}</span>
            <div className="yellow-bar mt-4" />
            <h2 className="heading-section mt-4 text-surface-900">
              {featuredMachines.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-gray-600">
              {featuredMachines.description}
            </p>
          </div>
          <Link
            to={featuredMachines.button.link}
            className="btn-outline-light shrink-0 self-start sm:self-center"
          >
            {featuredMachines.button.label}
            <FaArrowRight />
          </Link>
        </div>

        <div className="mt-8 sm:mt-10">
          <MachineGrid machines={getFeaturedMachines()} variant="light" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedMachines;
