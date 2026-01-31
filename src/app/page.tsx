import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Printer, Server, Droplet, PenTool, Scan } from "lucide-react";

export default function Home() {
  const PRODUCTS = [
    { title: "Multifuncional Kyocera TASKalfa 4054ci A3 Color", price: 12500.00, originalPrice: 14000.00, slug: "kyocera-taskalfa-4054ci", discount: 10 },
    { title: "Xerox VersaLink C7125 Multifuncional Color", price: 9800.00, originalPrice: 11200.00, slug: "xerox-versalink-c7125", discount: 12 },
    { title: "Konica Minolta bizhub C300i", price: 10500.00, originalPrice: 12800.00, slug: "konica-bizhub-c300i", discount: 18 },
    { title: "Plotter HP DesignJet T650 36-inch", price: 6500.00, originalPrice: 7200.00, slug: "hp-designjet-t650", discount: 9 },
    { title: "Duplicadora Ricoh DD 3334", price: 5900.00, originalPrice: 6500.00, slug: "ricoh-dd-3334", discount: 9 },
  ];

  const CATEGORIES = [
    { name: "Multifuncionales", icon: <Printer size={32} /> },
    { name: "Producción", icon: <Server size={32} /> }, // Using Server as placeholder for heavy machinery
    { name: "Plotters", icon: <PenTool size={32} /> },
    { name: "Escáneres", icon: <Scan size={32} /> },
    { name: "Insumos", icon: <Droplet size={32} /> },
  ];

  return (
    <div className="space-y-8 pb-10">

      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-0 md:px-4 py-6">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="relative w-full aspect-[21/9] md:aspect-[3/1] bg-gradient-to-r from-red-600 to-red-500 rounded-none md:rounded-xl flex items-center justify-center overflow-hidden shadow-sm">
                  <div className="text-center p-6 z-10 text-white">
                    <h2 className="text-3xl md:text-5xl font-black mb-2 uppercase tracking-tighter drop-shadow-sm">Renting de Impresoras</h2>
                    <p className="text-xl md:text-2xl font-medium mb-6 opacity-95">Optimiza costos con nuestro servicio MPS</p>
                    <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 border-0 font-bold px-8 shadow-lg">Solicitar Cotización</Button>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative w-full aspect-[21/9] md:aspect-[3/1] bg-gray-50 text-gray-900 rounded-none md:rounded-xl flex items-center justify-center overflow-hidden border border-gray-100">
                  <div className="text-center p-6 z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-2 uppercase tracking-tighter text-primary">Alta Producción</h2>
                    <p className="text-xl md:text-2xl font-medium mb-6 text-gray-600">Equipos Xerox y Konica para artes gráficas</p>
                    <Button size="lg" className="bg-primary text-white hover:bg-red-700 font-bold px-8 shadow-md">Ver Catálogo</Button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/80 hover:bg-white text-gray-900 border-none" />
            <CarouselNext className="right-4 bg-white/80 hover:bg-white text-gray-900 border-none" />
          </Carousel>
        </div>
      </section>

      {/* Categories Grid - Cleaner */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 tracking-tight">
          Soluciones Corporativas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {CATEGORIES.map((cat, i) => (
            <Card key={i} className="hover:border-primary/50 cursor-pointer transition-all hover:shadow-lg group border-gray-100 bg-white/50 hover:bg-white">
              <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <span className="font-semibold text-sm text-gray-700 group-hover:text-primary transition-colors">{cat.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Solo Por Hoy - Products */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-2">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
            <span className="text-primary">🔥</span>
            Equipos Destacados
          </h2>
          <Link href="/offers" className="text-primary font-semibold hover:underline flex items-center text-sm">
            Ver todo <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {PRODUCTS.map((prod, i) => (
            <ProductCard
              key={i}
              title={prod.title}
              price={prod.price}
              originalPrice={prod.originalPrice}
              slug={prod.slug}
              image="/placeholder.png"
              discount={prod.discount}
            />
          ))}
        </div>
      </section>

      {/* Banner Slim - Light Theme Fix */}
      <section className="container mx-auto px-4">
        <div className="w-full h-32 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-between px-8 relative overflow-hidden shadow-sm">
          <div className="z-10">
            <h3 className="text-2xl font-bold text-gray-900">Envío Gratis a Lima Metropolitana</h3>
            <p className="text-gray-500">En equipos seleccionados y suministros por mayor volumen.</p>
          </div>
          <Button className="z-10 bg-gray-900 text-white hover:bg-black px-8">Ver Condiciones</Button>
          <div className="absolute right-0 top-0 w-64 h-full bg-red-500/5 skew-x-12 transform translate-x-10"></div>
        </div>
      </section>
    </div>
  );
}
