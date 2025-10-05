"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Award, Clock, Shield } from "lucide-react";

// 3D Plus Sign SVG Component
const Plus3D = ({ className = "", style = {} }) => (
    <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        className={className}
        style={style}
        aria-hidden="true"
    >
        <g filter="url(#plus3d-shadow)">
            <rect x="22" y="10" width="12" height="36" rx="6" fill="url(#plus3d-gradient)" />
            <rect x="10" y="22" width="36" height="12" rx="6" fill="url(#plus3d-gradient)" />
        </g>
        <defs>
            <linearGradient
                id="plus3d-gradient"
                x1="10"
                y1="10"
                x2="46"
                y2="46"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#0a3d62" />
                <stop offset="0.5" stopColor="#00a5d4" />
                <stop offset="1" stopColor="#e0f7fa" />
            </linearGradient>
            <filter
                id="plus3d-shadow"
                x="0"
                y="0"
                width="56"
                height="56"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0a3d62" floodOpacity="0.18" />
                <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#00a5d4" floodOpacity="0.10" />
            </filter>
        </defs>
    </svg>
);

const HeroSection = () => {
    return (
        <section
            className="w-full px-6 lg:px-12 py-12 lg:py-20 relative overflow-hidden"
            style={{
                background: "linear-gradient(120deg, #0a3d62 0%, #00a5d4 50%, #e0f7fa 100%)",
            }}
        >
            {/* Floating 3D plus signs with animation */}
            <Plus3D
                className="absolute left-8 top-8 opacity-30 rotate-12"
                style={{
                    zIndex: 1,
                    animation: "floatCircle1 6s ease-in-out infinite",
                    transformOrigin: "center",
                }}
            />
            <Plus3D
                className="absolute right-16 top-1/3 opacity-20 scale-125 -rotate-6"
                style={{
                    zIndex: 1,
                    animation: "floatCircle2 8s ease-in-out infinite",
                    transformOrigin: "center",
                }}
            />
            <Plus3D
                className="absolute left-1/2 bottom-10 opacity-25 -translate-x-1/2 rotate-45"
                style={{
                    zIndex: 1,
                    animation: "floatCircle3 10s ease-in-out infinite",
                    transformOrigin: "center",
                }}
            />
            <Plus3D
                className="absolute right-4 bottom-4 opacity-15 scale-75 rotate-12"
                style={{
                    zIndex: 1,
                    animation: "floatCircle4 7s ease-in-out infinite",
                    transformOrigin: "center",
                }}
            />

            {/* 3D grid subtle effect */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                aria-hidden="true"
                style={{
                    background:
                        "repeating-linear-gradient(135deg, rgba(10,61,98,0.04) 0px, rgba(10,61,98,0.04) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(45deg, rgba(0,165,212,0.04) 0px, rgba(0,165,212,0.04) 1px, transparent 1px, transparent 32px)",
                }}
            />

            <div className="w-[1160px] mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-8 relative">
                    {/* NABL Certified badge */}
                    <div className="absolute -top-14 left-0 inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <Shield className="w-4 h-4 text-primary-foreground" />
                        <span className="text-sm text-primary-foreground font-medium">
                            NABL Certified • 71 Years of Excellence
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="mt-0">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-primary-foreground leading-tight drop-shadow-[0_2px_8px_rgba(10,61,98,0.10)]">
                            <span className="block text-white">Advanced Diagnostics</span>
                            <span
                                className="block bg-gradient-to-r from-[#00ABEA] via-[#6BC7D0] to-[#51AEC8] bg-clip-text text-transparent"
                            >
                                Accurate Results
                            </span>
                            <span className="block text-white">Trusted Care</span>
                        </h1>

                        <p className="text-lg text-primary-foreground/90 max-w-xl mt-4">
                            Accurate Reports Powered by Advanced Technology & Trusted Experts.
                        </p>
                        <p className="text-white mt-2">
                            आपका स्वास्थ्य हमारे लिए ज़िम्मेदारी है, इसलिए हर रिपोर्ट सटीक और भरोसेमंद |
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            size="lg"
                            className="text-base font-semibold shadow-xl transition-all duration-200 border-0 bg-gradient-to-r from-[#0a3d62] via-[#00a5d4] to-[#e0f7fa] hover:from-[#00a5d4] hover:to-[#0a3d62] hover:scale-105 focus:ring-2 focus:ring-[#00a5d4] focus:ring-offset-2"
                        >
                            Book Appointment
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-base font-semibold border-2 border-[#00a5d4] bg-white/80 hover:bg-gradient-to-r hover:from-[#e0f7fa] hover:to-[#00a5d4] hover:text-white transition-all duration-200 shadow"
                        >
                            Learn More
                        </Button>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-primary-foreground/20">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-md">
                                <Users className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-primary-foreground">50K+</p>
                                <p className="text-sm text-primary-foreground/80">Happy Patients</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-md">
                                <Award className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-primary-foreground">100+</p>
                                <p className="text-sm text-primary-foreground/80">Expert Doctors</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-md">
                                <Clock className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-primary-foreground">24/7</p>
                                <p className="text-sm text-primary-foreground/80">Support</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image & 3D Plus */}
                <div className="relative flex justify-end -mt-24">
                    <div className="relative z-10">
                        <img
                            src="/images/doc.png"
                            alt="Professional doctor ready to provide healthcare services"
                            width={485}
                            height={520}
                            className="w-[485px] h-[500px] rounded-2xl shadow-[0_8px_32px_rgba(10,61,98,0.18)] object-cover bg-transparent"
                            style={{ background: "transparent" }}
                        />
                        <Plus3D className="absolute -top-8 -right-8 w-20 h-20 opacity-40 z-20 animate-floatCircle" />
                    </div>

                    {/* Background circle (no motion, just static) */}
                    <div
                        className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary-foreground/10 backdrop-blur-xl rounded-2xl -z-10 shadow-2xl"
                        // Removed animation and style for motion
                    />
                    {/* Animated background circle (rounded-full) */}
                    <div
                        className="absolute -top-6 -left-6 w-48 h-48 bg-primary-foreground/10 backdrop-blur-xl rounded-full -z-10 shadow-xl animate-bgCircleMotion2"
                        style={{
                            animation: "bgCircleMotion2 14s ease-in-out infinite",
                        }}
                    />
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
        @keyframes floatCircle1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(8px, -6px) rotate(10deg); }
          50% { transform: translate(0, -12px) rotate(20deg); }
          75% { transform: translate(-8px, -6px) rotate(10deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes floatCircle2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-6px, 6px) rotate(-10deg); }
          50% { transform: translate(0, 12px) rotate(-20deg); }
          75% { transform: translate(6px, 6px) rotate(-10deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes floatCircle3 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -10px) rotate(15deg); }
          50% { transform: translate(0, -20px) rotate(30deg); }
          75% { transform: translate(-10px, -10px) rotate(15deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes floatCircle4 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-8px, 8px) rotate(-15deg); }
          50% { transform: translate(0, 16px) rotate(-30deg); }
          75% { transform: translate(8px, 8px) rotate(-15deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        /* Animate background circle (rounded-2xl) */
        @keyframes bgCircleMotion {
          0% { transform: scale(1) translateY(0) rotate(0deg);}
          20% { transform: scale(1.05) translateY(-10px) rotate(2deg);}
          40% { transform: scale(1.1) translateY(-20px) rotate(4deg);}
          60% { transform: scale(1.05) translateY(-10px) rotate(2deg);}
          80% { transform: scale(1) translateY(0) rotate(0deg);}
          100% { transform: scale(1) translateY(0) rotate(0deg);}
        }
        /* Animate background circle (rounded-full) */
        @keyframes bgCircleMotion2 {
          0% { transform: scale(1) translateX(0) rotate(0deg);}
          20% { transform: scale(1.08) translateX(8px) rotate(-3deg);}
          40% { transform: scale(1.12) translateX(16px) rotate(-6deg);}
          60% { transform: scale(1.08) translateX(8px) rotate(-3deg);}
          80% { transform: scale(1) translateX(0) rotate(0deg);}
          100% { transform: scale(1) translateX(0) rotate(0deg);}
        }
      `}</style>
        </section>
    );
};

export default HeroSection;
