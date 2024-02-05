import React from "react";

type Props = {};

const Listen = (props: Props) => {
    return (
        <div>
            <iframe
                className="rounded-xl w-full"
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO19syJ7?utm_source=generator&theme=0"
                width={300}
                height={600}
                frameBorder={0}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default Listen;
