import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul",
    text: "Lost 10kg in 3 months! Trainers are amazing and very supportive.",
  },
  {
    name: "Arun",
    text: "Best gym in Kochi. Equipment and environment are top class.",
  },
  {
    name: "Vishnu",
    text: "I gained strength and confidence. Highly recommended!",
  },
  {
    name: "Ajay",
    text: "Clean environment and great trainers. Worth every rupee!",
  },
  {
  name: "Sanjay",
  text: "Amazing atmosphere and very motivating trainers. I look forward to every workout!",
},
{
  name: "Rakesh",
  text: "Great equipment and well-maintained space. Perfect place to stay consistent.",
},
{
  name: "Nithin",
  text: "I improved my fitness level within weeks. The guidance here is top-notch.",
},
{
  name: "Manoj",
  text: "Friendly staff and a positive vibe. Feels like a fitness family.",
},
{
  name: "Deepak",
  text: "Flexible timings and excellent support. Best decision I made for my health.",
}
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-3">
          Testimonials
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          What Our Members Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            el: ".testimonial-pagination",
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card relative rounded-2xl p-[1px] transition-all duration-500">

                <div className="absolute inset-0 rounded-2xl opacity-0 blur-md bg-red-500/40 transition-all duration-500"></div>

                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">

                  <div className="text-yellow-400 mb-4 text-lg">
                    ★★★★★
                  </div>

                  <p className="text-gray-300 mb-6 text-sm sm:text-base">
                    "{item.text}"
                  </p>

                  <h3 className="text-base sm:text-lg font-semibold">
                    {item.name}
                  </h3>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ ONLY ADD THIS */}
        <div className="testimonial-pagination mt-6 flex justify-center"></div>

      </div>

      {/* Styles unchanged */}
      <style jsx>{`
        .testimonial-card {
          opacity: 0.4;
          transform: scale(0.85);
        }

        .swiper-slide-active .testimonial-card {
          opacity: 1;
          transform: scale(1);
        }

        .swiper-pagination-bullet {
          background: #555;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #ef4444;
          width: 22px;
          border-radius: 999px;
          box-shadow: 0 0 12px rgba(239, 68, 68, 0.9),
                      0 0 25px rgba(239, 68, 68, 0.6);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;