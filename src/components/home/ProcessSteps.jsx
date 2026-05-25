import { homeContent } from "../../content/home";
import { processSteps } from "../../content/testimonials";

function ProcessSteps() {
  const { process } = homeContent;

  return (
    <section className="section-light section-padding">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-light mx-auto">{process.eyebrow}</span>
          <div className="yellow-bar mx-auto mt-4" />
          <h2 className="heading-section mt-4 text-surface-900">{process.title}</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center border-2 border-brand-500 bg-brand-500 font-display text-2xl font-bold text-black">
                {item.step}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold uppercase text-surface-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
              {index < processSteps.length - 1 && (
                <span
                  className="absolute -right-4 top-8 hidden h-0.5 w-8 bg-brand-500 lg:block"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;
