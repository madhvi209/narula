"use client";

import FloatingChat from "@/components/(website)/floatingChat";
import { Shield, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const HERO_IMAGES = [
  "/images/banner/banner.png",
  "/images/banner/banner1.jpeg",
  "/images/banner/banner3.png",
  "/images/banner/banner4.png",
  "/images/banner/banner2.png",
  "/images/banner/banner5.png",
];

const SLIDE_INTERVAL = 4500;

const NABLBadge = ({ className = "" }: { className?: string }) => (
  <div
    className={`flex items-center gap-3 px-6 py-2 rounded-full shadow-2xl border-2 border-[#04c3ff] bg-gradient-to-r from-[#04c3ff] to-[#0B4A8C] animate-pulse-weak relative overflow-hidden ${className}`}
    style={{ boxShadow: "0 0 25px 2px #20bffb88, 0 4px 12px #0B4A8C33" }}
  >
    <span className="absolute blur-2xl opacity-50 left-0 right-0 top-0 bottom-0 pointer-events-none bg-cyan-200 rounded-full z-[-1]" />
    <Shield className="w-6 h-6 text-white drop-shadow-xl" />
    <span className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-white drop-shadow-[0_1.5px_16px_rgba(33,203,255,0.29)]">
      <span className="text-[#fcfc8f] text-[1.07em]">NABL</span> Certified
    </span>
    <span className="ml-2 text-[#e2eeff] font-semibold hidden sm:inline">
      &bull; <span className="text-cyan-200 font-bold">73+ Years of Excellence</span>
    </span>
  </div>
);

const HeroSection = () => {
  const [slide, setSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [interactionState, setInteractionState] = useState<"idle" | "drawing" | "full" | "finished">("idle");
  const [entrySide, setEntrySide] = useState<"left" | "right">("right");
  const [showMiniVideo, setShowMiniVideo] = useState(false);
  const [miniVideoActive, setMiniVideoActive] = useState(false);
  const [skipReason, setSkipReason] = useState<null | "btn" | "ended">(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const numSlides = HERO_IMAGES.length;

  // Banner Slider Logic
  useEffect(() => {
    if (interactionState === "finished" || interactionState === "idle") {
      intervalRef.current = setInterval(() => {
        setSlide((curr) => (curr + 1) % numSlides);
      }, SLIDE_INTERVAL);
    } else {
      setSlide(0); // Show first banner during video interaction
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [numSlides, interactionState]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (interactionState === "full" || interactionState === "finished" || !sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

    // Determine entry side on first move
    if (interactionState === "idle") {
      setEntrySide(xPercent > 50 ? "right" : "left");
      setInteractionState("drawing");

      // Start timer: After 3 seconds of movement, go full screen
      timerRef.current = setTimeout(() => {
        setInteractionState("full");
      }, 3000);
    }

    setMousePos({ x: xPercent, y: yPercent });
  };

  // Video skips (by user or when ends)
  const handleVideoEndOrSkip = (reason: "ended" | "btn") => {
    setInteractionState("finished");
    setShowMiniVideo(true);
    setMiniVideoActive(true);
    setSkipReason(reason);
  };

  const handleMiniVideoClose = () => {
    setShowMiniVideo(false);
    setMiniVideoActive(false);
  };

  const handleMiniVideoExpand = () => {
    setShowMiniVideo(false);
    setMiniVideoActive(false);
    setInteractionState("full");
    setSkipReason(null);

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 100);
  };

  // Used for "Skip Video" on video controls
  const handleSkipButton = () => {
    handleVideoEndOrSkip("btn");
  };

  // Calculate the Clip Path based on entry side
  const getClipPath = () => {
    if (interactionState === "full") return "inset(0% 0% 0% 0%)";
    if (interactionState === "idle" || interactionState === "finished") return "inset(0% 0% 0% 100%)";
    return entrySide === "right"
      ? `polygon(100% 0%, 100% 100%, ${mousePos.x}% ${mousePos.y}%)`
      : `polygon(0% 0%, 0% 100%, ${mousePos.x}% ${mousePos.y}%)`;
  };

  const fixedSectionHeight = '65vh';

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[65vh] md:min-h-[65vh] flex flex-col justify-between overflow-hidden font-sans transition-bg duration-700 cursor-crosshair"
      style={{ minHeight: fixedSectionHeight }}
    >
      {/* 1. Background Layer: Banners */}
      <div className="absolute inset-0 w-full h-full z-0">
        {HERO_IMAGES.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt="Hero"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${slide === idx ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      {/* 2. Middle Layer: Video (Hidden on mobile) */}
      {(interactionState !== "finished") && (
        <div
          className="absolute inset-0 z-10 hidden md:block"
          style={{
            clipPath: getClipPath(),
            transition: interactionState === "full" ? 'clip-path 0.8s ease-in-out' : 'clip-path 0.1s ease-out',
            pointerEvents: interactionState === "full" ? "auto" : "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              autoPlay
              muted={interactionState !== "full"} // Unmute when full for better experience
              loop={interactionState !== "full"}
              playsInline
              onEnded={() => handleVideoEndOrSkip("ended")}
              controls={interactionState === "full"}
              className="w-full h-full"
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "100vw",
                maxHeight: "100vh",
                objectFit: "fill"
              }}
            >
              <source src="/video/Hero.mp4" type="video/mp4" />
            </video>
            {/* SKIP BUTTON on video controls (only in full mode) */}
            {interactionState === "full" && (
              <button
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  zIndex: 60,
                  padding: 8,
                  background: "rgba(11,74,140,0.75)",
                  color: "#fff",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  border: "none",
                  cursor: "pointer",
                  minWidth: 85,
                  boxShadow: "0 2px 9px #09375733"
                }}
                onClick={handleSkipButton}
              >
                Skip Video
              </button>
            )}

            {/* Centered Blurred and Light Glow Text with LITTLE blur */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
              <span
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "2.5rem",
                  textAlign: "center",
                  letterSpacing: "0.05em",
                  opacity: 0.57,
                  filter: "blur(1.2px) brightness(1.17)",
                  textShadow:
                    "0 0px 16px #B2FAFF, 0 3px 15px #fff, 0 0px 44px #69dbfc, 0 3px 22px #fff7f7",
                  fontFamily: "inherit",
                  pointerEvents: "none"
                }}
                className="px-8 py-2 rounded-lg select-none pointer-events-none"
              >
                Narula Diagnostic Center
              </span>
            </div>

            {/* Close button for full video mode */}
            {interactionState === "full" && (
              <button
                onClick={() => handleVideoEndOrSkip("btn")}
                className="absolute top-20 right-10 z-50 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md transition-all"
              >
                <X className="text-white w-6 h-6" />
              </button>
            )}

            {/* Cursor Follower Glow (only while drawing) */}
            {interactionState === "drawing" && (
              <div
                className="absolute w-6 h-6 bg-cyan-400 blur-xl rounded-full pointer-events-none"
                style={{ left: `${mousePos.x}%`, top: `${mousePos.y}%`, transform: 'translate(-50%, -50%)' }}
              />
            )}
          </div>
        </div>
      )}

      {/* Mini Video at Top Right (if skipped/closed) - INSIDE THE HERO SECTION */}
      {showMiniVideo && !miniVideoActive ? null : (
        showMiniVideo && (
          <div
            className="absolute hidden md:block"
            style={{
              top: 28,
              right: 30,
              width: 260,
              height: 146,
              background: "#16394D99",
              borderRadius: "16px",
              overflow: "hidden",
              border: "2px solid #0B4A8C",
              boxShadow: "0 9px 34px #07588e22",
              transition: "opacity 0.3s",
              opacity: 1,
              cursor: "pointer",
              zIndex: 60, // above most other hero elements
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <video
                src="/video/hero.mp4"
                tabIndex={-1}
                style={{ width: "100%", height: "100%", objectFit: "fill", background: "#0B4A8C" }}
                muted
                loop
                autoPlay
                playsInline
                controls={false}
                aria-hidden="true"
                onClick={handleMiniVideoExpand}
              />
              {/* Overlay mini controls */}
              <button
                aria-label="Close"
                className="absolute top-1 left-1 bg-[#052e53bb] hover:bg-[#204763c0] rounded-full p-1"
                style={{
                  width: 26, height: 26,
                  zIndex: 2,
                  border: "none"
                }}
                tabIndex={0}
                onClick={e => { e.stopPropagation(); handleMiniVideoClose(); }}
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <button
                aria-label="Expand"
                className="absolute top-1 right-1 bg-[#04c3ffbb] hover:bg-[#72c2e6] rounded-full p-1"
                style={{
                  width: 26, height: 26,
                  zIndex: 2,
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 17,
                  fontWeight: 800,
                }}
                tabIndex={0}
                onClick={e => { e.stopPropagation(); handleMiniVideoExpand(); }}
              >
                <span className="block" style={{ fontSize: 17, lineHeight: 1 }}>⤢</span>
              </button>
            </div>
          </div>
        )
      )}

      {/* 3. Top Layer: UI Elements */}
      <div className={`absolute top-2 left-1/2 z-40 flex transition-transform duration-500 ${slide === 0 ? "translate-x-[8%]" : "-translate-x-1/2"}`}>
        <NABLBadge />
      </div>

      {/* Slide Indicators - Show when idle or finished */}
      {(interactionState === "finished" || interactionState === "idle") && (
        <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all border ${slide === idx ? "bg-cyan-400 border-white" : "bg-white/60 border-cyan-200"}`}
              onClick={() => setSlide(idx)}
            />
          ))}
        </div>
      )}

      <FloatingChat />
    </section>
  );
};

export default HeroSection;