# Ecoyaan Checkout

A clean, minimal checkout flow built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Demonstrates a full cart-to-success purchase journey with hardcoded products — no backend or database required.

## Flow

```
/ → /cart → /shipping → /payment → /success
```

## Pages

| Route | Description |
|---|---|
| `/cart` | View cart items, adjust quantities, remove items |
| `/shipping` | Enter delivery address |
| `/payment` | Review order & simulate payment |
| `/success` | Order confirmation screen |

## Stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects straight to the cart.

## Project Structure

```
app/
  cart/         # Cart page
  shipping/     # Shipping address form
  payment/      # Payment review & confirmation
  success/      # Order success screen
components/
  CartItem.tsx        # Individual cart item with quantity controls
  OrderSummary.tsx    # Sidebar order total
  CheckoutStepper.tsx # Step indicator (Cart → Shipping → Payment)
  AddressForm.tsx     # Shipping address form
context/
  CartContext.tsx     # Cart state (2 hardcoded items, in-memory)
types/
  index.ts            # Shared TypeScript interfaces
```

## Notes

- Cart is pre-loaded with 2 hardcoded items (Bamboo Toothbrush Set & Beeswax Wraps)
- No authentication or database — fully self-contained
- Payment is simulated (no real transaction)
