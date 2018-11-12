(function () {
    "use strict";

    angular
        .module("app.home.aboutus")
        .controller("AboutUsController", AboutUsController)

    AboutUsController.$inject = [];

    function AboutUsController() {

        var self = this;

        // variables
        self.module = "AboutUs";
        self.name = "Nilav Patel";
    }
})();