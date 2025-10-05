"use client"

import { Phone, ShoppingCart, Menu, X, ChevronDown, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/CartContext"
import CartModal from "@/components/ui/cart-modal"
import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"

export function Header() {
    const { totalItems, isOpen, setIsOpen } = useCart()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [isClient, setIsClient] = useState(false);

    // Dropdown open state for desktop nav
    const [openDropdown, setOpenDropdown] = useState<null | "tests" | "services">(null);

    // For closing dropdowns when clicking outside
    const testsDropdownRef = useRef<HTMLDivElement>(null);
    const servicesDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Close dropdowns on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                openDropdown === "tests" &&
                testsDropdownRef.current &&
                !testsDropdownRef.current.contains(event.target as Node)
            ) {
                setOpenDropdown(null);
            }
            if (
                openDropdown === "services" &&
                servicesDropdownRef.current &&
                !servicesDropdownRef.current.contains(event.target as Node)
            ) {
                setOpenDropdown(null);
            }
        }
        if (openDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openDropdown]);

    // Dummy search handler
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchValue.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchValue)}`
        }
    }

    function HideOnScroll({ children }: { children: React.ReactNode }) {
        const [show, setShow] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);

        useEffect(() => {
            const handleScroll = () => {
                const currentScrollY = window.scrollY;
                if (currentScrollY < 50) {
                    setShow(true);
                } else if (currentScrollY > lastScrollY) {
                    setShow(false);
                } else {
                    setShow(true);
                }
                setLastScrollY(currentScrollY);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, [lastScrollY]);

        return (
            <div
                style={{
                    transition: "transform 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s cubic-bezier(.4,0,.2,1)",
                    transform: show ? "translateY(0)" : "translateY(-100%)",
                    opacity: show ? 1 : 0,
                    zIndex: 40,
                    position: "relative",
                }}
            >
                {children}
            </div>
        );
    }

    return (
        <>
            <header className="bg-gray-800 border-b sticky top-0 z-50">
                <div className="mx-auto px-4 w-full max-w-6xl">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <div className="bg-white rounded-lg px-3 py-1 flex items-center">
                            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                                <img
                                    src="/images/logo.png"
                                    alt="Narula Diagnostics Logo"
                                    className="h-7 md:h-12 w-auto object-contain"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <a href="#home" className="text-white text-sm font-medium hover:text-[#0B4A8C] transition-colors">
                                Home
                            </a>
                            <a href="#about" className="text-white text-sm font-medium hover:text-[#0B4A8C] transition-colors">
                                About Us
                            </a>

                            {/* Tests Dropdown (click to open, stays open on scroll) */}
                            <div
                                className="relative"
                                ref={testsDropdownRef}
                                onMouseEnter={() => setOpenDropdown("tests")}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <button
                                    className="flex items-center gap-1 text-white text-sm font-medium hover:text-[#0B4A8C] transition-colors focus:outline-none bg-transparent border-none p-0"
                                    tabIndex={0}
                                    type="button"
                                    aria-haspopup="true"
                                    aria-expanded={openDropdown === "tests"}
                                    onClick={() => setOpenDropdown(openDropdown === "tests" ? null : "tests")}
                                >
                                    Tests <ChevronDown className="h-4 w-4" />
                                </button>
                                <div
                                    className={`absolute left-0 top-full mt-2 min-w-[180px] bg-white rounded shadow-lg transition-opacity z-20 ${openDropdown === "tests" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                                        }`}
                                >
                                    <div className="py-2">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#f0f8ff]">MRI Scan</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#f0f8ff]">CT Scan</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#f0f8ff]">PET CT</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#f0f8ff]">Ultrasound</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#f0f8ff]">X-Ray</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#f0f8ff]">Blood Tests</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#f0f8ff]">ECG</a>
                                    </div>
                                </div>
                            </div>

                            {/* Services Dropdown (click to open, stays open on scroll) */}
                            <div
                                className="relative"
                                ref={servicesDropdownRef}
                                onMouseEnter={() => setOpenDropdown("services")}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <button
                                    className="flex items-center gap-1 text-white text-sm font-medium hover:text-[#0B4A8C] transition-colors focus:outline-none bg-transparent border-none p-0"
                                    tabIndex={0}
                                    type="button"
                                    aria-haspopup="true"
                                    aria-expanded={openDropdown === "services"}
                                    onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                                >
                                    Services <ChevronDown className="h-4 w-4" />
                                </button>
                                <div
                                    className={`absolute left-0 top-full mt-2 min-w-[180px] bg-white rounded shadow-lg transition-opacity z-20 ${openDropdown === "services" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                                        }`}
                                >
                                    <div className="py-2">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#f0f8ff]">Radiology</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#f0f8ff]">Pathology</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#f0f8ff]">Nuclear Imaging</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#f0f8ff]">Ultrasound</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#f0f8ff]">Home Collection</a>
                                    </div>
                                </div>
                            </div>

                            <a href="#quick-links" className="text-white text-sm font-medium hover:text-[#0B4A8C] transition-colors">
                                Quick Links
                            </a>
                        </nav>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center gap-3 lg:gap-6">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative w-9 h-9 lg:w-11 lg:h-11 bg-white"
                                onClick={() => setIsOpen(true)}
                            >
                                <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
                                {totalItems > 0 && (
                                    <Badge className="absolute -top-1 -right-1 h-5 w-5 lg:h-6 lg:w-6 flex items-center justify-center p-0 bg-[#00A5D4] text-[10px]">
                                        {totalItems}
                                    </Badge>
                                )}
                            </Button>
                            <Button
                                className="text-base font-semibold shadow-xl transition-all duration-200 border-0 bg-gradient-to-r from-[#00a5d4] to-[#0a3d62] hover:from-[#0a3d62] hover:via-[#00a5d4] hover:to-[#e0f7fa] hover:scale-100 scale-105 focus:ring-2 focus:ring-[#00a5d4] focus:ring-offset-2 px-4 lg:px-6 h-9 lg:h-11 text-white flex items-center justify-center"
                            >
                                <Phone className="w-4 h-4 lg:w-5 lg:h-5 mr-0.5" />
                                <span className="hidden sm:inline">Contact</span>
                            </Button>
                            <Button
                                className="bg-white text-[#00A5D4] border border-[#00A5D4] hover:bg-[#90bfca] px-4 lg:px-6 h-9 lg:h-11 text-sm lg:text-base font-semibold flex items-center justify-center"
                            >
                                <span className="hidden sm:inline">Login</span>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative w-12 h-12 bg-white"
                                onClick={() => setIsOpen(true)}
                            >
                                <ShoppingCart className="w-6 h-6" />
                                {totalItems > 0 && (
                                    <Badge className="absolute -top-1 -right-1 h-6 w-6 flex items-center justify-center p-0 bg-[#00A5D4] text-xs">
                                        {totalItems}
                                    </Badge>
                                )}
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-12 h-12"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Search Bar & Online Report Button */}
                {/* Hide on scroll: Search Bar & Online Report Button */}
                {isClient && (
                    <HideOnScroll>
                        <div className="bg-white border-b">
                            <div className="mx-auto px-2 w-full max-w-5xl flex flex-col md:flex-row items-stretch md:items-center gap-2 py-1.5">
                                {/* Search Box */}
                                <form
                                    onSubmit={handleSearch}
                                    className="flex flex-1 w-full md:w-auto"
                                    role="search"
                                >
                                    <Input
                                        type="text"
                                        placeholder="Search for tests, packages, or services..."
                                        value={searchValue}
                                        onChange={e => setSearchValue(e.target.value)}
                                        className="border border-[#00A5D4] focus:ring-2 focus:ring-[#00A5D4] focus:border-[#00A5D4] transition-all duration-150 text-base h-9 md:h-10 bg-white rounded-l-lg"
                                        style={{ borderRight: "none", borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                                    />
                                    <Button
                                        type="submit"
                                        className="bg-[#00A5D4] hover:bg-[#0090b8] text-white px-3 h-9 md:h-10 flex items-center font-semibold text-base border border-[#00A5D4] border-l-0 transition-all duration-150 rounded-r-lg"
                                        aria-label="Search"
                                        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                    >
                                        <Search className="w-5 h-5 mr-2" />
                                        Search
                                    </Button>
                                </form>
                                {/* Online Report Button */}
                                <Button
                                    asChild
                                    className="ml-0 md:ml-3 bg-gradient-to-r from-[#6acce7] to-[#14486d] hover:from-[#0090b8] hover:to-[#14486d] text-white px-5 h-9 md:h-10 text-base font-semibold rounded-lg shadow-sm transition-all duration-150 flex items-center justify-center"
                                >
                                    <a
                                        href="https://www.naruladiagnostics.com/online-report"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Online Report
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </HideOnScroll>
                )}

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t bg-white">
                        <nav className="py-5 space-y-2">
                            <Link
                                href="/"
                                className="block px-4 py-3 text-base font-medium hover:text-[#00A5D4] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="#about"
                                className="block px-4 py-3 text-base font-medium hover:text-[#00A5D4] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                href="#tests"
                                className="block px-4 py-3 text-base font-medium hover:text-[#00A5D4] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Tests
                            </Link>
                            <Link
                                href="#services"
                                className="block px-4 py-3 text-base font-medium hover:text-[#00A5D4] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="/cart"
                                className="block px-4 py-3 text-base font-medium hover:text-[#00A5D4] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Cart
                            </Link>
                            <Link
                                href="#quick-links"
                                className="block px-4 py-3 text-base font-medium hover:text-[#00A5D4] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Quick Links
                            </Link>
                            <div className="px-4 pt-5 space-y-3">
                                <Button
                                    className="w-full bg-[#00A5D4] hover:bg-[#0090b8] text-white h-8 text-sm font-semibold flex items-center justify-center rounded-b-xl"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Phone className="w-5 h-5 mr-1" />
                                    Contact
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full border-[#00A5D4] text-[#00A5D4] hover:bg-[#00A5D4] hover:text-white h-8 text-base font-semibold rounded-b-xl"
                                    
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Login
                                </Button>
                                <Button
                                    asChild
                                    className="w-full bg-gradient-to-r from-[#6acce7] to-[#14486d] hover:from-[#0090b8] hover:to-[#14486d] text-white h-8 text-base font-semibold rounded-b-xl flex items-center justify-center transition-all duration-150"
                                >
                                    <a
                                        href="https://www.naruladiagnostics.com/online-report"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Online Report
                                    </a>
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
                {/* Cart Modal */}
                <CartModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            </header>
        </>
    )
}

export default Header 