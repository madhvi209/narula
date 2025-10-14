"use client";
import { Button } from "@/components/ui/button";

export default function CertificationsSection() {
    const certifications = [
        {
            key: "NABH",
            title: "NABH Accreditation",
            subtitle: "Hospitals & Healthcare Providers",
            logo: "/images/nabh.png",
            blurb:
                "Commitment to patient safety and quality healthcare standards across our organization.",
            viewUrl: "#",
            verifyUrl: "https://www.nabh.co/",
        },
        {
            key: "NABL",
            title: "NABL Accreditation",
            subtitle: "Testing & Calibration Laboratories",
            logo: "/images/nabl.png",
            blurb:
                "Ensuring technical competence and reliability of laboratory test results (ISO 15189/17025).",
            viewUrl: "#",
            verifyUrl: "https://www.nabl-india.org/",
        },
    ];

    // For responsive box sizes
    const LOGO_BOX_SIZE = 180;
    const LOGO_BOX_SIZE_MD = 140;
    const LOGO_BOX_SIZE_SM = 96;

    // Helper: Get size with CSS clamp for logo box and image
    // This approach lets it shrink on small screens, matching lg UI on desktop
    const getLogoBoxSize = () =>
        `clamp(${LOGO_BOX_SIZE_SM + 32}px, 25vw, ${LOGO_BOX_SIZE + 32}px)`;
    const getImgSize = () =>
        `clamp(${LOGO_BOX_SIZE_SM}px, 18vw, ${LOGO_BOX_SIZE}px)`;

    return (
        <section className="py-14 sm:py-20 lg:py-24 bg-background">
            <div className="container mx-auto px-3 sm:px-4 max-w-6xl">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-[24px] sm:text-[27px] md:text-[39px] font-semibold mb-3 text-gray-800">
                        Quality &amp; <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: `linear-gradient(to right, #3398ee, #74cef7, #002653)`
                            }}
                        >
                            Accreditations
                        </span>
                    </h2>
                    <p className="text-[#0399D1] font-semibold mb-2">
                        Proudly recognized by national boards for excellence in patient care and reliable diagnostics since 1952.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {certifications.map((c) => (
                        <article
                            key={c.key}
                            className="
                relative overflow-hidden rounded-3xl border border-white/10
                shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]
                transition-transform hover:scale-[1.01]
                hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)]
                bg-gradient-to-br from-[#E0ECFF] via-[#F5FAFF] to-[#C9E6FF]
                h-full flex flex-col
              "
                        >
                            <div className="relative p-4 sm:p-8 flex flex-col items-center">
                                {/* Square Logo Box on Top */}
                                <div
                                    className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/30 shadow-sm mb-4 sm:mb-6 w-full -mt-4 sm:-mt-5 -mb-5"
                                    style={{
                                        width: getLogoBoxSize(),
                                        height: getLogoBoxSize(),
                                        maxWidth: getLogoBoxSize(),
                                        maxHeight: getLogoBoxSize(),
                                        minWidth: getLogoBoxSize(),
                                        minHeight: getLogoBoxSize(),
                                        backgroundColor: "rgba(255,255,255,0.5)",
                                        overflow: "hidden",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                    }}
                                    aria-hidden="true"
                                >
                                    <img
                                        src={c.logo || "/placeholder.svg"}
                                        alt={`${c.key} logo`}
                                        width={LOGO_BOX_SIZE}
                                        height={LOGO_BOX_SIZE}
                                        className="object-cover"
                                        style={{
                                            width: getImgSize(),
                                            height: getImgSize(),
                                            display: "block",
                                            borderRadius: 16, // match box rounded-2xl
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>

                                {/* Text below Logo */}
                                <div className="w-full text-center">
                                    <h3 className="text-xl sm:text-2xl font-semibold text-[#002653]">{c.title}</h3>
                                    <p className="text-xs sm:text-sm text-[#3398ee] mt-1">{c.subtitle}</p>
                                    <p className="mt-3 sm:mt-4 text-pretty text-xs sm:text-base text-muted-foreground">
                                        {c.blurb}
                                    </p>
                                </div>

                                <div className="my-4 sm:my-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                <div className="flex justify-center items-center w-full -mt-3 sm:-mt-4">
                                    <span className="text-[10px] sm:text-xs text-[#184a87] text-center">
                                        Transparent. Verifiable. Trusted.
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
