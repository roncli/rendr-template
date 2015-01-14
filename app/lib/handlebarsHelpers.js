/**
 * Helpers for handlebars rendering.
 * @param {object} Handlebars The Handlebars object.
 * @returns {object} The helper functions to use with Handlebars.
 */
module.exports = function(Handlebars) {
    "use strict";

    return {
        /**
         * Returns meta tags.
         * @param {string} key The key of the meta tag.
         * @param {string|Array} values If an array, returns one meta tag whose value is each element of the array.  Otherwise, the value of the sole meta tag.
         * @returns {string} The meta tags.
         */
        metaTags: function(key, values) {
            var tags;

            if (values instanceof Array) {
                tags = [];
                values.forEach(function(value) {
                    tags.push("<meta name=\"" + key + "\" content=\"" + value + "\"/>");
                });
                return tags.join("");
            }

            return "<meta name=\"" + key + "\" content=\"" + values + "\"/>";
        }
    };
};
