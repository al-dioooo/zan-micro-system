import { CircleDecoration, Topography } from "@/components/graphics/decoration"
import ZMSGraphic from "@/components/graphics/zms"
import { FourPointedStar } from "@/components/icons/filled"
import { ArrowNarrowDown, LayersIntersect, Sparkles, Star } from "@/components/icons/outline"
import AxiosInstance from "@/helpers/axiosInstance"
import { ProductDataType } from "@/helpers/types"
import { motion, useScroll } from "motion/react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import homeData from "@/temp-data/home.json"
import useDimension from "@/hooks/dimension"
import StarSpinner from "@/components/star-spinner"

const productAnimationVariants = {
    hover: {
        scale: 1.05
    },
    tap: {
        scale: 0.95
    }
}

const MotionLink = motion(Link)

export default function Home() {
    // Scroll container refs
    const ourProductContainerRef = useRef(null)

    // Window dimension hooks
    const { height } = useDimension()

    // Scroll Listeners
    const { scrollYProgress: scrollYProgressOnOurProduct } = useScroll({
        target: ourProductContainerRef,
        offset: ['start start', 'end start']
    })

    // States
    const [productDataList, setProductDataList] = useState([])

    useEffect(() => {
        AxiosInstance.get(`${process.env.API_URL}/api/product`).then((response) => setProductDataList(response.data)).catch((error) => console.log(error))
    }, [])

    return (
        <>
            <section className="flex flex-col space-y-4 justify-center min-h-screen bg-white p-8 md:p-36">
                <div className="flex md:flex-row flex-col-reverse justify-between items-center">
                    <div className="relative">
                        <h1 className="text-3xl md:text-6xl font-semibold leading-tight relative z-[1]">
                            <p>
                                Solusi Digital
                            </p>
                            <p>
                                <span
                                    className="text-blue-500 underline underline-offset-8 decoration-blue-200">Terintegrasi</span>
                            </p>
                        </h1>
                        <h2 className="md:text-xl text-gray-500 mt-4 max-w-md relative z-[1]">
                            Untuk Meningkatkan Produktivitas dan Efisiensi Bisnis Anda
                        </h2>

                        <div className="mt-16 relative w-fit z-[1]">
                            <a href="https://wa.me/6285212482977" target="_blank" className="font-medium bg-gradient-to-tl from-blue-500 to-blue-300 pl-6 pr-2 py-2 rounded-full text-white inline-flex items-center">Konsultasi<span
                                className="bg-white text-blue-500 text-sm px-3 py-1 rounded-full ml-4">Gratis</span></a>

                            <div className="absolute pointer-events-none -top-1 -right-1 text-yellow-300">
                                <FourPointedStar className="w-8 h-8" />
                            </div>
                        </div>

                        <div className="absolute pointer-events-none inset-0">
                            <div className="-translate-x-32 -translate-y-32 rounded-full aspect-square bg-indigo-100 blur-3xl"></div>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center w-full max-w-lg aspect-square">
                        <ZMSGraphic className="w-[18rem] md:w-lg h-auto" />

                        {/* Decoration */}
                        <div className="absolute pointer-events-none -top-1 -right-1 text-indigo-100">
                            <FourPointedStar className="w-64 h-64 blur-xs" />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    {/* Decoration */}
                    <div className="absolute inset-x-0 pointer-events-none flex justify-center">
                        <div className="rounded-full border border-gray-200 p-2">
                            <ArrowNarrowDown strokeWidth={1.5} className="w-12 h-12 text-blue-500" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white p-6 md:p-12">
                <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row overflow-hidden items-center p-6 md:p-12 rounded-4xl border-4 border-blue-50 justify-between bg-gradient-to-tr from-blue-200 via-blue-50 to-blue-50 relative">
                    <h3 className="text-4xl font-semibold text-blue-500">
                        <p>Zan</p>
                        <p className="pl-3">Micro</p>
                        <p className="pl-6">System</p>
                    </h3>
                    <h4 className="max-w-3xl text-justify md:text-lg">
                        Penyedia jasa pengembangan aplikasi berbasis web custom, membantu berbagai
                        sektor bisnis dalam mengoptimalkan sistem operasional mereka.
                    </h4>

                    {/* Topography Decoration */}
                    <div className="absolute  pointer-events-none top-0 inset-x-0">
                        <Topography className="w-full h-auto text-blue-100 mask-radial-gradient" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center p-8 md:p-24 space-y-16 bg-white">
                <h5 className="text-4xl font-semibold text-blue-500">Kenapa Memilih ZMS?</h5>

                <div className="grid md:grid-cols-3 gap-16">
                    <div className="space-y-2">
                        <div className="flex items-center space-x-4">
                            <div className="p-2 rounded-full bg-gradient-to-tl from-blue-500 to-blue-300 text-white">
                                <Sparkles strokeWidth={1.5} className="w-8 h-8" />
                            </div>
                            <p className="text-xl font-semibold">
                                {homeData.why[0].title}
                            </p>
                        </div>
                        <p className="text-gray-500 text-justify indent-16">
                            {homeData.why[0].description}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center space-x-4">
                            <div className="p-2 rounded-full bg-gradient-to-tl from-green-500 to-green-300 text-white">
                                <LayersIntersect strokeWidth={1.5} className="w-8 h-8" />
                            </div>
                            <p className="text-xl font-semibold">
                                {homeData.why[1].title}
                            </p>
                        </div>
                        <p className="text-gray-500 text-justify indent-16">
                            {homeData.why[1].description}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center space-x-4">
                            <div className="p-2 rounded-full bg-gradient-to-tl from-yellow-500 to-yellow-300 text-white">
                                <Star strokeWidth={1.5} className="w-8 h-8" />
                            </div>
                            <p className="text-xl font-semibold">
                                {homeData.why[2].title}
                            </p>
                        </div>
                        <p className="text-gray-500 text-justify indent-16">
                            {homeData.why[2].description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex justify-center w-full bg-white">
                {/* Just decoration */}
                <div className="flex items-center justify-center relative">
                    <StarSpinner className="w-20 h-20 z-[2] relative text-blue-500" baseVelocity={8} />
                    <span className="absolute z-[1] inset-0 flex justify-center items-center"><CircleDecoration className="scale-150 text-indigo-300 -rotate-[9deg]" strokeWidth={2} /> </span>
                </div>
            </section>

            <section ref={ourProductContainerRef} className="flex flex-col items-center p-8 md:p-16 space-y-16 rounded-b-[4rem] border-b-[12px] border-b-blue-100 bg-white">
                <h5 className="text-4xl text-blue-500 font-semibold">Produk Kami</h5>

                <div className="grid md:grid-cols-3 gap-8">
                    {productDataList.map((row: ProductDataType) => (
                        <MotionLink key={row.id} variants={productAnimationVariants} href={`/product/${row.slug}`} className="space-y-2">
                            <motion.img variants={productAnimationVariants} whileHover="hover" whileTap="tap" transition={{ type: "spring", visualDuration: .3 }} className="w-full aspect-video rounded-3xl" src={`${process.env.BASE_URL}/${row.cover_image}`} alt={`${row.name} Cover`} />
                            <div className="px-6 flex items-center justify-between">
                                <p className="font-medium">{row.name}</p>
                                <p className="font-medium text-gray-500 capitalize">{row.payment_type.replace('-', ' ')}</p>
                            </div>
                        </MotionLink>
                    ))}
                </div>
            </section>
        </>
    )
}
