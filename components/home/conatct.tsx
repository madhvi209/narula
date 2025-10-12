"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone } from "lucide-react";
import React from "react";

// Import Lucide or custom SVG for social icons
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

// Blue shades for gradient use
const BLUE_400 = "#39A9DB";
const BLUE_500 = "#2079c5";
const BLUE_600 = "#18629F";
const BLUE_700 = "#12416C";
const BLUE_100 = "#eaf6fb";
const BLUE_200 = "#bee1ef";

// Background style from health-concern.tsx (see file_context_0)
const contactSectionBackground =
  "linear-gradient(102deg, #d3f3fa 15%, #e0f7fc 68%, #ffffff 100%)";

// Google Map embed links for each location
const maps = [
    {
        label: "Rohtak (Main Centre)",
        address: "Narula Diagnostic Centre-MRI/ PET-CT /128 slice CT Scan/Digital X-Rays/Mammography/4D Ultrasound/ Path Lab in Rohtak",
        mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6986.044964220024!2d76.583384!3d28.89768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85bb4ba0c1b5%3A0x327b18fff5f1b8d9!2sNarula%20Diagnostic%20Centre-MRI%2F%20PET-%20CT%20%2F128%20slice%20CT%20Scan%2FDigital%20X-Rays%2FMammography%2F4D%20Ultrasound%2F%20Path%20Lab%20in%20Rohtak!5e0!3m2!1sen!2sin!4v1760265563977!5m2!1sen!2sin",
        mapUrl: "https://maps.app.goo.gl/6xQpkGwwxTtZvy8C9"
    },
    {
        label: "Medical Mor (Rohtak)",
        address: "Narula Diagnostics, Medical Mor, Rohtak",
        mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6986.7066443725325!2d76.609695!3d28.887847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d851c56e3ee97%3A0xacefdb5f52911a70!2sNarula%20Diagnostics%2C%20Medical%20Mor!5e0!3m2!1sen!2sin!4v1760265605392!5m2!1sen!2sin",
        mapUrl: "https://maps.app.goo.gl/eGwPzFSgp2jD2MQ29"
    }
];

// You can replace these URLs with actual links as needed.
const SOCIALS = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/"
  },
];

export default function ContactClientPage() {
    return (
        <main
            className="px-4 py-10 md:py-14"
            style={{
                background: contactSectionBackground,
                borderRadius: "22px",
                boxShadow: "0 3px 32px 0 rgba(60,126,255,0.10)"
            }}
        >
            <div className="max-w-5xl mx-auto my-10 md:my-16">
                <div className="flex flex-col md:flex-row gap-0 md:gap-0 rounded-xl overflow-hidden shadow-lg">
                    {/* Left dark-blue panel with gorgeous gradient */}
                    <aside
                        className="md:w-[38%] w-full p-6 md:p-8 flex-shrink-0"
                        style={{
                            background: `linear-gradient(135deg, ${BLUE_600}, ${BLUE_500}, ${BLUE_400})`,
                            color: "#fff",
                        }}
                        aria-labelledby="contact-left-title"
                    >
                        <h2
                            id="contact-left-title"
                            className="text-2xl font-semibold mb-6"
                            style={{
                                color: "#fff",
                            }}
                        >
                            Contact Us
                        </h2>
                       
                        <ul className="space-y-4 text-sm/6">
                            <li className="flex gap-3 items-start">
                                <MapPin className="size-7 opacity-90 mt-[2px]" aria-hidden="true" />
                                <span className="opacity-90">
                                    240, Medicity, Islampur Colony, Sector 37, Gurugram, Haryana 122002
                                </span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <MapPin className="size-5 opacity-90 mt-[2px]" aria-hidden="true" />
                                <span className="opacity-85">
                                    Narula Diagnostic Centres Pvt Ltd, Civil Road, Rohtak
                                </span>
                            </li>

                            <li className="flex gap-3 items-center">
                                <Mail className="size-5 opacity-90" aria-hidden="true" />
                                <a
                                    href="mailto:naruladiagnostics@gmail.com"
                                    className="underline underline-offset-4 decoration-white/40 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                                >
                                    naruladiagnostics@gmail.com
                                </a>
                            </li>

                            <li className="flex flex-col gap-2 items-start">
                                {/* Each number starts from same point, all with visible phone icon for vertical alignment*/}
                                <span className="flex items-center gap-3">
                                    <Phone className="size-4 opacity-80" aria-hidden="true" />
                                    <a
                                        href="tel:7070709304"
                                        className="underline underline-offset-4 decoration-white/40 hover:decoration-white flex items-center gap-2"
                                    >
                                        7070709304 (Gurugram)
                                    </a>
                                </span>
                                <span className="flex items-center gap-3">
                                    <Phone className="size-4 opacity-80" aria-hidden="true" />
                                    <a
                                        href="tel:800077510"
                                        className="underline underline-offset-4 decoration-white/40 hover:decoration-white flex items-center gap-2"
                                    >
                                        800077510 (Gurugram)
                                    </a>
                                </span>
                                <span className="flex items-center gap-3">
                                    <Phone className="size-4 opacity-80" aria-hidden="true" />
                                    <a
                                        href="tel:9797973300"
                                        className="underline underline-offset-4 decoration-white/40 hover:decoration-white flex items-center gap-2"
                                    >
                                        9797973300 (Rohtak)
                                    </a>
                                </span>
                                <span className="flex items-center gap-3">
                                    <Phone className="size-4 opacity-80" aria-hidden="true" />
                                    <a
                                        href="tel:9896344314"
                                        className="underline underline-offset-4 decoration-white/40 hover:decoration-white flex items-center gap-2"
                                    >
                                        9896344314 (Rohtak)
                                    </a>
                                </span>
                            </li>

                            {/* Social icons */}
                            <div className="mb-6 mt-9 flex gap-9 items-center">
                                {SOCIALS.map(({ name, icon: Icon, url }) => (
                                    <a
                                        key={name}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={name}
                                        className="hover:scale-110 hover:opacity-90 transition-transform text-white"
                                    >
                                        <Icon className="size-6 opacity-85" />
                                    </a>
                                ))}
                            </div>
                        </ul>
                    </aside>

                    {/* Right white form panel */}
                    <section
                        className="md:w-[62%] w-full p-6 md:p-10"
                        aria-labelledby="contact-form-title"
                        style={{
                            background: `linear-gradient(110deg, #fff 75%, ${BLUE_100} 100%)`,
                        }}
                    >
                        <header className="mb-6">
                            <h1
                                id="contact-form-title"
                                className="text-2xl md:text-3xl font-semibold text-balance"
                                style={{
                                    background: `linear-gradient(90deg, ${BLUE_600}, ${BLUE_400})`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Get in Touch
                            </h1>
                            <p className="mt-2 text-muted-foreground">
                                Feel free to drop us a line below!
                            </p>
                        </header>

                        <form
                            className="grid gap-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.currentTarget as HTMLFormElement;
                                const formData = new FormData(form);
                                console.log("[v0] Contact form submission:", {
                                    name: formData.get("name"),
                                    email: formData.get("email"),
                                    message: formData.get("message"),
                                });
                                // TODO: Hook up to backend or email service
                            }}
                        >
                            <div className="grid gap-1.5">
                                <Label htmlFor="name">Your name</Label>
                                <Input id="name" name="name" placeholder="Your name" required />
                            </div>

                            <div className="grid gap-1.5">
                                <Label htmlFor="email">Your email</Label>
                                <Input id="email" name="email" type="email" placeholder="Your email" required />
                            </div>

                            <div className="grid gap-1.5">
                                <Label htmlFor="message">Your message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Type your message here..."
                                    rows={5}
                                    required
                                />
                            </div>

                            <div className="pt-2 flex justify-end">
                                <button
                                    type="submit"
                                    className="font-semibold px-6 py-1.5 rounded-lg transition-colors duration-200 shadow-[var(--shadow-button)] hover:brightness-110 hover:scale-[1.03] hover:shadow-lg flex justify-center items-center gap-2 text-white"
                                    style={{
                                        background: "linear-gradient(to right, #00A5D4, #2079c5, #134471)",
                                        color: "#fff",
                                        minWidth: "110px",
                                        height: "36px",
                                    }}
                                >
                                    <span className="w-full flex justify-center items-center">Send</span>
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
                {/* Map section: Two maps, each half width on desktop, stacked on mobile */}
                <div className="my-16 md:my-24 flex flex-col md:flex-row gap-8">
                    {maps.map((item, idx) => (
                        <div
                            key={item.label}
                            className="flex-1 flex flex-col"
                        >
                            <div className="rounded-lg overflow-hidden shadow-md border border-[#d1e6f5]">
                                <iframe
                                    src={item.mapEmbedUrl}
                                    width="100%"
                                    height="270"
                                    allowFullScreen
                                    loading="lazy"
                                    className="w-full"
                                    style={{
                                        border: 0
                                    }}
                                    referrerPolicy="no-referrer-when-downgrade"
                                    aria-label={`Map for ${item.label} location`}
                                    title={`${item.label} location map`}
                                ></iframe>
                            </div>
                            <div className="mt-3 px-1">
                                <span className="block font-semibold text-[1.08rem] text-blue-900">{item.label}</span>
                                <span className="block text-sm text-gray-700">{item.address}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
