"use client";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

// New dark blue palette and gray for dark theme
const DARK_BG_START = "#151a23";      // Very dark blue-gray
const DARK_BG_MID = "#222e3e";        // Mid dark blue
const DARK_BG_END = "#223455";        // Deep blue
const DARK_ACCENT_1 = "#2079c5";      // For gradients/star-clip/ribbons
const DARK_ACCENT_2 = "#00A5D4";      // For gradients

const CARD_BG_DARK = "#232b38";
const CARD_BG_DARK2 = "#242f43";
const RIBBON_GRADIENT = `linear-gradient(90deg, ${DARK_ACCENT_1} 80%, ${DARK_ACCENT_2} 100%)`;

const TITLE_GRAD = `linear-gradient(to right, ${DARK_ACCENT_1}, ${DARK_ACCENT_2}, ${DARK_BG_END})`;
const TITLE_COLOR = "#d8e3f4";

// Star yellow/orange gradient
const STAR_GRADIENT = "linear-gradient(90deg, #FFD600 0%, #FF9800 100%)";

// Light blue gradient for quote card background
const LIGHT_BLUE_START = "#daf4ff";
const LIGHT_BLUE_END = "#b7e3ff";
const QUOTE_CARD_BG_GRADIENT = `linear-gradient(103deg, ${LIGHT_BLUE_START} 77%, ${LIGHT_BLUE_END} 100%)`;
const QUOTE_CARD_BORDER = "#a5e1fa";

type Testimonial = {
  reviewerName: string;
  reviewerLabel?: string;
  reviewerAvatar?: string;
  quote: string;
  rating?: number;
  subjectName?: string;
  subjectRole?: string;
  subjectAvatar?: string;
  imageGallery?: string[];
  date?: string;
  className?: string;
};

const testimonials: Testimonial[] = [
    {
        reviewerName: "Rohit Verma",
        reviewerLabel: "Business Owner",
        reviewerAvatar: "/images/review-avatar-male1.jpg",
        quote:
            "I was extremely anxious before my MRI, but the staff made me feel completely at ease. From the reception to the technician, everyone was polite and supportive. The process was quick, smooth, and much more comfortable than I expected. Truly appreciate the professionalism and warmth of the team.",
        rating: 5,
        subjectName: "Rohit Verma",
        subjectRole: "Patient",
        subjectAvatar: "/images/avatar-male1.jpg",
        date: "September 2024",
    },
    {
        reviewerName: "Neha Singh",
        reviewerLabel: "Teacher",
        reviewerAvatar: "/images/review-avatar-female1.jpg",
        quote:
            "The doctors here explained every step of my diagnosis with so much patience and clarity. It’s rare to find a place that combines modern technology with genuine human care. I left the center feeling reassured and confident about my health. Highly recommended for anyone seeking quality healthcare.",
        rating: 5,
        subjectName: "Neha Singh",
        subjectRole: "Patient",
        subjectAvatar: "/images/avatar-female1.jpg",
        date: "August 2024",
    },
    {
        reviewerName: "Vikram Mehta",
        reviewerLabel: "Software Engineer",
        reviewerAvatar: "/images/review-avatar-male2.jpg",
        quote:
            "From booking my test online to receiving the reports, the entire process was seamless. The staff was courteous and efficient, and the center maintained high standards of hygiene. The doctors took time to go through my reports and explain everything clearly. I’ll definitely return here for future checkups.",
        rating: 4,
        subjectName: "Vikram Mehta",
        subjectRole: "Patient",
        subjectAvatar: "/images/avatar-male2.jpg",
        date: "July 2024",
    },
    {
        reviewerName: "Ananya Rao",
        reviewerLabel: "College Student",
        reviewerAvatar: "/images/review-avatar-female2.jpg",
        quote:
            "I came in for a full-body checkup and was genuinely impressed with the professionalism of the staff. Every step was well-organized, the environment was spotless, and the doctors made me feel completely comfortable. It’s great to see such advanced facilities paired with a caring attitude.",
        rating: 5,
        subjectName: "Ananya Rao",
        subjectRole: "Health Checkup",
        subjectAvatar: "/images/avatar-female2.jpg",
        date: "June 2024",
    },
    {
        reviewerName: "Arjun Patel",
        reviewerLabel: "Accountant",
        reviewerAvatar: "/images/review-avatar-male3.jpg",
        quote:
            "I visited for a few diagnostic tests and was truly impressed with the expertise of the medical staff. The doctors explained the results in simple terms, and I felt genuinely cared for throughout the process. Their personal attention and advanced equipment give you complete confidence in their diagnosis.",
        rating: 5,
        subjectName: "Arjun Patel",
        subjectRole: "Patient",
        subjectAvatar: "/images/avatar-male3.jpg",
        date: "May 2024",
    },
    {
        reviewerName: "Pooja Sharma",
        reviewerLabel: "Homemaker",
        reviewerAvatar: "/images/review-avatar-female3.jpg",
        quote:
            "I brought my mother here for her routine checkup, and we were both touched by the compassion shown by every staff member. They guided us through each test patiently and ensured my mother felt comfortable at all times. The reports were detailed, accurate, and delivered promptly. We’re grateful for such genuine care.",
        rating: 5,
        subjectName: "Pooja Sharma",
        subjectRole: "Family Patient",
        subjectAvatar: "/images/avatar-female3.jpg",
        date: "April 2024",
    },
];



const CARD_WIDTH = 430;
const CARD_HEIGHT = 260;
const GAP_PX = 32;

const cardsData = [...testimonials, ...testimonials];

const TRANSITION_DURATION = 18; // seconds

export default function TestimonialsSection() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const totalScrollWidth = (CARD_WIDTH + GAP_PX) * testimonials.length;

  const elapsedWhenPausedRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const speed = totalScrollWidth / TRANSITION_DURATION;

  // Wrap the animateScroll logic so controls.set is never called before mount
  const isMountedRef = useRef(false);

  function animateScroll(timestamp: number) {
    if (startRef.current === null) startRef.current = timestamp;
    const timeDelta = (timestamp - startRef.current) / 1000 + elapsedWhenPausedRef.current;
    const x = -((timeDelta * speed) % totalScrollWidth);
    if (isMountedRef.current) {
      controls.set({ x });
    }
    if (!isPaused) {
      rafIdRef.current = requestAnimationFrame(animateScroll);
    }
  }

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (startRef.current !== null) {
        const elapsed = (performance.now() - startRef.current) / 1000;
        elapsedWhenPausedRef.current += elapsed;
      }
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
      startRef.current = null;
    } else {
      startRef.current = null;
      rafIdRef.current = requestAnimationFrame(animateScroll);
    }
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      startRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, totalScrollWidth, speed, controls]);

  useEffect(() => {
    // Reset on unmount
    return () => {
      elapsedWhenPausedRef.current = 0;
      startRef.current = null;
    };
  }, []);

  const onMouseEnter = () => setIsPaused(true);
  const onMouseLeave = () => setIsPaused(false);

  return (
    <>
      <style>{`
        .testimonial-ribbon {
          background: ${RIBBON_GRADIENT};
          color: #fff;
        }
        .testimonial-ribbon-tail {
          background: ${DARK_ACCENT_1};
        }
        .testimonial-card-bg {
          background: ${QUOTE_CARD_BG_GRADIENT};
          border: 1.5px solid ${QUOTE_CARD_BORDER};
        }
        .star-gradient {
          background: ${STAR_GRADIENT};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          display: inline-block;
        }
        .testimonial-fixed-height {
          min-height: ${CARD_HEIGHT}px;
          height: ${CARD_HEIGHT}px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .testimonial-slider-card {
          margin-top: 2.3rem;
        }
        @media (max-width: 900px) {
          .testimonial-slider-card {
            min-width: 96vw;
            max-width: 98vw;
            width: 98vw;
          }
        }
        @media (max-width: 640px) {
          .testimonial-fixed-height {
            min-height: 220px;
            height: 220px;
          }
        }
      `}</style>
      {/* SVG gradient for star fill */}
      <svg width="0" height="0">
        <linearGradient id="star-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#FFD600" offset="0%" />
          <stop stopColor="#FF9800" offset="100%" />
        </linearGradient>
      </svg>
      <section
        className="py-14 px-0 flex justify-center w-full"
        style={{
          background: `linear-gradient(110deg, ${DARK_BG_START} 0%, ${DARK_BG_MID} 60%, ${DARK_BG_END} 100%)`,
          backgroundColor: DARK_BG_MID,
        }}
      >
        <div className="w-full max-w-6xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-7"
          >
            <h2
              className="text-[24px] sm:text-[27px] md:text-[38px] font-semibold mb-4 text-center text-white"
              style={{ letterSpacing: 0.2 }}
            >
              What Our Patients Say
            </h2>
          </motion.div>
          {/* Slider-like infinite scroll on desktop, fallback vertical on mobile */}
          <div className="relative w-full overflow-x-hidden">
            <motion.div
              ref={containerRef}
              className="flex gap-8 md:gap-10 py-8"
              style={{
                width: "max-content",
              }}
              animate={controls}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {cardsData.map((t, idx) => (
                <motion.div
                  key={idx}
                  className="testimonial-slider-card"
                  style={{
                    width: CARD_WIDTH,
                    minWidth: CARD_WIDTH,
                    maxWidth: CARD_WIDTH,
                    flex: "0 0 auto",
                  }}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.21, delay: (idx % testimonials.length) * 0.10 }}
                >
                  <TestimonialCard {...t} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

// Card displays only name and rated stars
function TestimonialCard({
  reviewerName,
  rating = 5,
  quote,
  className,
}: Testimonial) {
  return (
    <div className={cn("relative mx-auto w-full max-w-xl", className)}>
      {/* Ribbon header for reviewer - only name and stars */}
      <div className="testimonial-ribbon absolute -top-14 left-6 z-10 rounded-tr-2xl rounded-bl-xl px-6 py-3 min-w-[204px]">
        <div className="flex items-center gap-3">
          <div>
            <div className="text-base font-bold tracking-wide uppercase">{reviewerName}</div>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1 text-white/90">
          {Array.from({ length: rating ?? 0 }).map((_, i) => (
            <span
              key={i}
              style={{ display: "inline-block" }}
            >
              <Star
                className="size-4"
                style={{ fill: "url(#star-grad)", stroke: "none", color: "inherit" }}
                fill="url(#star-grad)"
                stroke="none"
              />
            </span>
          ))}
        </div>
        <span className="testimonial-ribbon-tail absolute -bottom-3 left-3 block size-4 rotate-45" aria-hidden="true" />
      </div>
      {/* Main light blue gradient card with fixed minHeight/height for equal size */}
      <Card
        className="testimonial-card-bg testimonial-fixed-height relative px-6 py-8 md:px-10 md:py-10 flex flex-col justify-center"
      >
        <div className="flex flex-col justify-center h-full">
          <p className="mt-6 text-balance leading-relaxed font-medium text-base text-center"
             style={{ color: "#19587a" }}>
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      </Card>
    </div>
  );
}
