"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartItem, ShippingAddress, CartContextType } from "../types";

const CartContext = createContext<CartContextType | undefined>(undefined);

// Two hardcoded items pre-loaded in the cart
const HARDCODED_ITEMS: CartItem[] = [
    {
        product_id: 1,
        product_name: "Bamboo Toothbrush Set (Pack of 4)",
        product_price: 349,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop",
    },
    {
        product_id: 2,
        product_name: "Organic Reusable Beeswax Wraps",
        product_price: 599,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?w=400&h=400&fit=crop",
    },
];

const SHIPPING_FEE = 50;
const DISCOUNT_APPLIED = 0;

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>(HARDCODED_ITEMS);
    const [shippingAddress, setShippingAddressState] = useState<ShippingAddress | null>(null);


    const updateQuantity = (id: number, quantity: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.product_id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.product_id !== id));
    };

    const setShippingAddress = (address: ShippingAddress) => {
        setShippingAddressState(address);
    };

    const clearCart = () => {
        setCartItems([]);
        setShippingAddressState(null);
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + item.product_price * item.quantity,
        0
    );
    const grandTotal = subtotal > 0 ? subtotal + SHIPPING_FEE - DISCOUNT_APPLIED : 0;

    return (
        <CartContext.Provider
            value={{
                cartItems,
                shippingFee: SHIPPING_FEE,
                discountApplied: DISCOUNT_APPLIED,
                shippingAddress,
                updateQuantity,
                removeItem,
                setShippingAddress,
                clearCart,
                subtotal,
                grandTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
