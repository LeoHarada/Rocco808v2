import React from "react";
import Listen from "./listen";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Music = (props: Props) => {
    return (
        <section id="music" className="w-full h-full flex flex-col sm:flex-row">
            <h1>Music</h1>
            <div className="display grid gap-10">
                <div className="flex flex-col items-center gap-4">
                    <h2 className="font-MetalMania text-gray-500 text-4xl ">
                        NUTHIN 2 PROVE AVAILABLE NOW
                    </h2>
                    <Link
                        className="border-[3px] border-black rounded-md bg-white text-black text-base p-4"
                        aria-label="Link to Nuthin 2 Prove on Spotify"
                        target="_blank"
                        href="https://open.spotify.com/album/2xUppvyGKyAsYO0BvqCM9D?si=QdcQ_eT6RkOwIO4LIyYKNw"
                    >
                        BUY NOW
                    </Link>
                    <Image
                        width={300}
                        height={300}
                        alt="Nuthin to Prove album cover"
                        src="/albumcover.jpg"
                        id="album-cover"
                    />
                    <Link
                        className="listen-button"
                        aria-label="Link to Nuthin 2 Prove on Spotify"
                        target="_blank"
                        href="https://open.spotify.com/album/2xUppvyGKyAsYO0BvqCM9D?si=QdcQ_eT6RkOwIO4LIyYKNw"
                    >
                        Listen on Spotify
                    </Link>
                    <Link
                        className="listen-button"
                        aria-label="Link to Nuthin 2 Prove on Apple Music"
                        target="_blank"
                        href="https://music.apple.com/us/album/nuthin-2-prove-feat-lodilodi/1709106092?i=1709106093"
                    >
                        Listen on Apple Music
                    </Link>
                </div>
                <Listen />
            </div>
        </section>
    );
};

export default Music;
