"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Aroma Puro"
            width={50}
            height={50}
            className="object-contain"
          />
          <div className="hidden sm:block">
            <h1 className="font-serif text-lg md:text-xl font-bold text-primary">
              Aroma Puro
            </h1>
            <p className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase">
              Body Splash
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="relative border-primary/30 hover:border-primary hover:bg-primary/10"
          onClick={onCartClick}
        >
          <ShoppingBag className="h-5 w-5 text-primary" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}
