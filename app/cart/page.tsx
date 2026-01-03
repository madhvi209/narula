"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useCart } from "@/contexts/CartContext";

export default function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#00A5D4] hover:text-[#0088b3] mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-8 w-8 text-[#00A5D4]" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
              <p className="text-gray-600">{totalItems} items in your cart</p>
            </div>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center mb-16">
            <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any health packages to your cart yet.
              Browse our comprehensive health packages and get started with your
              health checkup.
            </p>
            <Link href="/#tests">
              <Button className="bg-[#00A5D4] hover:bg-[#0088b3] text-white px-8 py-3 text-lg">
                Browse Health Packages
              </Button>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-16">
            <div className="flex flex-col gap-4">
              {items.map(item => (
                <div key={item.id} className="flex items-center justify-between gap-4 border-b py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center text-sm">
                      {item.type}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.category}</div>
                      {item.tests && item.tests.length > 0 && (
                        <div className="text-sm text-gray-600 mt-1">{item.tests.join(', ')}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-gray-900 font-semibold">₹{item.discountedPrice}</div>
                    <div className="flex items-center border rounded">
                      <button className="px-3" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <div className="px-3">{item.quantity}</div>
                      <button className="px-3" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className="text-red-500 text-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Total items: {totalItems}</div>
                <div className="text-xl font-bold">Total: ₹{totalPrice}</div>
              </div>
              <div className="flex items-center gap-3">
                <Button onClick={clearCart} className="bg-red-500 hover:bg-red-600 text-white">Clear Cart</Button>
                <Button className="bg-[#00A5D4] hover:bg-[#0088b3] text-white">Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
