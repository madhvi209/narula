"use client"

import { motion } from "framer-motion"
import { Award, Users, Building2, TrendingUp } from "lucide-react"

const stats = [
    { icon: Users, value: "5+ Crore", label: "Patients Served" },
    { icon: Building2, value: "3", label: "Diagnostic Centers" },
    { icon: Award, value: "71 Years", label: "Of Excellence" },
    { icon: TrendingUp, value: "2000+", label: "Tests Available" },
]

export function AboutSection() {
    return (
        <section className="py-20 bg-muted/30" id="about">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <img src="/images/center.jpg" alt="Narula Diagnostics Center" className="rounded-2xl shadow-xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Trusted Healthcare <span className="text-[#00A5D4]">Partner Since 1952</span>
                        </h2>
                        <p className="text-muted-foreground text-pretty leading-relaxed text-sm sm:text-base">
                            Narula Diagnostics Centre is located at Sector 37, Gurugram, Haryana - one of the best trusted names in
                            the health industry. Narula Diagnostic Centre was started in 1952 by late Dr Lal Chand Narula who was a
                            pioneer in X-ray and Radio-Diagnosis in North India.
                        </p>
                        <p className="text-muted-foreground text-pretty leading-relaxed text-sm sm:text-base">
                            Narula Diagnostic Centre has been the pioneer of medical imaging and labs and was the first to introduce
                            X-ray, Ultrasound, Colour Doppler, Advanced Fetal Scanning, CT, MRI, 500 slice Cardiac CT, Path Lab & 128
                            Slice PET-CT in Haryana.
                        </p>
                        <p className="text-muted-foreground text-pretty leading-relaxed text-sm sm:text-base">
                            There are now 3 high-end integrated diagnostic centres having the entire plethora of diagnostic facilities
                            based in Rohtak and Gurugram, Haryana, and has served over 5+ crore patients. We offer a broad menu of
                            NABL-certified 2000+ path lab tests at your doorstep at an affordable price.
                        </p>
                        <p className="text-muted-foreground text-pretty leading-relaxed text-sm sm:text-base">
                            We value your time as the renowned Diagnostic Center and also provide online access to reports within a guaranteed time. We are known for our world-class 128 Slice Lyso Crystal PET CT, the world's most updated PET CT system by GE Healthcare, USA (First and only in Haryana), and also the first and only ARDL Digital 1.5T MRI & 108 channel 3T MRI in Haryana.
                        </p>
                    </motion.div>
                </div>
                {/* Stats moved below the image and text, full width */}
                <div className="mt-8 sm:mt-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm flex flex-col items-center"
                            >
                                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#00A5D4] mb-2" />
                                <div className="text-lg sm:text-2xl font-bold">{stat.value}</div>
                                <div className="text-xs sm:text-sm text-muted-foreground text-center">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
