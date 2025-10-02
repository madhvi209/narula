"use client"

import { MapPin } from "lucide-react"
import { useEffect, useRef } from "react"

export default function AnnouncementBar() {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scrollElement = scrollRef.current
        if (!scrollElement) return

        let animationId: number
        let position = 0

        const scroll = () => {
            position -= 1
            if (position <= -scrollElement.scrollWidth / 2) {
                position = 0
            }
            scrollElement.style.transform = `translateX(${position}px)`
            animationId = requestAnimationFrame(scroll)
        }

        animationId = requestAnimationFrame(scroll)

        return () => cancelAnimationFrame(animationId)
    }, [])

    return (
        <div className="bg-[#00A5D4] text-white py-3 overflow-hidden">
            <div ref={scrollRef} className="flex whitespace-nowrap">
                <div className="flex items-center gap-8 px-4">
                    <span className="text-sm font-medium">
                        Experience Home Collections in as early as 45 minutes* when you book with us online. *Subject to slot
                        availability
                    </span>
                    <span className="text-sm font-medium flex items-center gap-2">
                        📞 8000775100 (Gurugram) | 9797973300 (Rohtak)
                    </span>
                    <span className="text-sm font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Civil Road, Rohtak | Medical Mod, Rohtak | Medanta Road, Gurugram
                    </span>
                </div>
                <div className="flex items-center gap-8 px-4">
                    <span className="text-sm font-medium">
                        Experience Home Collections in as early as 45 minutes* when you book with us online. *Subject to slot
                        availability
                    </span>
                    <span className="text-sm font-medium flex items-center gap-2">
                        📞 8000775100 (Gurugram) | 9797973300 (Rohtak)
                    </span>
                    <span className="text-sm font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Civil Road, Rohtak | Medical Mod, Rohtak | Medanta Road, Gurugram
                    </span>
                </div>
            </div>
        </div>
    )
}
