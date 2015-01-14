module.exports = {
    /**
     * The default home view.
     * @param {object} params The parameters to use in the controller.
     * @param {function((null | object), object=)} callback The callback to run upon completion of the controller running.
     */
    index: function(params, callback) {
        "use strict";

        var app = this.app,
            data = {
                time: {model: "Time", params: {}},
                users: {collection: "Users", params: {}}
            };

        app.fetch(data, function(err, result) {
            if (app.req) {
                // TODO: This is how you can dynamically set meta tags from the controller.  Example tags are for use with Google+, Facebook, and Twitter.
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

    page: function(params, callback) {
        "use strict";

        callback();
    }
};
