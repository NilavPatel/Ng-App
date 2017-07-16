(function () {
    "use strict";

    angular
        .module("app.home")
        .controller("HomeController", HomeController);

    HomeController.$inject = ["userContext"];

    function HomeController(userContext) {

        var self = this;
        self.module = "Home";
    }

})();