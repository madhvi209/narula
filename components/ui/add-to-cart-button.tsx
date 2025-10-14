"use client";

import { Plus, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { CartItem } from "@/lib/types/cart";

interface AddToCartButtonProps {
  item: Omit<CartItem, 'id' | 'quantity'>;
  variant?: 'default' | 'icon' | 'test-card';
  className?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg'; // New "size" prop
}

export function AddToCartButton({ 
  item, 
  variant = 'default', 
  className = '', 
  children,
  size = "md", // Default size is 'md'
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  // Map the size prop to Tailwind or custom classes
  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "px-2 py-1 text-xs";
      case "lg":
        return "px-5 py-3 text-lg";
      case "md":
      default:
        return "px-3 py-2 text-sm";
    }
  };

  if (variant === 'icon') {
    return (
      <button
        aria-label={`Add ${item.title} to cart`}
        onClick={handleAddToCart}
        className={`btn-add-test ${getSizeClass()} ${className}`}
        tabIndex={-1}
      >
        <span className="flex items-center gap-1">
          <Plus className={size === "sm" ? "w-3 h-3" : size === "lg" ? "w-6 h-6" : "w-4 h-4"} />
          <span 
            className={`font-medium ml-1 hidden md:inline ${
              size === "sm" ? "text-[10px]" : size === "lg" ? "text-[15px]" : "text-[12px]"
            }`}
          >Add</span>
        </span>
      </button>
    );
  }

  if (variant === 'test-card') {
    return (
      <button
        aria-label={`Add ${item.title} to cart`}
        onClick={handleAddToCart}
        className={`btn-add-to-cart ${getSizeClass()} ${className}`}
      >
        {children || (
          <>
            Add to Cart
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`btn-primary ${getSizeClass()} ${className}`}
    >
      {children || (
        <>
          Add to Cart
        </>
      )}
    </button>
  );
}
