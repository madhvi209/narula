"use client";

const galleryImages = [
    {
        src: "/images/gallery/Narula-Diagnostics-Center.jpeg",
        alt: "Narula Diagnostics Center",
        aspect: "aspect-[5/3]",
    },
    {
        src: "/images/gallery/Arjun-Narula.jpeg",
        alt: "Dr. Arjun Narula",
        aspect: "aspect-[4/5]",
    },
    {
        src: "/images/gallery/Apoorv-Narula.jpeg",
        alt: "Dr. Apoorv Narula",
        aspect: "aspect-[4/5]",
    },
    {
        src: "/images/gallery/Ultrasound.png",
        alt: "Ultrasound Machine",
        aspect: "aspect-[5/3]",
    },
    {
        src: "/images/gallery/person-with-electrode.jpg",
        alt: "Robotic Laboratory",
        aspect: "aspect-[7/4]",
        wide: true,
    },
    {
        src: "/images/gallery/cbct.jpg",
        alt: "Doctor Consultation",
        aspect: "aspect-square",
    },
    {
        src: "/images/gallery/Liver-Function-Test-in-Gurgaon.jpg",
        alt: "Diagnostic Center Outside",
        aspect: "aspect-[6/4]",
    },
    {
        src: "/images/gallery/Gamma-Camera.png",
        alt: "Doctor with Patient",
        aspect: "aspect-[5/3]",
    },
    {
        src: "/images/gallery/MRI.png",
        alt: "Patient Eye Exam",
        aspect: "aspect-[3/2]",
    },
    {
        src: "/images/gallery/Advanced-3T-MRI.jpeg",
        alt: "Patient MRI Scan",
        aspect: "aspect-[5/3]",
    },
];

function FirstRowGalleryImages({ img, idx }: { img: typeof galleryImages[number]; idx: number }) {
    let additionalClasses = "md:col-span-1 w-full";
    if (idx === 0) additionalClasses += " lg:col-span-1";
    if (idx === 1) additionalClasses += " lg:col-span-1";
    if (idx === 2) additionalClasses += " lg:col-span-1";

    return (
        <div
            className={`
        relative rounded-xl overflow-hidden flex items-end group
        bg-gradient-to-br from-blue-100 via-secondary/50 to-blue-200 shadow-xl
        ${additionalClasses}
        min-h-[185px] lg:min-h-[220px]
      `}
            style={{
                border: "2.5px solid #e6eaf7",
            }}
            key={img.src}
        >
            <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-90"
                loading="lazy"
                draggable={false}
                style={{ borderRadius: "inherit" }}
            />
            <div className="relative z-10 w-full flex flex-col items-start p-4 bg-gradient-to-t from-black/40 to-transparent">
                <span className="backdrop-blur bg-black/40 px-3 py-1 rounded text-sm md:text-base font-semibold tracking-wide text-white shadow">
                    {img.alt}
                </span>
            </div>
            <span className="pointer-events-none absolute inset-0 rounded-xl border-2 border-blue-400 opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
        </div>
    );
}

export default function Gallery() {
    return (
        <section className="py-16 bg-secondary/30 flex justify-center w-full">
            <div
                className="
          w-full
          max-w-screen-lg
          flex flex-col items-center px-2 sm:px-4
        "
            >
                <h2 className="text-[24px] sm:text-[27px] md:text-[39px] font-semibold mb-3 text-primary" >
                    Gallery of{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage: `linear-gradient(to right, #2079c5, #00A5D4, #0090b8)`
                        }}
                    >
                        Facilities & Updates
                    </span>
                </h2>
                <p className="text-center text-[#0180CC] mb-8 md:mb-12">
                    Latest images from our state-of-the-art diagnostic facilities and equipment
                </p>

                <div
                    className={`
            w-full
            grid
            gap-3 md:gap-6
            justify-center
            items-stretch
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-3
            transition-all
            mx-auto
          `}
                >
                    {galleryImages.slice(0, 3).map((img, idx) => (
                        <FirstRowGalleryImages img={img} idx={idx} key={img.src} />
                    ))}

                    <div
                        key="break-row-4"
                        className="
              w-full
              h-0
              col-span-1
              sm:col-span-2
              md:col-span-3
              lg:col-span-3
            "
                        aria-hidden="true"
                    ></div>

                    {galleryImages.slice(3).map((img, idx) => {
                        const absIdx = idx + 3;
                        const isBottomRow = absIdx >= 7;

                        let additionalClasses = "";
                        if (img.wide) additionalClasses += " lg:col-span-2";

                        return (
                            <div
                                key={img.src}
                                className={`
                  relative overflow-hidden rounded-lg shadow group
                  flex
                  ${img.aspect}
                  w-full
                  items-center justify-center
                  ${additionalClasses}
                `}
                                style={{
                                    background: "#dbecf7",
                                    minHeight: isBottomRow
                                        ? 210
                                        : absIdx < 4
                                            ? 170
                                            : 120,
                                }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                    draggable={false}
                                    style={{
                                        borderRadius: "inherit",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
