import { whyChooseUs } from "../../content/whyChooseUs";

function WhyChooseUsCards() {
  return (
    <section className="section-light section-padding border-t border-gray-200">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-light mx-auto">{whyChooseUs.eyebrow}</span>
          <div className="yellow-bar mx-auto mt-4" />
          <h2 className="heading-section mt-4 text-surface-900">{whyChooseUs.title}</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.items.map((item) => (
            <div
              key={item.id}
              className="glass-card border-t-4 border-t-brand-500 p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-bold uppercase text-surface-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsCards;
