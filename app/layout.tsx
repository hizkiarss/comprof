import type { Metadata } from "next";
import "./globals.css";
import LoadingOverlay from "./components/loadingOverlay";
import SmoothScroll from "./components/smoothScroll";
import ClientOnly from "./components/clientOnly";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-Helvetica ">
        <LoadingOverlay />
        <ClientOnly>
          <SmoothScroll />
        </ClientOnly>
        {children}


      </body>

    </html>
  );
}
