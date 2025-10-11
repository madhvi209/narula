"use client"

import { motion, useAnimation } from "framer-motion"
import React, { useRef, useState } from "react"

// Only keeping used color constants
const BLUE_500 = "#2079c5";
const BLUE_600 = "#134471";
const BLUE_800 = "#0090b8";
const BLUE_400 = "#00A5D4";

// Array of reasons - unchanged
const reasons = [
    {
        icon: "/images/icons/trust-icon.png",
        title: "71+ Years of Trust Since 1952",
        description: "Decades of dedication, serving generations with unwavering reliability.",
    },
    {
        icon: "/images/icons/doc-icon.png",
        title: "Trusted by Doctors & Hospitals",
        description: "Preferred partner for medical professionals, hospitals, and clinics.",
    },
    {
        icon: "/images/icons/honest-icon.png",
        title: "Honest & Transparent Pricing",
        description: "No hidden fees upfront, fair pricing for all diagnostic services.",
    },
    {
        icon: "/images/icons/location-icon.png",
        title: "Presence in 3 Cities & 200+ Financers",
        description: "Conveniently located with extensive financial collaboration.",
    },
    {
        icon: "/images/icons/patient-icon.png",
        title: (
            <>
                5+ Crore Patients
                Served
            </>
        ),
        description: "Millions of patients served with care and compassion, across India.",
    },
    {
        icon: "/images/icons/cer-icon.png",
        title: "NABL & NABH Certified",
        description: "Highest standards of quality and safety, accredited and certified.",
    },
    {
        icon: "/images/icons/micro-icon.png",
        title: "Latest Equipment",
        description: "State-of-the-art diagnostic technology for precise results.",
    },
];

// Helper for fallback alt/title
function getTitleString(title: string | React.ReactElement) {
    return typeof title === "string" ? title : "Patients Served";
}

export function WhyChooseSection() {
    // Duplicate for seamless loop
    const cardsData = [...reasons, ...reasons];
    const TRANSITION_DURATION = 24; // seconds

    // Animation controls
    const controls = useAnimation();
    const [isPaused, setIsPaused] = useState(false);

    // Card and layout dimensions
    const cardWidth = 370, cardHeight = 430, gapPx = 32;
    const totalScrollWidth = (cardWidth + gapPx) * reasons.length;
    const iconAreaHeight = 310;

    // --- Custom implementation for pausable/resumable animation ---
    // We'll keep the "elapsedWhenPaused" in state/ref
    const elapsedWhenPausedRef = useRef(0); // how much time elapsed before pause (in seconds)
    const rafIdRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);

    const speed = totalScrollWidth / TRANSITION_DURATION;

    // The actual animation function
    function animateScroll(timestamp: number) {
        if (startRef.current === null) startRef.current = timestamp;
        const timeDelta = (timestamp - startRef.current) / 1000 + elapsedWhenPausedRef.current; // total elapsed in seconds
        const x = -((timeDelta * speed) % totalScrollWidth);
        controls.set({ x });
        if (!isPaused) {
            rafIdRef.current = requestAnimationFrame(animateScroll);
        }
    }

    React.useEffect(() => {
        if (isPaused) {
            // Animation paused, record how much time has elapsed so far
            if (startRef.current !== null) {
                const elapsed = (performance.now() - startRef.current) / 1000;
                elapsedWhenPausedRef.current += elapsed;
            }
            if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
            rafIdRef.current = null;
            startRef.current = null;
        } else {
            // Resume from where left off (don't reset elapsed)
            startRef.current = null;
            rafIdRef.current = requestAnimationFrame(animateScroll);
        }
        return () => {
            if (rafIdRef.current !== null) {
                cancelAnimationFrame(rafIdRef.current);
                rafIdRef.current = null;
            }
            startRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPaused, totalScrollWidth, speed, controls]);

    // Pause/resume scroll on hover ONLY for the cards area
    const onMouseEnter = () => setIsPaused(true);
    const onMouseLeave = () => setIsPaused(false);

    // On mouse leave, need to make sure time bookkeeping is ok
    React.useEffect(() => {
        // Reset elapsed time when slider completes a full loop to avoid number drift
        // (Optional: If you want to prevent floating point errors after long time)
        // Just let it run unless there is a visible problem.
        // Reset scroll when page is unmounted:
        return () => {
            elapsedWhenPausedRef.current = 0;
            startRef.current = null;
        };
    }, []);

    // Background gradient for the section (top to bottom, soft blues and white)
    const sectionGradient = `linear-gradient(120deg, #DFF7FA  0%, #DFF7FA 60%, #ffff 100%)`;

    return (
        <section
            className="w-full flex justify-center px-2 sm:px-4 py-14 md:py-20 relative overflow-hidden min-h-[400px] md:min-h-[700px]" // reduced y-padding and removed -mt-7
            style={{
                background: sectionGradient,
            }}
        >
            <div className="w-full max-w-[1180px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-10" // reduce bottom margin between title and slider
                >
                    <h2 className="text-[24px] sm:text-[27px] md:text-[40px] font-semibold mb-3" style={{ color: BLUE_600 }}>
                        Why We{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: `linear-gradient(to right, ${BLUE_400}, ${BLUE_500}, ${BLUE_800})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                display: "inline-block"
                            }}
                        >
                            Choose Narula Center
                        </span>
                    </h2>
                </motion.div>
                {/* Auto-scrolling slider */}
                <div
                    className="relative w-full select-none"
                    style={{
                        height: cardHeight + 26,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <motion.div
                        className="flex gap-7 md:gap-8"
                        style={{
                            width: "max-content",
                        }}
                        animate={controls}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        {cardsData.map((reason, idx) => (
                            <div
                                key={getTitleString(reason.title) + idx}
                                className="rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center justify-start p-0 overflow-hidden"
                                style={{
                                    height: cardHeight,
                                    minHeight: cardHeight,
                                    maxHeight: cardHeight,
                                    maxWidth: cardWidth,
                                    width: cardWidth,
                                    margin: "30px auto 0 auto",
                                    background: "radial-gradient(circle at 60% 0%, #e9f7fb 75%, #fff 100%)",
                                    flex: "0 0 auto",
                                }}
                            >
                                {/* Icon Area */}
                                <div
                                    className="w-full"
                                    style={{
                                        height: iconAreaHeight,
                                        minHeight: iconAreaHeight,
                                        maxHeight: iconAreaHeight,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: "hidden",
                                        background: "#f3fbfd",
                                        borderBottom: "1px solid #f0f5fa",
                                    }}
                                >
                                    <img
                                        src={reason.icon}
                                        alt={getTitleString(reason.title)}
                                        className="w-full h-full object-cover"
                                        style={{
                                            display: "block",
                                        }}
                                        draggable="false"
                                    />
                                </div>
                                {/* Title & Desc Area */}
                                <div className="flex flex-col items-center px-6 py-4 flex-1 w-full bg-gray-100">
                                    <div className="font-bold text-base md:text-lg text-[#134471] text-center leading-tight mb-2">
                                        {reason.title}
                                    </div>
                                    <div className="text-xs md:text-sm text-[#134471] text-center font-normal">
                                        {reason.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
