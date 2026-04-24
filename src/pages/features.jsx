import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, Users, Clock, HeartPulse } from "lucide-react";

const features = [
  {
    icon: <Dumbbell size={28} />,
    title: "Modern Equipment",
    desc: "Train with the latest fitness machines and tools.",
  },
  {
    icon: <Users size={28} />,
    title: "Expert Trainers",
    desc: "Certified trainers to guide your fitness journey.",
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Diet Support",
    desc: "Personalized nutrition plans for better results.",
  },
  {
    icon: <Clock size={28} />,
    title: "Flexible Timing",
    desc: "Workout anytime that suits your schedule.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-black text-white pt-11">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-3">
          Why Choose Us
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          Train With The Best
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
  {features.map((item, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -10 }}
      className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 overflow-hidden"
    >
      {/* Glow Effect Layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 via-red-400/10 to-transparent blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-red-600/20 text-red-500 group-hover:shadow-lg group-hover:shadow-red-500/40 transition">
          {item.icon}
        </div>

        <h3 className="text-lg font-semibold mb-2 group-hover:text-red-400 transition">
          {item.title}
        </h3>

        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition">
          {item.desc}
        </p>
      </div>

      {/* Outer Glow Border */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-red-500/40 transition"></div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Features;