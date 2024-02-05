import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                MetalMania: ["Metal Mania", "cursive"],
            },
            screens: {
                xs: "376px",
            },
        },
    },
    plugins: [],
};
export default config;
