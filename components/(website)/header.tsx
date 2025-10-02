"use client"

import { Phone, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/CartContext"
import CartModal from "@/components/ui/cart-modal"

export function Header() {
  const { totalItems, isOpen, setIsOpen } = useCart()

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Narula Diagnostics Logo"
              className="h-40 w-40 object-contain"
            />
            
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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
            <Link href="#quick-links" className="text-sm font-medium hover:text-[#00A5D4] transition-colors">
              Quick Links
            </Link>
          </nav>

          {/* Cart and Contact */}
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="relative w-12 h-12"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingCart className="w-7 h-7" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-7 w-7 flex items-center justify-center p-0 bg-[#00A5D4]">
                  {totalItems}
                </Badge>
              )}
            </Button>
            <Button
              className="bg-[#00A5D4] hover:bg-[#0090b8] text-white w-35 h-12 text-base font-semibold flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact
            </Button>
            <Button
              className="bg-white text-[#00A5D4] border border-[#00A5D4] hover:bg-[#e6f7fb] w-28 h-12 text-base font-semibold flex items-center justify-center"
            >
              Login
            </Button>
          </div>
        </div>
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
