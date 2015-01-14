var Collection = require("rendr/shared/base/collection"),
    BaseCollection, fetch;

module.exports = Collection.extend();

BaseCollection = module.exports;

BaseCollection.prototype.contentType = "application/json; charset=utf-8";
