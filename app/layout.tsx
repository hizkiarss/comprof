import type {Metadata} from "next";
import "./globals.css";
import LoadingOverlay from "./components/loadingOverlay";
import SmoothScroll from "./components/smoothScroll";
import ClientOnly from "./components/clientOnly";

export const metadata: Metadata = {
    title: "Kagi Digital Studio",
    description: "Small digital team offering web design, branding, and visual identity services. We help service-based businesses build trust through design.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="bg-white text-black font-Helvetica ">
        <LoadingOverlay/>
        <ClientOnly>
            <SmoothScroll/>
        </ClientOnly>
        {children}


        </body>

        </html>
    );
}
