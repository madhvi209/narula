"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Users, Building2, TrendingUp } from "lucide-react"

const stats = [
    { icon: Users, value: "5+ Crore", label: "Patients Served" },
    { icon: Building2, value: "3", label: "Diagnostic Centers" },
    { icon: Award, value: "71+ Years", label: "Of Excellence" },
    { icon: TrendingUp, value: "2000+", label: "Tests Available" },
]

// Animated Experience Badge
function AnimatedExperienceBadge() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: false, margin: "-100px" }) // once: false so it triggers every time in view
    const [exp, setExp] = useState(1)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        // If in view and not already at 71, start animation
        if (isInView && exp < 71) {
            if (intervalRef.current) clearInterval(intervalRef.current)
            intervalRef.current = setInterval(() => {
                setExp((prev) => {
                    if (prev + 5 >= 71) {
                        if (intervalRef.current) clearInterval(intervalRef.current)
                        return 71
                    }
                    return prev + 5
                })
            }, 60)
        }
        // If out of view, reset to 1
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
            // Set gradient same as the "Know More" button: from-[#0a3d62] via-[#00a5d4] to-[#1a3033]
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

export function AboutSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#e3f0ff] via-[#e0eaff] to-[#b3d0f7]" id="about">
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
                        <div className="relative rounded-2xl shadow-2xl overflow-hidden w-full max-w-[480px] aspect-[4/3] bg-[#e6f0fa]" style={{ minHeight: "500px" }}>
                            <img
                                src="/images/narula.jpeg"
                                alt="Narula Diagnostics Center"
                                className="w-full h-full object-cover rounded-2xl"
                                style={{ minHeight: "500px", height: "50px" }}
                            />
                            {/* Experience badge with animation */}
                            <AnimatedExperienceBadge />
                        </div>
                        {/* Small overlay image, bottom left */}
                        <div className="absolute -bottom-10 -left-10 shadow-xl rounded-xl overflow-hidden border-4 border-white bg-white w-48 aspect-[4/3]">
                            <img
                                src="/images/center.jpg"
                                alt="Diagnostic Center"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right section with text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold">
                            Your Trusted Partner in
                            <br />
                            <span className="bg-gradient-to-r from-[#00A5D4] via-[#0d2c42] to-[#1f5860] bg-clip-text text-transparent">
                                Early Detection Since{" "}
                                <span className="relative group">
                                    <span
                                        className="bg-gradient-to-r from-[#00A5D4] via-[#0d2c42] to-[#1f5860] bg-clip-text text-transparent relative"
                                        style={{
                                            WebkitTextDecorationLine: "underline",
                                            textDecorationLine: "underline",
                                            WebkitTextDecorationColor: "transparent",
                                            textDecorationColor: "transparent",
                                            position: "relative",
                                        }}
                                    >
                                        1952
                                        <span
                                            aria-hidden="true"
                                            className="absolute left-0 bottom-0 h-[4px] rounded transition-all duration-300"
                                            style={{
                                                width: "50%",
                                                background: "linear-gradient(to right, #00A5D4, #0d2c42, #1f5860)",
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
                            With 3 state-of-the-art centres in Rohtak and Gurugram, the centre offers over 2000+ NABL-certified tests and has served more than 5 crore patients. Renowned for world-class equipment like the 128 Slice Lyso Crystal PET CT and advanced MRI systems, Narula Diagnostics is trusted for its accuracy, affordable testing, and timely online reports.
                        </p>
                        <div className="flex justify-end">
                            <a
                                href="#"
                                className="inline-block px-7 py-3 rounded-lg font-semibold text-white shadow-xl transition-all duration-200 border-0 bg-gradient-to-r from-[#0a3d62] via-[#00a5d4] to-[#1a3033] hover:from-[#00a5d4] hover:to-[#0a3d62] hover:scale-105 focus:ring-2 focus:ring-[#00a5d4] focus:ring-offset-2"
                            >
                                Know More..
                            </a>
                        </div>
                    </motion.div>
                </div>
                {/* Stats moved below the image and text, full width */}
                <div className="mt-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-[#e0eaff] via-[#b3d0f7] to-[#799dc6] p-4 sm:p-6 rounded-lg shadow flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer mt-4"
                            >
                                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563eb] mb-2 transition-colors duration-300 group-hover:text-[#1e40af]" />
                                <div className="text-lg sm:text-2xl font-bold text-[#1e293b]">{stat.value}</div>
                                <div className="text-xs sm:text-sm text-[#334155] text-center">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
