"use client";
import React from "react";
import { YoutubeButton } from "./button";
import Link from "next/link";

type Props = {};

const Video = (props: Props) => {
    return (
        <section
            id="videos"
            className="flex flex-col items-center justify-center gap-5"
        >
            <h1 className="text-[#c6705e] text-4xl shadow-custom font-bold">
                LATEST VIDEO - RAIN CHECK
            </h1>
            <iframe
                width="100%"
                height="500px"
                src="https://www.youtube.com/embed/oGvBdnpvzgI?si=l4iit4bQy4XdV8im"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <Link
                className="mb-12"
                aria-label="Rocco808 youtube link"
                target="_blank"
                href="https://www.youtube.com/@ROCCO808"
            >
                <YoutubeButton />
            </Link>
        </section>
    );
};

export default Video;
