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
<header className="fixed w-full z-50">

  {/* 🔥 Mobile Glass Background */}
  <div className="md:hidden absolute inset-0 
    bg-gradient-to-b from-black/60 to-black/20 
    backdrop-blur-2xl border-b border-white/10
    shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.4)]" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-center md:justify-between">

    {/* LOGO */}
    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide z-10">
      <span className="text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]">
        Gym
      </span>
      Fit
    </h2>


    {/* DESKTOP NAV (Floating Pill) */}
    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
  <div className="relative flex items-center gap-2 px-2 py-2 rounded-full 
    bg-gradient-to-b from-white/10 to-white/5
    backdrop-blur-3xl border border-white/10
    shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_10px_40px_rgba(0,0,0,0.35)]">

    {["home", "about", "pricing", "trainers", "contact"].map((item) => (
      <a
        key={item}
        href={`#${item}`}
        onClick={() => setActive(item)}
        className="group relative px-4 py-1.5 text-sm font-medium transition"
      >

        {/* 🔴 RED GLASS ACTIVE / HOVER */}
        <span
          className={`absolute inset-0 rounded-full transition-all duration-300
          ${
            active === item
              ? "bg-gradient-to-br from-red-500/40 to-red-600/30 backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_0_20px_rgba(239,68,68,0.35)]"
              : "bg-transparent group-hover:bg-white/10"
          }`}
        />

        {/* ✨ moving light reflection */}
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 
          bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm" />

        {/* text */}
        <span
          className={`relative z-10 transition ${
            active === item
              ? "text-white"
              : "text-white/70 group-hover:text-white"
          }`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </span>

      </a>
    ))}
  </div>
</div>

    {/* CTA (Right side) */}
    <div className="hidden md:block z-10">
      <a
        href="#pricing"
        className="px-5 py-2 rounded-full text-sm font-semibold 
        bg-red-600 text-white 
        shadow-[0_0_15px_rgba(239,68,68,0.6)]
        hover:shadow-[0_0_25px_rgba(239,68,68,0.9)]
        transition duration-300"
      >
        Join Now
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