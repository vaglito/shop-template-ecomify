"use client";

import Link from "next/link";
import { Search, ShoppingCart, Menu, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 font-sans">
      {/* Top Bar - Minimalist Gray */}
      <div className="bg-gray-100/50 text-gray-500 py-1 text-[11px] tracking-wide border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
              <MapPin size={12} /> Tiendas
            </span>
            <span className="hidden sm:flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
              <Phone size={12} /> (01) 200-2870
            </span>
          </div>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-primary transition-colors">Mi Cuenta</span>
            <span className="cursor-pointer hover:text-primary transition-colors">Seguimiento</span>
          </div>
        </div>
      </div>

      {/* Main Header - Clean White */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-8">

            {/* Mobile Trigger */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-red-50 hover:text-primary">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-white">
                  <div className="p-4">
                    <h2 className="font-bold text-lg mb-4 text-primary">Categorías</h2>
                    <nav className="flex flex-col gap-2">
                      <Link href="#" className="p-2 hover:bg-red-50 hover:text-primary rounded transition-colors text-gray-600 font-medium">Multifuncionales A3/A4</Link>
                      <Link href="#" className="p-2 hover:bg-red-50 hover:text-primary rounded transition-colors text-gray-600 font-medium">Alta Producción</Link>
                      <Link href="#" className="p-2 hover:bg-red-50 hover:text-primary rounded transition-colors text-gray-600 font-medium">Gran Formato (Plotters)</Link>
                      <Link href="#" className="p-2 hover:bg-red-50 hover:text-primary rounded transition-colors text-gray-600 font-medium">Suministros Corporativos</Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo - Centered/Left - Red Text */}
            <Link href="/" className="font-black text-2xl tracking-tighter text-primary uppercase">
              ConexionDigitalJS
            </Link>

            {/* Desktop Nav - Centered Clean Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
              <Link href="#" className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1">Multifuncionales</Link>
              <Link href="#" className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1">Producción</Link>
              <Link href="#" className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1">Plotters</Link>
              <Link href="#" className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1">Software</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex relative w-48 lg:w-64">
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="h-9 rounded-full bg-gray-50 border-gray-200 focus-visible:ring-primary/20 text-xs px-4"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>

              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative hover:bg-red-50 hover:text-primary transition-colors">
                  <ShoppingCart className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 bg-primary text-white text-[10px] border-2 border-white">2</Badge>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Simple Red Line separator per Rosatel style if needed, or stick to shadow-sm */}
    </header>
  );
}
