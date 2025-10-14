"use client";

import { Plus, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { CartItem } from "@/lib/types/cart";

interface AddToCartButtonProps {
  item: Omit<CartItem, 'id' | 'quantity'>;
  variant?: 'default' | 'icon' | 'test-card';
  className?: string;
  children?: React.ReactNode;
}

export function AddToCartButton({ 
  item, 
  variant = 'default', 
  className = '', 
  children 
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  if (variant === 'icon') {
    return (
      <button
        aria-label={`Add ${item.title} to cart`}
        onClick={handleAddToCart}
        className={`btn-add-test ${className}`}
        tabIndex={-1}
      >
        <span className="flex items-center gap-1">
          <Plus className="w-5 h-5" />
          <span className="text-xs font-medium ml-1 hidden md:inline">Add</span>
        </span>
      </button>
    );
  }

  if (variant === 'test-card') {
    return (
      <button
        aria-label={`Add ${item.title} to cart`}
        onClick={handleAddToCart}
        className={`btn-add-to-cart ${className}`}
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
      className={`btn-primary ${className}`}
    >
      {children || (
        <>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </>
      )}
    </button>
  );
}
