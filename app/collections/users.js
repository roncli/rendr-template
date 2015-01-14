var User = require("../models/user.js"),
    Collection = require("./base");

module.exports = Collection.extend({
    model: User,
    url: "/users"
});

module.exports.id = "Users";
