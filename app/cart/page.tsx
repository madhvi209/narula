"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, HeartPulse, Stethoscope, Activity } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const latestPackages = [
    {
      id: 1,
      title: "Full Body Checkup",
      description: "Comprehensive tests covering vital organs, blood, and urine profiles.",
      price: "₹2499",
      icon: <HeartPulse className="h-10 w-10 text-[#00A5D4]" />,
    },
    {
      id: 2,
      title: "Diabetes Screening",
      description: "Includes fasting blood sugar, HbA1c, and lipid profile.",
      price: "₹999",
      icon: <Activity className="h-10 w-10 text-[#00A5D4]" />,
    },
    {
      id: 3,
      title: "Heart Health Package",
      description: "ECG, cholesterol profile, and stress test to monitor heart wellness.",
      price: "₹1799",
      icon: <Stethoscope className="h-10 w-10 text-[#00A5D4]" />,
    },
  ];

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
              <p className="text-gray-600">0 items in your cart</p>
            </div>
          </div>
        </div>

        {/* Empty Cart */}
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

        {/* Latest Tests & Packages Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Latest Tests & Health Packages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex justify-center mb-4">{pkg.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {pkg.description}
                </p>
                <p className="text-[#00A5D4] font-semibold text-center text-lg mb-4">
                  {pkg.price}
                </p>
                <div className="flex justify-center">
                  <Button className="bg-[#00A5D4] hover:bg-[#0088b3] text-white px-6">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
