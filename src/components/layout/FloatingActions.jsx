import ScrollToTop from "../common/ScrollToTop";
import FloatingWhatsapp from "./FloatingWhatsapp";

/** Scroll-to-top + WhatsApp — stacked so they never overlap */
function FloatingActions() {
  return (
    <div className="safe-bottom safe-right pointer-events-none fixed bottom-5 right-4 z-50 flex animate-float flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <ScrollToTop />
      <FloatingWhatsapp />
    </div>
  );
}

export default FloatingActions;
