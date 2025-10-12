"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TestTube2 } from "lucide-react";

// Blue color palette (REUSE ONLY THESE for ANY blue usage)
const BLUE_100 = "#f0faff";
const BLUE_200 = "#eaf5fd";
const BLUE_300 = "#bfe1ff";
const BLUE_400 = "#00A5D4";    // Primary button, accent
const BLUE_500 = "#2079c5";    // Dark hover blue
const BLUE_600 = "#134471";    // Deep heading/primary text
const BLUE_700 = "#2b8dad";    // Price font
const BLUE_800 = "#0090b8";    // Secondary accent

// All services data (no change)
const servicesData = {
    healthPackages: [
        {
            id: 1,
            discount: "20% off",
            title: "Category 1 (Up to 30 Years)",
            testsCount: 15,
            description:
                "Consultation & Check-up (By Post-graduate MD Doctors), Complete Haemogram (22 Parameters), Complete Urine Test, Blood Group, Blood Glucose (Fasting & PP), Blood Urea, Serum Creatinine, Lipid Profile, SGOT, SGPT, Ultrasound Whole Abdomen, Chest X-Ray (Digital), E.C.G., Thyroid Profile (T3, T4, TSH), Digital O.P.G. (Dental Status).",
            originalPrice: 4080,
            price: 3250,
        },
        {
            id: 2,
            discount: "21% off",
            title: "Category 2 (Age 31–50 Years)",
            testsCount: 16,
            description:
                "Consultation & Check-up (By Post-graduate MD Doctors), Complete Haemogram (22 Parameters), Complete Urine Test, Blood Group, Blood Glucose (Fasting & PP), Renal Profile (Urea, Creatinine, Uric Acid, Calcium, Phosphorus, Na & K), Liver Function Test (SGOT, PT, Bilirubin, T. Protein, Albumin, Globulin, A/G Ratio & Alkaline Phosphate), Lipid Profile, Ultrasound Whole Abdomen, Chest X-Ray (Digital), E.C.G., Thyroid Profile (T3, T4, TSH), Digital O.P.G. (Dental Status).",
            originalPrice: 5050,
            price: 4000,
        },
        {
            id: 3,
            discount: "20% off",
            title: "Category 3 (Above 50 Years)",
            testsCount: 18,
            description:
                "Consultation & Check-up (By Post-graduate MD Doctors), Complete Haemogram (22 Parameters), Complete Urine Test, Blood Group, Blood Glucose (Fasting & PP), B.M.D. (Dexa Spine), Stool Test, Renal Profile (Urea, Creatinine, Uric Acid, Calcium, Phosphorus, Na & K), Liver Function Test (SGOT, PT, Bilirubin, T. Protein, Albumin, Globulin, A/G Ratio & Alkaline Phosphate), Lipid Profile, P.S.A. (Male), Pap Smear (Female), Ultrasound Whole Abdomen, Chest X-Ray (Digital), E.C.G., Thyroid Profile (T3, T4, TSH), Digital O.P.G. (Dental Status).",
            originalPrice: 7150,
            price: 5700,
        },

    ],

    pathologyTests: [
        {
            id: 101,
            discount: "50% off",
            title: "Complete Blood Count",
            testsCount: 1,
            description: "CBC, WBC, RBC, Hemoglobin, Platelets, ESR",
            originalPrice: 500,
            price: 250,
        },
        {
            id: 102,
            discount: "40% off",
            title: "Liver Function Test",
            testsCount: 1,
            description: "ALT, AST, ALP, Bilirubin, Albumin",
            originalPrice: 800,
            price: 480,
        },
    ],

    radiologyTests: [
        {
            id: 201,
            discount: "30% off",
            title: "X-Ray Chest",
            testsCount: 1,
            description: "PA View, Lateral View",
            originalPrice: 600,
            price: 420,
        },
        {
            id: 202,
            discount: "35% off",
            title: "Abdominal Ultrasound",
            testsCount: 1,
            description: "Liver, Gallbladder, Kidney, Spleen, Pancreas",
            originalPrice: 1200,
            price: 780,
        },
    ],
};

// DiscountTag: (Do not change yellow/orange colours)
function DiscountTag({ discount }: { discount: string }) {
    return (
        <div
            className="absolute top-3 left-3 z-10"
            style={{
                width: 66,
                height: 32,
                pointerEvents: "none",
            }}
        >
            <svg viewBox="0 0 66 32" width={66} height={32} style={{ display: "block" }}>
                {/* Tag body */}
                <path
                    d="M0 8 Q0 0 8 0 H58 Q66 0 66 8 V21 Q66 29 58 29 H8 Q0 29 0 21 Z"
                    fill="url(#tagGradient)"
                    stroke="#f59e0b"
                    strokeWidth="1"
                />
                {/* Tag cut (triangle) */}
                <polygon points="0,8 10,16 0,24" fill="#fbbf24" />
                <defs>
                    <linearGradient
                        id="tagGradient"
                        x1="0"
                        y1="0"
                        x2="66"
                        y2="32"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#fde047" />
                        <stop offset="1" stopColor="#f59e0b" />
                    </linearGradient>
                </defs>
                {/* Tag hole */}
                <circle
                    cx="8"
                    cy="8"
                    r="2"
                    fill="#fff3cd"
                    stroke="#f59e0b"
                    strokeWidth="1"
                />
                {/* Discount text */}
                <text
                    x="33"
                    y="20"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize="15"
                    fontWeight="bold"
                    fill="#fff"
                    style={{ fontFamily: "inherit", letterSpacing: 0.5 }}
                    filter="url(#textShadow)"
                >
                    {discount}
                </text>
                <filter id="textShadow">
                    <feDropShadow
                        dx="0"
                        dy="1"
                        stdDeviation="0.8"
                        floodColor="#c2410c"
                        floodOpacity="0.16"
                    />
                </filter>
            </svg>
        </div>
    );
}

const categoryLabels = [
    { key: "healthPackages", label: "Health Packages" },
    { key: "pathologyTests", label: "Pathology Test" },
    { key: "radiologyTests", label: "Radiology Scans" },
] as const;

export const PopularHealthPackages = () => {
    const [activeCategory, setActiveCategory] = useState<
        "healthPackages" | "pathologyTests" | "radiologyTests"
    >("healthPackages");

    const activePackages = servicesData[activeCategory];

    // Use only defined BLUE constants for all blue styling
    const selectedButtonStyle = (selected: boolean) => ({
        background: selected
            ? `linear-gradient(to right, ${BLUE_400}, ${BLUE_500}, ${BLUE_600})`
            : "transparent",
        color: selected
            ? "#fff"
            : BLUE_700,
        outline: selected
            ? `2px solid ${BLUE_700}`
            : "none",
        boxShadow: selected
            ? "0 2px 8px 0 rgba(32, 121, 197, 0.16)"
            : undefined,
        transition: "background 0.2s, color 0.2s",
    });

    return (
        <section
            className="py-12 px-2 sm:px-6 md:px-8 xl:px-0 w-full"
            style={{
                background: `linear-gradient(120deg, #fff 0%, ${BLUE_100} 100%)`,
            }}
        >
            <div className="w-full max-w-[1180px] mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4 sm:gap-0">
                    <h2 className="text-[24px] sm:text-[27px] md:text-[39px] font-semibold mb-3" style={{ color: BLUE_600 }}>
                        Popular <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: `linear-gradient(to right, ${BLUE_500}, ${BLUE_400}, ${BLUE_800})`
                            }}
                        >
                            Health Packages & Tests
                        </span>
                    </h2>
                </div>
                {/* Category Toggle Buttons below the header */}
                <div className="flex gap-2 mb-8 mt-7">
                    {categoryLabels.map(({ key, label }) => {
                        const selected = activeCategory === key;
                        return (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`font-semibold px-4 md:px-6 py-2 rounded shadow-[var(--shadow-button)]`}
                                style={selectedButtonStyle(selected)}
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-6">
                    {activePackages.map((pkg) => (
                        <Card
                            key={pkg.id}
                            className="relative overflow-hidden border shadow transition-all duration-300 flex flex-col h-full group"
                            style={{
                                background: `linear-gradient(120deg, #fff 0%, ${BLUE_100} 100%)`,
                                borderColor: BLUE_200,
                            }}
                        >
                            <div className="p-5 sm:p-6 flex flex-col h-full transition-colors duration-300">
                                <DiscountTag discount={pkg.discount} />

                                <div className="flex items-start justify-between mb-3 mt-10">
                                    <div className="flex-1">
                                        <h3
                                            className="text-lg md:text-xl font-bold mb-1"
                                            style={{ color: BLUE_600 }}
                                        >
                                            {pkg.title}
                                        </h3>
                                        <p
                                            className="text-xs md:text-sm font-medium mb-2"
                                            style={{ color: BLUE_800 }}
                                        >
                                            Includes {pkg.testsCount} Tests
                                        </p>
                                    </div>
                                    <div
                                        className="rounded-full transition-colors duration-300"
                                        style={{
                                            background: BLUE_100,
                                        }}
                                    >
                                        <TestTube2
                                            className="w-5 h-5 md:w-6 md:h-6"
                                            style={{ color: BLUE_400 }}
                                        />
                                    </div>
                                </div>

                                <p
                                    className="text-xs md:text-sm mb-4 md:mb-6 line-clamp-2 min-h-[40px]"
                                    style={{ color: BLUE_500, opacity: 0.85 }}
                                >
                                    {pkg.description}
                                </p>

                                <div
                                    className="flex items-end justify-between mt-auto pt-3 border-t"
                                    style={{ borderTopColor: BLUE_200 }}
                                >
                                    <div>
                                        <p
                                            className="text-xs md:text-sm line-through mb-1"
                                            style={{ color: BLUE_300 }}
                                        >
                                            Rs. {pkg.originalPrice.toLocaleString()}
                                        </p>
                                        <p
                                            className="text-xl md:text-2xl font-bold"
                                            style={{ color: BLUE_700 }}
                                        >
                                            Rs. {pkg.price.toLocaleString()}
                                        </p>
                                    </div>
                                    <Button
                                        onClick={() =>
                                            console.log(`Added ${pkg.title} to cart`)
                                        }
                                        className="font-semibold px-4 md:px-6 transition-colors duration-200 shadow-[var(--shadow-button)] hover:brightness-110 hover:scale-[1.03] hover:shadow-lg"
                                        style={{
                                            background: `linear-gradient(to right, ${BLUE_400}, ${BLUE_500}, ${BLUE_600})`,
                                            color: "#fff",
                                        }}
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                {/* See All Button Row */}
                <div className="flex justify-end mt-2">
                    <Button
                        onClick={() => {
                            console.log(`See all clicked for ${activeCategory}`);
                        }}
                        className="font-semibold px-4 md:px-6 transition-colors duration-200 shadow-[var(--shadow-button)] hover:brightness-110 hover:scale-[1.03] hover:shadow-lg"
                        style={{
                            background: `linear-gradient(to right, ${BLUE_400}, ${BLUE_500}, ${BLUE_600})`,
                            color: "#fff",
                        }}
                    >
                        View All
                    </Button>
                </div>
            </div>
        </section>
    );
};
