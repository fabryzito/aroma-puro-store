export interface Perfume {
  id: string;
  name: string;
  description: string;
  notes: string[];
  price: number;
  originalPrice: number;
  size: string;
  image: string;
  category: "body-splash" | "tube";
}

export const bodySplashes: Perfume[] = [
  {
    id: "qaed-al-fursan",
    name: "Qaed Al Fursan",
    description: "Una fragancia árabe majestuosa que evoca la nobleza y elegancia de los caballeros del desierto. Aroma sofisticado con toques amaderados y especiados.",
    notes: ["Ámbar", "Madera de Oud", "Almizcle", "Especias orientales"],
    price: 25000,
    originalPrice: 30000,
    size: "250ml",
    image: "/products/qaed-al-fursan.jpg",
    category: "body-splash",
  },
  {
    id: "fakhar-lattafa",
    name: "Fakhar Lattafa",
    description: "Elegancia pura en cada aplicación. Una composición lujosa con patrones dorados que representa la opulencia y el refinamiento árabe.",
    notes: ["Rosa de Damasco", "Oud", "Ámbar gris", "Vainilla"],
    price: 25000,
    originalPrice: 30000,
    size: "250ml",
    image: "/products/fakhar-lattafa.jpg",
    category: "body-splash",
  },
  {
    id: "khamrah-qahwa",
    name: "Khamrah Qahwa",
    description: "Inspirado en el café árabe tradicional. Una fragancia cálida y reconfortante con notas tostadas y dulces que envuelven los sentidos.",
    notes: ["Café árabe", "Cardamomo", "Azafrán", "Vainilla tostada"],
    price: 25000,
    originalPrice: 30000,
    size: "250ml",
    image: "/products/khamrah-qahwa.jpg",
    category: "body-splash",
  },
  {
    id: "sakeena",
    name: "Sakeena",
    description: "Una explosión de sensualidad en rojo y dorado. Fragancia vibrante y apasionada que irradia confianza y magnetismo personal.",
    notes: ["Rosa roja", "Azafrán", "Ámbar", "Sándalo"],
    price: 25000,
    originalPrice: 30000,
    size: "250ml",
    image: "/products/sakeena.jpg",
    category: "body-splash",
  },
  {
    id: "club-de-nuit",
    name: "Club de Nuit Intense Man",
    description: "El favorito masculino por excelencia. Una fragancia intensa y seductora perfecta para la noche, con un aura de misterio irresistible.",
    notes: ["Limón", "Piña", "Abedul", "Almizcle negro"],
    price: 25000,
    originalPrice: 30000,
    size: "250ml",
    image: "/products/club-de-nuit.jpg",
    category: "body-splash",
  },
];

export const tubes: Perfume[] = [
  {
    id: "khamrah-tube",
    name: "Khamrah",
    description: "Perfume concentrado en formato travel. La esencia de la opulencia árabe en un práctico tubito de 35ml.",
    notes: ["Dátiles", "Canela", "Tabaco dulce", "Vainilla"],
    price: 5000,
    originalPrice: 10000,
    size: "35ml",
    image: "/products/khamrah-tube.jpg",
    category: "tube",
  },
  {
    id: "asad-tube",
    name: "Asad",
    description: "El león de las fragancias. Perfume intenso y poderoso con el sello distintivo del diseño árabe de lujo.",
    notes: ["Tabaco", "Café", "Ámbar", "Madera de cedro"],
    price: 5000,
    originalPrice: 10000,
    size: "35ml",
    image: "/products/asad-tube.jpg",
    category: "tube",
  },
];

export const allProducts = [...bodySplashes, ...tubes];
