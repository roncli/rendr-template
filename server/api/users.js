module.exports = {
    get: function(req, callback) {
        "use strict";

        // Return the users.
        callback([
            {
                id: 1,
                name: "Adam"
            },
            {
                id: 2,
                name: "Bob"
            },
            {
                id: 3,
                name: "Charlie"
            }
        ]);
    }
};
