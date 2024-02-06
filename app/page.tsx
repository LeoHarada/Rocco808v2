import Music from "@/components/music";
import About from "@/components/about";
import Video from "@/components/video";
import Contact from "@/components/contact";
import Features from "@/components/features";

export default function Home() {
    return (
        <>
            <main className="flex px-4 min-h-screen flex-col items-center justify-between text-center">
                <Music />
                <div className="w-full lg:flex lg:flex-row lg:justify-evenly">
                    <About />
                    <Video />
                </div>
                <Features />
                <Contact />
            </main>
        </>
    );
}
