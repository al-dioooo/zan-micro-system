import AxiosInstance from "@/helpers/axiosInstance"
import { motion } from "motion/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ProductDataType } from "@/helpers/types"
import WavyText from "@/components/wavy-text"

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
    const [productDataList, setProductDataList] = useState([])

    useEffect(() => {
        AxiosInstance.get("/api/product").then((response) => setProductDataList(response.data)).catch((error) => console.log(error))
    }, [])

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
                    {productDataList.map((row: ProductDataType) => (
                        <MotionLink variants={productAnimationVariants} href={`/product/${row.slug}`} className="space-y-2">
                            <motion.img variants={productAnimationVariants} whileHover="hover" whileTap="tap" transition={{ type: "spring", visualDuration: .3 }} className="w-full aspect-video rounded-3xl" src={`/${row.coverImage}`} alt={`${row.name} Cover`} />
                            <div className="px-6 flex items-center justify-between">
                                <p className="font-medium">{row.name}</p>
                                <p className="font-medium text-gray-500 capitalize">{row.paymentType.replace('-', ' ')}</p>
                            </div>
                        </MotionLink>
                    ))}
                </div>
            </section>

            <section className="px-24 py-16">
                <div className="text-4xl font-medium">
                    <WavyText />
                </div>
            </section>

            <section className="m-24 p-24 border border-dashed border-gray-300 aspect-cinema flex items-center justify-center">
                <div className="bg-gradient-to-tl from-blue-500 to-blue-300 text-white rounded-3xl px-24 py-8">
                    <p className="text-4xl font-medium">Pesan Sekarang</p>
                </div>
            </section>
        </>
    )
}