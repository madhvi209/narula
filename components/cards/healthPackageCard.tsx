"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

interface HealthPackageCardProps {
  ageGroup: string;
  ageGroupHindi: string;
  category: string;
  tests: string[];
  normalPrice: number;
  discountedPrice: number;
}

const PRIMARY_COLOR = "#00A5D4";

const HealthPackageCard = ({
  ageGroup,
  ageGroupHindi,
  category,
  tests,
  normalPrice,
  discountedPrice,
}: HealthPackageCardProps) => {
  // Ensure this is a client component by adding "use client" at the top
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      ageGroup,
      ageGroupHindi,
      category,
      tests,
      normalPrice,
      discountedPrice,
    });
  };
  return (
    <div className="bg-[#ffff] border rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 animate-fade-in h-full flex flex-col">
      <div
        className="rounded-lg p-3 sm:p-4 mb-4 sm:mb-6"
        style={{
          background: `linear-gradient(135deg, ${PRIMARY_COLOR} 0%, #e0f7fa 100%)`,
          color: "#fff",
        }}
      >
        <p className="text-xs sm:text-sm font-medium">{ageGroupHindi}</p>
        <h3 className="text-xl sm:text-2xl font-bold">{ageGroup}</h3>
        <p className="text-xs sm:text-sm mt-1">{category}</p>
      </div>

      <div
        className="
          space-y-1 sm:space-y-2 mb-4 sm:mb-6 max-h-48 sm:max-h-64 overflow-y-auto flex-1
          scrollbar-thin scrollbar-thumb-[#00A5D4]/70 scrollbar-track-[#e0f7fa]/40
          scrollbar-thumb-rounded
          hover:scrollbar-thin hover:scrollbar-thumb-[#00A5D4]/70 hover:scrollbar-track-[#e0f7fa]/40
          focus-within:scrollbar-thin focus-within:scrollbar-thumb-[#00A5D4]/70 focus-within:scrollbar-track-[#e0f7fa]/40
        "
        style={{
          // Fallback for browsers without Tailwind plugin
          scrollbarWidth: "thin",
          msOverflowStyle: "auto",
        }}
      >
        <style>
          {`
            .scrollbar-thin::-webkit-scrollbar { width: 3px; }
            .scrollbar-thin::-webkit-scrollbar-thumb { background: #00A5D4b3; border-radius: 6px; }
            .scrollbar-thin::-webkit-scrollbar-track { background: #e0f7fa66; }
          `}
        </style>
        {tests.map((test, index) => (
          <div key={index} className="flex items-start gap-2">
            <div
              className="min-w-1.5 min-h-1.5 sm:min-w-2 sm:min-h-2 rounded-full mt-1.5 flex-shrink-0"
              style={{ backgroundColor: PRIMARY_COLOR }}
            />
            <p className="text-xs sm:text-sm text-muted-foreground">{test}</p>
          </div>
        ))}
      </div>

      <div className="border-t pt-3 sm:pt-4 mt-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs sm:text-sm text-muted-foreground">Normal Charges</span>
          <span className="text-sm sm:text-lg line-through text-muted-foreground">₹{normalPrice}</span>
        </div>
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <span className="text-xs sm:text-sm font-semibold text-foreground">Concessional Charges</span>
          <span
            className="text-xl sm:text-2xl font-bold"
            style={{ color: PRIMARY_COLOR }}
          >
            ₹{discountedPrice}
          </span>
        </div>
        
        <Button
          onClick={handleAddToCart}
          className="w-full bg-[#00A5D4] hover:bg-[#0088b3] text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default HealthPackageCard;
