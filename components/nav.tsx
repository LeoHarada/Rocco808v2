"use client";
import { SiInstagram, SiSpotify, SiApple, SiYoutube } from "react-icons/si";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const NavigationBar = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="z-[9999]">
            <HamburgerButton active={active} setActive={setActive} />
            <AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
        </div>
    );
};

export default NavigationBar;

const LinksOverlay = () => {
    return (
        <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden">
            <LinksContainer />
            <FooterCTAs />
        </nav>
    );
};

const LinksContainer = () => {
    return (
        <motion.div className="space-y-4 p-20 flex flex-col items-center gap-12 font-MetalMania">
            {LINKS.map((l, idx) => {
                return (
                    <NavLink key={l.title} href={l.href} idx={idx}>
                        {l.title}
                    </NavLink>
                );
            })}
        </motion.div>
    );
};

interface NavLinkProps {
    children: string;
    href: string;
    idx: number;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, idx }) => {
    return (
        <motion.a
            initial={{ opacity: 0, y: -8 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.75 + idx * 0.125,
                    duration: 0.5,
                    ease: "easeInOut",
                },
            }}
            exit={{ opacity: 0, y: -8 }}
            href={href}
            className="block text-5xl font-semibold text-white hover:underline md:text-6xl"
        >
            {children}
        </motion.a>
    );
};

interface HamburgerButtonProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
    active,
    setActive,
}) => {
    return (
        <>
            <motion.div
                initial={false}
                animate={active ? "open" : "closed"}
                variants={UNDERLAY_VARIANTS}
                style={{ top: 16, right: 16 }}
                className="fixed z-10 rounded-xl bg-[#c6705e] shadow-lg shadow-[#c7634e]/20"
            />

            <motion.button
                aria-label="Open navigation button"
                initial={false}
                animate={active ? "open" : "closed"}
                onClick={() => setActive((pv) => !pv)}
                className={`group fixed right-4 top-4 z-50 h-20 w-20 bg-white/0 transition-all hover:bg-white/20 ${
                    active ? "rounded-bl-xl rounded-tr-xl" : "rounded-xl"
                }`}
            >
                <motion.span
                    variants={HAMBURGER_VARIANTS.top}
                    className="absolute block h-1 w-10 bg-white"
                    style={{ y: "-50%", left: "50%", x: "-50%" }}
                />
                <motion.span
                    variants={HAMBURGER_VARIANTS.middle}
                    className="absolute block h-1 w-10 bg-white"
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                    variants={HAMBURGER_VARIANTS.bottom}
                    className="absolute block h-1 w-5 bg-white"
                    style={{ x: "-50%", y: "50%" }}
                />
            </motion.button>
        </>
    );
};

const FooterCTAs = () => {
    return (
        <>
            <div className="absolute bottom-6 left-6 flex gap-4 md:flex-col">
                {SOCIAL_CTAS.map((l, idx) => {
                    return (
                        <motion.a
                            key={idx}
                            href={l.href}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 1 + idx * 0.125,
                                    duration: 0.5,
                                    ease: "easeInOut",
                                },
                            }}
                            exit={{ opacity: 0, y: -8 }}
                        >
                            <l.Component className="text-xl text-white transition-colors hover:text-gray-500" />
                        </motion.a>
                    );
                })}
            </div>
        </>
    );
};

const LINKS = [
    {
        title: "Home",
        href: "#",
    },
    {
        title: "Music",
        href: "#music",
    },
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Videos",
        href: "#videos",
    },
    {
        title: "Features",
        href: "#features",
    },
];

const SOCIAL_CTAS = [
    {
        Component: SiSpotify,
        href: "https://open.spotify.com/artist/22cn3eIorICqfwb4KthMSB?si=HKHqVlZ5ScC7M6rJIhxzkg",
    },
    {
        Component: SiInstagram,
        href: "https://instagram.com/rocco808_",
    },
    {
        Component: SiApple,
        href: "https://music.apple.com/us/artist/rocco808/1097713646",
    },
    {
        Component: SiYoutube,
        href: "https://youtu.be/iPIKfV4UB08",
    },
];

const UNDERLAY_VARIANTS = {
    open: {
        width: "calc(100% - 32px)",
        height: "calc(100vh - 32px)",
        transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
    },
    closed: {
        width: "80px",
        height: "80px",
        transition: {
            delay: 0.75,
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
        },
    },
};

const HAMBURGER_VARIANTS = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "calc(50% + 10px)",
        },
    },
};
