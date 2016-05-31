module.exports = {
    /**
     * The default view.
     * @param {object} params The parameters to use in the controller.
     * @param {function((null | object)=, object=, object=)} callback The callback to run upon completion of the controller running.
     */
    index: function(params, callback) {
        "use strict";

        // This is a 404.
        callback(null, "error/404");
    }
};
