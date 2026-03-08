"use client";

import { useCart } from "@/context/CartContext";
import { OrderSummary } from "@/components/OrderSummary";
import { CartItem } from "@/components/CartItem";
import { CheckoutStepper } from "@/components/CheckoutStepper";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const { cartItems } = useCart();
    const router = useRouter();

    const handleCheckout = () => {
        router.push("/shipping");
    };

    return (
        <div className="max-w-[1400px] mx-auto px-4 py-4 md:py-8 pb-32 md:pb-8 animate-in fade-in duration-500">
            <CheckoutStepper currentStep={1} />

            <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 items-start">
                <div className="flex-1 w-full order-1">
                    <div className="flex items-end justify-between mb-6 md:mb-8 border-b border-stone-100 pb-4 md:pb-6">
                        <h1 className="text-xl md:text-3xl font-bold text-stone-900 tracking-tight">
                            Shopping Cart <span className="text-stone-300 ml-2 font-normal">({cartItems.length})</span>
                        </h1>
                    </div>

                    <div className="bg-white rounded-2xl md:rounded-3xl border border-stone-100 divide-y divide-stone-50 shadow-sm overflow-hidden">
                        {cartItems.map((item) => (
                            <CartItem key={item.product_id} item={item} />
                        ))}
                    </div>
                </div>

                <aside className="w-full lg:w-[400px] xl:w-[420px] shrink-0 order-2 lg:sticky lg:top-28">
                    <OrderSummary
                        buttonText="Proceed to Shipping"
                        onButtonClick={handleCheckout}
                    />
                </aside>
            </div>
        </div>
    );
}
