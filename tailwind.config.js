/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dim: {
                    50: "#5F 99F7",
                    100: "#5F99F7",
                    200: "#38444d",
                    300: "#202e3a",
                    400: "#253341",
                    500: "#5F99F7",
                    600: "#5F99F7",
                    700: "#192734",
                    800: "#162d40",
                    900: "#15202b",
                },
                Replay: "rgb(29, 155, 240)",
                Retweet: "rgb(0, 186, 124)",
                Like: "rgb(249, 24, 128)",
            },
            animation: {
                "spin-fast": "spin 0.5s linear infinite",
            },
            transitionProperty: {
                "cubic": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }
        },
    },
    plugins: [],
};