import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* Left Info */}
        <div>
          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-3">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-400 mb-6">
            Ready to transform your body? Contact us today and start your fitness journey.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📍 Kochi, Kerala</p>
            <p>📞 +91 9890 9822 23</p>
            <p>⏰ Mon - Sat: 6AM - 10PM</p>
          </div>
        </div>

        {/* Right Form */}
        <form className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-red-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-red-500"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-red-500"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-red-600 hover:bg-red-700 transition font-semibold shadow-lg shadow-red-900/40"
          >
            Send Enquiry
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;