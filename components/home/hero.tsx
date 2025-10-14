"use client";

import { Button } from "@/components/ui/button";
import { Phone, CalendarCheck, Clock8, Shield } from "lucide-react";
import React from "react";

// Data for panels to optimize and minimize repetition
const HERO_PANELS = [
    {
        icon: <Clock8 className="w-5 h-5 text-[#4ecfff]" />,
        title: "Opening Hours",
        content: (
            <div className="text-[15px] text-muted-foreground grid grid-cols-2 gap-x-6 gap-y-1">
                <span className="font-medium text-slate-700">Monday - Friday</span>
                <span className="text-blue-700 font-semibold">08:00 - 18:00</span>
                <span className="font-medium text-slate-700">Saturday</span>
                <span className="text-blue-700 font-semibold">09:00 - 17:00</span>
                <span className="font-medium text-slate-700">Sunday</span>
                <span className="text-blue-700 font-semibold">10:00 - 15:00</span>
            </div>
        )
    },
    {
        icon: <CalendarCheck className="w-5 h-5 text-[#4ecfff]" />,
        title: "Doctors Timetable",
        content: (
            <>
                <div className="text-[15px] text-slate-600">
                    Your treatment plan is designed for steady progress, with every phase promptly implemented.
                </div>
                <div className="mt-3">
                    <Button
                        size="sm"
                        className="bg-[#4ecfff] text-white font-semibold px-4 rounded hover:bg-[#28befa]"
                    >
                        VIEW TIMETABLE
                    </Button>
                </div>
            </>
        )
    },
    {
        icon: <Phone className="w-5 h-5 text-[#4ecfff]" />,
        title: "Emergency Cases",
        content: (
            <>
                <div className="flex items-center text-blue-700 gap-2 text-2xl font-bold mt-1 mb-1">
                    800 123 45 67
                </div>
                <div className="text-[15px] text-slate-600">
                    Your treatment plan is designed for steady progress, with every phase promptly implemented.
                </div>
            </>
        )
    }
];

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-[520px] overflow-hidden bg-white pb-0">
            {/* NABL Certified badge */}
            <div className="absolute top-5 left-24 sm:left-46 inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-30">
                <Shield className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm text-primary-foreground font-medium">
                    NABL Certified &bull; 71 Years of Excellence
                </span>
            </div>
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/herobg.jpg"
                    alt="Banner background"
                    className="w-full h-full object-cover object-right md:object-center"
                    draggable={false}
                    style={{
                        opacity: 0.87,
                        filter: "brightness(0.69)"
                    }}
                />
            </div>
            {/* Overlay to darken left side for text */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none z-10"
                aria-hidden="true"
            />
            {/* Hero Content */}
            <div className="relative z-20 max-w-[1200px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between pt-20 md:pt-18">
                {/* Left Column */}
                <div className="flex-1 flex flex-col items-start gap-5 md:gap-7 max-w-xl">
                    {/* Heading */}
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl">
                        <span className="block">
                            Bringing <span className="text-[#4ecfff]">Health</span>
                        </span>
                        <span className="block text-white/90 text-lg sm:text-2xl font-light pt-2">
                            to life for the whole family
                        </span>
                    </h1>
                    {/* Buttons */}
                    <div className="flex items-center gap-4 flex-wrap mt-0">
                        <Button className="text-base font-semibold shadow-xl bg-gradient-to-r from-[#00a5d4] to-[#0a3d62] hover:from-[#0a3d62] hover:to-[#00a5d4] text-white h-11 px-6 min-w-[120px] flex items-center gap-2">
                            VIEW DEPARTMENTS
                        </Button>
                        <Button
                            className="bg-white text-[#00A5D4] border border-[#00A5D4] hover:bg-[#90bfca] h-11 px-6 min-w-[120px] flex items-center gap-2 font-semibold shadow-xl"
                        >
                            GET IN TOUCH
                        </Button>
                    </div>
                </div>
            </div>
            {/* Hero Info Panel */}
            <div className="relative z-30 w-full max-w-[1200px] mx-auto px-2 sm:px-10 mt-4">
                <div className="w-full bg-white/95 rounded-xl shadow-2xl -mt-16 mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x border border-blue-100 overflow-hidden translate-y-12 sm:translate-y-16">
                    {HERO_PANELS.map((panel, idx) => (
                        <div key={panel.title} className="py-7 px-6 flex flex-col gap-2">
                            <div className="flex items-center gap-2 mb-1">
                                {panel.icon}
                                <span className="font-semibold text-slate-800 text-lg">{panel.title}</span>
                            </div>
                            {panel.content}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
