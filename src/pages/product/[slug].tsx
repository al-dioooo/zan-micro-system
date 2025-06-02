import AxiosInstance from "@/helpers/axiosInstance"
import { ProductDataType } from "@/helpers/types"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { formatRupiah } from "@/helpers/number"

export default function ProductDetail() {
    const router = useRouter()

    const [productData, setProductData] = useState<ProductDataType>()

    useEffect(() => {
        if (router.query.slug) {
            AxiosInstance.get(`/api/product/${router.query.slug}`)
                .then((response) => setProductData(response.data))
                .catch((error) => console.error("Error fetching product data:", error))
        }
    }, [router.query.slug])

    return (
        <section className="px-24 pt-36 pb-12">
            <div className="flex space-x-16">
                <div className="w-1/2">
                    <img className="rounded-3xl" src={`/${productData?.coverImage}`} alt={`${productData?.name} Cover`} />
                </div>
                <div className="space-y-8 w-1/2">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-semibold">{productData?.name}</h1>
                        <h2 className="max-w-md w-full text-gray-700">{productData?.description}</h2>
                    </div>

                    {productData?.additionalPrice ? (
                        <p className="text-blue-500 font-semibold text-2xl">Rp{formatRupiah(productData?.price)}-{formatRupiah(productData?.additionalPrice)}K<span className="text-sm text-gray-500">{productData?.paymentType == 'subscription' ? '/month' : ''}</span></p>
                    ) : (
                        // @ts-ignore
                        <p className="text-blue-500 font-semibold text-2xl">Rp{formatRupiah(productData?.price)}K<span className="text-sm text-gray-500">{productData?.paymentType == 'subscription' ? '/month' : ''}</span></p>
                    )}

                    <div>
                        <p className="text-lg font-medium">Features</p>
                        <ul>
                            {productData?.productFeatures?.map((feature) => (
                                <li key={feature.id} className="text-gray-700">
                                    {feature.feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}