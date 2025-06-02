import { hover, motion, scale } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { tap } from "node:test/reporters"

const productData = [
    {
        id: 1,
        name: "Fastbook Desktop",
        slug: "fastbook-desktop",
        description: "",
        price: 123,
        payment_type: "one-time",
        cover: "img/fastbook-desktop-cover.png",
    },
    {
        id: 2,
        name: "Fastbook Online",
        slug: "fastbook-online",
        description: "",
        price: 123,
        payment_type: "subscription",
        cover: "img/fastbook-online-cover.png",
    },
    {
        id: 3,
        name: "Zi-SMS Pro",
        slug: "zi-sms-pro",
        description: "",
        price: 123,
        payment_type: "one-time",
        cover: "img/zi-sms-pro-cover.png",
    }
]

const productAnimationVariants = {
    hover: {
        scale: 1.05
    },
    tap: {
        scale: 0.95
    }
}

const MotionLink = motion(Link)

export default function Product() {
    return (
        <>
            <section className="px-24 pt-36 pb-12">
                <div className="space-y-2">
                    <h1 className="text-3xl font-semibold">Product</h1>
                    <h2 className="max-w-md w-full text-gray-700">Berikut daftar produk kami yang dapat meningkatkan produktivitas dan efisiensi bisnis Anda.</h2>
                </div>
            </section>

            <section className="px-24 py-16 space-y-8">
                <h3 className="text-xl font-medium">Produk Umum</h3>
                <div className="grid grid-cols-3 gap-8">
                    {productData.map((row) => (
                        <MotionLink variants={productAnimationVariants} href={`/product/${row.slug}`} className="space-y-2">
                            <motion.img variants={productAnimationVariants} whileHover="hover" whileTap="tap" transition={{ type: "spring", visualDuration: .3 }} className="w-full aspect-video rounded-3xl" src={row.cover} alt={`${row.name} Cover`} />
                            <div className="px-6 flex items-center justify-between">
                                <p className="font-medium">{row.name}</p>
                                <p className="font-medium text-gray-500 capitalize">{row.payment_type.replace('-', ' ')}</p>
                            </div>
                        </MotionLink>
                    ))}
                </div>
            </section>

            <section className="px-24 py-16 space-y-8">
                <h3 className="text-xl font-medium">Produk Khusus</h3>
                {/* <div className="grid grid-cols-3 gap-8">
                    {productData.map((row) => (
                        <Link href={`/product/${row.slug}`} className="space-y-2">
                            <img className="w-full aspect-video rounded-3xl" src={row.cover} alt={`${row.name} Cover`} />
                            <div className="px-6">
                                <p className="font-medium">{row.name}</p>
                            </div>
                        </Link>
                    ))}
                </div> */}
            </section>

            <section className="m-24 p-24 border border-dashed border-gray-300 aspect-cinema flex items-center justify-center">
                <div className="bg-gradient-to-tl from-blue-500 to-blue-300 text-white rounded-3xl px-24 py-8">
                    <p className="text-4xl font-medium">Pesan Sekarang</p>
                </div>
            </section>
        </>
    )
}