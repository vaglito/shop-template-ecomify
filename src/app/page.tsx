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
      <section className="w-full bg-gray-100">
        <div className="container mx-auto px-0 md:px-4 py-4">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="relative w-full aspect-[21/9] md:aspect-[3/1] bg-gradient-to-r from-red-600 to-red-500 rounded-none md:rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6 z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-2 text-white uppercase tracking-tighter">Renting de Impresoras</h2>
                    <p className="text-xl md:text-2xl font-bold mb-4 text-white/90">Optimiza costos con nuestro servicio MPS</p>
                    <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8">Solicitar Cotización</Button>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                  <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-800 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative w-full aspect-[21/9] md:aspect-[3/1] bg-black text-white rounded-none md:rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6 z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-2 uppercase tracking-tighter text-primary">Alta Producción</h2>
                    <p className="text-xl md:text-2xl font-bold mb-4">Equipos Xerox y Konica para artes gráficas</p>
                    <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold px-8">Ver Equipos</Button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="w-2 h-8 bg-primary rounded-sm"></span>
          Categorías Destacadas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {CATEGORIES.map((cat, i) => (
            <Card key={i} className="hover:border-primary cursor-pointer transition-all hover:shadow-md group">
              <CardContent className="flex flex-col items-center justify-center p-6 gap-2">
                <div className="text-gray-400 group-hover:text-primary transition-colors">
                  {cat.icon}
                </div>
                <span className="font-bold text-sm">{cat.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Solo Por Hoy - Products */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="w-2 h-8 bg-destructive rounded-sm"></span>
            ¡Solo por Hoy!
          </h2>
          <Link href="/offers" className="text-primary-foreground font-semibold hover:underline flex items-center text-sm">
            Ver todo <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
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

      {/* Banner Slim */}
      <section className="container mx-auto px-4">
        <div className="w-full h-32 bg-secondary rounded-lg flex items-center justify-between px-8 text-white relative overflow-hidden">
          <div className="z-10">
            <h3 className="text-2xl font-bold text-primary">Envío Gratis</h3>
            <p>En miles de productos seleccionados</p>
          </div>
          <Button variant="outline" className="z-10 text-black border-white hover:bg-white/90">Conocer más</Button>
          <div className="absolute right-0 top-0 w-64 h-full bg-gray-800 skew-x-12 transform translate-x-10"></div>
        </div>
      </section>
    </div>
  );
}
