import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "@/helpers/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query

    if (req.method === "GET") {
        try {
            await prisma.$connect()

            const posts = await prisma.post.findUnique({
                where: {
                    slug: slug as string
                }
            })

            if (!posts) {
                return res.status(404).json({ message: "No posts found" })
            }

            return res.status(200).json(posts)
        } catch (error) {
            await prisma.$disconnect()

            console.error("Detailed error fetching posts:", error)

            return res.status(500).json({
                error: "Failed to fetch posts",
                details: process.env.NODE_ENV === 'development' ? error : undefined
            })
        }
    } else {
        res.setHeader("Allow", ["GET"])
        return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}