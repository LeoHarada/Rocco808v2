"use client";
import React from "react";
import { YoutubeButton } from "./button";
import Link from "next/link";

type Props = {};

const Video = (props: Props) => {
    return (
        <div
            id="videos"
            className="flex flex-col items-center justify-center gap-5 mt-20 lg:-mt-40 2xl:-mt-8"
        >
            <h1 className="text-[#c6705e] text-4xl shadow-custom font-MetalMania">
                LATEST VIDEO - RAIN CHECK
            </h1>
            <iframe
                width="100%"
                className="lg:w-[38vw] photo-shadow-custom z-0"
                aria-label="Rocco808 Rain Check video on Youtube.com"
                height="500px"
                src="https://www.youtube.com/embed/oGvBdnpvzgI?si=l4iit4bQy4XdV8im"
                title="Rocco808 Rain Check"
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
        </div>
    );
};

export default Video;
