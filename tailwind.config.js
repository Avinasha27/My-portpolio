/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],




    theme: {
        extend: {
            colors: {
                'primaryColor': '#61CE70',
            },
            fontFamily: {
                sans: ["DM Sans", "sans-serif"], // Set DM Sans as the default sans-serif font
            },
        }
    },
    plugins: [require("daisyui")],
}