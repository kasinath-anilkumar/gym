import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    features: ["Gym Access", "Locker Facility", "Basic Support"],
  },
  {
    name: "Standard",
    price: "₹1499",
    popular: true,
    features: ["Personal Trainer", "Diet Plan", "Full Access"],
  },
  {
    name: "Premium",
    price: "₹1999",
    features: ["24/7 Access", "Personal Coach", "Priority Support"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          Choose Your Plan
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <motion.div
  key={index}
  whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
  whileTap={{ scale: 0.96 }} // 👈 mobile interaction
  transition={{ type: "spring", stiffness: 200, damping: 15 }}
  className="relative group rounded-2xl p-[2px] active:scale-95 touch-manipulation"
>

  {/* 🔥 Animated Gradient Border */}
  <div className="absolute inset-0 rounded-2xl 
    bg-gradient-to-r from-red-500 via-pink-500 to-red-500 
    opacity-0 group-hover:opacity-100 group-active:opacity-100
    blur-sm transition duration-500">
  </div>

  {/* Card */}
  <div className="relative bg-black/90 backdrop-blur-md rounded-2xl p-8 border border-white/10">

    {/* Popular Badge */}
    {plan.popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 px-4 py-1 text-xs rounded-full shadow-md shadow-red-500/40">
        Most Popular
      </span>
    )}

    {/* Title */}
    <h3 className="text-xl font-semibold mb-4">
      {plan.name}
    </h3>

    {/* Price */}
    <p className="text-4xl font-extrabold text-red-500 mb-6">
      {plan.price}
      <span className="text-sm text-gray-400"> / month</span>
    </p>

    {/* Features */}
    <ul className="space-y-3 text-gray-300 mb-8 text-sm">
      {plan.features.map((f, i) => (
        <li key={i}>✔ {f}</li>
      ))}
    </ul>

    {/* Button */}
    <button className="
      w-full py-3 rounded-full font-semibold 
      bg-red-600 
      shadow-lg shadow-red-900/40
      hover:bg-red-700 
      active:scale-95 active:bg-red-700
      transition duration-200
    ">
      Join Now
    </button>

  </div>
</motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;