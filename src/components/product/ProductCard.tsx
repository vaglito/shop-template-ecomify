import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    title: string;
    price: number;
    originalPrice?: number;
    image: string;
    slug: string;
    discount?: number;
}

export function ProductCard({ title, price, originalPrice, image, slug, discount }: ProductCardProps) {
    return (
        <Card className="h-full flex flex-col group overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="p-0 relative bg-white">
                {discount && (
                    <Badge className="absolute top-2 left-2 bg-destructive text-white hover:bg-destructive/90 font-bold z-10">
                        -{discount}%
                    </Badge>
                )}
                <Link href={`/product/${slug}`} className="block aspect-square relative overflow-hidden bg-white p-4">
                    {/* Placeholder for real image since next/image needs config for domains */}
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                        Product Image
                    </div>
                    {/* 
           <Image 
             src={image} 
             alt={title} 
             fill 
             className="object-contain group-hover:scale-105 transition-transform duration-300" 
           />
           */}
                </Link>
            </CardHeader>

            <CardContent className="flex-1 p-4 flex flex-col gap-2">
                <Link href={`/product/${slug}`} className="hover:text-primary transition-colors">
                    <h3 className="font-medium text-sm line-clamp-2 min-h-[40px] text-gray-700">{title}</h3>
                </Link>
                <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={12} className="fill-primary text-primary" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">(12)</span>
                </div>

                <div className="mt-auto pt-2">
                    {originalPrice && (
                        <span className="text-xs text-muted-foreground line-through block">
                            S/ {originalPrice.toFixed(2)}
                        </span>
                    )}
                    <span className="text-xl font-bold text-primary block">
                        S/ {price.toFixed(2)}
                    </span>
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Button className="w-full font-bold uppercase tracking-wide bg-primary text-primary-foreground hover:bg-red-700 gap-2">
                    <ShoppingCart size={16} /> Agregar
                </Button>
            </CardFooter>
        </Card>
    );
}
