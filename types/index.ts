export interface CartItem {
  product_id: number;
  product_name: string;
  product_price: number;
  quantity: number;
  image: string;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  pinCode: string;
  city: string;
  state: string;
}

export interface CartContextType {
  cartItems: CartItem[];
  shippingFee: number;
  discountApplied: number;
  shippingAddress: ShippingAddress | null;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  setShippingAddress: (address: ShippingAddress) => void;
  clearCart: () => void;
  subtotal: number;
  grandTotal: number;
}
