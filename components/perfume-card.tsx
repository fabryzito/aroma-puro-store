"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import type { Perfume } from "@/lib/cart-context";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PerfumeCardProps {
  perfume: Perfume;
}

export function PerfumeCard({ perfume }: PerfumeCardProps) {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
      <div className="aspect-square relative bg-secondary overflow-hidden">
        <Image
          src={perfume.image}
          alt={perfume.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
        
        {/* Size badge */}
        <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
          {perfume.size}
        </span>
        
        {/* Quick add button */}
        <Button
          size="icon"
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={() => addToCart(perfume)}
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {perfume.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-primary font-bold text-lg">
              {formatPrice(perfume.price)}
            </span>
            <span className="text-muted-foreground text-sm line-through">
              {formatPrice(perfume.originalPrice)}
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {perfume.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {perfume.notes.slice(0, 3).map((note) => (
            <span
              key={note}
              className="text-[10px] px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full"
            >
              {note}
            </span>
          ))}
          {perfume.notes.length > 3 && (
            <span className="text-[10px] px-2 py-0.5 bg-secondary text-muted-foreground rounded-full">
              +{perfume.notes.length - 3}
            </span>
          )}
        </div>

        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={() => addToCart(perfume)}
        >
          Agregar al Carrito
        </Button>
      </CardContent>
    </Card>
  );
}
