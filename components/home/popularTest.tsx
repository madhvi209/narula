import { cn } from "@/lib/utils"
import { FlaskConical } from "lucide-react"
import { Button } from "../ui/button"
import { SectionHeader } from "../ui/section-header"
import { AddToCartButton } from "../ui/add-to-cart-button"

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
            <SectionHeader title="Frequently" gradientText="Booked Tests" />

            {/* Cards Grid */}
            <div
                className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-1  lg:grid-cols-3  mx-auto max-w-[95%]  md:max-w-[90%] lg:max-w-[1120px]"
            >

                {items.map((t) => {
                    const cartItem = {
                        type: 'test' as const,
                        title: t.title,
                        description: t.reportTAT,
                        category: 'Popular Tests',
                        normalPrice: parseInt(t.price.replace(/[^\d]/g, '')),
                        discountedPrice: parseInt(t.price.replace(/[^\d]/g, '')),
                        tests: [t.title],
                        testsCount: 1
                    };

                    return (
                        <div key={t.title} className="flex justify-center">
                            <article
                                className={cn(
                                    "test-card relative h-full rounded-2xl border px-5 xs:px-6 sm:px-8 py-6 min-w-[230px] xs:min-w-[270px] sm:min-w-[320px] md:min-w-[370px] max-w-[410px] transition-transform duration-200 group hover:scale-102 hover:shadow-xl scale-[0.97]"
                                )}
                                style={{
                                    background: 'var(--primary-blue-light)',
                                    borderColor: 'var(--primary-blue-border)',
                                    boxShadow: "0 2px 8px rgba(36,137,209,0.07)",
                                }}
                                tabIndex={0}
                                aria-label={t.title}
                            >
                                <AddToCartButton
                                    item={cartItem}
                                    variant="icon"
                                />

                                <h3 className="text-[19px] font-semibold" style={{ color: 'var(--primary-blue-darker)' }}>
                                    {t.title}
                                </h3>
                                <p className="mt-2 text-[15px] font-medium" style={{ color: 'var(--primary-blue-accent)' }}>
                                    {t.includes}
                                </p>
                                <p className="mt-1 text-[15px]" style={{ color: 'var(--primary-blue)' }}>
                                    {t.reportTAT}
                                </p>
                                <div className="mt-4 flex items-end justify-between">
                                    <p className="text-[17px] font-semibold" style={{ color: 'var(--primary-blue-text)' }}>
                                        {t.price}
                                    </p>
                                    <span aria-hidden="true" title="Lab test icon" style={{ color: 'var(--primary-blue)' }}>
                                        <FlaskConical className="w-7 h-7" />
                                    </span>
                                </div>
                            </article>
                        </div>
                    );
                })}
            </div>

            {/* View All Button */}
            <div className="w-full mt-2 max-w-[1180px] mx-auto">
                <div className="flex justify-end">
                    <Button className="btn-view-all" asChild>
                        <a href="#" aria-label="View all frequently booked tests" tabIndex={0}>
                            View All
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
