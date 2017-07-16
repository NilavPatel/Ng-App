(function () {
    "use strict";

    angular
        .module("app", [

            // angular packages third party
            "ui.router",
            "ngMessages",
            "oc.lazyLoad",

            // application modules
            "app.login",
            "app.home"]);
    var env = {};

    // Import variables if present (from env.js)
    if (window) {
        Object.assign(env, window.__env);
    }

    // Register environment in AngularJS as constant
    angular
        .module("app")
        .constant('__env', env);

})();