import React from "react";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">

      {/* Background */}
      <img
        src={heroImg}
        alt="gym banner"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 animate-[zoom_20s_linear_infinite]"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-e from-black via-black/80 to-transparent"></div>

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-red-600/20 blur-[120px] -left-20 top-[20%]"></div>

      {/* Spark Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,0,0,0.15)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:35px_35px] opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl  px-6 sm:px-10 md:px-16 text-white">

        {/* Small Heading */}
        <p className="text-red-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4 animate-fadeInUp">
          Transform Your Body
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] md:leading-[1.05] tracking-wide mb-4 sm:mb-6 animate-fadeInUp delay-200">
          Train Hard <br />
          <span className="text-red-600 tracking-wider block">
            Stay Strong
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 max-w-sm sm:max-w-md text-sm sm:text-base mb-6 sm:mb-8 animate-fadeInUp delay-300">
          Push your limits with professional trainers and world-class equipment.
        </p>

        {/* Buttons */}
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp delay-500">

  {/* PRIMARY CTA */}
  <button className="group relative px-6 sm:px-8 py-3 rounded-full font-medium overflow-hidden border border-white/20 text-white">
  
  {/* sliding background */}
  <span className="absolute inset-0 bg-red-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
  
  {/* text */}
  <span className="relative z-10 group-hover:text-white transition">
    Join Now
  </span>

</button>

  {/* SECONDARY CTA */}
  <a
    href="#pricing"
    className="px-6 sm:px-8 py-3 rounded-full font-medium text-white/80 border border-white/20 backdrop-blur-md hover:text-white hover:border-white/40 transition-all duration-300 text-center"
  >
    View Plans
  </a>

</div>

      </div>
    </section>
  );
};

export default Hero;