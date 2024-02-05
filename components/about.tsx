import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
    return (
        <section id="about" className="flex flex-col items-center">
            <div className="selfie">
                <div className="selfie-container">
                    <div className="selfie-container-inner">
                        <Image
                            className="selfie-circle"
                            src="/cartoonbackground.png"
                            alt="rocco background circle for selfie"
                            width={380}
                            height={380}
                        />
                        <Image
                            className="selfie-img"
                            src="/cartoonrocco.png"
                            alt="rocco selfie picture"
                            width={380}
                            height={380}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Image
                    alt="rocco808 selfie header"
                    src="/rocco808.png"
                    width={380}
                    height={380}
                    className="max-w-[100%]"
                />
                <p className="text-lg font-semibold font-mono text-gray-500 p-4">
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
