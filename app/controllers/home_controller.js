var handleServerError = require("../lib/handleServerError");

module.exports = {
    /**
     * The default home view.
     * @param {object} params The parameters to use in the controller.
     * @param {function((null | object)=, object=, object=)} callback The callback to run upon completion of the controller running.
     */
    index: function(params, callback) {
        "use strict";

        var app = this.app,
            data = {
                time: {model: "Time", params: {}},
                users: {collection: "Users", params: {}}
            };

        app.fetch(data, function(err, result) {
            // You should always check your models and collections for errors, and redirect to an error page as necessary.
            if (!err && result && result.time && result.time.attributes && result.time.attributes.error) {
                err = result.time.attributes;
            }

            if (!err && result && result.users && result.users.models && result.users.models[0] && result.users.models[0].attributes && result.users.models[0].attributes.error) {
                err = result.users.models[0].attributes;
            }

            if (err) {
                handleServerError(err, app, result, callback);
                return;
            }

            // TODO: This is how you can dynamically set meta tags from the controller.  Example tags are for use with Google+, Facebook, and Twitter.
            if (app.req) {
                result.meta = {
                    "article:author": "http://www.facebook.com/[your Facebook url]",
                    "article:published_time": "2015-01-14T15:57:47-06:00",
                    "article:publisher": "http://www.facebook.com/[your Facebook url]",
                    "article:section": "Website",
                    "article:tag": ["rendr", "template"],
                    "og:description": "This is the website.",
                    "og:image": "[url to an image]",
                    "og:site_name": "Website",
                    "og:title": "Website",
                    "og:type": "website",
                    "og:url": "http://" + app.req.headers.host,
                    "twitter:card": "summary",
                    "twitter:description": "This is the website.",
                    "twitter:image": "[url to an image]",
                    "twitter:site": "@[your Twitter handle]",
                    "twitter:title": "Website",
                    "twitter:url": "http://" + app.req.headers.host
                };
            }

            callback(err, result);
        });
    },

    /**
     * The page view.
     * @param {object} params The parameters to use in the controller.
     * @param {function((null | object)=, object=, object=)} callback The callback to run upon completion of the controller running.
     */
    page: function(params, callback) {
        "use strict";

        callback();
    }
};
