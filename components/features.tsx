"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Features = () => {
    return (
        <section className="flex flex-col justify-center">
            <h1 className="text-[#c6705e] text-[3rem] shadow-custom font-MetalMania">
                Features
            </h1>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
                <Card
                    heading="Twitch"
                    description="GRP, Rocco808, & Randy Marx perform Street Fighter 6 tracks live on Twitch for RollingStone."
                    imgSrc="https://cdn.m7g.twitch.tv/ba46b4e5e395b11efd34/assets/uploads/core-header.png?h=217&w=412&fm=jpg&auto=format"
                    href="https://www.twitch.tv/videos/1573771203"
                />
                <Card
                    heading="Rolling Stone"
                    description="‘Street Fighter’ is Back with New Theme Song ‘Not On The Sidelines’."
                    imgSrc="https://www.axelspringer.com/data/uploads/2019/04/rollingstone.jpg"
                    href="https://www.rollingstone.com/music/music-news/twitch-street-fighter-6-music-video-1364740/"
                />
                <Card
                    heading="Eight Ray Talent Agency"
                    description="ROCCO808 THE FATHER OF “TROPICAL TRAP” Releases Hot Dance Hall Track."
                    imgSrc="https://static.wixstatic.com/media/596d62_e1a505931c0042ac97fb4cf38ba7abce~mv2.png/v1/fit/w_2500,h_1330,al_c/596d62_e1a505931c0042ac97fb4cf38ba7abce~mv2.png"
                    href="https://www.eightrayagency.com/post/rocco808-the-father-of-tropical-trap-releases-hot-dance-hall-track"
                />
                <Card
                    heading="Real 92.3 LA"
                    description="Rocco808 is Hawaii's Next Rising Artist Pushing Island Trap Music."
                    imgSrc="https://cdn-profiles.tunein.com/s24698/images/logod.jpg?t=637783041560000000"
                    href="https://real923la.iheart.com/content/2018-12-12-rocco808-is-hawaiis-next-rising-artist-pushing-island-trap-music/"
                />
            </div>
        </section>
    );
};

interface CardProps {
    heading: string;
    description: string;
    imgSrc: string;
    href: string;
}

const Card: React.FC<CardProps> = ({ heading, description, imgSrc, href }) => {
    return (
        <motion.div
            transition={{
                staggerChildren: 0.035,
            }}
            whileHover="hover"
            className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative"
        >
            <a
                href={href}
                target="_blank"
                className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
                <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
                <div>
                    <h4>
                        {heading.split("").map((l, i) => (
                            <ShiftLetter letter={l} key={i} />
                        ))}
                    </h4>
                    <p>{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

interface ShiftLetterProps {
    letter: string;
}

const ShiftLetter: React.FC<ShiftLetterProps> = ({ letter }) => {
    return (
        <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
            <motion.span
                className="flex flex-col min-w-[4px]"
                style={{
                    y: "0%",
                }}
                variants={{
                    hover: {
                        y: "-50%",
                    },
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                <span>{letter}</span>
                <span>{letter}</span>
            </motion.span>
        </div>
    );
};

export default Features;
