"use client"

import { Menu, Phone, X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingContactMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className="fixed right-6 top-1/2 z-50 flex flex-col items-end"
            style={{ transform: "translateY(-50%)" }}
        >
            <Button
                size="lg"
                className="w-14 h-14 rounded-xl bg-[#00A5D4] hover:bg-[#0090b8] shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="mt-3 flex flex-col items-end space-y-3"
                    >
                        <Button
                            size="lg"
                            className="w-14 h-14 rounded-xl bg-[#00A5D4] hover:bg-[#0090b8] shadow-lg"
                            onClick={() => window.open("tel:8000775100")}
                        >
                            <Phone className="w-6 h-6" />
                        </Button>
                        <Button
                            size="lg"
                            className="w-14 h-14 rounded-xl bg-[#00A5D4] hover:bg-[#0090b8] shadow-lg"
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
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
