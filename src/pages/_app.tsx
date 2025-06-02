import MainLayout from "@/components/layouts/main-layout"
import "@/styles/globals.css"
import type { LenisRef } from "lenis/react"
import { ReactLenis } from "lenis/react"
import { cancelFrame, frame } from "motion/react"
import type { AppProps } from "next/app"
import { useEffect, useRef } from "react"

export default function App({ Component, pageProps }: AppProps) {
    const lenisRef = useRef<LenisRef>(null)

    useEffect(() => {
        function update(data: { timestamp: number }) {
            const timestamp = data.timestamp

            lenisRef?.current?.lenis?.raf(timestamp)
        }

        frame.update(update, true)

        return () => cancelFrame(update)
    }, [])

    return (
        <>
            <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    )
}
