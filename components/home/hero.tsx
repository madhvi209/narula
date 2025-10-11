"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Award, Clock, Shield } from "lucide-react";

const HeroSection = () => {
    return (
        <section
            className="w-full px-6 lg:px-12 py-12 lg:py-20 relative overflow-hidden"
            style={{
                background: "linear-gradient(120deg, #B4E9FF 0%, #52CCF6 50%, #e0f7fa 100%)",
            }}
        >
            {/* 3D grid subtle effect */}
           

            <div className="w-[1160px] mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-8 relative">
                    {/* NABL Certified badge */}
                    <div className="absolute -top-14 left-0 inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <Shield className="w-4 h-4 text-[#020652]" />
                        <span className="text-sm text-[#020652] font-medium">
                            NABL Certified • 73+ Years of Excellence
                        </span>
                    </div>

                </div>
                {/* The right image area has been removed as per instructions */}
            </div>
            {/* All 3d motion/animation has been removed. */}
        </section>
    );
};

export default HeroSection;
