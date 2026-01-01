"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  FileText,
  Dna,
  Stethoscope,
  Activity,
  Scan,
  X,
  Atom,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const PopupLogic: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  // All icons are now colored red (text-red-500)
  const services = [
    { icon: <Scan size={16} className="text-red-500" />, name: "Radiology" },
    { icon: <Activity size={16} className="text-red-500" />, name: "Radiology" },
    { icon: <Activity size={16} className="text-red-500" />, name: "PET CT" },
    { icon: <Dna size={16} className="text-red-500" />, name: "Genomics" },
    { icon: <Atom size={16} className="text-red-500" />, name: "Nuclear Medicine" },
    {
      icon: <Stethoscope size={16} className="text-red-500" />,
      name: "Personalised Health Checks",
    },
  ];

  // WhatsApp link (replace with actual business number if desired)
  const whatsappLink = "https://wa.me/919999999999"; // Change to your WhatsApp number

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 font-sans">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          <div className="relative w-full max-w-[1100px] md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[65vw] mx-auto">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
              {/* Header */}
              <header className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 border-b">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="h-24 sm:h-32 w-auto object-contain"
                  style={{ maxWidth: 420 }}
                />

                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 md:mt-0 text-[13px] font-bold text-slate-600">
                  <div className="flex items-center gap-2">
                    <FileText size={18} className="text-sky-600" />
                    Online Report
                  </div>
                  <div className="h-6 w-px bg-slate-200 hidden sm:block" />
                  <div className="flex flex-col gap-0">
                    <div className="flex items-center gap-2">
                      <Phone size={18} className="text-sky-600" />
                      8000775100 (Gurugram)
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone size={18} className="text-sky-600" />
                      9797973300 (Rohtak)
                    </div>
                  </div>
                  <div className="h-6 w-px bg-slate-200 hidden sm:block" />
                  {/* WhatsApp with clickable link */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:underline cursor-pointer"
                  >
                    <SiWhatsapp size={18} />
                    Whatsapp
                  </a>
                </div>
              </header>

              {/* Body */}
              <div className="flex flex-col lg:flex-row overflow-y-auto max-h-[calc(95vh-100px)]">
                {/* Left */}
                <div className="lg:w-3/5 relative min-h-[300px] min-w-[260px]">
                  <img
                    src="/images/popover.png"
                    alt="About"
                    className="w-full h-full object-cover opacity-80 rounded-lg"
                  />

                  {/* Services */}
                  <div
                    className="absolute top-0 right-0 z-10 flex flex-col items-end p-5 sm:p-8"
                    style={{ width: "100%", maxWidth: "70%" }}
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-sky-900 mb-2 sm:mb-3 border-l-4 border-red-500 pl-4 bg-white/80 backdrop-blur-sm rounded-md">
                      <span className="block">Integrated Centres of</span>
                      <span className="block">Excellence in Diagnostics</span>
                    </h2>

                    {/* ✅ ALIGNMENT FIX IS HERE - icons and text are right-aligned, text ends where icon ends */}
                    <div className="flex flex-col gap-2 sm:gap-3 mt-2 items-end">
                      {services.map((s, i) => (
                        <div key={i} className="flex flex-row-reverse items-center gap-2 justify-end">
                          {/* Icon column - on the right */}
                          <div className="w-7 h-7 flex-shrink-0 rounded-full border bg-white flex items-center justify-center text-red-500">
                            {s.icon}
                          </div>

                          {/* Text column - right aligned, ends at icon's left */}
                          <div className="text-sky-400 font-bold text-base sm:text-l leading-tight break-words text-right">
                            {s.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="lg:w-2/5 p-4 sm:p-8 bg-sky-50 flex items-center justify-center min-w-[220px]">
                  <div className="w-full max-w-md bg-sky-200 rounded-2xl shadow-xl">
                    <div className="py-3 sm:py-4 text-center border-b border-white/10">
                      <h3 className="text-xl sm:text-2xl font-bold text-sky-900">
                        Book Appointment
                      </h3>
                    </div>

                    <form className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                      <input className="w-full p-2 rounded-md text-sm bg-white border border-slate-300" placeholder="Full Name*" />
                      <input className="w-full p-2 rounded-md text-sm bg-white border border-slate-300" placeholder="Contact No.*" />
                      <input className="w-full p-2 rounded-md text-sm bg-white border border-slate-300" placeholder="Email Address" />
                      <textarea className="w-full p-2 rounded-md text-sm bg-white border border-slate-300" rows={2} placeholder="Comment" />
                      <button className="w-full py-2 sm:py-3 bg-red-500 text-white font-black rounded-lg">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute -top-4 -right-4 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-xl"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupLogic;
