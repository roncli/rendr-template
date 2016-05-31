module.exports = function(err, req, res, next) {
    "use strict";

    var status = err.status || 500,
        message = err.message || "Internal Server Error";

    res.status(status);
    res.send("<h1>Error " + status + " occurred</h1><h2>" + message + "</h2>");

    // Suggested TODO: Log your errors!  err should include the stack trace, and you can also save the request object as well.
};
