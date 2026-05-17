"use client";

import Image from "next/image";
import { Gift, Sparkles } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { bodySplashes, tubes } from "@/lib/perfumes-data";

export function PromoSection() {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddPromo = (bodySplashId: string, tubeId: string) => {
    const bodySplash = bodySplashes.find((p) => p.id === bodySplashId);
    const tube = tubes.find((t) => t.id === tubeId);
    
    if (bodySplash && tube) {
      // Add as a promo item with combined price
      addToCart({
        id: `promo-${bodySplashId}-${tubeId}`,
        name: `PROMO: ${bodySplash.name} + ${tube.name}`,
        description: `Body Splash ${bodySplash.name} 250ml + Tubito ${tube.name} 35ml`,
        notes: [...bodySplash.notes.slice(0, 2), ...tube.notes.slice(0, 2)],
        price: 30000,
        originalPrice: 35000,
        size: "250ml + 35ml",
        image: bodySplash.image,
        category: "body-splash",
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-primary tracking-[0.3em] uppercase text-sm font-semibold">
              Oferta Especial
            </span>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Promos Imperdibles
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Llevate un Body Splash de 250ml + un Tubito Arabe de 35ml por solo{" "}
            <span className="text-primary font-bold">{formatPrice(30000)}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Promo 1: Any Body Splash + Khamrah Tube */}
          <Card className="bg-card border-primary/30 overflow-hidden">
            <div className="bg-primary/10 p-3 flex items-center justify-center gap-2">
              <Gift className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Promo 1
              </span>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/products/fakhar-lattafa.jpg"
                    alt="Body Splash"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-2xl text-primary font-bold">+</span>
                <div className="relative w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/products/khamrah-tube.jpg"
                    alt="Khamrah Tube"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Body Splash + Khamrah
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Cualquier Body Splash 250ml + Tubito Khamrah 35ml
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(30000)}
                </span>
                <span className="text-muted-foreground line-through">
                  {formatPrice(35000)}
                </span>
                <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full font-semibold">
                  -14%
                </span>
              </div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => handleAddPromo("fakhar-lattafa", "khamrah-tube")}
              >
                Agregar Promo
              </Button>
            </CardContent>
          </Card>

          {/* Promo 2: Any Body Splash + Asad Tube */}
          <Card className="bg-card border-primary/30 overflow-hidden">
            <div className="bg-primary/10 p-3 flex items-center justify-center gap-2">
              <Gift className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Promo 2
              </span>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/products/club-de-nuit.jpg"
                    alt="Body Splash"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-2xl text-primary font-bold">+</span>
                <div className="relative w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/products/asad-tube.jpg"
                    alt="Asad Tube"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Body Splash + Asad
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Cualquier Body Splash 250ml + Tubito Asad 35ml
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(30000)}
                </span>
                <span className="text-muted-foreground line-through">
                  {formatPrice(35000)}
                </span>
                <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full font-semibold">
                  -14%
                </span>
              </div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => handleAddPromo("club-de-nuit", "asad-tube")}
              >
                Agregar Promo
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Tubitos individuales */}
        <div className="mt-12">
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
            Tubitos Araba 35ml
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {tubes.map((tube) => (
              <Card key={tube.id} className="bg-card border-border hover:border-primary/50 transition-all overflow-hidden">
                <div className="flex items-center gap-4 p-4">
                  <div className="relative w-20 h-28 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={tube.image}
                      alt={tube.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-semibold text-foreground">
                      {tube.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">{tube.size}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-primary font-bold">
                        {formatPrice(tube.price)}
                      </span>
                      <span className="text-muted-foreground text-sm line-through">
                        {formatPrice(tube.originalPrice)}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => addToCart(tube)}
                    >
                      Agregar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
