import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import SiteLogo from "../common/SiteLogo";
import { company } from "../../content/company";
import { NAV_LINKS } from "../../utils/constants";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `rounded-lg px-2 py-1 text-xs font-semibold uppercase tracking-wider transition duration-300 sm:text-sm ${
      isActive
        ? "text-brand-500"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="container-main flex h-[4.25rem] items-center justify-between sm:h-20">
        <SiteLogo variant="nav" />

        <nav className="hidden items-center gap-2 xl:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary ml-2 text-xs">
            Get a quote
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition duration-300 hover:border-brand-500/50 hover:bg-white/15 xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[4.25rem] z-40 overflow-y-auto border-t border-white/10 bg-surface-900 xl:hidden sm:top-20">
          <nav className="container-main flex flex-col py-6 pb-10 safe-bottom">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-xl border-b border-white/10 px-2 py-4 font-display text-lg font-semibold uppercase transition ${
                    isActive ? "text-brand-500" : "text-gray-300 hover:bg-white/5"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={`tel:${company.phone}`}
              className="btn-outline-dark mt-4 w-full text-center"
              onClick={() => setOpen(false)}
            >
              Call {company.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="btn-primary mt-3 w-full text-center"
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
