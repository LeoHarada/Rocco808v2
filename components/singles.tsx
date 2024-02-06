"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {};

const Singles = (props: Props) => {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <Card
                title="Rain Check"
                imgSrc="https://resources.tidal.com/images/14b557f8/e7ad/4c52/88bb/7889c7465260/320x320.jpg"
                href="https://music.apple.com/us/album/rain-check-single/1700292288"
            />
            <Card
                title="Rudeboy (cover)"
                imgSrc="https://resources.tidal.com/images/4ecdca47/21d2/4b11/b0df/11c07ea9b6bd/320x320.jpg"
                href="https://music.apple.com/us/album/rudeboy-cover-single/1696990807"
            />
            <Card
                title="Patience"
                imgSrc="https://resources.tidal.com/images/87839d24/1de5/4019/8094/4649464beeec/320x320.jpg"
                href="https://music.apple.com/us/album/patience-single/1680013111"
            />

            <Card
                title="GET DOWN LOW"
                imgSrc="https://resources.tidal.com/images/e06fa31d/b7d8/4844/aa57/767e37bb3717/320x320.jpg"
                href="https://music.apple.com/us/album/get-down-low-feat-quinton-rampage-jackson-single/1680307835"
            />
            <Card
                title="Sak Pase"
                imgSrc="https://resources.tidal.com/images/3c95c67c/7ba3/4838/842d/5389216d894f/320x320.jpg"
                href="https://music.apple.com/us/album/sak-pase-single/1673639564"
            />
            <Card
                title="Favorite New Long Song"
                imgSrc="https://resources.tidal.com/images/2aa5be26/fed8/4fd7/af51/507c39f196dc/320x320.jpg"
                href="https://music.apple.com/us/album/favorite-new-love-song-single/1626955509"
            />
        </div>
    );
};

interface CardProps {
    imgSrc: string;
    title: string;
    href: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, href }) => {
    return (
        <motion.div
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
            className="w-[11vh] h-[11vh] xs:w-[13vh] xs:h-[13vh] ms:w-[15vh] ms:h-[15vh] sm:w-[19vw] sm:h-[19vw] relative photo-shadow-custom"
        >
            <div className="h-1/2 flex flex-col justify-center bg-black">
                <h3 className="text-sm sm:text-xl mb-2 font-semibold text-white">
                    {title}
                </h3>
            </div>
            <motion.a
                href={href}
                target="_blank"
                variants={{
                    hover: {
                        top: "50%",
                        right: "50%",
                    },
                }}
                className="absolute inset-0 bg-slate-200 z-10"
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <a
                href={href}
                target="_blank"
                rel="nofollow"
                className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black hover:text-indigo-500 transition-colors"
                aria-label={`More about ${title}`}
            >
                <div className="flex items-center">
                    <span className="text-xs">MORE</span>
                    <FiArrowUpRight className="text-lg" />
                </div>
            </a>
        </motion.div>
    );
};

export default Singles;
