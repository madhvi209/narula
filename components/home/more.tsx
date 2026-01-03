"use client"

import { cn } from "@/lib/utils"
import { Building2, ClipboardPlusIcon, HeartPulse, Home, Hospital, SearchX } from "lucide-react"

type Props = { className?: string }

const items = [
  {
    icon: SearchX,
    title: "Book Test",
    subtitle: "View Tests and Prices",
  },
  {
    icon: Home,
    title: "Home Collection",
    subtitle: "Book Home Collection",
  },
  {
    icon: Hospital,
    title: "Locate Centres",
    subtitle: "Find Centres near you",
  },
  {
    icon: ClipboardPlusIcon,
    title: "Health Packages",
    subtitle: "Find Health Package ",
  },
]

export default function ExploreMore({ className }: Props) {
  return (
    <section
      className={cn(
        "w-full flex justify-center px-2 sm:px-4 py-8 bg-[#f8fbfc] ",
        className
      )}
      style={{
        background: "linear-gradient(120deg, #f8fbfc 70%, #e6f6ff 100%)",
      }}
    >
      <nav
        role="navigation"
        aria-label="Explore more options"
        className={cn(
          "w-full max-w-[1180px] grid gap-5 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-7 mb-7",
        )}
      >
        {items.map(({ icon: Icon, title, subtitle }) => (
          <a
            key={title}
            href="#"
            className={cn(
              // Add hover:bg-[#e0f3ff] for blue background on hover (a bit brighter blue!)
              "group rounded-[18px] border transition-shadow duration-150 bg-white hover:bg-[#B4E9FF] focus:bg-[#deeffe]"
            )}
            style={{
              borderColor: "#e3edf7",
              boxShadow:
                "0 1px 2px rgba(67,67,77,0.03), 0 2px 8px rgba(164,191,225,.08)",
            }}
            aria-label={title}
          >
            <div className="flex items-start gap-4">
              <div
                className={cn(
                  // Subtle icon blue background on hover
                  "grid place-items-center rounded-full mt-2 ml-2 group-hover:bg-[#e0f3ff] transition-colors duration-150",
                )}
                style={{
                  width: 44,
                  height: 44,
                  background: "#eef7fc",
                  border: "1px solid #e0ecf4",
                  color: "#15648c",
                  boxShadow: "0 1px 4px rgba(83,120,168,.07)",
                }}
                aria-hidden="true"
              >
                <Icon className="w-6 h-6" />
              </div>
              <div className="py-3 pr-3 pl-0">
                <h3
                  className="text-[17px] font-semibold mb-[3px] leading-tight"
                  style={{ color: "#15334c" }}
                >
                  {title}
                </h3>
                <p
                  className="text-[15px] leading-snug"
                  style={{ color: "#6c8dab" }}
                >
                  {subtitle}
                </p>
              </div>
            </div>
          </a>
        ))}
      </nav>
    </section>
  )
}
