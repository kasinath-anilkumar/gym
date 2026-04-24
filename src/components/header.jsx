import React, { useState } from "react";
import { Home, User, Dumbbell, Users, Phone } from "lucide-react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed sm:hidden bottom-24 right-4 flex sm:flex-row z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/000000000?text=Hi%20I%20want%20to%20join%20your%20gym"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center
        w-12 h-12 rounded-full bg-green-500 shadow-lg"
      >
        <FaWhatsapp className="text-white text-lg" />
      </a>

      {/* Call */}
      <a
        href="tel:+000000000"
        className="flex items-center justify-center
        w-12 h-12 rounded-full bg-red-600 shadow-lg"
      >
        <FaPhoneAlt className="text-white text-sm" />
      </a>
    </div>
  );
};

const Header = () => {
  const [active, setActive] = useState("home");

  const menu = [
    { id: "home", icon: <Home size={20} />, label: "Home" },
    { id: "about", icon: <User size={20} />, label: "About" },
    { id: "pricing", icon: <Dumbbell size={20} />, label: "Plans" },
    { id: "trainers", icon: <Users size={20} />, label: "Trainers" },
    { id: "contact", icon: <Phone size={20} />, label: "Contact" },
  ];

  return (
    <>
      {/* Header */}
<header className="fixed w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* LOGO */}
    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
      <span className="text-red-500">Gym</span>Fit
    </h2>

    {/* NAV */}
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
      {["home", "about", "pricing", "trainers", "contact"].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className="relative group text-white/70 hover:text-white transition"
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}

          {/* 🔥 underline animation */}
          <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </nav>

    {/* CTA */}
   <div className="hidden md:block">
  <a
    href="#pricing"
    className="group relative inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-semibold text-red-500 border border-red-500 overflow-hidden transition-all duration-300 ease-out"
  >
    {/* background fill */}
    <span className="absolute inset-0 bg-red-600 scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

    {/* subtle glow */}
    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-red-500/20 blur-md" />

    {/* text */}
    <span className="relative z-10 transition-colors duration-300 delay-75 group-hover:text-white">
      Join Now
    </span>
  </a>
</div>

  </div>
</header>
      {/* Bottom Mobile Nav */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50 md:hidden">
        <div className="flex justify-between items-center px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg">

          {menu.map((item) => (
            <a
              key={item.id}
              href={item.id === "contact" ? "#" : `#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center text-xs transition ${
                active === item.id
                  ? "text-red-500"
                  : "text-gray-300"
              }`}
            >
              <div
                className={`p-2 rounded-full transition ${
                  active === item.id
                    ? "bg-red-500/20 shadow-md shadow-red-500/30"
                    : ""
                }`}
              >
                {item.icon}
              </div>
              {item.label}
            </a>
          ))}

        </div>
      </div>

      {/* 🔥 Floating Buttons (only on contact) */}
      <FloatingButtons show={active === "contact"} />

      {/* Spacer (prevent overlap) */}
      {/* <div className="h-20 md:hidden"></div> */}
    </>
  );
};

export default Header;