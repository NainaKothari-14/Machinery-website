import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { whatWeDo } from "../../content/whatWeDo";

function WhatWeDo() {
  return (
    <section className="section-muted section-padding">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-light mx-auto">{whatWeDo.eyebrow}</span>
          <div className="yellow-bar mx-auto mt-4" />
          <h2 className="heading-section mt-4 text-surface-900">{whatWeDo.title}</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whatWeDo.items.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="card-light group flex flex-col border-t-4 border-t-brand-500 p-6 transition hover:shadow-md"
            >
              <h3 className="font-display text-lg font-bold uppercase text-surface-900 group-hover:text-brand-600">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600">
                Learn more <FaArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
