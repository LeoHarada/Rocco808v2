import React from "react";

type Props = {};

const Listen = (props: Props) => {
    return (
        <iframe
            className="rounded-xl w-full h-[20vh] lg:px-16 xl:px-20"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO19syJ7?utm_source=generator&theme=0"
            width={300}
            height={600}
            title="Rocco808 Spotify Playlist"
            frameBorder={0}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>
    );
};

export default Listen;
