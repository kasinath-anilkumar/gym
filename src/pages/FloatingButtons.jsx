import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="hidden sm:flex fixed bottom-4 right-4 flex-col gap-3 z-50">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20join%20your%20gym"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center
        w-12 h-12 sm:w-14 sm:h-14
        rounded-full bg-green-500/90 backdrop-blur-md
        shadow-[0_0_15px_rgba(34,197,94,0.6)]
        hover:scale-110 active:scale-95
        transition-all duration-300"
      >
        <FaWhatsapp className="text-white text-lg sm:text-xl" />
      </a>

      {/* Call */}
      <a
        href="tel:+919876543210"
        className="flex items-center justify-center
        w-12 h-12 sm:w-14 sm:h-14
        rounded-full bg-red-600/90 backdrop-blur-md
        shadow-[0_0_15px_rgba(239,68,68,0.6)]
        hover:scale-110 active:scale-95
        transition-all duration-300"
      >
        <FaPhoneAlt className="text-white text-sm sm:text-lg" />
      </a>

    </div>
  );
};

export default FloatingButtons;