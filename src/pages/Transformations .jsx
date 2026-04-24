import React, { useRef, useState } from "react";

import before1 from "../assets/before1.jpg";
import after1 from "../assets/after1.jpg";
import before2 from "../assets/before2.jpg";
import after2 from "../assets/after2.jpg";

const clients = [
  {
    id: 1,
    name: "Rahul",
    before: before1,
    after: after1,
    weightBefore: "86 KG",
    weightAfter: "72 KG",
    fatBefore: "24%",
    fatAfter: "12%",
    duration: "6 Months",
  },
  {
    id: 2,
    name: "Arjun",
    before: before2,
    after: after2,
    weightBefore: "92 KG",
    weightAfter: "75 KG",
    fatBefore: "28%",
    fatAfter: "14%",
    duration: " Months",
  },
];

const Transformations = () => {
  const containerRef = useRef(null);
  const [activeClient, setActiveClient] = useState(clients[0]);
  const [slider, setSlider] = useState(50);
  const [isInteracting, setIsInteracting] = useState(false);

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = ((clientX - rect.left) / rect.width) * 100;

    setSlider(Math.max(0, Math.min(100, x)));
  };

  return (
    <div className="bg-black text-white py-16 px-4 md:px-10">
        <p className="text-xs font-light sm:text-sm md:text-lg tracking-[0.25em] text-red-500 text-center mb-3 uppercase">
        Client Transformations
        </p>
      <p className="sm:text-sm md:text-4xl font-bold mb-16 text-center">
        See The Incredible Transformations of Our Clients.
      </p>

      {/* 🔥 MAIN CONTAINER */}
      <div
        ref={containerRef}
        className="relative max-w-5xl mx-auto h-[500px] overflow-hidden rounded-2xl border border-gray-700 cursor-ew-resize"
        onMouseDown={() => setIsInteracting(true)}
        onMouseUp={() => setIsInteracting(false)}
        onMouseLeave={() => setIsInteracting(false)}
        onMouseMove={(e) => isInteracting && handleMove(e)}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => setIsInteracting(false)}
        onTouchMove={(e) => isInteracting && handleMove(e)}
      >
        {/* AFTER IMAGE */}
        <img
          src={activeClient.after}
          className="absolute w-full h-full object-cover"
        />

        {/* BEFORE IMAGE */}
        <div
          className="absolute w-full h-full"
          style={{
            clipPath: `inset(0 ${100 - slider}% 0 0)`,
            transition: isInteracting ? "none" : "clip-path 0.2s ease-out",
          }}
        >
          <img
            src={activeClient.before}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🔥 DARK GRADIENT FOR TEXT */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent" />

        {/* 🔥 TRANSFORMATION DETAILS */}
        <div className="absolute bottom-4 left-4 text-sm md:text-base">
          <p className="font-semibold text-gray-300">Before</p>
          <p>Weight: {activeClient.weightBefore}</p>
          <p>Fat: {activeClient.fatBefore}</p>
        </div>

        <div className="absolute bottom-4 right-4 text-sm md:text-base text-right">
          <p className="font-semibold text-yellow-400">After</p>
          <p>Weight: {activeClient.weightAfter}</p>
          <p>Fat: {activeClient.fatAfter}</p>
        </div>

        {/* 🔥 DURATION BADGE */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
          {activeClient.duration}
        </div>

        {/* DIVIDER */}
        <div
          className="absolute top-0 h-full w-[3px] bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.9)]"
          style={{ left: `${slider}%` }}
        />

        {/* HANDLE */}
        <div
          className="absolute top-1/2 pointer-events-none"
          style={{
            left: `${slider}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white shadow-[0_0_25px_rgba(255,255,255,0.8)]" />
        </div>

        {/* LABELS */}
        <div className="absolute top-4 left-4 bg-gray-800 px-3 py-1 rounded text-xs">
          BEFORE
        </div>
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded text-xs">
          AFTER
        </div>
      </div>

      {/* 🔥 CLIENT SELECT (UPGRADED STYLE) */}
      <div className="mt-12 flex gap-3 justify-center flex-wrap">
  {clients.map((client) => (
    <button
      key={client.id}
      onClick={() => {
        setActiveClient(client);
        setSlider(50);
      }}
      className={`group relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        activeClient.id === client.id
          ? "bg-red-600 text-white shadow-md"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {/* Background hover glow */}
      <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {client.name}
        <span className="text-[10px] opacity-60">
          • {client.duration}
        </span>
      </span>
    </button>
  ))}
</div>
    </div>
  );
};

export default Transformations;