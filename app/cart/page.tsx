"use client";

import { useCart } from "@/context/CartContext";
import { OrderSummary } from "@/components/OrderSummary";
import { CartItem } from "@/components/CartItem";
import { CheckoutStepper } from "@/components/CheckoutStepper";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function CartPage() {
    const { cartItems } = useCart();
    const router = useRouter();

    const handleCheckout = () => {
        router.push("/shipping");
    };

    return (
        <div className="max-w-[1400px] mx-auto px-4 py-4 md:py-6 pb-24 md:pb-6 animate-in fade-in duration-500">
            <CheckoutStepper currentStep={1} />

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">
                <div className="flex-1 w-full">
                    <div className="flex items-end justify-between mb-8 border-b border-stone-100 pb-6">
                        <h1 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
                            Shopping Cart <span className="text-stone-300 ml-2 font-normal">({cartItems.length})</span>
                        </h1>
                    </div>

                    <div className="bg-white rounded-3xl border border-stone-100 divide-y divide-stone-50 shadow-sm overflow-hidden">
                        {cartItems.map((item) => (
                            <CartItem key={item.product_id} item={item} />
                        ))}
                    </div>
                </div>

                <aside className="w-full lg:w-[420px] shrink-0 lg:sticky lg:top-28">
                    <OrderSummary
                        buttonText="Proceed to Shipping"
                        onButtonClick={handleCheckout}
                    />
                </aside>
            </div>
        </div>
    );
}
