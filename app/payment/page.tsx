"use client";

import { useCart } from "@/context/CartContext";
import { OrderSummary } from "@/components/OrderSummary";
import { CheckoutStepper } from "@/components/CheckoutStepper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CreditCard, MapPin, Truck, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function PaymentPage() {
    const { shippingAddress, clearCart } = useCart();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = async () => {
        setIsProcessing(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        clearCart();
        router.push("/success");
    };

    return (
        <div className="max-w-[1400px] mx-auto px-4 py-4 md:py-8 pb-32 md:pb-8 animate-in fade-in duration-500">
            <CheckoutStepper currentStep={3} />

            <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 items-start">
                <div className="flex-1 w-full order-2 lg:order-1 space-y-6 md:space-y-8">
                    {/* Shipping Review */}
                    <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100">
                        <div className="flex justify-between items-start md:items-center mb-6 pb-4 border-b border-stone-50">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 md:w-10 md:h-10 bg-stone-50 rounded-full flex items-center justify-center text-stone-600">
                                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <h2 className="text-lg md:text-xl font-bold text-stone-900">Shipping To</h2>
                            </div>
                            <Link href="/shipping" className="text-green-600 text-xs md:text-sm font-bold hover:text-green-700 hover:underline transition-colors mt-1 md:mt-0">
                                Change
                            </Link>
                        </div>
                        <div className="text-stone-600 flex flex-col gap-1 pl-1">
                            {shippingAddress ? (
                                <>
                                    <p className="font-bold text-stone-900 text-base md:text-lg">{shippingAddress.fullName}</p>
                                    <p className="text-xs md:text-[15px]">{shippingAddress.email} &bull; {shippingAddress.phone}</p>
                                    <p className="text-xs md:text-[15px]">{shippingAddress.city}, {shippingAddress.state} {shippingAddress.pinCode}</p>
                                </>
                            ) : (
                                <p className="text-stone-400 italic text-xs md:text-sm">No address entered yet. <Link href="/shipping" className="text-green-600 underline">Add one</Link></p>
                            )}
                        </div>
                    </div>

                    {/* Delivery Method */}
                    <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-50">
                            <div className="w-9 h-9 md:w-10 md:h-10 bg-stone-50 rounded-full flex items-center justify-center text-stone-600">
                                <Truck className="w-4 h-4 md:w-5 md:h-5" />
                            </div>
                            <h2 className="text-lg md:text-xl font-bold text-stone-900">Delivery Method</h2>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-green-50/50 border border-green-100 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-600 animate-pulse" />
                                <div>
                                    <p className="font-bold text-green-900 text-xs md:text-sm">Carbon-Neutral Delivery</p>
                                    <p className="text-[10px] md:text-xs text-green-700">Estimated delivery: 3-5 business days</p>
                                </div>
                            </div>
                            <span className="text-[10px] md:text-xs font-bold text-green-800 uppercase tracking-wider">Included</span>
                        </div>
                    </div>

                    {/* Payment Selection */}
                    <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-50">
                            <div className="w-9 h-9 md:w-10 md:h-10 bg-stone-50 rounded-full flex items-center justify-center text-stone-600">
                                <CreditCard className="w-4 h-4 md:w-5 md:h-5" />
                            </div>
                            <h2 className="text-lg md:text-xl font-bold text-stone-900">Payment Selection</h2>
                        </div>

                        <div className="border-2 border-green-600 bg-green-50/30 rounded-2xl p-4 md:p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3">
                                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="w-10 h-7 md:w-12 md:h-8 bg-stone-900 rounded flex items-center justify-center shrink-0">
                                    <div className="w-5 h-3.5 md:w-6 md:h-4 border border-stone-700 rounded-[2px]" />
                                </div>
                                <div>
                                    <p className="font-bold text-stone-900 text-sm md:text-base">Eco-Wallet / Credit Card</p>
                                    <p className="text-[11px] md:text-sm text-stone-500 mt-1 max-w-sm">
                                        This is a simulated secure transaction. No actual payment will be taken.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-start gap-3 p-3 md:p-4 bg-amber-50 rounded-xl border border-amber-100">
                            <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-amber-600 shrink-0 mt-0.5" />
                            <p className="text-[10px] md:text-xs text-amber-800 leading-relaxed font-medium">
                                By clicking &quot;Pay Securely&quot;, you agree to our Terms of Service regarding sustainable commerce.
                            </p>
                        </div>
                    </div>
                </div>

                <aside className="w-full lg:w-[400px] xl:w-[420px] shrink-0 order-1 lg:order-2 lg:sticky lg:top-28">
                    <OrderSummary
                        buttonText="Pay Securely"
                        onButtonClick={handlePayment}
                        isLoading={isProcessing}
                    />
                </aside>
            </div>
        </div>
    );
}
