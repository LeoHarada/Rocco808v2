import Music from "@/components/music";
import About from "@/components/about";
import Video from "@/components/video";
import Photo from "@/components/photo";
import Contact from "@/components/contact";

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between text-center">
                <Music />
                <About />
                <Video />
                <Photo />
                <Contact />
            </main>
        </>
    );
}
