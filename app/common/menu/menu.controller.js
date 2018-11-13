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
        self.logout = logout;
        self.menus = [{
            id: 'dashbaord',
            title: 'Home',
            view: "home.dashboard",
            icon:"style/images/ic_home_black_36px.svg"
        }, {
            id: 'aboutus',
            title: 'About Us',
            view: "home.aboutus",
            icon:"style/images/ic_call_black_36px.svg"
        }, {
            id: 'contactus',
            title: 'Contact Us',
            view: "home.contactus",
            icon:"style/images/ic_info_black_36px.svg"
        }];
        
        function logout(){
            userContext.setUser(null);
            $state.go("login")
        }
    };

})();