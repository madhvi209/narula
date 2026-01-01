"use client"

import { Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export default function FloatingContactMenu() {
    return (
        <>
            <div
                className="fixed left-6 top-1/2 z-50 flex flex-col items-start -ml-5 space-y-4"
                style={{ transform: "translateY(-50%)" }}
            >
                <Button
                    size="lg"
                    className="w-14 h-14 rounded-xl bg-[#00A5D4] hover:bg-[#0090b8] shadow-lg flex items-center justify-center"
                    onClick={() => window.open("tel:8000775100")}
                >
                    <Phone className="w-6 h-6" />
                </Button>
                <Button
                    size="lg"
                    className="w-14 h-14 rounded-xl bg-[#00527c] hover:bg-[#007fad] shadow-lg flex items-center justify-center"
                    onClick={() => window.open("tel:9797973300")}
                >
                    <Phone className="w-6 h-6" />
                </Button>
                <Button
                    size="lg"
                    className="w-14 h-14 rounded-xl bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center"
                    onClick={() => window.open("https://wa.me/918000775100")}
                >
                    <FaWhatsapp size={28} className="text-white" />
                </Button>
            </div>
        </>
    )
}
