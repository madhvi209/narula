export interface CartItem {
  id: string;
  ageGroup: string;
  ageGroupHindi: string;
  category: string;
  normalPrice: number;
  discountedPrice: number;
  tests: string[];
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (item: Omit<CartItem, 'id' | 'quantity'>) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

