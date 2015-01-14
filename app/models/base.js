var Model = require("rendr/shared/base/model"),
    BaseModel, fetch, set_;

module.exports = Model.extend();

BaseModel = module.exports;

BaseModel.prototype.contentType = "application/json; charset=utf-8";
