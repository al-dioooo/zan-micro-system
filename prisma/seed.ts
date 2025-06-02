import { PrismaClient } from '@prisma/client'

import bcrypt from 'bcrypt'

const prisma = new PrismaClient({
    log: [
        'query',
        'info',
        'warn',
        'error'
    ]
})

const userData = [
    {
        name: 'Alice Evergarden',
        email: 'hello@aliceevr.id',
        password: bcrypt.hashSync('aldio1234', 5),
        posts: {
            create: [
                {
                    title: 'My First Post',
                    content: 'This is my first post!',
                    slug: 'my-first-post'
                },
                {
                    title: 'Second Post',
                    content: 'This is another post.',
                    slug: 'my-second-post'
                }
            ],
        }
    }
]

const productData = [
    {
        name: "Fastbook Desktop",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 5000000,
        paymentType: "one-time",
        coverImage: "img/fastbook-desktop.png",
        slug: "fastbook-desktop",

        features: [
            {
                name: "Modul Penjualan, Retur, dan Piutang"
            },
            {
                name: "Modul Penjualan, Retur, dan Hutang"
            }
        ]
    }
]

async function main() {
    try {
        await prisma.$connect()

        // Your seeding logic here
        for (const row of userData) {
            await prisma.user.create({ data: row })
        }

        for (const row of productData) {
            const { features, ...product } = row
            const createdProduct = await prisma.product.create({
                data: {
                    ...product,
                    features: {
                        create: features
                    }
                }
            })
            console.log(`Created product with ID: ${createdProduct.id}`)
        }
    } catch (error) {
        console.error('Error seeding database:', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

main()
    .catch(async (e) => {
        console.error('Seeding failed:', e)
        await prisma.$disconnect()
        process.exit(1)
    })