import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Aroma Puro"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Body Splash y fragancias exclusivas con los mejores aromas árabes.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>WhatsApp: +54 11 3029-2701</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              Horarios
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lunes a Viernes: 10:00 - 20:00</li>
              <li>Sábados: 10:00 - 18:00</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aroma Puro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
