(function () {
    "use strict";

    angular
        .module("app.login")
        .controller("LoginController", LoginController);

    LoginController.$inject = ["userContext", "$state"];

    function LoginController(userContext, state) {

        var self = this;
        // variables
        self.module = "Login";
        // functions
        self.submitLogin = submitLogin;

        function submitLogin() {

            var user = {
                name: self.username
            };
            userContext.setUser(user);
            state.go("home.dashboard");
        }

    }

})();