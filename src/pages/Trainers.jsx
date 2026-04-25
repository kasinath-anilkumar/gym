import React from "react";

const trainers = [
  {
    name: "Alex",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "David",
    role: "Bodybuilding Expert",
    image:
      "https://images.unsplash.com/photo-1738523686578-f18348c8292b?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "May",
    role: "Fitness Trainer",
    image:
      "https://images.unsplash.com/photo-1571388072750-31a921b3d900?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "John",
    role: "Fitness Trainer",
    image:
      "https://images.unsplash.com/photo-1701481080490-cb2e7f4fd5f8?w=600&auto=format&fit=crop&q=60",
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <p className="text-red-500 uppercase tracking-[0.3em] text-xs sm:text-sm mb-3">
          Our Trainers
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16">
          Meet Our Experts
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="
                group relative rounded-2xl overflow-hidden
                transition-all duration-300
                hover:-translate-y-2
                active:scale-95 active:-translate-y-1
                touch-manipulation
              "
            >

              {/* Image */}
              <img
                src={trainer.image}
                alt={trainer.name}
                className="
                  w-full h-[260px] sm:h-[320px] md:h-[400px] object-cover
                  transition duration-500
                  group-hover:scale-110
                  group-active:scale-105
                  group-hover:brightness-110
                  group-active:brightness-110
                "
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              {/* Glow Effect */}
              <div
                className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  group-active:opacity-100
                  bg-red-600/20 blur-2xl transition
                "
              ></div>

              {/* Border Glow */}
              <div
                className="
                  absolute inset-0 rounded-2xl border border-transparent
                  group-hover:border-red-500/40
                  group-active:border-red-500/40
                  transition
                "
              ></div>

              {/* Content */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-left">
                <h3 className="text-sm sm:text-lg font-semibold">
                  {trainer.name}
                </h3>
                <p className="text-red-500 text-xs sm:text-sm">
                  {trainer.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Trainers;