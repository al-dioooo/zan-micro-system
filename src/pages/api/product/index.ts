import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "@/helpers/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            await prisma.$connect()

            const products = await prisma.product.findMany({
                select: {
                    id: true,
                    name: true,
                    price: true,
                    description: true,
                    paymentType: true,
                    coverImage: true,
                    slug: true,
                    createdAt: true
                },
                orderBy: {
                    createdAt: "desc"
                }
            })

            if (!products || products.length === 0) {
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