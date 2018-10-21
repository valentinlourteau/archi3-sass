'use strict';

module.exports = (ctx) => ({
    map: {
        inline: false,
        annotation: true,
        sourcesContent: true
    },
    plugins: {
        autoprefixer: {
            browsers: ['last 5 versions']
        },
        "css-mqpacker": {
            sort: true
        },
        "postcss-combine-duplicated-selectors": {
            removeDuplicatedProperties: true
        }
    }
});