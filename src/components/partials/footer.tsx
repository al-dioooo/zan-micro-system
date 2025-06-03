import Link from "next/link";
import { WhatsApp, Mail, Phone } from "@/components/icons/outline"

export default function Footer() {
    return (
        <footer className="bg-radial-[at_50%_100%] from-blue-100 via-gray-100 via-60% to-gray-100 px-12 md:px-24 pt-16 pb-36 relative overflow-hidden">
            <div className="flex md:flex-row flex-col space-y-8 md:space-y-0 md:space-x-8 justify-between">
                <div className="flex flex-col space-y-24">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="uppercase flex flex-col">
                                <div className="text-xl tracking-[1.9rem] font-medium text-blue-500">Zan</div>
                                <div className="text-xs tracking-widest font-medium">Micro System</div>
                            </div>
                            <p className="text-gray-500 text-sm max-w-md">
                                Penyedia jasa pengembangan aplikasi berbasis web custom, membantu berbagai
                                sektor bisnis dalam mengoptimalkan sistem operasional mereka.
                            </p>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a className="hover:text-blue-500" href="https://wa.me/6285212482977" target="_blank">
                                <WhatsApp />
                            </a>
                            <a className="hover:text-blue-500" href="tel:6285212482977" target="_blank">
                                <Phone />
                            </a>
                            <a className="hover:text-blue-500" href="mailto:ptzanms@gmail.com" target="_blank">
                                <Mail />
                            </a>
                        </div>
                    </div>

                    <div className="text-sm text-gray-500">
                        <p>ZMS is a Trademark of PT. Zan Micro System</p>
                        <p>Copyright &copy; 2025 Zan Micro System. All rights reserved.</p>
                    </div>
                </div>

                <div className="space-y-8 text-sm">
                    <p className="font-medium uppercase tracking-widest text-blue-500">Links</p>
                    <ul className="space-y-4">
                        <li>
                            <Link className="hover:text-blue-500" href="/">Home</Link>
                        </li>
                        <li>
                            <Link className="hover:text-blue-500" href="/product">Product</Link>
                        </li>
                        <li>
                            <Link className="hover:text-blue-500" href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className="hover:text-blue-500" href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="absolute pointer-events-none inset-0 w-full flex justify-center items-end translate-y-3 md:translate-y-18 whitespace-nowrap">
                <p className="text-5xl md:text-[8rem] font-black text-gray-50">Zan Micro System</p>
            </div>
        </footer>
    )
}