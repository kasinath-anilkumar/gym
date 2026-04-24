import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "https://i.pinimg.com/736x/82/36/1c/82361ce6f01ab043ffac62fb2d455f7c.jpg",
  "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
  "https://i.pinimg.com/736x/80/36/03/80360346c56e9628bc43a753c189b510.jpg",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
  "https://i.pinimg.com/originals/a4/e0/96/a4e096bab9b86e72bae24ae9637bb377.jpg",
  "https://i.pinimg.com/474x/97/ea/13/97ea139d2e5feeae0f23b085a80252f9.jpg",
  "https://img.freepik.com/free-photo/image-fit-man-who-is-doing-exercises_613910-16773.jpg?semt=ais_hybrid&w=740&q=80",
  "https://images.unsplash.com/photo-1744551472743-efc22070ec1a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
];

const HorizontalScroll = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section className="bg-black text-white">

      {/* Heading */}
      <div className="text-center pt-4">
        <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-3">
          Transformation
        </p>
        <h2 className="text-3xl md:text-5xl font-bold">
          Real Results
        </h2>
      </div>

      {/* Scroll Section */}
      <div ref={ref} className="h-[180vh] md:h-[220vh] relative">

        <div className="sticky top-0 h-screen flex items-center overflow-hidden">

          <motion.div
            style={{ x }}
            className="flex gap-6 px-6"
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="min-w-[280px] md:min-w-[400px] h-[400px] md:h-[500px] rounded-2xl overflow-hidden relative group"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-red-600/20 blur-2xl transition"></div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;