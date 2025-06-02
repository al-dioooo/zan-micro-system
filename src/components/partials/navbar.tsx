import Link from "next/link"
import NavLink from "../nav-link"

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full">
            <div
                className="relative flex items-center justify-between px-24 py-4 bg-white/50 backdrop-blur border-b border-gray-100">
                <div className="uppercase flex flex-col">
                    <div className="text-xl tracking-[1.9rem] font-medium text-blue-500">Zan</div>
                    <div className="text-xs tracking-widest font-medium">Micro System</div>
                </div>
                <nav className="absolute inset-0 pointer-events-none w-full flex items-center justify-center">
                    <ul className="flex items-center space-x-8 pointer-events-auto text-sm">
                        <li>
                            <NavLink href="/" active="/" label="Home" />
                        </li>
                        <li>
                            <NavLink href="/product" active="/product" label="Product" />
                        </li>
                        <li>
                            <NavLink href="/blog" active="/blog" label="Blog" />
                        </li>
                    </ul>
                </nav>
                <div>
                    <Link href="/contact" className="border-2 font-medium border-gray-200 rounded-full px-8 py-2 text-sm hover:bg-gradient-to-tl hover:from-blue-500 hover:to-blue-300 hover:text-white hover:border-blue-200 transition cursor-pointer">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </header>
    )
}