import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
    return (
        <section
            id="about"
            className="mt-16 h-full w-full flex flex-col sm:flex-row justify-center"
        >
            <div className="h-full w-full flex justify-center sm:justify-end">
                <Image
                    alt="rocco808 selfie full body"
                    src="/img5.jpg"
                    width={380}
                    height={380}
                    className="photo-shadow-custom"
                />
            </div>
            <div className="mt-4 sm:mt-0 sm:flex sm:flex-col sm:items-center sm:text-left">
                <Image
                    alt="rocco808 selfie header"
                    src="/rocco808.png"
                    width={380}
                    height={380}
                    className="max-w-[100%]"
                />
                <p className="text-gray-500 font-semibold sm:max-w-[300px] sm:pl-2">
                    Crossing the Pacific Ocean and infusing island culture into
                    hiphop music, Rocco808 is the next stage that Island pop has
                    been cultivating over the last few years. After making the
                    transition from a small island to the big city of Los
                    Angeles, he honed his craft and developed his own sound
                    after years of experimental projects of writing, recording,
                    and composing records. He goes above and beyond, exceeding
                    expectations creating island pop melodies on trap drums and
                    other various productions. His combination of such diverse
                    sounds expresses his authenticity and his reinvention of pop
                    reggae, Afro and rap music.
                </p>
            </div>
        </section>
    );
};

export default About;
