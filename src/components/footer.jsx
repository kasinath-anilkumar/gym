import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white border-t border-white/10">

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-red-600">GYM</span>FIT
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Build strength, improve endurance, and transform your lifestyle with expert trainers and modern equipment.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-red-600 transition">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-red-600 transition">
              <FaInstagram size={16} />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" className="p-2 rounded-full bg-white/10 hover:bg-green-500 transition">
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Plans</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Trainers</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-gray-400 text-sm">

            <p className="flex items-center gap-2">
              <MapPin size={16} /> Kochi, Kerala
            </p>

            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </p>

            <p className="flex items-center gap-2">
              <Mail size={16} /> gym@email.com
            </p>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} GymFit. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;