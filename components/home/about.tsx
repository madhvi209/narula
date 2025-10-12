"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Users, TrendingUp, Hospital, MoveRight } from "lucide-react"
import { Button } from "../ui/button"

const BLUE_100 = "#f0faff";
const BLUE_200 = "#eaf5fd";
const BLUE_300 = "#bfe1ff";
const BLUE_400 = "#00A5D4";    // Primary button, accent
const BLUE_500 = "#2079c5";    // Dark hover blue
const BLUE_600 = "#134471";    // Deep heading/primary text
const BLUE_700 = "#2b8dad";    // Price font
const BLUE_800 = "#0090b8";    // Secondary accent

// Stat configuration for animated counts and display
const statsConfig = [
    {
        icon: Users,
        label: "Patients Served",
        format: (val: number) => `${val}+ Crore`,
        start: 1,
        end: 5,
        step: 1,
        interval: 270, // SLOWED DOWN
    },
    {
        icon: Hospital,
        label: "Diagnostic Centers",
        format: (val: number) => `${val}`,
        start: 1,
        end: 4,
        step: 1,
        interval: 420, // SLOWED DOWN
    },
    {
        icon: Award,
        label: "Of Excellence",
        format: (val: number) => `${val}+ Years`,
        start: 1,
        end: 73,
        step: 10,
        interval: 240, // SLOWED DOWN
    },
    {
        icon: TrendingUp,
        label: "Tests Available",
        format: (val: number) => `${val}+`,
        start: 1000,
        end: 10000,
        step: 1250,
        interval: 210, // SLOWED DOWN, AND step lowered for smoother count
    },
]

// Gradient for stat cards (lighter blue version of Know More button)
const LIGHT_GRADIENT =
    "linear-gradient(99deg, #e3f3fd 0%, #b2e3f9 30%, #d2f3ff 80%, #dbefff 100%)"

function AnimatedStat({ icon: Icon, start, end, step, format, interval, label }: any) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: false, margin: "-100px" })
    const [value, setValue] = useState(start)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (isInView && value < end) {
            if (intervalRef.current) clearInterval(intervalRef.current)
            intervalRef.current = setInterval(() => {
                setValue((prev: number) => {
                    const next = prev + step
                    if (next >= end) {
                        if (intervalRef.current) clearInterval(intervalRef.current)
                        return end
                    } else {
                        return next
                    }
                })
            }, interval)
        }
        if (!isInView && value !== start) {
            if (intervalRef.current) clearInterval(intervalRef.current)
            setValue(start)
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])

    return (
        <div
            ref={ref}
            className="flex flex-col items-center w-full"
        >
            <div
                className="rounded-lg shadow p-4 sm:p-6 w-full flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border border-[#c2e8fa]"
                style={{
                    background: LIGHT_GRADIENT,
                    color: "#146091"
                }}
            >
                <Icon className="w-7 h-7 sm:w-9 sm:h-9 mb-2" style={{ color: "#217ebc" }} />
                <div
                    className="text-lg sm:text-2xl font-bold"
                    style={{
                        color: "#115a83"
                    }}
                >
                    {format(value)}
                </div>
                <div
                    className="mt-2 text-xs sm:text-sm text-center font-semibold"
                    style={{
                        color: "#217ebc"
                    }}
                >
                    {label}
                </div>
            </div>
        </div>
    )
}

// Animated Experience Badge (now slowed animation)
function AnimatedExperienceBadge() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: false, margin: "-100px" })
    const [exp, setExp] = useState(1)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (isInView && exp < 73) {
            if (intervalRef.current) clearInterval(intervalRef.current)
            intervalRef.current = setInterval(() => {
                setExp((prev) => {
                    if (prev + 10 >= 73) {
                        if (intervalRef.current) clearInterval(intervalRef.current)
                        return 73
                    }
                    return prev + 10
                })
            }, 210) // SLOWED DOWN
        }
        if (!isInView && exp !== 1) {
            if (intervalRef.current) clearInterval(intervalRef.current)
            setExp(1)
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])

    return (
        <div
            ref={ref}
            className="absolute top-4 right-4 bg-gradient-to-r from-[#0a3d62] via-[#00a5d4] to-[#1a3033] text-white px-5 py-2 rounded-xl shadow-lg flex flex-col items-center"
            style={{ minWidth: 80 }}
        >
            <span className="text-xl font-medium opacity-80">Experience</span>
            <span className="text-3xl font-bold leading-none mt-1">
                {exp}+
                <span className="text-base align-top"> yrs</span>
            </span>
        </div>
    )
}

// Responsive AboutSection
export function AboutSection() {
    // Media query for responsiveness (no UI changes)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (typeof window !== "undefined") {
                setIsMobile(window.innerWidth < 640);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="py-20" id="about">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left section with layered images and experience badge */}
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex items-start justify-center"
                    >
                        {/* Large main image */}
                        <div className="relative rounded-2xl shadow-2xl overflow-hidden w-full max-w-[480px] aspect-[4/3] bg-[#e6f0fa]" style={{ minHeight: isMobile ? "300px" : "500px" }}>
                            <img
                                src="/images/narula.jpeg"
                                alt="Narula Diagnostics Center"
                                className="w-full h-full object-cover rounded-2xl"
                                style={{ minHeight: isMobile ? "300px" : "500px", height: isMobile ? "40px" : "50px" }}
                            />
                            {/* Experience badge with animation */}
                            <AnimatedExperienceBadge />
                        </div>
                        {/* Small overlay image, bottom left - hide on mobile */}
                        {!isMobile && (
                            <div className="absolute -bottom-10 -left-10 shadow-xl rounded-xl overflow-hidden border-4 border-white bg-white w-48 aspect-[4/3]">
                                <img
                                    src="/images/about.png"
                                    alt="Diagnostic Center"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                    </motion.div>

                    {/* Right section with text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-[24px] sm:text-[27px] md:text-[39px] font-semibold">
                            Your Trusted Partner in
                            <br />
                            <span className="bg-clip-text text-transparent" style={{
                                backgroundImage: `linear-gradient(to right, #2079c5, #00A5D4, #0090b8)`
                            }}>
                                Early Detection Since{" "}
                                <span className="relative group">
                                    <span
                                        className="bg-clip-text text-transparent relative"
                                        style={{
                                            backgroundImage: `linear-gradient(to right, #2079c5, #00A5D4, #0090b8)`,
                                            WebkitTextDecorationLine: "underline",
                                            textDecorationLine: "underline",
                                            WebkitTextDecorationColor: "transparent",
                                            textDecorationColor: "transparent",
                                            position: "relative",
                                            fontSize: "inherit",
                                            fontWeight: "inherit"
                                        }}
                                    >
                                        1952
                                        <span
                                            aria-hidden="true"
                                            className="absolute left-0 bottom-0 h-[4px] rounded transition-all duration-300"
                                            style={{
                                                width: "50%",
                                                background: "linear-gradient(to right, #2079c5, #00A5D4, #0090b8)",
                                                transition: "width 0.3s cubic-bezier(.4,0,.2,1)",
                                            }}
                                        />
                                    </span>
                                    <style jsx>{`
                                        .group:hover span[aria-hidden="true"] {
                                            width: 100% !important;
                                        }
                                    `}</style>
                                </span>
                            </span>
                        </h2>
                        <p className="text-gray-800 text-pretty leading-relaxed text-base sm:text-lg">
                            Narula Diagnostic Centre, founded in 1952 by Late Dr. Lal Chand Narula, has been a pioneer in medical imaging and diagnostics in North India. From introducing X-ray and Ultrasound to advanced technologies like Colour Doppler, Fetal Scanning, CT, MRI, and PET-CT, Narula has continuously led the way in healthcare innovation.
                        </p>
                        <p className="text-gray-800/80 text-pretty leading-relaxed text-base sm:text-lg">
                            With 3 state-of-the-art centres in Rohtak and Gurugram, the centre offers over 10000+ NABL-certified tests and has served more than 5 crore patients. Renowned for world-class equipment like the 128 Slice Lyso Crystal PET CT and advanced MRI systems, Narula Diagnostics is trusted for its accuracy, affordable testing, and timely online reports.
                        </p>
                        <div className="flex justify-end mt-8">
                            <Button
                                onClick={() => {
                                    console.log("Know More button clicked");
                                }}
                                className="font-semibold px-6 py-2 rounded-lg transition-colors duration-200 shadow-[var(--shadow-button)] hover:brightness-110 hover:scale-[1.03] hover:shadow-lg flex items-center gap-2"
                                style={{
                                    background: `linear-gradient(to right, ${BLUE_400}, ${BLUE_500}, ${BLUE_600})`,
                                    color: "#fff",
                                }}
                                type="button"
                            >
                                Know More..
                                <span>
                                    <MoveRight className="size-5 inline-block" />
                                </span>
                            </Button>
                        </div>
                    </motion.div>
                </div>
                {/* Stats below the image and text */}
                <div className="mt-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {statsConfig.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <AnimatedStat {...stat} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
