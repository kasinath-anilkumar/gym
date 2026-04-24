import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZW5ndGglMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Strength Area",
  },
  {
    src: "https://images.unsplash.com/photo-1614691771330-13f4e0deec54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcmRpbyUyMHRyYWluaW5nfGVufDB8fDB8fHww",
    title: "Cardio Zone",
  },
  {
    src: "https://media.istockphoto.com/id/1303402103/photo/empty-gym-room-with-heavy-bags.jpg?s=612x612&w=0&k=20&c=atNtLfKJv3XWjvDBNsobYd2B1qsppPXxDjagmNGRSRE=",
    title: "Workout Space",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1726481790170-c1d97ef1eb5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8",
    title: "Training Session",
  },
  {
    src: "https://images.unsplash.com/photo-1689877020200-403d8542d95d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bSUyMEVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Equipment",
  },
  {
    src: "https://media.istockphoto.com/id/1369524108/photo/shot-of-a-sled-push-in-an-empty-gym.jpg?s=612x612&w=0&k=20&c=f74jGDoReyXXzTxblRQlQwY1RAUwo1KqAAJbHRgEcPA=",
    title: "Functional Area",
  },
];

const Gallery = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-black text-white pt-20 px-4 md:px-10">
      
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-sm text-red-600 tracking-wider md:text-3xl font-light uppercase">
          Inside Our Gym
        </h2>
        <p className="text-white font-bold sm:text-lg md:text-5xl mt-3">
          Real Space Real Results.
        </p>
      </div>

      {/* 🔥 MASONRY GRID */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-7xl mx-auto space-y-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => setActive(i)}
          >
            <img
              src={img.src}
              className="w-full h-auto object-cover rounded-xl"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

            {/* title */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-sm md:text-lg font-semibold text-red-600 tracking-wide">
                {img.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 CLEAN MODAL */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              src={images[active].src}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-[90%] max-h-[80%] rounded-xl"
            />

            {/* close */}
            <button
              className="absolute top-6 right-6 text-white text-2xl"
              onClick={() => setActive(null)}
            >
              ✕
            </button>

            {/* title */}
            <div className="absolute bottom-6 text-white text-sm">
              {images[active].title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;