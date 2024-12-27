/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                'league-spartan': ['League Spartan', 'sans-serif']
            }
        },
        colors: {
            base: '#191724',
            surface: '#1f1d2e',
            overlay: '#26233a',
            subtle: '#908caa',
            rose: '#ebbcba',
            love: '#eb6f92',
            gold: '#f6c177',
            pine: '#31748f',
            foam: '#9ccfd8',
            muted: '#6e6a86',
            iris: '#c4a7e7',
            white: '#e0def4'
        }
    },
    plugins: []
};
