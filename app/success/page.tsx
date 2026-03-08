import Link from "next/link";

export default function SuccessPage() {
    const orderNumber = Math.floor(Math.random() * 9000000) + 1000000;

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 md:py-20 text-center animate-in fade-in duration-500">
            {/* Animated checkmark */}
            <div className="w-16 h-16 md:w-24 md:h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 md:mb-8 relative">
                <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 md:hidden"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 hidden md:block"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>

            <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-stone-900 mb-3 md:mb-4">
                Order Placed! 🎉
            </h1>

            <p className="text-sm md:text-lg text-stone-500 mb-2 max-w-[280px] md:max-w-sm mx-auto">
                Thank you for choosing sustainable products. Your order is on its way!
            </p>

            <div className="bg-white px-4 py-2.5 md:px-5 md:py-3 rounded-xl border border-stone-200 shadow-sm inline-flex items-center gap-2 md:gap-3 mb-8 md:mb-10 text-stone-700 font-medium tracking-wide text-xs md:text-base mt-4">
                Order Reference: <span className="text-stone-900 font-bold bg-stone-100 px-2 py-1 rounded">#{orderNumber}</span>
            </div>

            <Link
                href="/cart"
                className="w-full max-w-[240px] md:max-w-none md:w-auto bg-stone-900 hover:bg-black text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold transition-all shadow-lg shadow-stone-200 text-sm md:text-base text-center active:scale-95"
            >
                Back to Cart
            </Link>
        </div>
    );
}
