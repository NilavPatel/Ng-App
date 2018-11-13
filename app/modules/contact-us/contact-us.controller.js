(function () {
    "use strict";

    angular
        .module("app.contactus")
        .controller("ContactUsController", ContactUsController);

    ContactUsController.$inject = [];

    function ContactUsController() {

        var self = this;

        // variables
        self.module = "ContactUs"
        self.mailId = "nilavpatel1992@gmail.com";
    }

})();