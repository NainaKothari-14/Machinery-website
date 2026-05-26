import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="glass pointer-events-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm text-brand-600 shadow-md transition duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-500/50 hover:bg-white hover:text-brand-700 hover:shadow-xl"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;
