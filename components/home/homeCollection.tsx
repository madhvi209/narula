"use client";

import {
  Heart,
  Droplet,
  Thermometer,
  Home as HomeIcon,
  FileText,
  Clock,
  TestTube2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { CategoryToggle } from "../ui/category-toggle";
import { DiscountTag } from "../ui/discount-tag";
import { AddToCartButton } from "../ui/add-to-cart-button";

// Sample services data (using text.tsx structure)
const servicesData = {
  healthPackages: [
    {
      id: 1,
      discount: "66% off",
      title: "Energy Package",
      testsCount: 15,
      description:
        "Liver Function Test, 25 OH Cholecalciferol (D2+D3), Fasting Insulin & Glucose",
      originalPrice: 4360,
      price: 1500,
      icon: <Heart className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--primary-blue-darker)' }} />,
    },
    {
      id: 2,
      discount: "63% off",
      title: "Gym Package - TN",
      testsCount: 53,
      description:
        "Glyco Hemoglobin (HbA1c), Liver Function Test, TSH, Lipid Profile, Urea, Creatinine, Uric Acid, 25...",
      originalPrice: 7815,
      price: 2899,
      icon: <Thermometer className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--primary-blue-text)' }} />,
    },
    {
      id: 3,
      discount: "67% off",
      title: "Her Advanced",
      testsCount: 93,
      description:
        "CBC, ESR, Glucose - Fasting, Glucose - Post Prandial, Glyco Hemoglobin (HbA1c), Liver Functi...",
      originalPrice: 12735,
      price: 4199,
      icon: <Droplet className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--primary-blue-accent)' }} />,
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
      icon: <TestTube2 className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--primary-blue)' }} />,
    },
    {
      id: 102,
      discount: "40% off",
      title: "Liver Function Test",
      testsCount: 1,
      description: "ALT, AST, ALP, Bilirubin, Albumin",
      originalPrice: 800,
      price: 480,
      icon: <TestTube2 className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--primary-blue-dark)' }} />,
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
      icon: <TestTube2 className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--primary-blue-text)' }} />,
    },
    {
      id: 202,
      discount: "35% off",
      title: "Abdominal Ultrasound",
      testsCount: 1,
      description: "Liver, Gallbladder, Kidney, Spleen, Pancreas",
      originalPrice: 1200,
      price: 780,
      icon: <TestTube2 className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--primary-blue-accent)' }} />,
    },
  ],
};

const categoryLabels = [
  { key: "healthPackages", label: "Health Packages" },
  { key: "pathologyTests", label: "Pathology Tests" },
  { key: "radiologyTests", label: "Radiology Tests" },
];


const HomeBooking = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof servicesData>("healthPackages");
  const [showAll, setShowAll] = useState(false);

  // Helper to get visible items
  const visibleItems = showAll
    ? servicesData[activeCategory]
    : servicesData[activeCategory].slice(0, 3);

  const HERO_IMAGE_SRC = "/images/home.png";

  return (
    <section className="py-12 sm:py-16 px-2 xs:px-4 sm:px-6 md:px-8 xl:px-0 w-full section-bg-gradient-alt">
      <div className="w-full max-w-[1180px] mx-auto">
        {/* HERO SECTION -- do not change */}
        <div
          className="relative overflow-hidden mb-10 sm:mb-12 rounded-2xl"
          style={{
            background: `linear-gradient(110deg, var(--primary-blue-darker) 35%, var(--primary-blue-text) 80%)`,
            color: "#fff",
          }}
        >
          <div className="relative z-10 w-full flex flex-col md:flex-row items-stretch">
            {/* Hero Text */}
            <div
              className="w-full md:w-1/2 max-w-lg sm:max-w-xl md:max-w-2xl p-6 sm:p-10 md:p-10 flex flex-col justify-center md:pr-4 lg:pr-4 md:-mr-16"
              style={{
                marginRight: "-4rem",
                gap: "1rem",
                marginLeft: "2rem",
              }}
            >
              <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 drop-shadow">
                Book Home Collection
              </h1>
              <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg">
                <li className="flex items-start gap-2 sm:gap-3">
                  <Clock className="h-6 w-6 mt-1 flex-shrink-0 text-cyan-200" />
                  <span>Convenient &amp; Time Saving</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <FileText className="h-6 w-6 mt-1 flex-shrink-0 text-blue-200" />
                  <span>Vast test menu of 2500+ tests at your doorstep</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <HomeIcon className="h-6 w-6 mt-1 flex-shrink-0 text-sky-200" />
                  <span>Online Access to Reports</span>
                </li>
              </ul>
            </div>
            {/* Hero Image: only show on md+ (hidden below md) */}
            <div
              className="hidden md:flex md:w-1/2 items-center justify-center p-0 pr-0 relative -ml-16"
              style={{
                marginLeft: "-4rem",
              }}
            >
              <img
                src={HERO_IMAGE_SRC}
                alt="Home Collection Hero"
                style={{
                  background: "none",
                  height: "340px",
                  width: "auto",
                  objectFit: "contain",
                  borderRadius: 0,
                  boxShadow: "none",
                  maxHeight: "340px",
                  minHeight: "0",
                  display: "block",
                  margin: "0 auto",
                }}
                className="w-[420px] sm:w-[520px] md:w-[650px] lg:w-[710px] xl:w-[790px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* END HERO */}

        {/* Category Toggle */}
        <CategoryToggle
          categories={categoryLabels}
          activeCategory={activeCategory}
          onCategoryChange={(key) => {
            setActiveCategory(key as keyof typeof servicesData);
            setShowAll(false);
          }}
          className="mt-2"
        />

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
        >
          {visibleItems.map((pkg) => {
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
              <Card
                key={pkg.id}
                className="card-primary"
                style={{
                  minHeight: 320,
                  borderRadius: 18,
                  boxShadow: "0 8px 24px 0 #c1e4ff40",
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
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
                      {pkg.icon || (
                        <TestTube2 className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--primary-blue)' }} />
                      )}
                    </div>
                  </div>

                  <p className="text-xs md:text-sm mb-4 md:mb-6 line-clamp-2 min-h-[40px]" style={{ color: 'var(--primary-blue-dark)', opacity: 0.85 }}>
                    {pkg.description}
                  </p>

                  <div className="flex items-end justify-between mt-auto pt-3 border-t" style={{ borderTopColor: 'var(--primary-blue-lighter)' }}>
                    <div>
                      <p className="text-xs md:text-sm line-through mb-1" style={{ color: 'var(--primary-blue-border)' }}>
                        Rs. {pkg.originalPrice?.toLocaleString ? pkg.originalPrice.toLocaleString() : ""}
                      </p>
                      <p className="text-xl md:text-2xl font-bold" style={{ color: 'var(--primary-blue-text)' }}>
                        Rs. {pkg.price?.toLocaleString ? pkg.price.toLocaleString() : pkg.price}
                      </p>
                    </div>
                    <AddToCartButton item={cartItem} variant="test-card" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="w-full max-w-[1180px] mx-auto mt-7">
          <div className="flex justify-end">
            <Button className="btn-view-all" asChild>
              <a href="#" aria-label="View all frequently booked tests" tabIndex={0}>
                View All
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeBooking;
