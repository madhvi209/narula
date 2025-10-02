"use client";

import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2, ShoppingCart, ArrowLeft, CreditCard, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const {
    items,
    totalItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
  <div className="site-container py-8">
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
                {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
          </div>
        </div>

        {items.length === 0 ? (
          /* Empty Cart */
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
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Cart Items</h2>
                    <Button
                      variant="outline"
                      onClick={clearCart}
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear Cart
                    </Button>
                  </div>
                </div>
                
                <div className="divide-y">
                  {items.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[#00A5D4] mb-1">{item.ageGroup}</h3>
                          <p className="text-gray-600 mb-1">{item.ageGroupHindi}</p>
                          <p className="text-sm text-gray-500">{item.category}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Test List Preview */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Included Tests:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                          {item.tests.slice(0, 6).map((test, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-[#00A5D4] rounded-full mt-2 flex-shrink-0" />
                              <p className="text-xs text-gray-600">{test}</p>
                            </div>
                          ))}
                          {item.tests.length > 6 && (
                            <div className="text-xs text-gray-500 col-span-full mt-2">
                              +{item.tests.length - 6} more tests...
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-10 w-10 p-0"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-medium text-lg">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-10 w-10 p-0"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 line-through">₹{item.normalPrice}</p>
                          <p className="text-lg font-semibold text-[#00A5D4]">₹{item.discountedPrice}</p>
                          <p className="text-sm text-gray-600">
                            Total: ₹{item.discountedPrice * item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="font-medium">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Fee</span>
                    <span className="font-medium">₹0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Home Collection</span>
                    <span className="font-medium">₹0</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-[#00A5D4]">₹{totalPrice}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-[#00A5D4] hover:bg-[#0088b3] text-white py-3 text-lg font-semibold mb-4"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Proceed to Checkout
                </Button>

                {/* Contact Information */}
                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Need Help?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-[#00A5D4]" />
                      <div>
                        <p className="text-sm font-medium">Call us</p>
                        <p className="text-sm text-gray-600">8000775100 (Gurugram)</p>
                        <p className="text-sm text-gray-600">9797973300 (Rohtak)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-[#00A5D4] mt-1" />
                      <div>
                        <p className="text-sm font-medium">Visit us</p>
                        <p className="text-sm text-gray-600">Civil Road, Rohtak</p>
                        <p className="text-sm text-gray-600">Medical Mod, Rohtak</p>
                        <p className="text-sm text-gray-600">Medanta Road, Gurugram</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="border-t pt-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>NABL Certified</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>71 Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
