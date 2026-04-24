import React, { useState } from "react";
import { Home, User, Dumbbell, Users, Phone } from "lucide-react";

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
      {/* Top Header (unchanged) */}
      <header className="bg-black text-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl md:text-4xl font-bold tracking-wide">
            <span className="text-red-600">Gym</span>Fit
          </h2>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#pricing">Plans</a>
            <a href="#trainers">Trainers</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a
              href="#"
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full text-sm font-semibold transition"
            >
              Join Now
            </a>
          </div>
        </div>
      </header>

      {/* 🔥 Bottom Glass Menu (Mobile Only) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50 md:hidden">
        <div className="flex justify-between items-center px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg">

          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
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
    </>
  );
};

export default Header;