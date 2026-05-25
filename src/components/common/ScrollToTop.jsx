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
      className="safe-bottom fixed bottom-20 right-4 z-40 flex h-10 w-10 items-center justify-center border border-white/10 bg-surface-800 text-sm text-brand-500 shadow-lg transition hover:border-brand-500 hover:bg-brand-500 hover:text-black sm:bottom-24 sm:right-6 sm:h-11 sm:w-11"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;
