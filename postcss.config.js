module.exports = {
    plugins: {
        autoprefixer: {},
        tailwindcss: './tailwind.config.js',
        '@fullhuman/postcss-purgecss': {
            content: ['./src/components/*.vue'],
            whitelistPatterns: [
                /^vue-ads-menu-w-\d{1,3}$/,
                /^vue-ads-menu-ml-\d{1,3}$/,
            ],
        },
        'postcss-import': {},
        'postcss-url': {},
    },
};
