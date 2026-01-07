/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bakery-primary': '#5D4037',
                'bakery-secondary': '#8D6E63',
                'bakery-accent': '#D7CCC8',
            }
        },
    },
    plugins: [],
}
