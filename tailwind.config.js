module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                hulu: "url('/hulu-bg.jpeg')",
            }),
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
