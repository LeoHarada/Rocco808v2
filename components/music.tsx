"use client";
import React from "react";
import Listen from "./listen";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import News from "./news";

type Props = {};

const Music = (props: Props) => {
    return (
        <section
            id="music"
            className="w-full h-full flex flex-col justify-center"
        >
            <div className="display grid gap-4 music-custom-grid">
                <div className="flex flex-col items-center gap-4 sm:justify-center py-16">
                    <h1 className="text-[#c6705e] text-4xl shadow-custom font-MetalMania">
                        NUTHIN 2 PROVE AVAILABLE NOW
                    </h1>
                    <Link
                        className="listen-button other-button-shadow-custom"
                        aria-label="Link to Nuthin 2 Prove on Apple Music"
                        target="_blank"
                        href="https://music.apple.com/us/album/nuthin-2-prove-feat-lodilodi/1709106092?i=1709106093"
                    >
                        Listen on Apple Music
                    </Link>
                    <Link
                        className="listen-button other-button-shadow-custom"
                        aria-label="Link to Nuthin 2 Prove on Spotify"
                        target="_blank"
                        href="https://open.spotify.com/album/2xUppvyGKyAsYO0BvqCM9D?si=QdcQ_eT6RkOwIO4LIyYKNw"
                    >
                        Listen on Spotify
                    </Link>

                    <Image
                        width={300}
                        height={300}
                        alt="Nuthin to Prove album cover"
                        src="/albumcover.jpg"
                        id="album-cover"
                        className="w-[75%] h-auto photo-shadow-custom"
                    />
                    <Link
                        className="mb-12"
                        aria-label="Link to Nuthin 2 Prove on Spotify"
                        target="_blank"
                        href="https://open.spotify.com/album/2xUppvyGKyAsYO0BvqCM9D?si=QdcQ_eT6RkOwIO4LIyYKNw"
                    >
                        <Button />
                    </Link>
                    <Listen />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="font-MetalMania pb-4 text-[#c6705e] shadow-custom text-2xl">
                        LATEST SINGLES
                    </h2>
                    <News />
                </div>
            </div>
        </section>
    );
};

export default Music;
