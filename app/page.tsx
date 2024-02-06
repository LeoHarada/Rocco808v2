import Music from "@/components/music";
import About from "@/components/about";
import Video from "@/components/video";
import { Photo } from "@/components/photo";
import Contact from "@/components/contact";

export default function Home() {
    return (
        <>
            <main className="flex px-4 min-h-screen flex-col items-center justify-between text-center">
                <Music />
                <div className="w-full lg:flex lg:flex-row lg:justify-around">
                    <About />
                    <Video />
                </div>
                <Photo />
                <Contact />
            </main>
        </>
    );
}
