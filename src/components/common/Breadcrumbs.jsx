import { Link } from "react-router-dom";

function Breadcrumbs({ items = [], dark = false }) {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-wider sm:text-xs ${
        dark ? "text-gray-500" : "text-gray-400"
      }`}
    >
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
          {index > 0 && <span className="text-gray-600">/</span>}
          {item.href ? (
            <Link to={item.href} className="transition hover:text-brand-500">
              {item.label}
            </Link>
          ) : (
            <span className="text-brand-500">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
