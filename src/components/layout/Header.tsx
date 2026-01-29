"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, Menu, MapPin, Phone, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="w-full">
      {/* Top Bar - Secondary Dark */}
      <div className="bg-secondary text-secondary-foreground py-2 text-xs">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1 cursor-pointer hover:underline">
              <MapPin size={14} /> Tiendas
            </span>
            <span className="hidden sm:flex items-center gap-1 cursor-pointer hover:underline">
              <Phone size={14} /> Venta Telefónica: (01) 200-2870
            </span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-1 cursor-pointer hover:underline">
              <HelpCircle size={14} /> Ayuda
            </span>
            <span className="cursor-pointer hover:underline">Seguimiento de Pedido</span>
          </div>
        </div>
      </div>

      {/* Main Bar - White */}
      <div className="bg-background py-4 sticky top-0 z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">

          {/* Mobile Menu Trigger & Logo */}
          <div className="flex items-center gap-2 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                  <h2 className="font-bold text-lg mb-4">Categorías</h2>
                  <nav className="flex flex-col gap-2">
                    <Link href="#" className="p-2 hover:bg-muted rounded">Multifuncionales A3/A4</Link>
                    <Link href="#" className="p-2 hover:bg-muted rounded">Alta Producción</Link>
                    <Link href="#" className="p-2 hover:bg-muted rounded">Gran Formato (Plotters)</Link>
                    <Link href="#" className="p-2 hover:bg-muted rounded">Suministros Corporativos</Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="font-bold text-xl tracking-tighter text-primary-foreground bg-primary px-2 rounded-sm whitespace-nowrap">
              ConexionDigitalJS
            </Link>
          </div>

          {/* Desktop Logo */}
          <Link href="/" className="hidden lg:block font-extrabold text-3xl tracking-tighter text-black uppercase">
            ConexionDigitalJS
            {/* Alternatively use an Image logo if available */}
          </Link>

          {/* Search Bar - Central */}
          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <Input
              type="search"
              placeholder="¿Qué estás buscando?"
              className="w-full rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-muted/30"
            />
            <Button className="rounded-l-none bg-primary text-primary-foreground hover:bg-primary/90">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Icons / Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden lg:flex flex-col h-auto p-1 gap-0.5 text-xs font-normal">
              <User className="h-6 w-6" />
              <span>Mi Cuenta</span>
            </Button>

            <Link href="/cart">
              <Button variant="ghost" className="relative flex flex-col h-auto p-1 gap-0.5 text-xs font-normal">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-destructive text-white border-white">
                    2
                  </Badge>
                </div>
                <span>Carrito</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar (visible only on mobile) */}
        <div className="md:hidden container mx-auto px-4 mt-2">
          <div className="flex w-full">
            <Input
              type="search"
              placeholder="Buscar productos..."
              className="w-full rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-muted/30 h-9"
            />
            <Button size="sm" className="rounded-l-none bg-primary text-primary-foreground h-9">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Bar - Primary Yellow (Desktop) */}
      <div className="hidden lg:block bg-primary text-primary-foreground border-b border-red-700">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-8 py-3 text-sm font-bold uppercase tracking-wide">
            <Link href="#" className="hover:text-white transition-colors">Multifuncionales</Link>
            <Link href="#" className="hover:text-white transition-colors">Producción</Link>
            <Link href="#" className="hover:text-white transition-colors">Plotters</Link>
            <Link href="#" className="hover:text-white transition-colors">Escáneres</Link>
            <Link href="#" className="hover:text-white transition-colors">Software</Link>
            <Link href="#" className="flex-1 text-right text-black font-extrabold animate-pulse">
              ¡Cotiza Renting!
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
