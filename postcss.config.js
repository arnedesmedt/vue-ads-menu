module.exports = {
    plugins: {
        autoprefixer: {},
        tailwindcss: './tailwind.config.js',
        '@fullhuman/postcss-purgecss': {
            content: ['./src/components/*.vue'],
            whitelistPatterns: [
                /^w-\d{1,3}$/,
                /^ml-\d{1,3}$/,
            ],
            keyframes: true,
        },
        'postcss-import': {},
        'postcss-url': {},
    },
};
