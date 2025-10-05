"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const reasons = [
    {
        icon: "/images/icons/trust-icon.png",
        title: "71+ Years of Trust Since 1952",
        description: "",
    },
    {
        icon: "/images/icons/doc-icon.png",
        title: "Trusted by Doctors & Hospitals",
        description: "",
    },
    {
        icon: "/images/icons/honest-icon.png",
        title: "Honest & Transparent Pricing",
        description: "",
    },
    {
        icon: "/images/icons/location-icon.png",
        title: "Presence in 3 Cities & 200+ Financers",
        description: "",
    },
    {
        icon: "/images/icons/patient-icon.png",
        title: (
            <>
                5+ Crore Patients <br />
                Served
            </>
        ),
        description: "",
    },
    {
        icon: "/images/icons/cer-icon.png",
        title: "NABL & NABH Certified",
        description: "",
    },
    {
        icon: "/images/icons/micro-icon.png",
        title: "Latest Equipment",
        description: "",
    },
]

// Helper: repeat the reasons to make the slider seamless
const SLIDER_REPEAT = 2; // repeat twice for smooth loop

export function WhyChooseSection() {
    // For accessibility, flatten the title for alt and key
    const getTitleString = (title: string | React.ReactElement) =>
        typeof title === "string"
            ? title
            : "Patients Served";

    // Calculate total width for animation
    const ICON_WIDTH = 200; // px, increased for larger icons and margin
    const GAP = 48; // px, gap between items
    const totalReasons = reasons.length * SLIDER_REPEAT;
    const sliderWidth = totalReasons * (ICON_WIDTH + GAP);

    // Animation: slide left, then reset, infinite loop
    // We'll use framer-motion's keyframes for a smooth infinite scroll
    // The animation will move from 0 to -sliderWidth/2 px (since we repeat the array)
    // and then instantly jump back to 0

    return (
        <section
            className="py-20 md:py-36 bg-white relative overflow-hidden min-h-[400px] md:min-h-[700px]"
        >
            {/* Background image */}
            <img
                src="/images/bg.jpg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-70"
                style={{ zIndex: 0 }}
            />
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl text-gray-800 sm:text-5xl font-bold mb-6 tracking-tight">
                        Why Patient
                        <span className="bg-gradient-to-r from-[#00A5D4] via-[#0d2c42] to-[#1f5860] bg-clip-text text-transparent"> Choose Narula Diagnostics
                        </span>
                    </h2>
                </motion.div>
                <div
                    className="relative w-full min-h-[260px] flex items-center"
                    style={{
                        overflowX: "hidden",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    <motion.div
                        className="flex items-start"
                        style={{
                            width: `${sliderWidth}px`,
                            gap: `${GAP}px`,
                        }}
                        animate={{
                            x: [0, -((reasons.length) * (ICON_WIDTH + GAP))],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                            duration: 18, // seconds, adjust for speed
                        }}
                    >
                        {Array.from({ length: SLIDER_REPEAT }).flatMap((_, repeatIdx) =>
                            reasons.map((reason, idx) => (
                                <div
                                    key={`${getTitleString(reason.title)}-${repeatIdx}-${idx}`}
                                    className="flex flex-col items-center px-2"
                                    style={{
                                        minWidth: `${ICON_WIDTH}px`,
                                        maxWidth: `${ICON_WIDTH}px`,
                                    }}
                                >
                                    <div
                                        className="w-48 h-48 flex items-center justify-center rounded-full mb-6 overflow-hidden mt-6"
                                        style={{
                                            position: "relative",
                                            background: `url(${reason.icon}) center/cover no-repeat`,
                                            // fallback gradient if image fails
                                            backgroundColor: "#e0eaff",
                                        }}
                                    >
                                        {/* 
                                            The image is now used as a background fill for the icon circle.
                                            Optionally, you can add an <img> with opacity 0 for accessibility/SEO,
                                            or use aria-label on the div.
                                        */}
                                        <img
                                            src={reason.icon}
                                            alt={typeof reason.title === "string" ? reason.title : "Patients Served"}
                                            style={{
                                                width: 0,
                                                height: 0,
                                                opacity: 0,
                                                position: "absolute",
                                            }}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="font-semibold text-lg text-white text-center leading-tight">
                                        {reason.title}
                                    </div>
                                    {reason.description && (
                                        <div className="text-sm text-[#e0eaff] mt-1 text-center">
                                            {reason.description}
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </motion.div>
                    {/* Hide scrollbar for all browsers */}
                    <style jsx>{`
                        .relative.w-full::-webkit-scrollbar {
                            display: none !important;
                        }
                        .relative.w-full {
                            -ms-overflow-style: none !important;
                            scrollbar-width: none !important;
                        }
                    `}</style>
                </div>
            </div>
        </section>
    )
}
