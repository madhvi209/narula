"use client"

import { motion } from "framer-motion"
import { Shield, Stethoscope, Zap, Award, Heart, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
    {
        icon: Shield,
        title: "Trusted Since 1952",
        description: "71 years of excellence in diagnostic services across Haryana",
    },
    {
        icon: Stethoscope,
        title: "Doctor Operated",
        description: "Run by experienced MD physicians and specialist radiologists",
    },
    {
        icon: Zap,
        title: "Latest Equipment",
        description: "First in Haryana to introduce advanced diagnostic technology",
    },
    {
        icon: Award,
        title: "NABL & NABH Certified",
        description: "Accredited for quality and reliability in diagnostic services",
    },
    {
        icon: Heart,
        title: "Patient-Centric Care",
        description: "आपका विश्वास है हमारी प्रेरणा – Your Trust Inspires Us",
    },
    {
        icon: Users,
        title: "5+ Crore Patients",
        description: "Your household trusted name serving Haryana for generations",
    },
]

export function WhyChooseSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Why Patients Choose 
                        <span className="text-[#00A5D4]"> Narula Diagnostics</span></h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Since 1952, Narula Diagnostics has been a trusted household name in Haryana
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex items-center justify-center hover:shadow-lg transition-shadow border-2 hover:border-[#00A5D4]/50">
                                <CardContent className="w-full h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-14 h-14 bg-[#00A5D4]/10 rounded-full flex items-center justify-center mb-4">
                                        <reason.icon className="w-7 h-7 text-[#00A5D4]" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                                    <p className="text-muted-foreground">{reason.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
