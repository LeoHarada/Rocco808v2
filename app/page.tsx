import Music from "@/components/music";
import Listen from "@/components/listen";
import About from "@/components/about";
import Video from "@/components/video";
import Photo from "@/components/photo";
import Contact from "@/components/contact";

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Music />
                <Listen />
                <About />
                <Video />
                <Photo />
                <Contact />
            </main>
        </>
    );
}
