"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
    return (
        <section
            id="about"
            className="mt-16 sm:mt-0 lg:pr-8 h-full w-auto flex flex-col justify-center items-center"
        >
            <Image
                alt="rocco808 selfie header"
                src="/rocco808.png"
                width={380}
                height={380}
                className="max-w-[100%]"
            />
            <div className="sm:flex sm:flex-row">
                <div className="h-full w-auto flex justify-center sm:justify-end">
                    <Image
                        alt="rocco808 selfie full body"
                        src="/img5.jpg"
                        width={380}
                        height={380}
                        className="photo-shadow-custom sm:60vh
                    "
                    />
                </div>
                <div className="mt-4 sm:mt-0 flex flex-col items-center sm:text-left">
                    <p className="text-[#737373] font-extrabold font-mono sm:max-w-[240px] sm:pl-2 -mt-[5px]">
                        Crossing the Pacific Ocean and infusing island culture
                        into hiphop music, Rocco808 is the next stage that
                        Island pop has been cultivating over the last few years.
                        After making the transition from a small island to the
                        big city of Los Angeles, he honed his craft and
                        developed his own sound after years of experimental
                        projects of writing, recording, and composing records.
                        He goes above and beyond, exceeding expectations
                        creating island pop melodies on trap drums and other
                        various productions. His combination of such diverse
                        sounds expresses his authenticity and his reinvention of
                        pop reggae, Afro and rap music.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
