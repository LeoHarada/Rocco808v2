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
                    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700"
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
