import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Youtube, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-600 pt-16 pb-8 border-t border-gray-100 font-sans">
            <div className="container mx-auto px-4">

                {/* Newsletter Section - Cleaner, Lighter */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-white border border-gray-100 p-8 rounded-xl shadow-[0_2px_10px_-5px_rgba(0,0,0,0.05)] mb-12 gap-8">
                    <div className="space-y-1">
                        <h3 className="text-2xl font-bold text-gray-900">Suscríbete a novedades</h3>
                        <p className="text-gray-500">Recibe ofertas corporativas y lanzamientos exclusivos.</p>
                    </div>
                    <div className="flex w-full md:max-w-md gap-2">
                        <Input type="email" placeholder="Tu correo corporativo" className="bg-gray-50 border-gray-200 focus:ring-primary/20" />
                        <Button className="bg-primary text-white font-semibold hover:bg-red-700 px-8 shadow-md shadow-red-500/20">
                            Suscribir
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12 text-sm">
                    {/* Column 1 */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-gray-900 text-base uppercase tracking-wider">ConexionDigitalJS</h4>
                        <p className="text-gray-500 leading-relaxed">
                            Soluciones integrales en impresión y tecnología para empresas. Optimizamos tu flujo de trabajo.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-white border border-gray-200 rounded-full hover:border-primary hover:text-primary transition-colors text-gray-400"><Facebook size={18} /></Link>
                            <Link href="#" className="p-2 bg-white border border-gray-200 rounded-full hover:border-primary hover:text-primary transition-colors text-gray-400"><Instagram size={18} /></Link>
                            <Link href="#" className="p-2 bg-white border border-gray-200 rounded-full hover:border-primary hover:text-primary transition-colors text-gray-400"><Twitter size={18} /></Link>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-gray-900 text-base uppercase tracking-wider">Empresa</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-primary transition-colors">Nosotros</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Sostenibilidad</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Casos de Éxito</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog Corporativo</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-gray-900 text-base uppercase tracking-wider">Soporte</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-primary transition-colors">Centro de Ayuda</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Solicitar Servicio Técnico</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Drivers y Manuales</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Garantía</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 - Contact */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-gray-900 text-base uppercase tracking-wider">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="mt-0.5 text-primary" size={18} />
                                <span>Ventas: (01) 200-2870<br /><span className="text-gray-400 text-xs">Lun-Vie 9am-6pm</span></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 text-primary" size={18} />
                                <span>Av. Principal 123, San Isidro<br /><span className="text-gray-400 text-xs">Lima, Perú</span></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="bg-gray-200 my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>© 2026 ConexionDigitalJS. Todos los derechos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-gray-600">Privacidad</Link>
                        <Link href="#" className="hover:text-gray-600">Términos</Link>
                        <Link href="#" className="hover:text-gray-600">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
