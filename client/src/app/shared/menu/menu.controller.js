(function () {
    "use strict";

    angular
        .module("app.menu")
        .controller("MenuController", MenuController);

    MenuController.$inject = ["$state", "$mdSidenav", "userContext"];

    function MenuController($state, $mdSidenav, userContext) {

        var self = this;
        // variables
        self.module = "Menu";
        self.current = $state.current.active;
        self.user = userContext.getUser();
        self.menus = [{
            id: 'dashbaord',
            title: 'Home',
            view: "home.dashboard",
            icon:"content/images/ic_home_black_36px.svg"
        }, {
            id: 'aboutus',
            title: 'About Us',
            view: "home.aboutus",
            icon:"content/images/ic_call_black_36px.svg"
        }, {
            id: 'contactus',
            title: 'Contact Us',
            view: "home.contactus",
            icon:"content/images/ic_info_black_36px.svg"
        }];

        // functions
        self.navigateToMenu = navigateToMenu;

        function navigateToMenu(id) {
            $state.go(id);
        }
    };

})();