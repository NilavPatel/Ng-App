(function () {
    "use strict";

    angular
        .module("app")
        .service("userContext", userContext);

    userContext.$inject = [];

    function userContext() {

        function setUserContext(value) {
            localStorage.setItem("user", JSON.stringify(value));
        }

        function getUserContext() {
            var user = localStorage.getItem("user");
            return JSON.parse(user);
        }

        return {
            setUser: function (value) {
                setUserContext(value);
            },
            getUser: function () {
                return getUserContext();
            },
            isAuthenticated: function () {
                var user = getUserContext();
                if (user !== null && user.name.length > 0) {
                    return true;
                }
                return false;
            }
        }
    }
})();