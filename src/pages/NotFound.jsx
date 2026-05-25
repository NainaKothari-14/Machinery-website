import { Link } from "react-router-dom";
import PageMeta from "../components/common/PageMeta";

function NotFound() {
  return (
    <section className="section-light section-padding text-center">
      <PageMeta title="404" />
      <p className="font-display text-7xl font-bold text-brand-500">404</p>
      <h1 className="heading-section mt-4 text-surface-900">Page not found</h1>
      <Link to="/" className="btn-primary mt-8 inline-flex w-full sm:w-auto">
        Back to home
      </Link>
    </section>
  );
}

export default NotFound;
