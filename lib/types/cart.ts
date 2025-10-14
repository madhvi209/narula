export interface CartItem {
  id: string;
  type: 'health-package' | 'test' | 'radiology';
  title: string;
  description?: string;
  category: string;
  normalPrice: number;
  discountedPrice: number;
  tests?: string[];
  testsCount?: number;
  ageGroup?: string;
  ageGroupHindi?: string;
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

