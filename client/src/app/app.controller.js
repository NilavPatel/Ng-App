(function () {
    "use strict";

    angular
        .module("app")
        .controller("AppController", AppController);

    AppController.$inject = ["__env"];

    function AppController(__env) {
        var self = this;
        self.title = __env.applicationName + " " + __env.version;        
    }

})();