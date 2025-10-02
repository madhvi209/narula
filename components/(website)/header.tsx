"use client"

import { Phone, ShoppingCart, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/CartContext"
import CartModal from "@/components/ui/cart-modal"
import { useState } from "react"

export function Header() {
  const { totalItems, isOpen, setIsOpen } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      {/* Use the same max-w-6xl and px-4 as other pages for consistent width */}
      <div className="mx-auto px-4 w-full max-w-6xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="Narula Diagnostics Logo"
              className="h-8 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className="text-sm font-medium hover:text-[#00A5D4] transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-[#00A5D4] transition-colors">
              About Us
            </Link>
            <Link href="#tests" className="text-sm font-medium hover:text-[#00A5D4] transition-colors">
              Tests
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-[#00A5D4] transition-colors">
              Services
            </Link>
            <Link href="/blogs" className="text-sm font-medium hover:text-[#00A5D4] transition-colors">
              Blogs
            </Link>
            <Link href="#quick-links" className="text-sm font-medium hover:text-[#00A5D4] transition-colors">
              Quick Links
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="relative w-10 h-10 lg:w-12 lg:h-12"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 lg:h-6 lg:w-6 flex items-center justify-center p-0 bg-[#00A5D4] text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>
            <Button
              className="bg-[#00A5D4] hover:bg-[#0090b8] text-white px-4 lg:px-6 h-10 lg:h-12 text-sm lg:text-base font-semibold flex items-center justify-center"
            >
              <Phone className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2" />
              <span className="hidden sm:inline">Contact</span>
            </Button>
            <Button
              className="bg-white text-[#00A5D4] border border-[#00A5D4] hover:bg-[#e6f7fb] px-4 lg:px-6 h-10 lg:h-12 text-sm lg:text-base font-semibold flex items-center justify-center"
            >
              <span className="hidden sm:inline">Login</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative w-10 h-10"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-[#00A5D4] text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="py-4 space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-2 text-sm font-medium hover:text-[#00A5D4] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#about" 
                className="block px-4 py-2 text-sm font-medium hover:text-[#00A5D4] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="#tests" 
                className="block px-4 py-2 text-sm font-medium hover:text-[#00A5D4] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tests
              </Link>
              <Link 
                href="#services" 
                className="block px-4 py-2 text-sm font-medium hover:text-[#00A5D4] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/cart" 
                className="block px-4 py-2 text-sm font-medium hover:text-[#00A5D4] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cart
              </Link>
              <Link 
                href="#quick-links" 
                className="block px-4 py-2 text-sm font-medium hover:text-[#00A5D4] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quick Links
              </Link>
              <div className="px-4 pt-4 space-y-3">
                <Button
                  className="w-full bg-[#00A5D4] hover:bg-[#0090b8] text-white h-10 text-sm font-semibold flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#00A5D4] text-[#00A5D4] hover:bg-[#00A5D4] hover:text-white h-10 text-sm font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Cart Modal */}
      <CartModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </header>
  )
}

export default Header
