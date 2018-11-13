(function () {
    "use strict";

    angular
        .module("app.dashboard")
        .controller("DashboardController", DashboardController);

    DashboardController.$inject = ["userContext"];

    function DashboardController(userContext) {

        var self = this;
        self.module = "Dashboard";

        self.user = userContext.getUser();
    }

})();