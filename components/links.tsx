import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Links = (props: Props) => {
    return (
        <div className="flex flex-row items-center justify-center gap-2 my-5">
            <motion.a
                href="https://open.spotify.com/artist/22cn3eIorICqfwb4KthMSB?si=HKHqVlZ5ScC7M6rJIhxzkg"
                whileHover={{ scale: 1.1, boxShadow: "0 0 24px 0 #c6705e" }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full"
            >
                <Image
                    src="/spotify.svg"
                    alt="Spotify logo svg"
                    width={50}
                    height={50}
                />
            </motion.a>
            <motion.a
                href="https://music.apple.com/us/artist/rocco808/1097713646"
                whileHover={{ scale: 1.1, boxShadow: "0 0 24px 0 #c6705e" }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full"
            >
                <Image
                    src="/apple.svg"
                    alt="Apple logo svg"
                    width={50}
                    height={50}
                />
            </motion.a>
            <motion.a
                href="https://instagram.com/rocco808_"
                whileHover={{ scale: 1.1, boxShadow: "0 0 24px 0 #c6705e" }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full"
            >
                <Image
                    src="/instagram.svg"
                    alt="Instagram logo svg"
                    width={50}
                    height={50}
                />
            </motion.a>
            <motion.a
                href="https://youtu.be/iPIKfV4UB08"
                whileHover={{ scale: 1.1, boxShadow: "0 0 24px 0 #c6705e" }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full"
            >
                <Image
                    src="/youtube.svg"
                    alt="Youtube logo svg"
                    width={50}
                    height={50}
                />
            </motion.a>
        </div>
    );
};

export default Links;
