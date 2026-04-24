import React from "react";

const trainers = [
  {
    name: "Arjun",
    role: "Strength Coach",
    image: "https://static.vecteezy.com/system/resources/thumbnails/046/837/306/small/fitness-trainer-smiling-in-gym-with-dumbbells-diverse-trainer-health-and-wellness-promotion-professional-athlete-strength-training-coach-photo.jpg",
  },
  {
    name: "Arun",
    role: "Bodybuilding Expert",
    image: "https://digitalasset.intuit.com/content/dam/intuit/cg/en_us/turbotax/tax-tips/images/self-employed/gym-instructor-wearing-tshirt-im-the-coach_inf31364.jpg",
  },
  {
    name: "Priya",
    role: "Fitness Trainer",
    image: "https://www.citywoofer.com/blog/wp-content/uploads/2023/05/MG_0468-225x400.jpg",
  },
  {
    name: "Akash",
    role: "Fitness Trainer",
    image: "https://www.uaepersonaltrainers.com/wp-content/uploads/2022/10/Abu-Dhabi-Personal-Trainer-and-Fitness-Coach-Gerald-Gruen-e1719216246554.jpg",
  },
];

const Trainers = () => {
  return (
    <section  id="trainers" className="bg-black text-white py-20">
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
              className="group relative rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >

              {/* Image */}
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-[260px] sm:h-[320px] md:h-[400px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-red-600/20 blur-2xl transition"></div>

              {/* Border Glow */}
              <div className="absolute inset-0 border border-transparent group-hover:border-red-500/40 rounded-2xl transition"></div>

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