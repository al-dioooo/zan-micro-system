export type ProductDataType = {
    id: number
    name: string
    slug: string
    description: string
    price: number
    additionalPrice?: number
    paymentType: string
    coverImage: string
    createdAt: string
    updatedAt?: string

    productFeatures?: {
        id: number
        productId: number
        feature: string
    }[]
}

export type PostDataType = {
    id: number
    title: string
    slug: string
    description?: string
    content: string
    createdAt: string
    updatedAt?: string
}