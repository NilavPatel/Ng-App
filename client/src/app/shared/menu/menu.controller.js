(function () {
    "use strict";

    angular
        .module("app.menu")
        .controller("MenuController", MenuController);

    MenuController.$inject = ["$state"];

    function MenuController($state) {

        var self = this;
        // variables
        self.module = "Menu";
        self.current = $state.current.active;
        self.menus = [{
            id: 'dashbaord',
            title: 'Home',
            view: "home.dashboard"
        }, {
            id: 'aboutus',
            title: 'About Us',
            view: "home.aboutus"
        }, {
            id: 'contactus',
            title: 'Contact Us',
            view: "home.contactus"
        }];

        // functions
        self.navigateToMenu = navigateToMenu;

        function navigateToMenu(id) {
            $state.go(id);
        }
    };

})();