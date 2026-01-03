"use client"

import { Phone, ShoppingCart, Menu, X, ChevronDown, Search, LogIn } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/CartContext"
import CartModal from "@/components/ui/cart-modal"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

type SearchValue = {
  city: string
  test: string
}

export function Header() {
  const router = useRouter()
  const { totalItems, isOpen, setIsOpen } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchValue, setSearchValue] = useState<SearchValue>({ city: "", test: "" })
  const [isClient, setIsClient] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const moreDropdownRef = useRef<HTMLDivElement>(null)

  // Dropdown open state for desktop nav
  const [openDropdown, setOpenDropdown] = useState<null | "tests" | "services">(null)

  // For closing dropdowns when clicking outside
  const testsDropdownRef = useRef<HTMLDivElement>(null)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // For custom More/lines button
      if (
        isMoreOpen &&
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(event.target as Node)
      ) {
        setIsMoreOpen(false)
      }
      // Navigation main dropdowns
      if (
        openDropdown === "tests" &&
        testsDropdownRef.current &&
        !testsDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null)
      }
      if (
        openDropdown === "services" &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null)
      }
    }
    if (openDropdown || isMoreOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [openDropdown, isMoreOpen])

  // Dummy search handler
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchValue.city.trim() || searchValue.test.trim()) {
      const params = new URLSearchParams()
      if (searchValue.city.trim()) params.append("city", searchValue.city)
      if (searchValue.test.trim()) params.append("q", searchValue.test)
      window.location.href = `/search?${params.toString()}`
    }
  }

  // Location icon SVG for city selector
  const LocationIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-[#00A5D4] ml-2 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
      />
    </svg>
  )

  // Handler to redirect to /cart on cart button click
  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/cart')
  }

  // Handler for Book Test click
  const handleBookTestClick = () => {
    router.push("/book-test")
  }

  // More dropdown logic: clicking the lines opens the menu just like More button
  const handleMoreClick = () => {
    setIsMoreOpen((prev) => !prev)
  }

  // More menu item actions
  const handleMoreItemClick = (href: string) => {
    setIsMoreOpen(false)
    router.push(href)
  }

  return (
    <>
      <header className="bg-gray-100 border-b sticky top-0 z-50">
        {/* New: Logo FIRST */}
        <div className="mx-auto px-4 w-full max-w-7xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="rounded-lg pl-1 pr-6 py-1 flex items-center" style={{ flexBasis: "260px", minWidth: 0, maxWidth: 340 }}>
              <Link href="/" className="flex items-center gap-3 flex-shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Narula Diagnostics Logo"
                  className="h-16 w-auto object-contain md:h-24 lg:h-24 lg:w-80"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10 relative z-50">
              <a
                href="/"
                className="text-[#0B4A8C] text-sm font-medium hover:text-[#52CCF6] transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-[#0B4A8C] text-sm font-medium hover:text-[#52CCF6] transition-colors"
              >
                About Us
              </a>

              {/* Tests Dropdown */}
              <div
                className="relative"
                ref={testsDropdownRef}
                onMouseEnter={() => setOpenDropdown("tests")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 text-[#0B4A8C] text-sm font-medium hover:text-[#52CCF6] transition-colors focus:outline-none bg-transparent border-none p-0"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "tests"}
                  onClick={() =>
                    setOpenDropdown(openDropdown === "tests" ? null : "tests")
                  }
                >
                  Tests <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute left-0 top-full mt-2 min-w-[180px] bg-white rounded shadow-lg transition-opacity z-50 ${
                    openDropdown === "tests"
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#f0f8ff]">MRI Scan</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#f0f8ff]">CT Scan</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#f0f8ff]">PET CT</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#f0f8ff]">Ultrasound</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#f0f8ff]">X-Ray</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#f0f8ff]">Blood Tests</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#f0f8ff]">ECG</a>
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                ref={servicesDropdownRef}
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 text-[#0B4A8C] text-sm font-medium hover:text-[#52CCF6] transition-colors focus:outline-none bg-transparent border-none p-0"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "services"}
                  onClick={() =>
                    setOpenDropdown(openDropdown === "services" ? null : "services")
                  }
                >
                  Services <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute left-0 top-full mt-2 min-w-[180px] bg-white rounded shadow-lg transition-opacity z-50 ${
                    openDropdown === "services"
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#f0f8ff]">Radiology</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#f0f8ff]">Pathology</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#f0f8ff]">Nuclear Imaging</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#f0f8ff]">Ultrasound</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#f0f8ff]">Home Collection</a>
                  </div>
                </div>
              </div>

              <a
                href="#quick-links"
                className="text-[#0B4A8C] text-sm font-medium hover:text-[#52CCF6] transition-colors"
              >
                Quick Links
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3 lg:gap-8">
              <Button
                variant="ghost"
                size="icon"
                className="relative w-9 h-9 lg:w-11 lg:h-11 bg-white"
                onClick={handleCartClick}
              >
                <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 lg:h-6 lg:w-6 flex items-center justify-center p-0 bg-[#00A5D4] text-[10px]">
                    {totalItems}
                  </Badge>
                )}
              </Button>
              <Button className="text-base font-semibold shadow-xl bg-gradient-to-r from-[#00a5d4] to-[#0a3d62] hover:from-[#0a3d62] hover:to-[#00a5d4] text-white h-11 px-6 min-w-[120px]">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 mr-0.5" />
                <span className="hidden sm:inline">Contact</span>
              </Button>
              <Button 
                onClick={() => router.push("/login")}
                className="bg-white text-[#00A5D4] border border-[#00A5D4] hover:bg-[#90bfca] h-11 px-6 min-w-[120px] flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Login</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="relative w-9 h-9 md:w-12 md:h-12 bg-white"
                onClick={handleCartClick}
              >
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 md:h-6 md:w-6 flex items-center justify-center p-0 bg-[#00A5D4] text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 md:w-12 md:h-12"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Then: Search Bar & Online Report */}
        {isClient && (
          <div className="bg-white border-b relative z-30 p-2">
            <div className="mx-auto px-2 w-full max-w-6xl flex flex-col md:flex-row items-stretch md:items-center gap-1 py-1.5">
              {/* Search Box */}
              <form
                onSubmit={handleSearch}
                className="flex flex-1 w-full md:w-auto gap-0"
                role="search"
              >
                {/* City Selector */}
                <div className="flex items-center border border-[#00A5D4] bg-[#f0faff] rounded-l-md pr-0.5 h-8 md:h-10 min-w-[80px] md:min-w-[150px]">
                  <span className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                    <LocationIcon />
                  </span>
                  <select
                    className="bg-transparent outline-none text-[#14486d] font-medium text-xs md:text-base"
                    style={{ minWidth: 55 }}
                    value={searchValue.city}
                    onChange={e =>
                      setSearchValue(prev => ({
                        ...prev,
                        city: e.target.value,
                      }))
                    }
                  >
                    <option value="">Select City</option>
                    <option value="Gurgaon">Gurgaon</option>
                    <option value="Rohtak">Rohtak</option>
                  </select>
                </div>
                {/* Test Search */}
                <div className="flex flex-1 items-center border-t border-b border-[#00A5D4] bg-[#f0faff] h-8 md:h-10 min-w-[70px] md:min-w-[170px]">
                  <Search className="w-4 h-4 text-[#00A5D4] ml-1 mr-1 md:w-5 md:h-5 md:ml-2" />
                  <input
                    type="text"
                    placeholder="Search Tests"
                    value={searchValue.test}
                    onChange={e =>
                      setSearchValue(prev => ({
                        ...prev,
                        test: e.target.value,
                      }))
                    }
                    className="bg-transparent outline-none flex-1 text-[#14486d] font-medium text-xs md:text-base"
                    style={{ minWidth: "50px" }}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-[#00A5D4] hover:bg-[#0090b8] text-white px-2 md:px-3 h-8 md:h-10 flex items-center font-semibold text-xs md:text-base border border-[#00A5D4] border-l-0 rounded-l-none rounded-r-md min-w-[40px] md:min-w-[50px]"
                >
                  <span className="hidden md:inline">Search</span>
                  <Search className="w-4 h-4 md:w-5 md:h-5 md:ml-0" />
                </Button>
              </form>
              {/* Online Report and Book Test */}
              <div className="flex items-center gap-2 relative">
                <Button
                  asChild
                  className="ml-0 md:ml-3 bg-gradient-to-r from-[#6acce7] to-[#14486d] hover:from-[#0090b8] hover:to-[#14486d] text-white px-3 md:px-6 h-8 md:h-10 text-xs md:text-base font-semibold rounded-lg min-w-[90px] md:min-w-[auto]"
                >
                  <a
                    href="https://www.naruladiagnostics.com/online-report"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Online Report
                  </a>
                </Button>
                <Button
                  onClick={handleBookTestClick}
                  className="ml-1 bg-gradient-to-r from-[#00a5d4] to-[#0B4A8C] hover:from-[#0B4A8C] hover:to-[#00a5d4] text-white px-3 md:px-6 h-8 md:h-10 text-xs md:text-base font-semibold rounded-lg min-w-[90px] md:min-w-[auto]"
                >
                  Book Test
                </Button>
                {/* 3–4 blue lines, clickable, open More dropdown */}
                <div className="relative ml-2 -mt-2.5" ref={moreDropdownRef}>
                  <button
                    type="button"
                    aria-label="Show more"
                    onClick={handleMoreClick}
                    className="focus:outline-none"
                    style={{ background: "none", border: "none", padding: 0, margin: 0 }}
                  >
                    <div className="flex flex-col justify-center items-center h-7">
                      <div className="w-8 h-[3px] rounded-full bg-[#00A5D4] mb-1" />
                      <div className="w-8 h-[3px] rounded-full bg-[#00A5D4] mb-1" />
                      <div className="w-8 h-[3px] rounded-full bg-[#00A5D4]" />
                    </div>
                  </button>
                  {isMoreOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded z-50 border">
                      <button
                        className="w-full text-left px-4 py-2 text-sm hover:bg-[#f0f8ff]"
                        onClick={() => handleMoreItemClick("/book-test")}
                      >
                        Book Test
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 text-sm hover:bg-[#f0f8ff]"
                        onClick={() => handleMoreItemClick("/home-collection")}
                      >
                        Home Collection
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 text-sm hover:bg-[#f0f8ff]"
                        onClick={() => handleMoreItemClick("/appointment")}
                      >
                        Appointment
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 text-sm hover:bg-[#f0f8ff]"
                        onClick={() => handleMoreItemClick("/health-packages")}
                      >
                        Health Packages
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white relative z-40">
            <nav className="py-5 space-y-2">
              <Link href="/" className="block px-3 py-2.5 text-xs" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="#about" className="block px-3 py-2.5 text-xs" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link href="#tests" className="block px-3 py-2.5 text-xs" onClick={() => setIsMobileMenuOpen(false)}>
                Tests
              </Link>
              <Link href="#services" className="block px-3 py-2.5 text-xs" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/cart" className="block px-3 py-2.5 text-xs" onClick={() => setIsMobileMenuOpen(false)}>
                Cart
              </Link>
              <Link href="#quick-links" className="block px-3 py-2.5 text-xs" onClick={() => setIsMobileMenuOpen(false)}>
                Quick Links
              </Link>
              <div className="px-2 pt-5 space-y-2">
                <Button className="w-full bg-[#00A5D4] hover:bg-[#0090b8] text-white h-8 min-w-0 text-xs">
                  <Phone className="w-4 h-4 mr-1" /> Contact
                </Button>
                <Button 
                  onClick={() => router.push("/login")}
                  variant="outline" 
                  className="w-full border-[#00A5D4] text-[#00A5D4] h-8 min-w-0 text-xs flex items-center justify-center gap-1"
                >
                  <LogIn className="w-3 h-3" />
                  Login
                </Button>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#6acce7] to-[#14486d] hover:from-[#0090b8] hover:to-[#14486d] text-white h-8 min-w-0 text-xs"
                >
                  <a
                    href="https://www.naruladiagnostics.com/online-report"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Online Report
                  </a>
                </Button>
                {/* 3–4 blue lines for mobile More, clicking shows same More options */}
                <div className="relative flex flex-col items-center pt-2 pb-1" ref={moreDropdownRef}>
                  <button
                    type="button"
                    aria-label="Show more"
                    onClick={handleMoreClick}
                    className="focus:outline-none"
                    style={{ background: "none", border: "none", padding: 0, margin: 0 }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-1 rounded-full bg-[#0B4A8C] mb-1" />
                      <div className="w-8 h-1 rounded-full bg-[#0B4A8C] mb-1" />
                      <div className="w-8 h-1 rounded-full bg-[#0B4A8C] mb-1" />
                      <div className="w-8 h-1 rounded-full bg-[#0B4A8C]" />
                    </div>
                  </button>
                  {isMoreOpen && (
                    <div className="mt-2 bg-white shadow-lg rounded z-50 border w-48">
                      <button
                        className="w-full text-left px-4 py-2 text-xs hover:bg-[#f0f8ff]"
                        onClick={() => { setIsMoreOpen(false); router.push("/book-test") }}
                      >
                        Book Test
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 text-xs hover:bg-[#f0f8ff]"
                        onClick={() => { setIsMoreOpen(false); router.push("/home-collection") }}
                      >
                        Home Collection
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 text-xs hover:bg-[#f0f8ff]"
                        onClick={() => { setIsMoreOpen(false); router.push("/appointment") }}
                      >
                        Appointment
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 text-xs hover:bg-[#f0f8ff]"
                        onClick={() => { setIsMoreOpen(false); router.push("/health-packages") }}
                      >
                        Health Packages
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        )}

        {/* Cart Modal */}
        <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </header>
    </>
  )
}

export default Header
