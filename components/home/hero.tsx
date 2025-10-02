"use client"; 

import { useState } from "react";
import { Search } from "lucide-react";
import heroImage from "@/public/images/hero.png"; // Make sure path is correct
import { Input } from "@/components/ui/input"; // Or use <input /> directly

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
        <section className="relative min-h-[450px] flex items-center">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
                        Trusted Medical
                        <span className="block text-[#00A5D4]">Diagnostics Since 1952</span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
                        आपका विश्वास है हमारी प्रेरणा – Your Trust Inspires Us
                    </p>

                    <form
                        className="relative max-w-xl animate-fade-in"
                        onSubmit={handleSearchSubmit}
                    >
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search for tests, services, or health packages..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="pl-12 h-14 text-base shadow-lg w-full"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;
