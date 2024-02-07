import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/nav";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Rocco808",
    description:
        "Crossing the Pacific Ocean and infusing island culture into hiphop music, Rocco808 is the next stage that Island pop has been cultivating over the last few years.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <head>
                <link
                    href="https://fonts.googleapis.com/css?family=Metal Mania"
                    rel="stylesheet"
                />
            </head>
            <body className={inter.className}>
                <NavigationBar />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
