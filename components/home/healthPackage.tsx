"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TestTube2 } from "lucide-react";
import { SectionHeader } from "../ui/section-header";
import { CategoryToggle } from "../ui/category-toggle";
import { DiscountTag } from "../ui/discount-tag";
import { AddToCartButton } from "../ui/add-to-cart-button";

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


const categoryLabels = [
    { key: "healthPackages", label: "Health Packages" },
    { key: "pathologyTests", label: "Pathology Test" },
    { key: "radiologyTests", label: "Radiology Scans" },
];

export const PopularHealthPackages = () => {
    const [activeCategory, setActiveCategory] = useState<
        "healthPackages" | "pathologyTests" | "radiologyTests"
    >("healthPackages");

    const activePackages = servicesData[activeCategory];


    return (
        <section className="py-12 px-2 sm:px-6 md:px-8 xl:px-0 w-full section-bg-gradient">
            <div className="w-full max-w-[1180px] mx-auto">
                <SectionHeader 
                    title="Popular" 
                    gradientText="Health Packages & Tests" 
                    className="mb-4"
                />
                
                <CategoryToggle
                    categories={categoryLabels}
                    activeCategory={activeCategory}
                    onCategoryChange={(key) => setActiveCategory(key as typeof activeCategory)}
                    className="mt-7"
                />

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-6">
                    {activePackages.map((pkg) => {
                        const cartItem = {
                            type: activeCategory === 'healthPackages' ? 'health-package' as const : 
                                  activeCategory === 'pathologyTests' ? 'test' as const : 'radiology' as const,
                            title: pkg.title,
                            description: pkg.description,
                            category: categoryLabels.find(cat => cat.key === activeCategory)?.label || 'Package',
                            normalPrice: pkg.originalPrice,
                            discountedPrice: pkg.price,
                            testsCount: pkg.testsCount
                        };

                        return (
                            <Card key={pkg.id} className="card-primary">
                                <div className="p-5 sm:p-6 flex flex-col h-full transition-colors duration-300">
                                    <DiscountTag discount={pkg.discount} />

                                    <div className="flex items-start justify-between mb-3 mt-10">
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: 'var(--primary-blue-darker)' }}>
                                                {pkg.title}
                                            </h3>
                                            <p className="text-xs md:text-sm font-medium mb-2" style={{ color: 'var(--primary-blue-accent)' }}>
                                                Includes {pkg.testsCount} Tests
                                            </p>
                                        </div>
                                        <div className="rounded-full transition-colors duration-300" style={{ background: 'var(--primary-blue-light)' }}>
                                            <TestTube2 className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--primary-blue)' }} />
                                        </div>
                                    </div>

                                    <p className="text-xs md:text-sm mb-4 md:mb-6 line-clamp-2 min-h-[40px]" style={{ color: 'var(--primary-blue-dark)', opacity: 0.85 }}>
                                        {pkg.description}
                                    </p>

                                    <div className="flex items-end justify-between mt-auto pt-3 border-t" style={{ borderTopColor: 'var(--primary-blue-lighter)' }}>
                                        <div>
                                            <p className="text-xs md:text-sm line-through mb-1" style={{ color: 'var(--primary-blue-border)' }}>
                                                Rs. {pkg.originalPrice.toLocaleString()}
                                            </p>
                                            <p className="text-xl md:text-2xl font-bold" style={{ color: 'var(--primary-blue-text)' }}>
                                                Rs. {pkg.price.toLocaleString()}
                                            </p>
                                        </div>
                                        <AddToCartButton item={cartItem} variant="test-card" />
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
                {/* See All Button Row */}
                <div className="flex justify-end mt-2">
                    <Button className="btn-view-all" onClick={() => console.log(`See all clicked for ${activeCategory}`)}>
                        View All
                    </Button>
                </div>
            </div>
        </section>
    );
};
