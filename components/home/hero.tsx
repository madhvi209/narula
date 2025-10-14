"use client";

import { Button } from "@/components/ui/button";
import { Phone, CalendarCheck, Clock8, Shield, UserCheck, TrendingUp, Award, Hospital, MapPin } from "lucide-react";
import React from "react";

// Data for panels
const HERO_PANELS = [
    {
        icon: <Clock8 className="w-6 h-6 text-[#20bffb]" />,
        title: "Opening Hours",
        content: (
            <div className="text-[15px] grid grid-cols-1 gap-y-2 max-w-[230px] w-full">
                <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-700">Monday - Friday</span>
                    <span className="text-[#0199CA] font-semibold">08:00 - 18:00</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-700">Saturday</span>
                    <span className="text-[#0199CA] font-semibold">09:00 - 17:00</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-700">Sunday</span>
                    <span className="text-[#0199CA] font-semibold">10:00 - 15:00</span>
                </div>
            </div>
        )
    },
    {
        icon: <CalendarCheck className="w-6 h-6 text-[#20bffb]" />,
        title: "Our Impact",
        content: (
            <div className="flex flex-col gap-4 mt-2 max-w-[460px] w-full">
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#e6f9ff] rounded-full">
                            <UserCheck className="w-4 h-4 text-[#20bffb]" />
                        </div>
                        <div>
                            <div className="text-xl font-bold text-[#0199CA]">5+ Crore</div>
                            <div className="text-sm text-slate-600 font-medium">Patients Served</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#e6f9ff] rounded-full">
                            <TrendingUp className="w-4 h-4 text-[#20bffb]" />
                        </div>
                        <div>
                            <div className="text-xl font-bold text-[#0199CA]">10000+</div>
                            <div className="text-sm text-slate-600 font-medium">Tests Available</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#e6f9ff] rounded-full">
                            <Award className="w-4 h-4 text-[#20bffb]" />
                        </div>
                        <div>
                            <div className="text-l font-bold text-[#0199CA]">73+ Yrs</div>
                            <div className="text-sm text-slate-600 font-medium">Experience</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 sm:ml-9">
                        <div className="p-2 bg-[#e6f9ff] rounded-full">
                            <Hospital className="w-4 h-4 text-[#20bffb]" />
                        </div>
                        <div className="flex flex-col">
                            <div className="text-xl font-bold text-[#0199CA]">3</div>
                            <div className="text-sm text-slate-600 font-medium ">Diagnostic<br />Centers</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        icon: <Phone className="w-6 h-6 text-[#20bffb]" />,
        title: "Contact Us",
        content: (
            <div className="flex flex-col gap-2 text-[15px] mt-2.5">
                <span className="text-sm font-medium flex items-center gap-2 text-[#0199CA]">
                    📞 8000775100 (Gurugram)
                </span>
                <span className="text-sm font-medium flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4" /> Medanta Road, Gurugram
                </span>
                <span className="text-sm font-medium flex items-center gap-2 text-[#0199CA]">
                    📞 9797973300 (Rohtak)
                </span>
                <span className="text-sm font-medium flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4" /> Civil Road, Rohtak | Medical Mod, Rohtak
                </span>
            </div>
        )
    }
];

const HeroSection = () => {
    return (
        <section className="relative min-h-[55vh] md:min-h-[55vh] bg-[#081a2d] flex flex-col justify-between overflow-hidden font-sans">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/herobg.jpg"
                    alt="Banner background"
                    className="w-full h-full object-cover object-top"
                    draggable={false}
                    style={{ opacity: 0.93, filter: "brightness(0.8) blur(1px)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081a2dcc] via-[#081A2D99] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-cyan-500/5 to-transparent mix-blend-screen pointer-events-none" />
                </div>
            </div>

            {/* NABL badge */}
            <div className="absolute top-4 left-6 sm:left-60 flex items-center gap-2 bg-white/30 backdrop-blur px-4 py-1.5 rounded-full shadow-2xl z-30 border border-blue-50">
                <Shield className="w-4 h-4 text-[#fff]" />
                <span className="text-[15px] text-[#fff] font-medium">
                    NABL Certified &bull; 73 Years of Excellence
                </span>
            </div>

            {/* Hero Content */}
            <div className="relative z-30 max-w-[1240px] mx-auto flex flex-col min-h-[20vh] px-4 pt-20 md:pt-28">
                {/* Heading & Buttons */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                    <div className="flex flex-col gap-6 md:gap-7 max-w-xl -mt-12 relative z-40">
                        <h1 className="leading-tight drop-shadow-2xl mb-2">
                            <span className="block text-white text-[5rem] md:text-4xl lg:text-7xl font-extrabold">
                                Bringing <span className="text-[#20bffb] drop-shadow-[0_1px_16px_rgba(33,203,255,0.4)]">Health</span>
                            </span>
                            <span className="block text-white/90 text-base sm:text-3xl font-light pt-4">
                                to life for the whole family
                            </span>
                        </h1>
                        <div className="flex gap-4 flex-wrap -mt-5">
                            <Button className="text-base font-semibold shadow-xl bg-gradient-to-r from-[#00a5d4] to-[#26638e] hover:bg-[#ffff] hover:text-[#00a5d4] transition-all duration-300 text-white h-11 px-6 min-w-[120px]">
                                Explore Services
                            </Button>
                            <Button className="bg-white text-[#00A5D4] border border-[#00A5D4] hover:bg-[#00A5D4] hover:text-white transition-all duration-300 h-11 px-6 min-w-[120px] flex items-center gap-2 font-semibold shadow-xl">
                                View Tests
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="w-full flex justify-center mt-8 md:mt-5 mb-7">
                    <div className="w-full max-w-5xl bg-white/95 rounded-2xl shadow-2xl border border-blue-100 px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-300">
                        {HERO_PANELS.map((panel, idx) => (
                            <div
                                key={panel.title}
                                className={`flex flex-col gap-2 relative py-4 px-4
                                    ${idx === 0 ? "md:rounded-l-2xl" : ""}
                                    ${idx === HERO_PANELS.length - 1 ? "md:rounded-r-2xl" : ""}
                                `}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex items-center justify-center bg-[#e7f8fd] rounded-full w-9 h-9 shadow">
                                        {panel.icon}
                                    </div>
                                    <span className="font-semibold text-[#223849] text-lg tracking-wide">{panel.title}</span>
                                </div>
                                {panel.content}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
