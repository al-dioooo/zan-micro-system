import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    env: {
        APP_NAME: process.env.APP_NAME,
        BACKEND_API_URL: process.env.BACKEND_API_URL
    }
}

export default nextConfig
