import Navbar from "@/components/partials/navbar"
import Footer from "@/components/partials/footer"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}