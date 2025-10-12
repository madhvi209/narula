"use client";

import React from "react";

// Blue palette from team/homeCollection sections for consistency
const BLUE_100 = "#f0faff";
const BLUE_200 = "#eaf5fd";
const BLUE_300 = "#bfe1ff";
const BLUE_400 = "#00A5D4";
const BLUE_500 = "#2079c5";
const BLUE_600 = "#134471";
const BLUE_700 = "#2b8dad";
const BLUE_800 = "#0090b8";

// Diagnostic equipment data matching the supplied image
const hitechEquipments = [
  {
    title: "MRI Machine",
    subtitle: "Advanced imaging for detailed body scans",
    img: "/images/mri.png",
  },
  {
    title: "CT Scanner",
    subtitle: "High-speed 3D diagnostic imaging",
    img: "/images/ct-scan.jpg",
  },
  {
    title: "X-ray Machine",
    subtitle: "Quick digital imaging technology",
    img: "/images/cbct.jpg",
  },
  {
    title: "Laboratory Equipment",
    subtitle: "Precision tools for accurate test results",
    img: "/images/lab.png",
  },
  {
    title: "Endoscopy & Colonoscopy",
    subtitle: "Advanced internal diagnostic systems",
    img: "/images/endoscopy.jpg",
  },
  {
    title: "Nuclear Medicine Equipment",
    subtitle: "Radioisotope imaging for accurate diagnosis",
    img: "/images/nuclear.jpg",
  },
];


// Helper to chunk array into subarrays of 3 items each
function chunkArray(array: any[], chunkSize: number) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

// Add the zoom effect styles
const imgZoomStyle = `
  .hitech-img-zoom-container {
    transition: box-shadow 0.2s;
  }
  .hitech-img-zoom-container:hover .hitech-img-zoom {
    transform: scale(1.11);
  }
  .hitech-img-zoom {
    transition: transform 0.36s cubic-bezier(.2,.66,.45,1);
    will-change: transform;
  }
`;

export default function HitechTechnology() {
  // Chunk equipment list into arrays of 3 for rows
  const equipmentRows = chunkArray(hitechEquipments, 3);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: imgZoomStyle }} />
      <section
        className="py-12 px-4 sm:px-8 w-full relative mt-16"
        style={{
          background: "none",
        }}
      >
        <div className="relative z-10 max-w-[1600px] mx-auto flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4 sm:gap-0">
            <h2
              className="text-[24px] sm:text-[27px] md:text-[39px] font-semibold mb-3"
              style={{ color: BLUE_600 }}
            >
              Advanced <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BLUE_500}, ${BLUE_400}, ${BLUE_800})`
                }}
              >
                Diagnostic Equipment
              </span> at Narula Center
            </h2>
          </div>
          <div
            className="text-gray-700 text-base sm:text-lg text-center max-w-4xl mb-10"
            style={{
              marginTop: 8,
              marginBottom: 30,
              lineHeight: 1.7,
              color: BLUE_700,
            }}
          >
            Being an innovative Medical Tests & Diagnostic Centre, we are backed by our skilled team and top-notch technology for laboratory and urinary tests. We have a wide variety of equipment that helps us achieve the highest levels in test care. Here are some of the advanced machinery we have:
          </div>
          {/* Map each row (max three cards per row) */}
          <div className="w-full flex flex-col items-center gap-12">
            {equipmentRows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="flex flex-row flex-wrap justify-center items-stretch gap-12 md:gap-20 w-full max-w-7xl"
              >
                {row.map((eq: any) => (
                  <div
                    key={eq.title}
                    className="flex flex-col items-center rounded-2xl shadow-none transition-all p-6"
                    style={{
                      width: 340,
                      minHeight: 420,
                      background: "rgba(255,255,255,0.74)", // subtle white card for contrast
                      border: "none",
                      boxShadow: "none",
                    }}
                  >
                    <div
                      className="hitech-img-zoom-container flex items-center justify-center rounded-full border-2 border-blue-200 mb-5 shadow-sm bg-white overflow-hidden"
                      style={{
                        width: 260,
                        height: 260,
                        // Blue outer glow effect using boxShadow (less glow)
                        boxShadow: `0 0 14px 0 ${BLUE_400}, 0 1px 12px 0 #bfe1ff33`,
                      }}
                    >
                      <img
                        src={eq.img}
                        alt={eq.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        className="transition-all hitech-img-zoom"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-xl font-semibold text-center mb-0" style={{ color: BLUE_600 }}>
                      {eq.title}
                    </div>
                    {eq.subtitle && (
                      <div
                        className="text-base text-center mt-1"
                        style={{ color: BLUE_700, fontWeight: 500, opacity: 0.82 }}
                      >
                        {eq.subtitle}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
