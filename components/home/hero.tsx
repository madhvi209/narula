"use client"; 

import { useState } from "react";
import { Search, Shield, Phone } from "lucide-react";
import heroImage from "@/public/images/hero.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Search Query:", searchQuery);
    };

    return (
        <section className="relative min-h-[450px] md:min-h-[500px] flex items-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/50 to-background/10" />
            </div>

            <div className="site-container max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Main Content */}
                    <div className="space-y-8">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#00A5D4]/10 text-[#00A5D4] px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
                            <Shield className="h-4 w-4" />
                            <span>NABL Certified • 71 Years of Excellence</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in-up">
                            Trusted Medical
                            <span className="block text-[#00A5D4]">Diagnostics Since 1952</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in">
                            आपका विश्वास है हमारी प्रेरणा – Your Trust Inspires Us
                        </p>
                    </div>

                    {/* Right Column - Search and Action Buttons */}
                    <div className="flex flex-col gap-6 items-center justify-center w-full">
                        {/* Serving over 5+ crore patients... */}
                        <p className="text-base md:text-lg text-[#000] animate-fade-in mb-2 text-center w-full">
                            Serving over 5+ crore patients with state-of-the-art technology and expert care across 3 locations in Haryana.
                        </p>
                        {/* Search Bar */}
                        <form
                            className="relative w-full max-w-xl animate-fade-in"
                            onSubmit={handleSearchSubmit}
                        >
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search for tests, services, or health packages..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="pl-12 h-14 text-base shadow-lg w-full bg-white/98 border-0"
                            />
                        </form>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full animate-fade-in">
                            <Button 
                                size="lg" 
                                className="bg-[#00A5D4] hover:bg-[#0088b3] text-white h-12 px-8 text-base font-semibold w-full sm:w-auto"
                                onClick={() => document.getElementById('tests')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                            Health Packages
                            </Button>
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="h-12 px-8 text-base font-semibold border-[#00A5D4] text-[#00A5D4] hover:bg-[#00A5D4] hover:text-white w-full sm:w-auto"
                            >
                                <Phone className="h-4 w-4 mr-2" />
                                Call Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
