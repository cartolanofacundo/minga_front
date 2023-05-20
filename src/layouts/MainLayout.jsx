import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer"
//eslint-disable-next-line
export function MainLayout({ children }) {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <header>
                <Navbar />
            </header>
            <main className="grow w-full flex flex-col justify-center items-center">
                {children}
            </main>
            <footer className="hidden sm:block">
                <Footer />
            </footer>
        </div>
    )
}