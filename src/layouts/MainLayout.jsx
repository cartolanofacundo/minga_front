import { Footer } from "../components/Footer"
//eslint-disable-next-line
export function MainLayout({ children }) {
    return (

        <>
            <main className="grow w-full flex flex-col justify-center items-center">
                {children}
            </main>
            <footer className="hidden sm:block">
                <Footer />
            </footer>
        </>

    )
}