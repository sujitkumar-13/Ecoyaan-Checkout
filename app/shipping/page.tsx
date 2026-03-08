"use client";

import { OrderSummary } from "@/components/OrderSummary";
import { CheckoutStepper } from "@/components/CheckoutStepper";
import { AddressForm } from "@/components/AddressForm";
import { ShieldCheck } from "lucide-react";

export default function ShippingPage() {
    return (
        <div className="max-w-[1400px] mx-auto px-4 py-4 md:py-8 pb-32 md:pb-8 animate-in fade-in duration-500">
            <CheckoutStepper currentStep={2} />

            <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 items-start">
                <div className="flex-1 w-full order-2 lg:order-1">
                    <div className="bg-white p-5 md:p-10 rounded-2xl md:rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100">
                        <div className="flex items-center gap-3 mb-6 md:mb-8 pb-4 border-b border-stone-50">
                            <div className="w-9 h-9 md:w-10 md:h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-stone-900">Shipping Details</h2>
                                <p className="text-xs md:text-sm text-stone-500">Where should we send your sustainable goods?</p>
                            </div>
                        </div>

                        <AddressForm />
                    </div>
                </div>

                <aside className="w-full lg:w-[400px] xl:w-[420px] shrink-0 order-1 lg:order-2 lg:sticky lg:top-28">
                    <OrderSummary />

                    <div className="mt-6 md:mt-8 p-5 md:p-6 bg-green-50/50 rounded-2xl border border-green-100 border-dashed hidden md:block">
                        <h3 className="text-sm font-bold text-green-900 mb-2">Fast &amp; Eco-Friendly</h3>
                        <p className="text-[13px] text-green-700 leading-relaxed">
                            We use carbon-neutral shipping methods whenever possible to minimize the footprint of your delivery.
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
}
