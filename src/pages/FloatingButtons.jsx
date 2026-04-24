import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-2 sm:gap-3 z-50">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20join%20your%20gym"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center 
        w-12 h-12 sm:w-14 sm:h-14 
        rounded-full bg-green-500 hover:bg-green-600 
        transition shadow-lg"
      >
        <FaWhatsapp className="text-white text-lg sm:text-xl" />
      </a>

      {/* Call */}
      <a
        href="tel:+919876543210"
        className="flex items-center justify-center 
        w-12 h-12 sm:w-14 sm:h-14 
        rounded-full bg-red-600 hover:bg-red-700 
        transition shadow-lg"
      >
        <FaPhoneAlt className="text-white text-sm sm:text-lg" />
      </a>

    </div>
  );
};

export default FloatingButtons;