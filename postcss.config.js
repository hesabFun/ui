const tailwindcss = require("tailwindcss");

// only needed if you want to purge
const purgeCss = require("@fullhuman/postcss-purgecss")({
    content: ["./src/**/*.svelte", "./src/**/*.html", "./static/styles/*", "./static/styles/*/*"],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
    plugins: [
        require('postcss-import'),
        tailwindcss("./tailwind.js"),

        // only needed if you want to purge
        ...(process.env.NODE_ENV === "production" ? [purgeCss] : [])
    ]
};