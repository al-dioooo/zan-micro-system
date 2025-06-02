import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "@/helpers/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query

    if (req.method === "GET") {
        try {
            await prisma.$connect()

            const products = await prisma.product.findUnique({
                where: {
                    slug: slug as string
                },
                include: {
                    productFeatures: true
                }
            })

            if (!products) {
                return res.status(404).json({ message: "No products found" })
            }

            return res.status(200).json(products)
        } catch (error) {
            await prisma.$disconnect()

            console.error("Detailed error fetching products:", error)

            return res.status(500).json({
                error: "Failed to fetch products",
                details: process.env.NODE_ENV === 'development' ? error : undefined
            })
        }
    } else {
        res.setHeader("Allow", ["GET"])
        return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}