"use client";
import React, { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
    return (
        <div className="grid w-full h-[100vh] place-content-center">
            <TiltCard />
        </div>
    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
    const ref = useRef<any>(null);

    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rY = mouseX / width - HALF_ROTATION_RANGE;
        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

        setRotateX(rX);
        setRotateY(rY);
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
            }}
            animate={{
                rotateX,
                rotateY,
            }}
            className="relative h-[24rem] w-[18rem] xs:w-[23rem] md:h-[31rem] md:w-[30rem] lg:h-[37rem] lg:w-[34rem]"
        >
            <Image
                src="/transparenthead.png"
                width={250}
                height={350}
                alt="Transparent head photo for header"
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute ml-8 xs:ml-12 inset-4 grid place-content-center w-[70%]"
            />
            <img
                src="/signature.png"
                alt="Signature for header"
                style={{ transform: "translateZ(50px)" }}
                className="ml-[78%] mt-[86%] w-[23%]"
            />
        </motion.div>
    );
};

export default Header;
