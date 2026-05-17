import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Aroma Puro"
            width={180}
            height={180}
            className="object-contain"
            priority
          />
        </div>
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4 font-sans">
          Fragancias Árabes Premium
        </p>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
          Body Splash
          <br />
          <span className="text-primary">de Alta Calidad</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 text-pretty">
          Descubre nuestra colección exclusiva de body splash con las mejores fragancias árabes. 
          250ml de pura elegancia.
        </p>
        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-serif text-primary">100%</span>
            <span className="uppercase tracking-wider text-xs">Originales</span>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-serif text-primary">250ml</span>
            <span className="uppercase tracking-wider text-xs">Por Envase</span>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-serif text-primary">Envíos</span>
            <span className="uppercase tracking-wider text-xs">A Todo el País</span>
          </div>
        </div>
      </div>
    </section>
  );
}
