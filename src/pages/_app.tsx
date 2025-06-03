import Cursor from "@/components/cursor"
import MainLayout from "@/components/layouts/main-layout"
import useBreakpoint from "@/hooks/breakpoint"
import "@/styles/globals.css"
import type { LenisRef } from "lenis/react"
import { ReactLenis } from "lenis/react"
import { motion, AnimatePresence, cancelFrame, frame } from "motion/react"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const lenisRef = useRef<LenisRef>(null)

    const isMdUp = useBreakpoint(768)

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
            {isMdUp && <Cursor />}
            <MainLayout>
                <AnimatePresence mode="wait" initial={false}>
                    <div key={router.pathname}>
                        <AnimatePresence>
                            <Component {...pageProps} />
                        </AnimatePresence>

                        {/* Transition */}
                        <motion.div className="fixed top-0 left-0 bg-gradient-to-tl from-blue-500 to-blue-300 w-full overflow-hidden text-white origin-top z-[99] flex items-center justify-center rounded-3xl" initial={{ height: 0 }} animate={{ height: 0 }} exit={{ height: '100vh' }} transition={{ type: "spring", damping: 20, delay: .1 }}>
                        </motion.div>
                        <motion.div className="fixed top-0 left-0 bg-blue-200 w-full overflow-hidden text-white origin-top z-[98] flex items-center justify-center rounded-3xl" initial={{ height: 0 }} animate={{ height: 0 }} exit={{ height: '100vh' }} transition={{ type: "spring", damping: 20 }}>
                        </motion.div>
                        <motion.div className="fixed bottom-0 left-0 bg-gradient-to-tl from-blue-500 to-blue-300 w-full overflow-hidden text-white origin-top z-[99] flex items-center justify-center rounded-3xl" initial={{ height: '100vh' }} animate={{ height: 0 }} exit={{ height: 0 }} transition={{ type: "spring", damping: 20 }}>
                        </motion.div>
                        <motion.div className="fixed bottom-0 left-0 bg-blue-200 w-full overflow-hidden text-white origin-top z-[98] flex items-center justify-center rounded-3xl" initial={{ height: '100vh' }} animate={{ height: 0 }} exit={{ height: 0 }} transition={{ type: "spring", damping: 20, delay: .1 }}>
                        </motion.div>
                    </div>
                </AnimatePresence>
            </MainLayout>
        </>
    )
}
