"use client";

import { useState } from "react";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PerfumeGrid } from "@/components/perfume-grid";
import { PromoSection } from "@/components/promo-section";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";

function HomeContent() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Header onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <PerfumeGrid />
        <PromoSection />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <HomeContent />
    </CartProvider>
  );
}
