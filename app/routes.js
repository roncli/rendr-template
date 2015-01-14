/**
 * The routes in use by the website.
 * @param {function(string|RegExp, string)} match The function to add a route with.
 */
module.exports = function(match) {
    "use strict";

    // The home page.  Includes optional querystring.
    match(/^\/?(?:\?.*)?$/, "home#index");

    // The page linked to from the home page.
    match(/^\/?page(?:\?.*)?$/, "home#page");

    // TODO: Add additional routes here.  Ensure your regex patterns start with an optional forward slash ( ^\/? ) so that both client and server can handle the path.

    // The default route if none of the above match.
    match(/(?:.*)/, "default#index");
};
