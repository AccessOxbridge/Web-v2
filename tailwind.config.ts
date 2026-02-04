import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: "var(--primary-dark)",
                    navy: "var(--primary-navy)",
                    blue: "var(--primary-blue)",
                },
                accent: {
                    gold: "var(--accent-gold)",
                    light: "var(--accent-gold-light)",
                    burgundy: "var(--accent-burgundy)",
                },
            },
        },
    },
    plugins: [],
};
export default config;
