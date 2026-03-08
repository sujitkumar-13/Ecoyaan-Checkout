"use client";

import { useCart } from "@/context/CartContext";
import { CartItem as CartItemType } from "@/types";
import { Trash2, Plus, Minus } from "lucide-react";

export function CartItem({ item }: { item: CartItemType }) {
    const { updateQuantity, removeItem } = useCart();

    const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;

    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 animate-in fade-in duration-300">
            {/* Image Container */}
            <div className="relative w-full sm:w-32 md:w-40 h-32 md:h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-stone-50 border border-stone-100 group">
                <img
                    src={item.image}
                    alt={item.product_name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Content Container */}
            <div className="flex flex-col justify-between flex-grow space-y-4">
                <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-stone-900 leading-tight line-clamp-2 hover:text-green-700 transition-colors cursor-pointer">
                            {item.product_name}
                        </h3>
                        <p className="text-green-700 font-extrabold text-base md:text-lg">{formatPrice(item.product_price)}</p>
                    </div>
                    <button
                        onClick={() => removeItem(item.product_id)}
                        className="text-stone-300 hover:text-red-500 hover:bg-red-50 p-2 sm:p-2.5 rounded-xl transition-all active:scale-95 shrink-0"
                        title="Remove item"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1 bg-stone-50 p-1 rounded-xl border border-stone-100 shadow-inner">
                        <button
                            onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-stone-500 hover:bg-white hover:text-stone-900 hover:shadow-sm rounded-lg transition-all disabled:opacity-30 disabled:hover:bg-transparent"
                            disabled={item.quantity <= 1}
                        >
                            <Minus className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                        <span className="w-8 md:w-12 text-center text-sm md:text-base font-bold text-stone-900">
                            {item.quantity}
                        </span>
                        <button
                            onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-stone-500 hover:bg-white hover:text-stone-900 hover:shadow-sm rounded-lg transition-all"
                        >
                            <Plus className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                    </div>

                    {/* Total for this item */}
                    <div className="text-right">
                        <p className="text-[9px] md:text-[11px] font-bold text-stone-400 uppercase tracking-widest mb-0.5">Subtotal</p>
                        <p className="text-lg md:text-xl font-black text-stone-900">
                            {formatPrice(item.product_price * item.quantity)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
