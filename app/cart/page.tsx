"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#00A5D4] hover:text-[#0088b3] mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-8 w-8 text-[#00A5D4]" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
              <p className="text-gray-600">
                0 items in your cart
              </p>
            </div>
          </div>
        </div>

        {/* Empty Cart */}
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Looks like you haven't added any health packages to your cart yet. 
            Browse our comprehensive health packages and get started with your health checkup.
          </p>
          <Link href="/#tests">
            <Button className="bg-[#00A5D4] hover:bg-[#0088b3] text-white px-8 py-3 text-lg">
              Browse Health Packages
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}