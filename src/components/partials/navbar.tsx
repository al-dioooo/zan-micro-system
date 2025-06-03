import Link from "next/link"
import NavLink from "../nav-link"
import { useRouter } from "next/router"
import { Menu, X } from "@/components/icons/outline"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function Navbar() {
    const pathname = useRouter().pathname

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    return (
        <>
            <header className="fixed top-0 w-full z-10">
                <div
                    className="relative flex items-center justify-between px-6 md:px-24 py-4 bg-white/50 backdrop-blur border-b border-gray-100">
                    <div className="uppercase flex flex-col">
                        <div className="text-xl tracking-[1.9rem] font-medium text-blue-500">Zan</div>
                        <div className="text-xs tracking-widest font-medium">Micro System</div>
                    </div>
                    <nav className="absolute inset-0 pointer-events-none w-full hidden md:flex items-center justify-center">
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
                    <div className="hidden md:block">
                        <Link href="/contact" className={`${pathname == '/contact' ? 'bg-gradient-to-tl from-blue-500 to-blue-300 text-white border-blue-200' : 'border-gray-200 hover:bg-gradient-to-tl hover:from-blue-500 hover:to-blue-300 hover:text-white hover:border-blue-200'} border-2 font-medium rounded-full px-8 py-2 text-sm transition cursor-pointer`}>
                            Get in Touch
                        </Link>
                    </div>

                    <div className="md:hidden flex">
                        <button onClick={() => toggleMenu()} className="border border-gray-200 p-2 rounded-lg">
                            {isMenuOpen ? (
                                <X />
                            ) : (
                                <Menu />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence initial={false} mode="wait">
                {isMenuOpen && (
                    <motion.div className="min-h-screen px-6 pt-32 bg-white flex-col flex space-y-8">
                        <ul className="text-4xl space-y-16 flex flex-col items-center">
                            <li>
                                <NavLink href="/" active="/" label="Home" />
                            </li>
                            <li>
                                <NavLink href="/product" active="/product" label="Product" />
                            </li>
                            <li>
                                <NavLink href="/blog" active="/blog" label="Blog" />
                            </li>

                            <li>
                                <NavLink href="/contact" active="/contact" label="Contact" />
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}