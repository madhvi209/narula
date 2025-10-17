"use client"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

// Blue color palette (REUSE ONLY THESE for ANY blue usage)
const BLUE_100 = "#f0faff";
const BLUE_200 = "#eaf5fd";
const BLUE_300 = "#bfe1ff";
const BLUE_400 = "#00A5D4";    // Primary button, accent
const BLUE_500 = "#2079c5";    // Dark hover blue
const BLUE_600 = "#134471";    // Deep heading/primary text
const BLUE_700 = "#2b8dad";    // Price font
const BLUE_800 = "#0090b8";    // Secondary accent

const experts = [
    {
        img: "/images/DrArjun.jpeg",
        name: "Dr. Arun Kumar Narula",
        resposibility: "Director",
        role: "Chief Radiologist",
        desc: "M.B.B.S., M.D., D.M.R.D., F.I.A.M.S. (Radio-Diagnosis) Chief Radiologist HMC",
        regnNo: "395"
    },
    {
        img: "/images/DrApoorv.jpeg",
        name: "Dr. Apoorv Narula",
        role: "Senior Radiologist",
        desc: "M.B.B.S., M.D. (Radio-Diagnosis), L.L.B. (Gold Medalist) Fellow Foetal Medicine & Clinical Genetics Fellowship in Echocardiography Fellowship in Electrocardiography Fellowship in Sports Medicine Diploma in Musculoskeletal Imaging (Spain)",
        regnNo: "7473"
    },
    {
        img: "/images/DrTashi.png",
        name: "Dr. Tashi Narula",
        role: "Senior Ethologist",
        desc: "M.B.B.S., M.D. (Pathology) (Gold Medalist) HMC",
        regnNo: " 14797"
    },
]

const sectionGradient = `linear-gradient(120deg, #DFF7FA  0%, #DFF7FA 60%, #ffff 100%)`;

// doctor card (doctor ke name ke bg me card jaisa design, use gradient blue color do)
function DoctorCard({ img, name, role, desc, regnNo, resposibility }: any) {
    // card sizes similar to why-choose cards
    const cardWidth = 310;
    // Find max height for text area dynamically based on longest text
    // But we can't do it statically here. Instead, force all cards to be same height.
    // Manually pick enough height to accommodate the longest text.
    const cardHeight = 510; // increased height for all cards to allow Regn. No. area
    const imgAreaHeight = 230;
    const textAreaMinHeight = 175; // Ensures room for longest description

    return (
        <div
            className="rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center p-0 overflow-hidden"
            style={{
                minHeight: cardHeight,
                height: cardHeight,
                maxWidth: cardWidth,
                width: "100%",
                margin: "auto",
                background: "radial-gradient(circle at 60% 0%, #e9f7fb 75%, #fff 100%)",
                flex: "0 0 auto",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Image area */}
            <div
                className="w-full relative"
                style={{
                    height: imgAreaHeight,
                    minHeight: imgAreaHeight,
                    maxHeight: imgAreaHeight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    background: "#f3fbfd",
                    borderBottom: "1px solid #f0f5fa",
                }}
            >
                <img
                    src={img || "/placeholder.svg"}
                    alt={name + " portrait"}
                    className="w-full h-full object-cover"
                    style={{
                        display: "block",
                        objectPosition: "top center"
                    }}
                    draggable={false}
                />
            </div>
            {/* Doctor Name below image, card style, blue gradient bg */}
            <div
                className="w-full flex justify-center -mt-6 z-[2]" // negative margin to slightly overlap card
                style={{
                    pointerEvents: "none",
                }}
            >
                <div
                    className="px-5 py-2 rounded-xl shadow-md font-bold text-base md:text-lg text-white text-center"
                    style={{
                        background: `linear-gradient(90deg, ${BLUE_500} 0%, ${BLUE_400} 60%, ${BLUE_800} 100%)`,
                        minWidth: 0,
                        maxWidth: cardWidth - 40,
                        boxShadow: "0 4px 26px 0 rgba(32,121,197,0.10)",
                        border: "1px solid #a3c9eb",
                        letterSpacing: 0.1,
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    {name}
                </div>
            </div>
            {/* Text area */}
            <div
                className="flex flex-col items-center px-6 py-4 flex-1 w-full bg-gray-100 mt-2"
                style={{
                    minHeight: textAreaMinHeight,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                }}
            >
                {/* Show resposibility if provided FIRST */}
                {resposibility && (
                    <div
                        className="text-xs md:text-sm text-blue-800 font-medium mb-1"
                        style={{
                            color: BLUE_800,
                        }}
                    >
                        {resposibility}
                    </div>
                )}
                <div
                    className="text-sm md:text-base text-[#134471] text-center font-bold mb-1"
                    style={{
                        color: BLUE_600
                    }}
                >
                    {role}
                </div>
                <div
                    className="text-xs md:text-sm text-[#134471] text-center font-normal"
                    style={{
                        overflowY: "auto",
                        maxHeight: textAreaMinHeight - 30,
                        width: "100%",
                        wordBreak: "break-word",
                    }}
                >
                    {desc}
                </div>
                {regnNo && (
                    <div
                        className="mt-3 text-xs md:text-sm font-medium"
                        style={{
                            color: "#2079c5",
                            background: "#eaf5fd",
                            borderRadius: 8,
                            padding: "4px 12px",
                            marginTop: 10,
                            width: "fit-content",
                            alignSelf: "center"
                        }}
                    >
                        Regn. No.: {regnNo}
                    </div>
                )}
            </div>
        </div>
    )
}

export default function TeamSection({ className }: { className?: string }) {
    return (
        <section
            className={cn(
                "w-full flex justify-center",
                className
            )}
            style={{
                background: sectionGradient,
                // marginTop removed to eliminate gap between sections
            }}
        >
            <div
                className={cn(
                    "w-full",
                    "max-w-[95vw]",
                    "sm:max-w-2xl",
                    "md:max-w-3xl",
                    "lg:max-w-5xl",
                    "xl:max-w-6xl",
                    "2xl:max-w-7xl",
                    "mx-auto",
                    "px-4 sm:px-8"
                )}
            >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4 sm:gap-0 mt-12">
                    <h2 className="text-[24px] sm:text-[27px] md:text-[39px] font-semibold mb-3 text-primary" >
                        Our Team of{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: `linear-gradient(to right, #2079c5, #00A5D4, #0090b8)`
                            }}
                        >
                            Specialized Medical Experts
                        </span>
                    </h2>
                </div>

                <div className="overflow-hidden rounded-xl border border-primary/20 p-2">
                    <img
                        src="/images/team.jpeg"
                        alt="Our medical professionals team group photo"
                        className="w-full object-cover rounded-lg"
                        style={{ aspectRatio: "19/9" }}
                    />
                </div>

                <div className="text-center text-xl md:text-2xl font-semibold text-primary mt-10">
                    Meet Our Specialists
                </div>

                {/* Card grid like why-choose-us */}
                <div className="relative my-12">
                    <div className="grid gap-7 md:gap-8 sm:grid-cols-2 md:grid-cols-3 justify-center">
                        {experts.map((e) => (
                            <DoctorCard key={e.name} {...e} />
                        ))}
                    </div>
                    {/* "Expert Doctors" Button bottom right */}
                    <div className="flex justify-end mt-8">
                        <Button
                            onClick={() => {
                                console.log("Expert Doctors button clicked");
                            }}
                            className="font-semibold px-6 py-2 rounded-lg transition-colors duration-200 shadow-[var(--shadow-button)] hover:brightness-110 hover:scale-[1.03] hover:shadow-lg flex items-center gap-2"
                            style={{
                                background: `linear-gradient(to right, ${BLUE_400}, ${BLUE_500}, ${BLUE_600})`,
                                color: "#fff",
                            }}
                            type="button"
                        >
                            Expert Doctors
                            <span>
                                <MoveRight className="size-5 inline-block" />
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
