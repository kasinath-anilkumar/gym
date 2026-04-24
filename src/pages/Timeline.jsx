import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Timeline = () => {
    const ref = useRef(null);
    const containerRef = useRef(null);

    const [height, setHeight] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const data = [
        {
            title: "January 2023",
            content:
                "Started the vision of building a premium fitness space focused on real transformations",
        },
        {
            title: "March 2023",
            content:
                "Gym location finalized and equipment planning began with expert consultation",
        },
        {
            title: "June 2023",
            content:
                "Construction and setup started with high-quality training equipment and interiors",
        },
        {
            title: "August 2023",
            content:
                "Team of certified trainers recruited to provide professional guidance",
        },
        {
            title: "October 2023",
            content:
                "Grand Opening – officially launched with first batch of members",
        },
        {
            title: "December 2023",
            content:
                "Achieved first 100+ active members and started real transformation journeys",
        },
        {
            title: "2024",
            content:
                "Helped hundreds of clients lose weight, gain muscle, and build confidence",
        },
        {
            title: "2025",
            content:
                "Expanding services with advanced programs, personal training, and nutrition plans",
        },
    ];

    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.getBoundingClientRect().height);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    // 🔥 ACTIVE INDEX BASED ON SCROLL
    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            const total = data.length;
            const index = Math.min(total - 1, Math.floor(latest * total));
            setActiveIndex(index);
        });
    }, [scrollYProgress]);

    return (
        <div id="about" className="relative">
            <div className="relative z-10 bg-black text-white">
                <div
                    className="w-full bg-transparent font-sans md:px-10"
                    ref={containerRef}
                >
                    {/* HEADER */}
                    <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 lg:px-10">
                        <h2 className="text-lg md:text-4xl mb-4 text-red-600 font-light uppercase tracking-wide max-w-4xl">
                            Our Journey
                        </h2>
                        <p className="text-white font-bold text-sm md:text-base max-w-sm">
                            Built on passion, driven by results — this is our transformation journey.
                        </p>
                    </div>

                    {/* TIMELINE */}
                    <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-start pt-10 md:pt-40 md:gap-10"
                            >
                                {/* LEFT SIDE */}
                                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                                    <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                                        <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-600" />
                                    </div>

                                    {/* DESKTOP TITLE */}
                                    <h3
                                        className={`hidden md:block text-xl md:pl-20 sm:text-xl md:text-5xl font-bold transition-all duration-300 ${activeIndex === index
                                                ? "text-red-500 scale-105"
                                                : "text-neutral-500"
                                            }`}
                                    >
                                        {item.title}
                                    </h3>
                                </div>

                                {/* RIGHT SIDE */}
                                <div className="relative pl-14 pr-4 md:pl-6 w-full flex items-start flex-col md:flex-row">
                                    {/* MOBILE TITLE */}
                                    <h3
                                        className={`md:hidden block text-2xl mb-4 font-bold transition-all duration-300 ${activeIndex === index
                                                ? "text-red-500"
                                                : "text-neutral-500"
                                            }`}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className={`uppercase text-[clamp(0.85rem,3vw,1.25rem)] sm:tracking-tighter lg:tracking-widest ml-6 md:ml-0 transition-all duration-300 ${activeIndex === index
                                                ? "text-white"
                                                : "text-gray-400"
                                            }`}
                                    >
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* PROGRESS LINE */}
                        <div
                            style={{ height: height + "px" }}
                            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-400 to-transparent"
                        >
                            <motion.div
                                style={{
                                    height: heightTransform,
                                    opacity: opacityTransform,
                                }}
                                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-red-500 via-red-500 to-transparent rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;