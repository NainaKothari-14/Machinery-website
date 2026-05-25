import { FaQuoteLeft } from "react-icons/fa";
import { homeContent } from "../../content/home";
import { testimonials } from "../../content/testimonials";

function Testimonials() {
  const { testimonials: copy } = homeContent;

  return (
    <section className="section-muted section-padding">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-light mx-auto">{copy.eyebrow}</span>
          <div className="yellow-bar mx-auto mt-4" />
          <h2 className="heading-section mt-4 text-surface-900">{copy.title}</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mt-14">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="card-light p-6 sm:p-8">
              <FaQuoteLeft className="text-2xl text-brand-500" />
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-gray-200 pt-5">
                <p className="font-display text-base font-bold uppercase text-surface-900">
                  {item.author}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {item.role} · {item.company}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
