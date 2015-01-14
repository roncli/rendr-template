var BaseClientRouter = require("rendr/client/router");

/**
 * Creates an instance of the router.
 * @constructor
 */
function Router(options) {
    "use strict";

    BaseClientRouter.call(this, options);
}

// Set up inheritance on the router.
Router.prototype = Object.create(BaseClientRouter.prototype);
Router.prototype.constructor = BaseClientRouter;

/**
 * Sets up events once the router is initialized.
 */
Router.prototype.postInitialize = function() {
    "use strict";

    this.on("action:start", this.actionStart, this);
    this.on("action:end", this.actionEnd, this);
};

/**
 * Performs actions on start of a page.
 */
Router.prototype.actionStart = function() {
    "use strict";

    // The previous page is completed and is beginning transitioning to a new page.
    // Suggested TODO: Start page transition animations, lockdown inputs, move window scroll position to top of the page, etc.
};

/**
 * Performs actions on end of a page.
 */
Router.prototype.actionEnd = function() {
    "use strict";

    // The new page is ready to view.
    // Suggested TODO: Finish page transition animations, record page view, etc.
};

module.exports = Router;
