import { cn } from "@/lib/utils"
import { Plus, FlaskConical } from "lucide-react"
import { Button } from "../ui/button"

// Blue color palette
const BLUE_100 = "#f0faff";
const BLUE_200 = "#eaf5fd";
const BLUE_300 = "#bfe1ff";
const BLUE_400 = "#00A5D4";    // Primary button, accent
const BLUE_500 = "#2079c5";    // Dark hover blue
const BLUE_600 = "#134471";    // Deep heading/primary text
const BLUE_700 = "#2b8dad";    // Price font
const BLUE_800 = "#0090b8";    // Secondary accent

type TestCard = {
    title: string
    includes: string
    reportTAT: string
    price: string
}

const items: TestCard[] = [
    {
        title: "Haemogram (CBC)",
        includes: "Includes 26 Tests",
        reportTAT: "Report will be sent within 4 hours",
        price: "Rs. 350",
    },
    {
        title: "Glucose - Fasting",
        includes: "Includes 1 Test",
        reportTAT: "Report will be sent within 3 hours",
        price: "Rs. 85",
    },
    {
        title: "Glucose - Post Prandial",
        includes: "Includes 1 Test",
        reportTAT: "Report will be sent within 3 hours",
        price: "Rs. 85",
    },
]

export default function FrequentlyBooked({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "w-full flex flex-col gap-5 px-2 sm:px-4 py-8 mb-6",
                className
            )}
        >
            {/* Heading */}
            <div className="max-w-[1180px] mx-auto w-full">
                <h2
                    className="text-[24px] sm:text-[27px] md:text-[39px] font-semibold mb-3"
                    style={{ color: BLUE_600 }}
                >
                    Frequently{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage: `linear-gradient(to right, ${BLUE_500}, ${BLUE_400}, ${BLUE_800})`,
                        }}
                    >
                        Booked Tests
                    </span>
                </h2>
            </div>

            {/* Cards Grid */}
            <div className="w-full grid gap-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1180px] mx-auto">
                {items.map((t) => (
                    <div key={t.title} className="flex justify-center">
                        <article
                            className={cn(
                                // Increased min/max widths for card width
                                "relative h-full rounded-2xl border px-8 py-6 min-w-[355px] md:min-w-[370px] max-w-[410px] transition-transform duration-200 group hover:scale-102 hover:shadow-xl scale-[0.97]"
                            )}
                            style={{
                                background: BLUE_100,
                                borderColor: BLUE_300,
                                boxShadow: "0 2px 8px rgba(36,137,209,0.07)",
                                // Optionally, you can also set a maxWidth if you want.
                                // maxWidth: 380
                            }}
                            tabIndex={0}
                            aria-label={t.title}
                        >
                            <button
                                aria-label={`Add ${t.title}`}
                                className={cn(
                                    "add-btn absolute -top-3 -right-3 grid w-16 h-9 place-items-center rounded-md shadow flex items-center justify-center gap-1 border transition-colors duration-200 overflow-hidden",
                                    "text-white group"
                                )}
                                style={{
                                    background: `linear-gradient(to right, ${BLUE_400}, ${BLUE_500}, ${BLUE_600})`,
                                    color: "#fff",
                                    borderColor: BLUE_300,
                                    boxShadow: "0 2px 6px rgba(36,137,209,0.10)",
                                }}
                                tabIndex={-1}
                            >
                                <span className="flex items-center gap-1">
                                    <Plus className="w-5 h-5" />
                                    <span className="text-xs font-medium ml-1 hidden md:inline">Add</span>
                                </span>
                            </button>

                            <style>
                                {`
                  .add-btn:hover, .add-btn:focus-visible {
                    background: linear-gradient(to right, ${BLUE_500}, ${BLUE_600}, ${BLUE_800}) !important;
                  }
                  .group:hover, .group:focus-visible, article:focus-visible {
                    transform: scale(1.015) !important;
                    box-shadow: 0 6px 30px rgba(36,137,209,0.12);
                  }
                  article:focus-visible {
                    outline: 2px solid ${BLUE_500};
                    outline-offset: 2px;
                    z-index: 2;
                  }
                `}
                            </style>

                            <h3 className="text-[19px] font-semibold" style={{ color: BLUE_600 }}>
                                {t.title}
                            </h3>
                            <p className="mt-2 text-[15px] font-medium" style={{ color: BLUE_800 }}>
                                {t.includes}
                            </p>
                            <p className="mt-1 text-[15px]" style={{ color: BLUE_400 }}>
                                {t.reportTAT}
                            </p>
                            <div className="mt-4 flex items-end justify-between">
                                <p className="text-[17px] font-semibold" style={{ color: BLUE_700 }}>
                                    {t.price}
                                </p>
                                <span aria-hidden="true" title="Lab test icon" style={{ color: BLUE_400 }}>
                                    <FlaskConical className="w-7 h-7" />
                                </span>
                            </div>
                        </article>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="w-full mt-2 max-w-[1180px] mx-auto">
                <div className="flex justify-end">
                    <Button
                        className="shadow-[var(--shadow-button)] font-semibold px-4 md:px-6 transition-colors duration-200 hover:brightness-110 hover:scale-[1.03] hover:shadow-lg"
                        style={{
                            background: `linear-gradient(to right, ${BLUE_400}, ${BLUE_500}, ${BLUE_600})`,
                            color: "#fff",
                        }}
                        asChild
                    >
                        <a href="#" aria-label="View all frequently booked tests" tabIndex={0}>
                            View All
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
