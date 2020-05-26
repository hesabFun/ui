const purgeCss = {
    enabled: true,
    content: [
        "./src/**/*.svelte",
        "./src/**/*.html",
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
};

module.exports = {
    purge: process.env.NODE_ENV === "production" ? purgeCss : false,
    theme: {
        extend: {
            colors: {
                "brown-grey": "#afafaf",
                "dark": "#333333",
                "black": "#000000",
                "azure": "#15adf6",
                "bluey-green": "#2eb872",
                "tangerine": "#ff9500",
                "watermelon": "#e84a5f",
                "white-text": "#f5f3f1",
                "butterscotch": "#ffbf44",
                "greyish-brown": "#5a4b41",
                "greyish": "#aaa6a2"
            },
            fontFamily: {
                maisonneue: ['"maisonneue"', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
                serif: ['"avenir"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
            }
        },
    },
    variants: {},
    plugins: [],
};