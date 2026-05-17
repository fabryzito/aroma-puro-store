import { bodySplashes } from "@/lib/perfumes-data";
import { PerfumeCard } from "./perfume-card";

export function PerfumeGrid() {
  return (
    <section className="py-16 bg-card" id="perfumes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-2">
            Nuestra Colección
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Body Splash 250ml
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {bodySplashes.map((perfume) => (
            <PerfumeCard key={perfume.id} perfume={perfume} />
          ))}
        </div>
      </div>
    </section>
  );
}
