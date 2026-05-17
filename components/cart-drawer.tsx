"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Minus, Plus, Truck, MapPin, CreditCard, Banknote, MessageCircle } from "lucide-react";
import { useCart, type CartItem } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

type DeliveryMethod = "pickup" | "delivery";
type PaymentMethod = "transfer" | "cash";

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [step, setStep] = useState<"cart" | "checkout">("cart");
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("pickup");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("transfer");
  const [address, setAddress] = useState({
    street: "",
    number: "",
    city: "",
    postalCode: "",
    notes: "",
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    // Build WhatsApp message
    let message = "🛒 *Nuevo Pedido - Aroma Puro*\n\n";
    message += "*Productos:*\n";
    
    cart.forEach((item) => {
      message += `• ${item.name} (${item.size}) x${item.quantity} - ${formatPrice(item.price * item.quantity)}\n`;
    });
    
    message += `\n*Total: ${formatPrice(getTotalPrice())}*\n\n`;
    message += `*Método de entrega:* ${deliveryMethod === "pickup" ? "Retiro en tienda" : "Envío a domicilio"}\n`;
    
    if (deliveryMethod === "delivery") {
      message += `*Dirección:* ${address.street} ${address.number}, ${address.city}, CP: ${address.postalCode}\n`;
      if (address.notes) {
        message += `*Notas:* ${address.notes}\n`;
      }
    }
    
    message += `\n*Método de pago:* ${paymentMethod === "transfer" ? "Transferencia" : "Efectivo"}\n`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "5491130292701";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Clear cart and reset
    clearCart();
    setStep("cart");
    onClose();
  };

  const isCheckoutValid = () => {
    if (deliveryMethod === "delivery") {
      return address.street && address.number && address.city && address.postalCode;
    }
    return true;
  };

  const CartItemRow = ({ item }: { item: CartItem }) => (
    <div className="flex gap-4 py-4 border-b border-border">
      <div className="w-16 h-20 bg-secondary rounded-lg overflow-hidden relative">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h4 className="font-serif font-semibold text-foreground">{item.name}</h4>
        <p className="text-xs text-muted-foreground">{item.size}</p>
        <p className="text-primary font-bold mt-1">{formatPrice(item.price)}</p>
      </div>
      <div className="flex flex-col items-end justify-between">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-muted-foreground hover:text-destructive"
          onClick={() => removeFromCart(item.id)}
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg bg-background border-border flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-serif text-xl text-foreground">
            {step === "cart" ? "Tu Carrito" : "Finalizar Compra"}
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4">
              <MessageCircle className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
              Tu carrito está vacío
            </h3>
            <p className="text-muted-foreground text-sm">
              Explora nuestra colección y encuentra tu fragancia perfecta
            </p>
          </div>
        ) : step === "cart" ? (
          <>
            <div className="flex-1 overflow-y-auto -mx-6 px-6">
              {cart.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </div>

            <div className="border-t border-border pt-4 mt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-bold text-foreground">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
                onClick={() => setStep("checkout")}
              >
                Continuar al Checkout
              </Button>
            </div>
          </>
        ) : (
          <div className="flex-1 overflow-y-auto -mx-6 px-6 py-4 space-y-6">
            {/* Delivery Method */}
            <div className="space-y-3">
              <Label className="text-foreground font-semibold">
                Método de Entrega
              </Label>
              <RadioGroup
                value={deliveryMethod}
                onValueChange={(value) => setDeliveryMethod(value as DeliveryMethod)}
                className="grid grid-cols-2 gap-3"
              >
                <Label
                  htmlFor="pickup"
                  className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                    deliveryMethod === "pickup"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <RadioGroupItem value="pickup" id="pickup" />
                  <div>
                    <MapPin className="h-5 w-5 text-primary mb-1" />
                    <span className="text-sm font-medium text-foreground">Retiro</span>
                  </div>
                </Label>
                <Label
                  htmlFor="delivery"
                  className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                    deliveryMethod === "delivery"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <RadioGroupItem value="delivery" id="delivery" />
                  <div>
                    <Truck className="h-5 w-5 text-primary mb-1" />
                    <span className="text-sm font-medium text-foreground">Envío</span>
                  </div>
                </Label>
              </RadioGroup>
            </div>

            {/* Address Form */}
            {deliveryMethod === "delivery" && (
              <div className="space-y-3">
                <Label className="text-foreground font-semibold">
                  Dirección de Envío
                </Label>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <Input
                      placeholder="Calle"
                      value={address.street}
                      onChange={(e) =>
                        setAddress({ ...address, street: e.target.value })
                      }
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                  <Input
                    placeholder="Número"
                    value={address.number}
                    onChange={(e) =>
                      setAddress({ ...address, number: e.target.value })
                    }
                    className="bg-input border-border text-foreground"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    placeholder="Ciudad"
                    value={address.city}
                    onChange={(e) =>
                      setAddress({ ...address, city: e.target.value })
                    }
                    className="bg-input border-border text-foreground"
                  />
                  <Input
                    placeholder="Código Postal"
                    value={address.postalCode}
                    onChange={(e) =>
                      setAddress({ ...address, postalCode: e.target.value })
                    }
                    className="bg-input border-border text-foreground"
                  />
                </div>
                <Input
                  placeholder="Notas adicionales (opcional)"
                  value={address.notes}
                  onChange={(e) =>
                    setAddress({ ...address, notes: e.target.value })
                  }
                  className="bg-input border-border text-foreground"
                />
              </div>
            )}

            {/* Payment Method */}
            <div className="space-y-3">
              <Label className="text-foreground font-semibold">
                Método de Pago
              </Label>
              <RadioGroup
                value={paymentMethod}
                onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}
                className="grid grid-cols-2 gap-3"
              >
                <Label
                  htmlFor="transfer"
                  className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                    paymentMethod === "transfer"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <RadioGroupItem value="transfer" id="transfer" />
                  <div>
                    <CreditCard className="h-5 w-5 text-primary mb-1" />
                    <span className="text-sm font-medium text-foreground">Transferencia</span>
                  </div>
                </Label>
                <Label
                  htmlFor="cash"
                  className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                    paymentMethod === "cash"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <RadioGroupItem value="cash" id="cash" />
                  <div>
                    <Banknote className="h-5 w-5 text-primary mb-1" />
                    <span className="text-sm font-medium text-foreground">Efectivo</span>
                  </div>
                </Label>
              </RadioGroup>
            </div>

            {/* Order Summary */}
            <div className="bg-secondary rounded-lg p-4 space-y-2">
              <h4 className="font-semibold text-foreground">Resumen del Pedido</h4>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="text-foreground">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
              <div className="border-t border-border pt-2 mt-2 flex justify-between">
                <span className="font-semibold text-foreground">Total</span>
                <span className="font-bold text-primary">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
            </div>

            <div className="space-y-3 pb-4">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
                onClick={handleCheckout}
                disabled={!isCheckoutValid()}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Pagar por WhatsApp
              </Button>
              <Button
                variant="outline"
                className="w-full border-border"
                onClick={() => setStep("cart")}
              >
                Volver al Carrito
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
