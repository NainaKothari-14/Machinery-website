import { FaWhatsapp } from "react-icons/fa";
import { openWhatsApp } from "../../services/whatsappService";

function FloatingWhatsapp() {
  return (
    <div className="pointer-events-auto relative size-14 shrink-0 sm:size-[3.75rem]">
      <span
        className="pointer-events-none absolute inset-0 origin-center rounded-2xl bg-[#25D366]/35 animate-pulse-ring"
        aria-hidden
      />
      <button
        type="button"
        onClick={() =>
          openWhatsApp("Hello, I would like to inquire about your pharma machines.")
        }
        className="relative flex size-full items-center justify-center rounded-2xl bg-[#25D366] text-2xl text-white shadow-lg shadow-[#25D366]/30 ring-2 ring-white/90 transition duration-300 ease-out hover:scale-110 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/40 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </button>
    </div>
  );
}

export default FloatingWhatsapp;
