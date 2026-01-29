import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground pt-12 pb-6">
            <div className="container mx-auto px-4">

                {/* Newsletter Section */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-gray-900/50 p-6 rounded-lg mb-12 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-primary">¡Suscríbete a nuestro boletín!</h3>
                        <p className="text-sm text-gray-400">Recibe las mejores ofertas y descuentos exclusivos.</p>
                    </div>
                    <div className="flex w-full md:max-w-md gap-2">
                        <Input type="email" placeholder="Ingresa tu correo" className="bg-white text-black border-none" />
                        <Button className="bg-primary text-primary-foreground font-bold hover:bg-primary/90">
                            Suscribirme
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
                    {/* Column 1 */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white text-lg">Sobre Nosotros</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#" className="hover:text-primary">Nuestra Historia</Link></li>
                            <li><Link href="#" className="hover:text-primary">Tiendas</Link></li>
                            <li><Link href="#" className="hover:text-primary">Trabaja con Nosotros</Link></li>
                            <li><Link href="#" className="hover:text-primary">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white text-lg">Servicio al Cliente</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#" className="hover:text-primary">Centro de Ayuda</Link></li>
                            <li><Link href="#" className="hover:text-primary">Términos y Condiciones</Link></li>
                            <li><Link href="#" className="hover:text-primary">Política de Privacidad</Link></li>
                            <li><Link href="#" className="hover:text-primary">Devoluciones</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white text-lg">Contáctanos</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center gap-2">Venta Telefónica (Lima):<br /> (01) 200-2870</li>
                            <li className="flex items-center gap-2">Whatsapp:<br /> 999-999-999</li>
                        </ul>
                    </div>

                    {/* Column 4 - Social */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white text-lg">Síguenos</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-black transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-black transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-black transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-black transition-colors"><Youtube size={20} /></Link>
                        </div>
                    </div>
                </div>

                <Separator className="bg-gray-800 my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2026 ConexionDigitalJS. Todos los derechos reservados.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <span>Visa</span>
                        <span>Mastercard</span>
                        <span>Amex</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
