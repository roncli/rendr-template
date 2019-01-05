var express = require("express"),
    path = require("path"),
    rendr = require("rendr"),
    compression = require("compression"),
    morgan = require("morgan"),
    cookieParser = require("cookie-parser"),
    session = require("express-session"),
    bodyParser = require("body-parser"),
    app = express(),
    ApiDataAdapter = require("./server/ApiDataAdapter"),
    errorHandler = require("./server/errorHandler"),
    server = rendr.createServer({
        dataAdapter: new ApiDataAdapter(),
        errorHandler: errorHandler
    });

app.use(errorHandler);
app.use(compression());
app.use(morgan("[:date] :remote-addr :method :url HTTP/:http-version :status :res[content-length] \":user-agent\" :response-time \":referrer\""));
app.use(cookieParser("tmp"));
app.use(session({
    secret: "tmp",
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Add the rendr server.
app.use(server.handle);

/**
 * Start the Express server.
 */
function start() {
    "use strict";

    var port = process.env.PORT || 3030;
    app.listen(port);
    console.log("server pid %s listening on port %s in %s mode", process.pid, port, app.get("env"));
}

// Only start server if this script is executed, and not called via require.
if (require.main && (require.main === module || (/interceptor\.js$/.test(require.main.filename) && require.main.children[0] === module))) {
    start();
} else {
    console.error("You can only load this website if it is the main script that is executed, or if it is loaded through iisnode.  If iisnode is installed in a non-standard location, you will need to modify the location in the index.js file.");
}

exports.app = app;
