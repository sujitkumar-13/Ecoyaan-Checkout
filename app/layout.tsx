import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecoyaan – Checkout",
  description: "Complete your eco-friendly order.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-stone-50">
      <body
        className={`${geistSans.variable} antialiased bg-stone-50 text-stone-900 flex flex-col min-h-screen`}
      >
        <CartProvider>
          <main className="flex-1 w-full mx-auto p-4 md:p-8">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
