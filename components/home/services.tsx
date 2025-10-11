"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import radiologyImage from "@/public/images/radiology.jpg";
import pathologyImage from "@/public/images/pathology.jpg";
import nuclearImage from "@/public/images/nuclear.jpg";
import ultrasoundImage from "@/public/images/ultrasound.jpg";

const services = [
  {
    title: "Radiology",
    image: radiologyImage.src,
  },
  {
    title: "Pathology",
    image: pathologyImage.src,
  },
  {
    title: "Nuclear Imaging & Therapy",
    image: nuclearImage.src,
  },
  {
    title: "Ultrasound & Fetal Medicine",
    image: ultrasoundImage.src,
  },
  {
    title: "Pathology",
    image: pathologyImage.src,
  },
  {
    title: "Nuclear Imaging & Therapy",
    image: nuclearImage.src,
  },
];

function ServiceTile({ title, image }: { title: string; image: string }) {
  return (
    <div className="relative min-w-[360px] max-w-[400px] h-[340px] rounded-2xl overflow-hidden group flex-shrink-0 shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        draggable={false}
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start bg-gradient-to-t from-black/60 via-black/10 to-transparent">
        <h3 className="text-white text-xl sm:text-2xl font-semibold drop-shadow-lg mb-2">
          {title}
        </h3>
        <div className="w-full flex justify-end">
          <button
            className="flex items-center text-white text-sm font-medium group/readmore relative"
            tabIndex={-1}
            type="button"
          >
            <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-white after:scale-x-0 group-hover/readmore:after:scale-x-100 after:origin-left after:transition-transform after:duration-200">
              Read More
            </span>
            <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/readmore:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const VISIBLE_COUNT = 3; // Show only 3 cards
  const [startIdx, setStartIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + VISIBLE_COUNT < services.length;

  const handlePrev = () => {
    if (canGoLeft && !isAnimating) {
      setIsAnimating(true);
      setStartIdx((prev) => Math.max(0, prev - 1));
    }
  };

  const handleNext = () => {
    if (canGoRight && !isAnimating) {
      setIsAnimating(true);
      setStartIdx((prev) => Math.min(services.length - VISIBLE_COUNT, prev + 1));
    }
  };

  // Reset animation state after transition
  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  // For smooth effect, use translateX on a flex row
  // Calculate tile width to fit 3 cards in container (max-w-6xl = 1152px, px-4 = 32px, so ~1120px usable)
  // Let's use 352px width + 32px gap = 384px * 3 = 1152px (fits well)
  const tileWidth = 360; // px, min-w-[360px]
  const gap = 32; // px, gap-8 = 2rem = 32px
  const totalTileWidth = tileWidth + gap;

  return (
    <section
      id="services"
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(110deg, #e3f2fd 0%, #b4e0ff 50%, #e0f7fa 100%)",
      }}
    >
      {/* 3D grid subtle effect, matching hero section */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "repeating-linear-gradient(135deg, rgba(10,61,98,0.04) 0px, rgba(10,61,98,0.04) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(45deg, rgba(0,165,212,0.04) 0px, rgba(0,165,212,0.04) 1px, transparent 1px, transparent 32px)",
        }}
      />
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-[24px] sm:text-[27px] md:text-[39px] font-semibold mb-3 text-left" style={{ color: "#134471" }}>
            Our{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, #2079c5, #00A5D4, #0090b8)`,
              }}
            >
              Services
            </span>
          </h2>
        </div>

        <div className="relative flex items-center">
          <button
            aria-label="Previous services"
            className="absolute left-0 z-20 bg-white/80 hover:bg-white shadow rounded-full p-2 transition disabled:opacity-50"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            onClick={handlePrev}
            type="button"
            disabled={!canGoLeft || isAnimating}
          >
            <ChevronLeft className="w-7 h-7 text-primary" />
          </button>
          <div className="w-full overflow-hidden">
            <div
              ref={sliderRef}
              className="flex"
              style={{
                transition: isAnimating ? "transform 0.5s cubic-bezier(.4,0,.2,1)" : "none",
                transform: `translateX(-${startIdx * totalTileWidth}px)`,
                gap: `${gap}px`,
                minHeight: "340px", // h-[340px]
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  style={{
                    minWidth: `${tileWidth}px`,
                    maxWidth: `${tileWidth}px`,
                    flex: "0 0 auto",
                  }}
                >
                  <ServiceTile {...service} />
                </div>
              ))}
            </div>
          </div>
          <button
            aria-label="Next services"
            className="absolute right-0 z-20 bg-white/80 hover:bg-white shadow rounded-full p-2 transition disabled:opacity-50"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            onClick={handleNext}
            type="button"
            disabled={!canGoRight || isAnimating}
          >
            <ChevronRight className="w-7 h-7 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}