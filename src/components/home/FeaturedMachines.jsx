import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import MachineGrid from "../machine/MachineGrid";
import { getFeaturedMachines } from "../../data/machines";

function FeaturedMachines() {
  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Our projects</span>
            <div className="yellow-bar mt-4" />
            <h2 className="heading-section mt-4 text-white">
              Featured machines
            </h2>
          </div>
          <Link
            to="/machines"
            className="btn-outline-dark shrink-0 self-start sm:self-auto"
          >
            View all
            <FaArrowRight />
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-gray-500">
          Browse our catalog — call or WhatsApp for price and customization.
        </p>
        <div className="mt-10 sm:mt-12">
          <MachineGrid machines={getFeaturedMachines()} variant="dark" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedMachines;
