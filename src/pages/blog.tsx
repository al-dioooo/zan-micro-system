import AxiosInstance from "@/helpers/axiosInstance"
import { motion } from "motion/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { PostDataType } from "@/helpers/types"
import { Book } from "@/components/icons/outline"
import { formatDate } from "@/helpers/date"
import { Topography } from "@/components/graphics/decoration"

const postAnimationVariants = {
    hover: {
        scale: 1.05
    },
    tap: {
        scale: 0.95
    }
}

const MotionLink = motion(Link)

export default function Blog() {
    const [postDataList, setPostDataList] = useState([])

    useEffect(() => {
        AxiosInstance.get("/api/post").then((response) => setPostDataList(response.data)).catch((error) => console.log(error))
    }, [])

    return (
        <>
            <section className="px-24 pt-36 pb-12 relative bg-white">
                <div className="space-y-2">
                    <h1 className="text-3xl font-semibold">Blog</h1>
                </div>

                {/* Topography Decoration */}
                <div className="absolute pointer-events-none top-0 inset-x-0">
                    <Topography className="w-full h-auto text-blue-200 mask-radial-gradient" />
                </div>
            </section>

            <section className="px-24 py-16 bg-white rounded-b-[4rem] border-b-[12px] border-b-blue-100">
                <div className="grid grid-cols-3 gap-8">
                    {postDataList.map((row: PostDataType) => (
                        <MotionLink variants={postAnimationVariants} href={`/post/${row.slug}`} className="space-y-4 border border-gray-200 p-8 rounded-3xl">
                            <div className="flex items-center justify-between">
                                <div className="w-fit p-2 rounded-full border border-gray-200 bg-gradient-to-tl from-gray-300 to-gray-100">
                                    <Book strokeWidth={1.5} className="w-6 h-6" />
                                </div>
                                <p className="text-sm text-gray-500">{formatDate(row.createdAt)}</p>
                            </div>
                            <div>
                                <p className="font-medium text-lg">{row.title}</p>
                                <p className="text-sm text-gray-500">{row.content}</p>
                            </div>
                        </MotionLink>
                    ))}
                </div>
            </section>
        </>
    )
}