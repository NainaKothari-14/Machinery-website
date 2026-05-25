import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { NAV_LINKS } from "../../utils/constants";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold uppercase tracking-wider transition ${
      isActive ? "text-brand-500" : "text-gray-300 hover:text-brand-500"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 bg-surface-900 transition-shadow ${
        scrolled ? "shadow-lg shadow-black/30" : ""
      }`}
    >
      <div className="container-main flex h-16 items-center justify-between sm:h-[72px]">
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-500 font-display text-lg font-bold text-black sm:h-11 sm:w-11 sm:text-xl">
            M
          </span>
          <div className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base font-bold uppercase tracking-wide text-white sm:text-lg">
              Mahavir
            </span>
            <span className="hidden truncate text-[10px] font-semibold uppercase tracking-widest text-gray-500 min-[380px]:block">
              Pharma Machinery
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary text-xs">
            Get a quote
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-white xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-surface-900 xl:hidden sm:top-[72px]">
          <nav className="container-main flex flex-col py-6 pb-10 safe-bottom">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `border-b border-white/10 py-4 font-display text-lg font-semibold uppercase ${
                    isActive ? "text-brand-500" : "text-gray-300"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="btn-primary mt-6 w-full text-center"
              onClick={() => setOpen(false)}
            >
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
