"use client"

import type React from "react"

type Concern = {
    title: string
    image: string
    alt?: string
}

const concerns: Concern[] = [
    { title: "Fever", image: "/images/icons/fever.png", alt: "Fever" },
    { title: "Diabetes", image: "/images/icons/diabetes.png", alt: "Diabetes" },
    { title: "Kidneys", image: "/images/icons/kidney.png", alt: "Kidneys" },
    { title: "Liver", image: "/images/icons/liver.png", alt: "Liver" },
    { title: "Thyroid", image: "/images/icons/thyroid.png", alt: "Thyroid" },
    { title: "Heart Check", image: "/images/icons/heart.png", alt: "Heart Check" },
    { title: "Vitamin Profile", image: "/images/icons/vitamin.png", alt: "Vitamin Profile" },
    { title: "Allergy", image: "/images/icons/allergy.png", alt: "Allergy" },
    { title: "Infertility", image: "/images/icons/fetus.png", alt: "Infertility" },
    { title: "Cancer Screening", image: "/images/icons/cancer.png", alt: "Cancer Screening" },
]

// Hover effect: subtle zoom (scale-102) and minor shadow/border pop, not too much
export default function HealthConcernsSection() {
    return (
        <section
            aria-labelledby="concerns-heading"
            className="px-2 md:px-8 lg:px-14 mt-16 mb-16"
        >
            <div
                className="w-full max-w-5xl md:max-w-6xl mx-auto rounded-[20px] p-4 sm:p-8 md:p-10 lg:p-12 shadow-md"
                style={{
                    background: "linear-gradient(102deg, #51AEC8 15%, #74CEF7 68%, #d4e8fa 100%)",
                    borderRadius: "22px",
                    boxShadow: "0 3px 32px 0 rgba(60,126,255,0.10)",
                }}
            >
                <div className="mb-6 md:mb-8 flex items-center justify-between">
                    <h2
                        id="concerns-heading"
                        className="text-white text-lg sm:text-xl md:text-2xl xl:text-2xl font-bold leading-tight tracking-tight"
                    >
                        Choose Tests by Concern
                    </h2>
                    <button
                        type="button"
                        onClick={() => {
                            console.log("View All button clicked");
                        }}
                        className="font-semibold px-6 py-1.5 rounded-lg transition-colors duration-200 shadow-[var(--shadow-button)] hover:brightness-110 hover:scale-[1.03] hover:shadow-lg flex items-center gap-2 text-white"
                        style={{
                            background: "linear-gradient(to right, #00A5D4, #2079c5, #134471)",
                            color: "#fff",
                            minWidth: "110px",
                            height: "36px",
                        }}
                    >
                        View All
                        <span className="sr-only">View all health concern categories</span>
                    </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 pt-1 pb-1">
                    {concerns.map(({ title, image, alt }) => (
                        <div
                            key={title}
                            className="flex items-center justify-center border border-[#E3E4FD] bg-white rounded-[16px] transition-all duration-200 h-[210px] cursor-pointer select-none overflow-hidden
                                shadow-[0_2px_10px_0_rgba(36,66,156,0.06)]
                                group
                                hover:shadow-lg hover:border-[#2079c5] hover:-translate-y-[2px] hover:scale-[1.02] focus-visible:shadow-lg focus-visible:scale-[1.02]"
                            style={{
                                borderWidth: "2px",
                                padding: 0,
                            }}
                            tabIndex={0}
                            aria-label={title}
                            role="button"
                        >
                            <div
                                className="w-[190px] h-[190px] sm:w-[210px] sm:h-[210px] rounded-xl overflow-hidden flex items-center justify-center relative transition-all duration-200"
                                style={{
                                    boxShadow: "0 1.5px 8px 0 rgba(36,66,156,0.10)",
                                }}
                            >
                                {/* Title at the top center of the image */}
                                <div
                                    className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 rounded-md text-white text-xs sm:text-sm font-medium flex justify-center items-center whitespace-nowrap shadow transition-all
                                        group-hover:bg-gradient-to-r group-hover:from-[#2079c5] group-hover:to-[#00A5D4] group-hover:shadow-md"
                                    style={{
                                        minWidth: "80px",
                                        maxWidth: "92%",
                                        textAlign: "center",
                                        background: "linear-gradient(90deg, #234674 0%, #4286f4 100%)",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    {title}
                                </div>
                                <img
                                    src={image}
                                    alt={alt || title}
                                    className="w-full h-full object-cover rounded-[1.5rem] transition-all duration-200 group-hover:scale-[1.04] group-hover:brightness-105"
                                    aria-hidden="true"
                                    loading="lazy"
                                    style={{
                                        objectFit: "cover",
                                        width: "calc(100% - 1rem)",
                                        height: "calc(100% - 1rem)",
                                        display: "block",
                                        margin: "0.5rem",
                                        borderRadius: "1.5rem",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
